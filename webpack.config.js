var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kyppyt Real',
      filename: 'index.html',
      template: path.resolve(__dirname + '/src/index.template.html')
    })
  ],
  mode: 'development'
}