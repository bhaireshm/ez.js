// const chalk = import('chalk');
// const fs = import('fs-extra');
// const bfj = import('bfj');
// // const webpack = import('webpack');
// const webpack = import('webpack');
// const { Compiler } = import('webpack');
// // Create a new compiler instance

// const configFactory = import('../webpack.config');
// const paths = import('../config/paths');

// const argv = process.argv.slice(2);
// const writeStatsJson = argv.indexOf('--stats') !== -1;

// // Generate configuration
// const config = configFactory;// ('production');

// // Create the production build and print the deployment instructions.
// function build(previousFileSizes) {
//     console.log('Creating an optimized production build...');

//     // const compiler = new Compiler();
//     // const compiler = createCompiler(webpack, config);

//     // const compiler = webpack(config);
//     return new Promise((resolve, reject) => {
//         // compiler.run((err, stats) => {
//         webpack((err, stats) => {
//             let messages;
//             if (err) {
//                 if (!err.message) {
//                     return reject(err);
//                 }

//                 let errMessage = err.message;

//                 // Add additional information for postcss errors
//                 if (Object.prototype.hasOwnProperty.call(err, 'postcssNode')) {
//                     errMessage +=
//                         '\nCompileError: Begins at CSS selector ' +
//                         err['postcssNode'].selector;
//                 }

//                 messages = {
//                     errors: [errMessage],
//                     warnings: [],
//                 }
//             } else {
//                 messages =
//                     stats.toJson({ all: false, warnings: true, errors: true })

//             }
//             if (messages.errors.length) {
//                 // Only keep the first error. Others are often indicative
//                 // of the same problem, but confuse the reader with noise.
//                 if (messages.errors.length > 1) {
//                     messages.errors.length = 1;
//                 }
//                 return reject(new Error(messages.errors.join('\n\n')));
//             }
//             if (
//                 process.env.CI &&
//                 (typeof process.env.CI !== 'string' ||
//                     process.env.CI.toLowerCase() !== 'false') &&
//                 messages.warnings.length
//             ) {
//                 // Ignore sourcemap warnings in CI builds. See #8227 for more info.
//                 const filteredWarnings = messages.warnings.filter(
//                     w => !/Failed to parse source map/.test(w)
//                 );
//                 if (filteredWarnings.length) {
//                     console.log(
//                         chalk.yellow(
//                             '\nTreating warnings as errors because process.env.CI = true.\n' +
//                             'Most CI servers set it automatically.\n'
//                         )
//                     );
//                     return reject(new Error(filteredWarnings.join('\n\n')));
//                 }
//             }

//             const resolveArgs = {
//                 stats,
//                 previousFileSizes,
//                 warnings: messages.warnings,
//             };

//             if (writeStatsJson) {
//                 return bfj
//                     .write(paths.appBuild + '/bundle-stats.json', stats.toJson())
//                     .then(() => resolve(resolveArgs))
//                     .catch(error => reject(new Error(error)));
//             }

//             return resolve(resolveArgs);
//         });
//     });
// }

// function copyPublicFolder() {
//     fs.copySync(paths.appPublic, paths.appBuild, {
//         dereference: true,
//         filter: file => file !== paths.appHtml,
//     });
// }

// build().then(console.log).catch(console.error);

const webpack = require("webpack");
const webpackConfig = require("../webpack.config");

webpack({
    // Configuration Object
    ...webpackConfig
}, (err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }

    // Log result...
});
