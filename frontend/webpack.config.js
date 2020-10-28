const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },

  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
};