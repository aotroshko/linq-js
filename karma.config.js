module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine'],
		files: [
			{ pattern: 'test/**/*.spec.js', watched: false}
		],
		preprocessors: {
			'test/**/*.spec.js': ['webpack']
		},
		webpack: {
			module: {
				preLoaders: [
					{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
				]
			},
			watch: false
		},
		webpackMiddleware: { stats: 'errors-only', noInfo: true },
		plugins: [
			'karma-chrome-launcher',
			'karma-jasmine',
			'karma-webpack'
		]
	});
};