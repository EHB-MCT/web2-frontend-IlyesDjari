const path = require('path');

module.exports = {

    entry: {
        index: './src/index.js',
        input: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    mode: 'production'
}