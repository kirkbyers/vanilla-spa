const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin('styles/index.css');

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/main.js')
    },

    resolve: {
        extensions: ['', '.js', '.scss', '.html']
    },

    module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015']
          }
        }, {
          test: /\.html$/,
          loaders: ['html']
        }, {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|pdf)$/,
          loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
          test: /\.scss$/,
          loader: extractSCSS.extract(["css-loader", "sass-loader"])
        }]
    },

    sassLoader: {
      includePaths: [path.resolve(__dirname, './scss/index.scss')]
    },

    plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      }),
      extractSCSS
    ]
};
