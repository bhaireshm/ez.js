// const path = require('path');

// module.exports = {
//     // target: "node",
//     entry: './index.js',
//     mode: "development",
//     // devtool: 'inline-source-map',
//     output: {
//         clean: true,
//         // publicPath: "/",
//         // globalObject: 'this',
//         filename: 'index.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js?$/,
//                 use: 'babel-loader',
//                 exclude: /(node_modules)/
//             },
//         ],
//     },
//     resolve: {
//         extensions: ['.js'],
//     },
//     // node: {
//     //     global: false,
//     //     __dirname: false,
//     //     __filename: false
//     // },
// };

const path = require('path');

module.exports = {
    entry: './index.js',
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
};