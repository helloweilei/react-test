const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const CssExtractPlugin = require('mini-css-extract-plugin');
const HelloWorldPlugin = require('./webpackPlugins/HelloWorldPlugin');
const OutputFilesPlugin = require('./webpackPlugins/OutputFilesPlugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },
  target: 'web',
  devtool: 'source-map',
  devServer: {
    port: 8086,
    hot: true,
    liveReload: true,
    open: true,
    static: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: CssExtractPlugin.loader,
        options: {
          publicPath: "../"
        }
      }, 'css-loader', 'sass-loader']
    }],
  },
  plugins: [
    new HelloWorldPlugin({ name: "Charlie" }),
    new OutputFilesPlugin(),
    new CssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
