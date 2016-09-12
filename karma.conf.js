// Karma configuration
// Generated on Mon Sep 12 2016 15:35:05 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'mocha', 'chai', 'commonjs' ],


    // list of files / patterns to load in the browser
    files: [
      //'src/**/*.js',
      //'test/**/*.js',
      'src/**/*.js',
      //'dist/**/*.js',
      'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      'karma.conf.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'src/**/*.js': [ 'babel', 'commonjs' ],
      //'test/**/*.js': [ 'babel', 'commonjs' ]
      'src/**/*.js': ['commonjs', 'coverage'],
      //'dist/**/*.js': ['commonjs'],
      'test/**/*.js': ['commonjs']
      //'dist/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha', 'coverage'],


    // web server port
    port: 19876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS', 'Opera', 'IE'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-safari-launcher',
      'karma-ie-launcher',
      'karma-commonjs',
      //'karma-babel-preprocessor',
    ],

    coverageReporter: {
      type : 'html',
      dir: 'coverage/'
    }

  })
}