import babel from "rollup-plugin-babel";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-node-polyfills";
import json from "@rollup/plugin-json";

module.exports = [
  {
    input: "./index.js",
    output: [
      {
        file: "dist/index.js", // CommonJS bundle
        format: "cjs",
        sourcemap: false,
      },
      // {
      //   file: "dist/index.esm.js", // ES module bundle
      //   format: "esm",
      //   sourcemap: false,
      // },
      {
        name: "@bhairesh/ez.js",
        file: "dist/index.umd.js",
        format: "umd",
        sourcemap: false,
      },
    ],
    plugins: [
      babel({ exclude: "./node_modules/**" }),
      terser({ format: { comments: true }, compress: false }),
      commonjs(),
      nodeResolve({ preferBuiltins: false }),
      nodePolyfills(),
      json(),
      resolve({ extensions: [".js"], browser: true }),
    ],
  },
];
