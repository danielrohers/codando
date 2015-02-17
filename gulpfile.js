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
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/assets/css'));

  gulp.src('src/vendor/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/vendor/css'));
});

gulp.task('uglify', ['clean'], function() {
  gulp.src('src/assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));

  gulp.src('src/vendor/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/vendor/js'));
});

gulp.task('img', ['clean'], function () {
  gulp.src('src/assets/img/**')
    .pipe(gulp.dest('dist/assets/img'));

  gulp.src('src/vendor/css/images/**')
    .pipe(gulp.dest('dist/vendor/css/images'));
});

gulp.task('assets', ['minify', 'uglify', 'img']);

gulp.task('html', ['clean'], function () {
  gulp.src(['src/*.html', 'src/*/*.html'])
    .pipe(minifyHTML())
    .pipe(gulp.dest('dist/'));
});

gulp.task('php', ['clean'], function () {
  gulp.src('src/*.php')
    .pipe(gulp.dest('dist/'));
});

gulp.task('dist', ['assets', 'html', 'php']);
