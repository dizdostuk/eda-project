const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer'),
      clean = require('gulp-clean-css');

// Gulping auto reload on save
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});
function bsReload(done) {
  browserSync.reload();
  done();
}

// Gulping styles
gulp.task('styles', function() {
  return gulp.src('app/sass/**/*.scss')
        .pipe(sass({
          outputStyle: 'expanded',
          includePaths: [__dirname + '/node_modules']
        }))
        .pipe(autoprefixer({
          grid: true,
          overrideBrowsersList: ['last 10 versions']
        }))
        .pipe(clean())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

// Gulping scripts
gulp.task('scripts', function() {
  return gulp.src('app/js/**/*.js')
        .pipe(browserSync.reload({ stream: true }));
});

// Gulping index.html
gulp.task('html', function() {
  return gulp.src('app/index.html')
        .pipe(browserSync.reload({ stream: true }));
});

// Watching files
gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.scss', gulp.parallel('styles'));
  gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
  gulp.watch('app/index.html', gulp.parallel('html'));
});

// Gulp cmd command
gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));