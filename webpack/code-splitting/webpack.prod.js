const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const commonConfig = require('./webpack.common.js');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    devtool: 'source-map',
    
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
        
        new ExtractTextPlugin('[name].[hash].css'),

        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),

        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false // workaround for ng2
            }
        })
    ]
});