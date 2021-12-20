const path = require('path');

module.exports = {

    entry: {
        index: './src/index.js',
        app: './src/app.js',
        playlist: './src/playlist.js'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: '[name].js'
    },
    mode: 'development'
}