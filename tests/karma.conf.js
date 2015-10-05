/**
 * Created by pery on 05/10/2015.
 */
module.exports = function (config) {
    config.set({
        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 20000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        frameworks: ['mocha','chai','sinon'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            // endbower
            "app/bower_components/angular/angular.js",
            "app/parserApp.js",
            "app/scripts/**/*.js",
            "tests/mock/**/*.js",
            "tests/spec/**/*.js"
        ],
        /*just the files of angulars*/
        angularFilesort: {
            whitelist: [
                'app/**/*.js'
            ]
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            moduleName: 'test'
        },

        // list of files to exclude
        exclude: [
        ],

        //preprocessors: {
        //    'test/client/*.js': ['browserify']
        //},

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress','junit','growl','converage'
        // CLI --reporters progress
        reporters: ['progress'],

        //junitReporter: {
        //     will be resolved to basePath (in the same way as files/exclude patterns)
            //outputFile: 'test-results.xml'
        //},

        // web server port
        // CLI --port 9876
        port: 8080,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        //browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],
        browsers: ['chrome_without_security'],

        customLaunchers:{
            chrome_without_security:{
                base:'Chrome',
                flags:['--disable-web-security']
            }
        },


        plugins: [
            'karma-angular-filesort',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-chrome-launcher'
        ]
    })
};
