'use strict';

var path = require('path');
var gulp = require('gulp');

var karma = require('karma');

function runTests (singleRun, done) {
  karma.server.start({
    configFile: path.join(__dirname, '/../tests/karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun
  }, function() {
    done();
  });
}

gulp.task('test', [], function(done) {
  runTests(true, done);
});

gulp.task('test:auto', [], function(done) {
  runTests(false, done);
});
