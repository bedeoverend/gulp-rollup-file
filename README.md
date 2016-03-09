# Gulp Rollup File
[![][npm-badge]][npm-url] [![][travis-badge]][travis-url] [![][npmdeps-badge]][npmdeps-url] [![][npmdevdeps-badge]][npmdevdeps-url]

Gulp wrapper around [`rollup-plugin-file`][rollup-plugin-file], to allow passing a file (or vinyl) entry point to Rollup rather than a string.

## Installation

```shell
npm install --save-dev gulp-rollup-file
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


[npm-badge]: https://img.shields.io/npm/v/gulp-rollup-file.svg
[npm-url]: https://npmjs.org/package/gulp-rollup-file
[travis-badge]: https://img.shields.io/travis/simplaio/gulp-rollup-file.svg
[travis-url]: https://travis-ci.org/simplaio/gulp-rollup-file
[npmdeps-badge]: https://img.shields.io/david/simplaio/gulp-rollup-file.svg
[npmdeps-url]: https://david-dm.org/simplaio/gulp-rollup-file
[npmdevdeps-badge]: https://img.shields.io/david/dev/simplaio/gulp-rollup-file.svg?theme=shields.io
[npmdevdeps-url]: https://david-dm.org/simplaio/gulp-rollup-file#info=devDependencies
[rollup-plugin-file]: https://github.com/simplaio/rollup-plugin-file
[gulp-process-inline]: https://github.com/simplaio/gulp-process-inline
