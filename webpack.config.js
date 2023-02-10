const path = require('path');

module.exports = {
    entry: {
        ez: './app.js',
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', ".ts"],
    },
    node: {
        global: false,
        __filename: false,
        __dirname: false
    },
};