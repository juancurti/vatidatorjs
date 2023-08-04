import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';
const pkg = require('./package.json');

export default [{
  input: 'dist/src/index.js',
  output: {
    name: "vatidator",
    file: pkg.browser,
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    minify({ comments: false }),
  ],
  external: ['soap']
}];