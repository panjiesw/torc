// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const path = require('path');
const webpack = require('webpack');
const atl = require('awesome-typescript-loader');

const CheckerPlugin = atl.CheckerPlugin;
const TsConfigPathsPlugin = atl.TsConfigPathsPlugin;

function createConfig(env) {
	env = env || {};

	const config = {
		bail: true,
		devtool: process.env.COVER ? 'inline-source-map' : 'eval-source-map',
		performance: false
	};

	if (!env.test) {
		config.entry = {
			bundle: [
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server',
				'normalize.css',
				'./spec/index'
			]
		}

		config.output = {
			path: path.resolve(__dirname, 'build'),
			publicPath: '/',
			filename: 'bundle.js',
			chunkFilename: '[name].bundle.js'
		}
	}

	config.resolve = {
		unsafeCache: false,
		extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
		mainFields: ['browser', 'web', 'browserify', 'main', 'style'],
		modules: [
			'node_modules'
		],
		alias: {
			torc: path.join(__dirname, 'src')
		}
	}

	config.module = {
		rules: [
			{
				test: /\.css\.d\.ts$/,
				loader: 'null-loader',
				include: [path.resolve(__dirname, 'src')],
			},
			{
				test: /\.ts(x?)$/,
				loader: 'awesome-typescript-loader',
				exclude: [
					/node_modules/,
					/\.css\.d\.ts$/
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|svg|ico)$/,
				loader: 'file-loader',
				query: { name: 'assets/[name].[hash].[ext]' },
				include: [path.resolve(__dirname, 'spec')]
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, 'src'),
					/react-toolbox/,
					/normalize\.css/
				],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						query: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							importLoaders: 1
						}
					},
					{ loader: 'postcss-loader', query: { config: 'tools' } }
				]
			}
		]
	}

	config.plugins = [
		new webpack.LoaderOptionsPlugin({
			debug: true,
			context: __dirname
		}),
		new CheckerPlugin(),
		new TsConfigPathsPlugin()
	];

	if (!env.test) {
		config.plugins.push(
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin()
		)

		config.devServer = {
			hot: true,
			contentBase: path.resolve(__dirname, 'spec'),
			publicPath: '/',
			stats: {
				colors: true
			},
			historyApiFallback: true
		}
	} else {
		config.externals = {
			'react/addons': 'react',
			'react/lib/ExecutionEnvironment': 'react',
			'react/lib/ReactContext': 'react',
		}
	}

	return config;
}

module.exports = createConfig;
