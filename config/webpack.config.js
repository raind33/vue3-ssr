const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: {
    server: './src/server/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build/')
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: 'vue-loader'
      },
      {
        test: /\.js/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    ]
  },
   
  
  externals: [
    nodeExternals()
  ],
  plugins: [
    new VueLoaderPlugin()
  ]
}