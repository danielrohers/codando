var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('minify', ['clean'], function() {
  gulp.src('src/assets/css/*.css')
    .pipe(minifyCSS({ keepBreaks:true }))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('uglify', ['clean'], function() {
  gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('img', ['clean'], function () {
  gulp.src('src/assets/img/**')
    .pipe(gulp.dest('dist/assets/img'));
});

gulp.task('assets', ['minify', 'uglify', 'img']);

gulp.task('html', ['clean'], function () {
  gulp.src('src/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});

gulp.task('dist', ['assets', 'html']);
