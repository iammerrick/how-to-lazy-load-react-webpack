module.exports = {
  entry: './main',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [['es2015', { modules: false}], 'react']
        }
      }
    ]
  }
}
