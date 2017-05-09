const webpack = require("webpack");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                use: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: /node_modules/
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
        })
    ],
    
    resolve: {
        extensions: [".ts", ".js"]
    },

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        host: '0.0.0.0',        
        port: 3000,
        historyApiFallback: true,
        compress: true
    }
};