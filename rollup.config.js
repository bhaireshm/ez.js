import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import nodePolyfills from "rollup-plugin-node-polyfills";
import { terser } from "rollup-plugin-terser";

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
