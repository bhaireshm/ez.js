import babel from "rollup-plugin-babel";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import cleaner from "rollup-plugin-cleaner";
import nodePolyfills from "rollup-plugin-node-polyfills";
import json from "@rollup/plugin-json";

module.exports = [
  {
    input: "./index.js",
    output: [
      {
        /**
         * ESM is the best module format thanks to its simple syntax, async nature, and tree-shakeability.
         * UMD works everywhere and usually used as a fallback in case ESM does not work.
         * CJS is synchronous and good for back end.
         * AMD is asynchronous and good for front end.
         */
        name: "@bhairesh/ez.js",
        file: "dist/index.js",
        format: "umd",
        // sourcemap: true,
      },
    ],
    plugins: [
      cleaner({ targets: ["./dist/"] }),
      babel({ exclude: "node_modules/**" }),
      external(),
      terser({
        format: { comments: false },
        compress: false,
      }),
      commonjs(),
      nodeResolve({ preferBuiltins: false }),
      nodePolyfills(),
      json(),
      resolve({
        extensions: [".js", ".json"],
        browser: true,
      }),
    ],
  },
];
