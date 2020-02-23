const path = require('path');

module.exports = {
    mode: 'development',

    entry: {
        src: path.resolve(__dirname, 'src', 'index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 3000,
    },

    devtool: 'source-map',
};