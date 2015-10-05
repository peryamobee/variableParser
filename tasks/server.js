/**
 * Created by pery on 05/10/2015.
 */
var gulp = require('gulp');

gulp.task('webserver', function() {
    var webserver = require('gulp-webserver');
    gulp.src('./app')
        .pipe(webserver({
            livereload: false
            ,host:'localhost'
            ,directoryListing: false
            ,open: false
            ,port:3000
            ,fallback:'/index.html'

        }));
});
var requireDir = require('require-dir');
