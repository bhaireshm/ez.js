const path = require('path');

module.exports = {
    target: "node",
    entry: './app.js',
    mode: "production",
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: './dist',
    },
    output: {
        // clean: true,
        // publicPath: "/",
        // globalObject: 'this',
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: 'babel-loader',
                exclude: /(node_modules)/
            },
        ],
    },
    resolve: {
        extensions: ['.js', ".ts"],
    },
    // node: {
    //     global: false,
    //     __dirname: false,
    //     __filename: false
    // },
};