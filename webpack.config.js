const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports= {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',//错误回显
    devServer: {//开发模式
        contentBase: './dist',
        hot: true//热更新
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),//清除上一次生成的文件
        new HtmlWebpackPlugin({//生成的模板问题
            title: 'Output Management'
        }),
        new webpack.NamedChunksPlugin(),//查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin()//热更新
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    }
}