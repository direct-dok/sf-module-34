const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
}

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/contacts.pug',
            filename: 'contacts.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug',
            filename: 'index.html',
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: PATHS.source + '/about.pug',
            filename: 'about.html',
            minify: false
        }),
        // new HtmlWebpackPugPlugin({
        //     adjustIndent: true
        //   }), 
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader", ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'img/',
                },
            }
        ]
    }
};