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
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack-loader',
        options: {bypassOnDebug:true, optimizationLevel:7, interlaced:false}
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
