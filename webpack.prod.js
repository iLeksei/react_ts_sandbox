const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin({exclude: "index.html"}), // для очистки dict при новой сборки
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify("production")
        })
    ],
});