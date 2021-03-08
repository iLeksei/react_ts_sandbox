const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer/lib/BundleAnalyzerPlugin');

module.exports = merge(common, {
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProgressPlugin(),
        new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("development")
        })
    ],
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    devServer: {
        historyApiFallback: true,
        // proxy: {
        //     "/server/*" : {
        //         target:"http://127.0.0.1:1414/",
        //         changeOrigin: true,
        //         secure: false,
        //         logLevel: "debug",
        //     },
        // },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, PATCH",
            "Access-Control-Allow-Headers": "X-Requested-With, origin, content-type, Authorization",
        },
        hot: true,
        // contentBase: "./dist",
        compress: true,
        port: 8080,
        allowedHosts: [
            'localhost:8882',
            "http://127.0.0.1:8080",
            "http://127.0.0.1:1414"
        ]
    },
});