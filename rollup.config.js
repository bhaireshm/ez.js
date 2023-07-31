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
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        name: "@bhairesh/ez.js",
        file: "dist/index.umd.js",
        format: "umd",
        sourcemap: true,
      },
    ],
    plugins: [
      cleaner({ target: ["dist"] }),
      babel({ exclude: "node_modules/**" }),
      external(),
      terser(),
      commonjs(),
      nodeResolve({ preferBuiltins: false }),
      nodePolyfills(),
      json(),
      resolve({
        extensions: ["*", ".mjs", ".js", ".json"],
        browser: true,
      }),
    ],
  },
];
