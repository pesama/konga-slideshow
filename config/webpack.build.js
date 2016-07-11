var webpack = require('webpack');

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
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test : /\.js$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : [ 'stage-0', 'stage-1', 'es2015' ],
                    cacheDirectory : true,
                    plugins : [ 'transform-runtime' ]
                }
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
        extensions: ['', '.js', '.jsx', '.css']
    },
    output: {
        path: __dirname + '/../build',
        publicPath: '/',
        filename: 'konga-slideshow.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
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
    ]
};