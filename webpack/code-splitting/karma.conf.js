var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap'],
            'src/**/!(*spec).js': ['coverage']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: [
            'mocha', 
            'karma-remap-istanbul'
        ],

        remapIstanbulReporter: {
            reports: {
                'html': './coverage',
                'lcovonly': './coverage/lcov.info'
            }
        },

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    };

    config.set(_config);
};
