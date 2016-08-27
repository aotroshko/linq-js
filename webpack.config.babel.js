import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'prod';

let webpackPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': isProduction ? 'production' : 'development'
  })
];

if(isProduction) {
    webpackPlugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    );
}

const config = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'linq.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: webpackPlugins
 };

 module.exports = config;