module.exports = function (config) {
    config.set({
        basePath: '../..',

        files: [
            'vendor/jquery/jquery.js',
            'vendor/angular/angular.js',
            'vendor/angular/angular-route.js',
            'test/vendor/angular/angular-mocks.js',            
            'src/**/*.js',
            'test/unit/**/*.spec.js',
            'dist/templates/**/*.js'
        ],

        autoWatch: false,
        singleRun: true,
        frameworks: ['jasmine'],

        browsers: ['Chrome', 'IE'],

        reporters: ['progress', 'html', 'coverage', 'spec'],

        plugins: [            
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-htmlfile-reporter',
            'karma-coverage',
            'karma-spec-reporter',
            'karma-ie-launcher'
        ],
        
        htmlReporter: {
            outputFile: 'tests/unit.html'
        },

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/*.js': ['coverage']            
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    })
}