// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
	input: 'src/index.ts',
	output: [
		{
			file: 'build/bundle.cjs', // Output file for CommonJS format
			format: 'cjs'
		},
		{
			file: 'build/bundle.mjs', // Output file for ESM format
			format: 'es'
		}
	],
	plugins: [
		nodeResolve(), // Resolve node modules
		commonjs(), // Convert CommonJS modules to ES6
		json() // Convert JSON files to ES6 modules
	]
};
