//var HtmlWebpackPlugin = require("html-webpack-plugin")

//var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  //template: __dirname + '/app/index.html',
  //filename: 'index.html',
  //inject: 'body'
//});

var path = require('path');

module.exports = {
  devtool: "eval-source-map",
  entry: {
    main: [
      "./src/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js"
    //publicPath: '/public/'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css" },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', ]
        },
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.ttf$\.eot$|\.wav$|\.mp3$/,
        loader: 'url?limit=1024'
      }
    ],
  },
  plugins: [
    //new HtmlWebpackPlugin()
  ],
  eslint: {
    configFile: '.eslintrc',
  },
  node: {
    fs: "empty"
  }
}
