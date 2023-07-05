const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../build/server')
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        loader: 'vue-loader'
      }
    ]
  },
   
  
  externals: [
    nodeExternals()
  ],
  plugins: [
    new VueLoaderPlugin()
  ]
}