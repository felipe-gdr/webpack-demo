const fs = require('fs');
const path = require('path');
const { runLoaders } = require('loader-runner');

runLoaders({
  resource: './demo.txt',
  loaders: [
    path.resolve(__dirname, './loaders/demo-loader'),
  ],

  context: {
    emitFile: () => { },
  },

  readResource: fs.readFile.bind(fs),
}, (err, result) => err ?
  console.error(err) :
  console.log(result)
);