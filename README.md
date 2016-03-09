# Gulp Rollup Inline
[![][npm-badge]][npm-url] [![][travis-badge]][travis-url] [![][npmdeps-badge]][npmdeps-url] [![][npmdevdeps-badge]][npmdevdeps-url]

Gulp wrapper around [`rollup-plugin-file`][rollup-plugin-file], to allow passing a file (or vinyl) entry point to Rollup rather than a string.

## Installation

```shell
npm install --save-dev gulp-rollup-inline
```

## Usage
This is mainly designed to be used alongside [`gulp-process-inline`][gulp-process-inline], so we can use Rollup on inline `<script>` blocks in HTML.

```js
import gulp from 'gulp';
import rollup from 'gulp-rollup-inline';
import processInline from 'gulp-process-inline';

gulp.task('inline-rollup', () => {
  return gulp.src('./src/*.html')
    .pipe(processInline().extract('script'))
    .pipe(rollup({ format: 'iife' }))
    .pipe(processInline().restore())
    .pipe(gulp.dest('./dist/'));
});
```

## TODO
- Add tests

## License

MIT © [Simpla](https://simpla.io)


[npm-badge]: https://img.shields.io/npm/v/rollup-plugin-file.svg
[npm-url]: https://npmjs.org/package/rollup-plugin-file
[travis-badge]: https://img.shields.io/travis/simplaio/rollup-plugin-file.svg
[travis-url]: https://travis-ci.org/simplaio/rollup-plugin-file
[npmdeps-badge]: https://img.shields.io/david/simplaio/rollup-plugin-file.svg
[npmdeps-url]: https://david-dm.org/simplaio/rollup-plugin-file
[npmdevdeps-badge]: https://img.shields.io/david/dev/simplaio/rollup-plugin-file.svg?theme=shields.io
[npmdevdeps-url]: https://david-dm.org/simplaio/rollup-plugin-file#info=devDependencies
[gulp]: http://gulpjs.com/
[gulp-rollup-file]: https://github.com/simplaio/gulp-rollup-file
[gulp-process-inline]: https://github.com/simplaio/gulp-process-inline
