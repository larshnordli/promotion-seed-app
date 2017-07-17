const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(jpg|jpeg|gif|png)$/,
        // include: __dirname + '/src/media/',
        // exclude: /node_modules/,
        // loader: 'url-loader?limit=1024&name=images/[name].[ext]'
        loader: 'file-loader',
        options:{
            name: __dirname + '/build/images/[hash].[ext]'
        }
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/build'
  },
  // sassLoader: {
  //     includePaths: ['src/styles/main']
  // },
  plugins: [HTMLWebpackPluginConfig, new ExtractTextPlugin('main.css')]
};
