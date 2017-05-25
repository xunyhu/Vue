var webpack = require('webpack')
module.exports = {
    entry : './es6.js',//入口，写需要编译文件的路径
    output : {         
        path : __dirname,    //要导出文件的地方 path写绝对路径，
        filename : "es5.js"   //编译后的文件名
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel-loader'   //使用babel-loader加载器
        }]
    }
}