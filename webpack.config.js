/**
 * Created by oskmkr on 2017-05-24.
 */
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const packageJson = require('./package');

const config = {
	entry: {
		main : ['./src/index.js']
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'todo.js',
		library: ['Naver'],
		libraryTarget : 'umd',
		umdNamedDefine : true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		publicPath: 'public/js',
		disableHostCheck: true,   // That solved it
	},

	plugins :[
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		})
	]
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new UglifyJSPlugin({
			beautify: false,
			mangle: true,
			compress: true,
			comments: false,
			sourceMap: true
		})
	);
	config.devtool = 'hidden-source-map'
} else {
	config.devtool = 'source-map'
}

module.exports = config;
