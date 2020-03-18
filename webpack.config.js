// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: {
    all: [
      './source/assets/javascripts/jquery.js',
      './source/assets/javascripts/isotope.pkgd.min.js',
      './source/assets/javascripts/all.js',
    ]
  },

  resolve: {
    root: __dirname + '/source/javascripts',
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/index.js',
  },
};