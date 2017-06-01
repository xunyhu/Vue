var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: './main.js',
	output:  {
		path : __dirname + '/public',
		filename : 'bundle.js'
	},
	resolve : {
		alias : {
			'vue' : 'vue/dist/vue.js'
		}
	},
	module: {
		loaders: [{
			test : /\.js$/,
			loader : 'babel-loader'
		},{
			test : /\.css$/,
			loader : 'style-loader!css-loader'
		},{
			test : /\.(jpg|png|gif|svg)$/,
			loader : 'url-loader'
		},{
			test : /\.scss$/,
			loader : 'sass-loader'
		},{
			test : /\.vue$/,
			loader : 'vue-loader'
		}]
	}
}
