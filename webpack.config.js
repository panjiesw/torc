// Copyright (c) 2017 Panjie Setiawan Wicaksono
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const path = require('path');
const webpack = require('webpack');
const atl = require('awesome-typescript-loader');
const pkg = require('./package.json');

const CheckerPlugin = atl.CheckerPlugin;
const TsConfigPathsPlugin = atl.TsConfigPathsPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function htmlTemplate(filename = 'index.html') {
	return {
		filename,
		inject: false,
		template: require('html-webpack-template'),
		appMountId: 'app',
		minify: { collapseWhitespace: true },
		meta: [{
			name: 'description',
			content: pkg.description
		}],
		mobile: true,
		links: [
			'https://fonts.googleapis.com/css?family=Roboto',
			'https://fonts.googleapis.com/icon?family=Material+Icons'
		]
	}
}

function createConfig(env) {
	env = env || {};

	if (env.prod) {
		process.env.NODE_ENV = 'production';
	}

	const config = {
		bail: true,
		devtool: env.prod ? 'cheap-module-source-map' : process.env.COVER ? 'inline-source-map' : 'eval-source-map',
		performance: false
	};

	if (!env.test) {
		config.entry = {
			bundle: [
				'normalize.css',
				'./docs/assets/prism.css',
				'./docs/assets/prism.js',
				'./docs/index'
			]
		}

		if (!env.prod) {
			config.entry.bundle.unshift(
				'webpack/hot/only-dev-server',
				'webpack-dev-server/client?http://localhost:8080')
		} else {
			config.entry.vendor = [
				'react',
				'react-dom',
				'react-router',
				'react-toolbox',
				'markdown-to-react-components'
			]
		}

		config.output = {
			path: path.resolve(__dirname, 'build'),
			publicPath: '/',
			filename: env.prod ? 'assets/js/[name].[hash].js' : 'bundle.js'
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

	const commonStyleRules = [
		{
			loader: 'css-loader',
			query: {
				modules: true,
				sourceMap: env.prod !== undefined,
				minimize: env.prod !== undefined,
				localIdentName: '[name]__[local]___[hash:base64:5]',
				importLoaders: 1
			}
		},
		{ loader: 'postcss-loader', query: { config: 'tools' } }
	];
	const cssRule = {
		test: /\.css$/,
		include: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'docs'),
			/react-toolbox/,
			/normalize\.css/,
			/flexboxgrid/
		]
	}
	if (env.prod) {
		cssRule.loader = ExtractTextPlugin.extract({
			fallbackLoader: 'style-loader',
			loader: commonStyleRules
		})
	} else {
		cssRule.use = ['style-loader'].concat(commonStyleRules);
	}
	config.module = {
		rules: [
			{
				test: /\.css\.d\.ts$/,
				loader: 'null-loader',
				include: [
					path.resolve(__dirname, 'src'),
					path.resolve(__dirname, 'docs')
				],
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
				include: [path.resolve(__dirname, 'docs')]
			},
			cssRule
		]
	}
	if (!env.test) {
		config.module.rules.push({
			test: /\.md$/,
			loader: 'raw-loader',
			include: [path.resolve(__dirname, 'docs')]
		})
	}

	config.plugins = [
		new webpack.LoaderOptionsPlugin({
			debug: true,
			context: __dirname
		}),
		new CheckerPlugin(),
		new TsConfigPathsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				VERSION: JSON.stringify(pkg.version)
			}
		})
	];

	if (env.prod) {
		config.plugins.push(
			new ExtractTextPlugin({ filename: 'assets/css/[name].[hash].css' }),
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			}),
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true
			}),
			new HtmlWebpackPlugin(htmlTemplate()),
			new HtmlWebpackPlugin(htmlTemplate('200.html'))
		)
	}

	if (!env.test) {
		config.plugins.push(
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin()
		)

		config.devServer = {
			hot: true,
			contentBase: path.resolve(__dirname, 'docs'),
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
