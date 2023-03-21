// rollup.config.js
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const resolve = require("@rollup/plugin-node-resolve");
const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2");
const a={
  input: 'index.ts',
  output: {
    file: 'dist/lib.js',
    format: 'umd',
    name: 'MyLibrary'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    typescript(),
    babel({
      exclude: 'node_modules/**'
    }),
  ]
};
module.exports=a;
