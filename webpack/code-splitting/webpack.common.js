const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },
    
    /*
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    */

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                use: 'source-map-loader'
            },
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/app'),
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src/app'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes
        ),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
    
};