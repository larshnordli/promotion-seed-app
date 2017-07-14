const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/src/index.js',
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                use: [
                    {
                        loader: ExtractTextPlugin.extract('style-loader', // The backup style loader
                                'css?sourceMap!sass?sourceMap')
                    }, {
                        loader: "sass-loader",
                        options: {
                            includePaths: [
                                __dirname + "/src/styles/main",
                                __dirname + "build/main.css"
                            ]
                        }
                    }
                ]

            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    // sassLoader: {
    //     includePaths: ['src/styles/main']
    // },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin(__dirname + '/build/main.css')
    ]
};
