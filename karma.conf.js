// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const createWebpackConfig = require('./webpack.config');

module.exports = function(karma) {
	const config = {
		frameworks: ['jasmine'],
		files: [
			{ pattern: 'tests.js', watched: false, included: true },
		],
		preprocessors: {
			'tests.js': [
				'webpack',
				'sourcemap'
			]
		},
		webpack: createWebpackConfig({test: true}),
		webpackMiddleware: {
			stats: 'errors-only'
		},
		webpackServer: {
			noInfo: true
		},
		reporters: ['spec'],
		browsers: ['Chrome'],
		port: 9876,
		logLevel: karma.LOG_INFO,
		autoWatch: false,
		singleRun: true
	};

	if (process.env.COVER === 'true') {
		config.preprocessors['tests.js'].push('sourcemap-writer');
		config.preprocessors['tests.js'].push('coverage');

		config.coverageReporter = {
			dir: 'coverage',
			reporters: [
				{
					type: 'json',
					subdir: '.',
					file: 'coverage.json'
				}
			]
		};

		config.reporters.push('coverage');
	}

	if (process.env.CI === 'true') {
		config.browsers = ['PhantomJS'];
	}

	karma.set(config);
}
