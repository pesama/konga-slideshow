var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders : [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test : /\.json$/,
                loader : 'json-loader'
            },
            {
                //IMAGE LOADER
                test : /\.(jpe?g|png|gif|svg)$/i,
                loaders : [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test : /\.(ico)$/,
                loader : 'static-loader'
            },
            {
                test : /\.html$/,
                loader : 'ngtemplate!html'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    output: {
        path: __dirname + '/../build',
        publicPath: '/',
        filename: 'konga-slideshow.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
        // Dedupe modules in the output
        new webpack.optimize.DedupePlugin(),

        // new webpack.optimize.UglifyJsPlugin({minimize: true})

        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Konga Presentation'
        })
    ]
};