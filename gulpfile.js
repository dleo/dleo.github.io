var gulp = require('gulp');

gulp.task('include', function () {
    gulp.src('bower_components/materialize/sass/*/*/*.*')
        .pipe(gulp.dest('_sass/'));
    gulp.src('bower_components/materialize/fonts/*/*.*')
        .pipe(gulp.dest('fonts/'));
});
gulp.task('default', ['include'], function () {
    //
});