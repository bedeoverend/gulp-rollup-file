
var through = require('through2').obj;
var gutil = require('gulp-util');
var rollupFile = require('rollup-plugin-file');

var PluginError = gutil.PluginError;
var PLUGIN_NAME = 'gulp-rollup-inline';

module.exports = function(options) {
  var rollup;

  options = options || {};
  options.plugins = options.plugins || [];
  options.plugins.unshift(rollupFile());

  rollup = options.rollup || require('rollup').rollup;
  delete options.rollup;

  return through(function(file, enc, done) {
    options.entry = file;
    options.entry.slice = (...args) => (file.history[0] || '').slice(...args);

    rollup(options)
      .then(function(bundle) {
        file.contents = new Buffer(bundle.generate(options).code);
        done(null, file);
      })
      .catch(function(err) {
        done(new PluginError(PLUGIN_NAME, err));
      });
  });
};
