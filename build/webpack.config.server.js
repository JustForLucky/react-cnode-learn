const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/server-entry.js')
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: 'public',
        libraryTarget: 'commonjs2', // 最新commonjs模块方案
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /.(jsx|js)$/,
                loader: 'eslint-loader',
                exclude: [
                    path.resolve(__dirname, '../node_modules')
                ]
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader',
            },
            {
                test: /.js$/,
                exclude: [
                    path.join(__dirname, '../node_modules')
                ],
                loader: 'babel-loader',
            }
        ]
    }
}