var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/index.js',
        app2: './src/js/index2.js',
        app3: './src/js/index3.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
