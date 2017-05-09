const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devtool: 'source-map',
    
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: '0.0.0.0',        
        port: 3000,
        historyApiFallback: true,
        compress: true
    }
});