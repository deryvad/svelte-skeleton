import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {buildcss, copystaticfiles, distfolder, cleanbuildfolder, setupsvelte, setvariablesperenvironment} from './rollup.parts.config';

export default {
	input: 'src/main.js',
	output: {
		file: `${distfolder}/bundle.js`,
		format: 'esm'
	},
	plugins: [
		cleanbuildfolder,
		setvariablesperenvironment,
		setupsvelte,
		resolve(),
		commonjs(),
		buildcss,
		copystaticfiles
	]
};

