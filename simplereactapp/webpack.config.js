const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'main': path.resolve(__dirname, 'src/index.js')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: [ 'css-loader', 'sass-loader' ]
					})
			}
        ]
	},
	output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        port: 2200,
    },
    devtool: 'inline-source-map',
    plugins: [
        new ExtractTextPlugin({ 
            filename: 'header.css' 
        }),
        // new HtmlWebpackPlugin({
        //     chunks: ['main'],
        //     filename: 'react-app.html',
        //     template: path.resolve(__dirname, 'src/react-app.html'),
        //     inject: false
        // }),
        new HtmlWebpackPlugin({
            chunks: ['main'],
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: false
        })
    ]
};