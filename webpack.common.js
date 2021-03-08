const path = require("path");
const webpack = require('webpack');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/(node_modules|bower_components)/",
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["css-loader", "style-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*",".js", ".jsx", ".ts", ".tsx"],
        modules: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "src"),
        ]
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
    ],
    optimization: {
        concatenateModules: true,
        minimize: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    filename: 'dependencies.bundle.js',
                    chunks: 'all'
                }
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                include: /\/src/,
                extractComments: 'all',
                uglifyOptions: {
                    compress: {
                        arguments: true,
                        sequences: true,
                        booleans: true,
                        loops: true,
                        unused: true,
                        warnings: false,
                        drop_console: true,
                        unsafe: true,
                        dead_code: true,
                        drop_debugger: true,
                    },
                },
            }),
        ]
    }
};