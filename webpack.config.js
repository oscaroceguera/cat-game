const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const packagejson = require('./package.json')
const dependencies = Object.keys(packagejson.dependencies)

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    app: './src/index.js',
    vendor: dependencies
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true
  },
  devtool: 'source-map'
}
