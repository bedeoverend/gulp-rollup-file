# gulp-rollup-inline

Very simple, untested gulp plugin to speed up use of rollup with [gulp-process-inline](https://github.com/simplaio/gulp-process-inline)

## Installation

```bash
npm install gulp-rollup-inline
```

## Usage

```js
import rollup from 'gulp-rollup-inline';
import processInline from 'gulp-process-inline';

gulp.task('default', () => {
  const process = processInline();

  return gulp.src('./src/*.html')
    .pipe(process.extract('script'))
    .pipe(rollup({ format: 'iife' }))
    .pipe(process.restore())
    .pipe(gulp.dest('./dist/'));
});
```
