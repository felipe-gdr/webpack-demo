const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

module.exports = merge([
  parts.devServer({port: '8080', host:'localhost'}),
  parts.page({
    title: 'Mocha demo',
    entry: {
      tests: path.join(__dirname, 'tests'),
    },
  }),
]);