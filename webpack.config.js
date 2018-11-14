const path = require('path');

module.exports = {
  entry: './webpack-entry.js',
  mode: 'development',
  devtool: false,
  output: {
    filename: 'tiny-slider.js',
    path: path.resolve(__dirname, 'dist')
  }
};