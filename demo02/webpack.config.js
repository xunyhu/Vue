var webpack = require('webpack')

module.exports = {
	entry : './main.js',
	output : {
		path : __dirname + '/public',
		filename : 'bundle.js'
	},
	module : {
		loaders : [{
			test : /\.js$/,
			loader : 'babel-loader'
		},{
			test : /\.css$/,
			loader : 'style-loader!css-loader'
		},{
			test : /\.scss$/,
			loader : 'sass-loader'
		},{
			test : /\.vue$/,
			loader : 'vue-loader'
		},{
			test : /\.(jpg|png|gif)$/,
			loader : 'url-loader'
		},{
			test: /\.(ttf|svg|woff|eot)$/,
			loader: "file-loader"
		}]
	},
	resolve:{
		alias : {
			vue: 'vue/dist/vue.js',
		}
	},
	devServer : {
		contentBase : './public',
		inline : true
	},
	//用于调试，告知错误发生地点
	devtool:"source-map",
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js',
		}
	}
}