/**
 * Created by pery on 05/10/2015.
 */
'use strict';
var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var assign = require('lodash').assign;
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
// add custom browserify options here
var opts = assign({}, watchify.args,{
    entries: ['./src/index.js'],
    debug: true
/*        entries: src + '/FireLife.js',
        dest: dest,
        outputName: 'output.js',
        // Additional file extentions to make optional
        extensions: [],
        // list of modules to make require-able externally
        require: []
        // See https://github.com/greypants/gulp-starter/issues/87 for note about
        // why this is 'backbone/node_modules/underscore' and not 'underscore'
    */
});
var b = watchify(browserify(opts));
//b.on('update', bundle); // on any dep update, runs the bundler
//b.on('log', gutil.log); // output build logs to terminal

// add transformations here
// i.e. b.transform(coffeeify);

gulp.task('npmCompile', bundle); // so you can run `gulp js` to build the file


function bundle() {

    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('npmBundle.js')) //output file name here
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./app/scripts'));
}