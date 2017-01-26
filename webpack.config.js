const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSCSS = new ExtractTextPlugin('styles/index.css');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loaders: ['html']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.scss$/,
        loader: extractSCSS.extract(["css-loader", "sass-loader"])
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './scss/index.scss')]
  },
  resolve: {
    extensions: ['', '.js', '.css', '.scss', '.html']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    extractSCSS
  ]
}
