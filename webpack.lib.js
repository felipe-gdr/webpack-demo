const path = require('path');
const merge = require('webpack-merge');
const HappyPack = require('happypack');

const parts = require('./webpack.parts');

const PATHS = {
  lib: path.join(__dirname, 'lib'),
  build: path.join(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: {
      lib: PATHS.lib,
    },
    output: {
      path: PATHS.build,
      library: 'Demo',
      libraryTarget: 'this',
    },
    plugins: [
      new HappyPack({
        loaders: [
          // Capture Babel loader
          'babel-loader',
        ],
      }),      
    ],    
  },
  parts.attachRevision(),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.loadJavaScript({ include: PATHS.lib }),
]);

const libraryConfig = merge([
  commonConfig,
  {
    output: {
      filename: '[name].js',
    },
  },
]);

const libraryMinConfig = merge([
  commonConfig,
  {
    output: {
      filename: '[name].min.js',
    },
  },
  parts.minifyJavaScript(),
]);

module.exports = [
  libraryConfig,
  libraryMinConfig,
];