var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                // JS LOADER
                // Reference: https://github.com/babel/babel-loader
                // Transpile .js files using babel-loader
                // Compiles ES6 and ES7 into ES5 code
                test : /\.js$/,
                loader : 'babel',
                exclude : /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.css']
    },
    output: {
        path: './build',
        publicPath: '/',
        filename: 'konga-slideshow.js'
    },
    devServer: {
        contentBase: './build',
        hot: true,
        inline: true,
        proxy: {
            '/slides/': {
                target: 'http://localhost:8080/',
                rewrite: function (req) {
                    req.url = '/';
                }
            },
            '/slides/*': {
                target: 'http://localhost:8080/',
                rewrite: function (req) {
                    req.url = req.url.replace(/^\/slides/, '');
                }
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // https://www.npmjs.com/package/html-webpack-plugin
        // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
        new HtmlWebpackPlugin({
            template: './src/index.html',
            title: 'Konga Presentation'
        }),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
        // Only emit files when there are no errors
        new webpack.NoErrorsPlugin(),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
        // Dedupe modules in the output
        new webpack.optimize.DedupePlugin()
    ]
};