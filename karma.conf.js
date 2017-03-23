// Karma configuration
// Generated on Mon Mar 20 2017 16:12:01 GMT+0000 (GMT Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

	plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-ng-html2js-preprocessor'],

    // list of files / patterns to load in the browser
    files: [
		{ pattern: '../bower_components/jquery/dist/jquery.min.js', watched: false },
		{ pattern: '../bower_components/angular/angular.min.js', watched: false },
		{ pattern: '../node_modules/angular-mocks/angular-mocks.js', watched: false },
		'js/*.js',
		'js/**/*.js',
		'test/**/*[sS]pec.js',

		'templates/**/*.html',
		
		'../data/*.json'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'templates/**/*.html': 'ng-html2js',
		'../data/*.json': 'ng-html2js'
    },

	ngHtml2JsPreprocessor: {
		moduleName: function (htmlPath, originalPath) {
			return htmlPath.indexOf('templates/') > -1 ? 'templates' : 'data';
		}
	},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
