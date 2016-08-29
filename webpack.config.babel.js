import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'prod';

let webpackPlugins = [
	new webpack.optimize.DedupePlugin()
];

if(isProduction) {
	webpackPlugins.push(
		new webpack.optimize.UglifyJsPlugin(),
	);
}

const config = {
	entry: './src/index.js',
	output: {
		path: './dist',
		filename: 'linq.js'
	},
	module: {
		preLoaders: [
			{ test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
		],
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	eslint: {
		failOnWarning: false,
		failOnError: true
	},
	plugins: webpackPlugins
 };

module.exports = config;