var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Component.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    devServer: {
        static: './lib',
      },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}