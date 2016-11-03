var webpack = require('webpack');

module.exports = {
	entry: {
		admin: './resources/assets/admin/js/admin.js'
	},
	output: {
		path: __dirname + '/public/build',
		filename: '[name].bundle.js',
		publicPath: '/build/'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		})
	],
	module: {
		loaders: [
			{
				text: /\.js$/,
				exclude: /(node_modules|bower_components)/,
            loader: 'babel',
			},
			{
				text: /\.vue$/,
				loader: 'vue',
			},
		]
	}
};
