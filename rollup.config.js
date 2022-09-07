import react from 'react';
import reactDom from 'react-dom';
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import alias from '@rollup/plugin-alias'
import { babel } from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import css from 'rollup-plugin-import-css'
import images from '@rollup/plugin-image'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
  ],
  external: ['styled-components'],
  plugins: [
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    commonjs({
      namedExports: {
         'node_modules/react/index.js': ['useState', 'useRef', 'useEffect'],
       },
     }),
    resolve({
      extensions: ['.js', '.jsx', '.ts'],
    }),
    
    
    peerDepsExternal(),
    alias({
      entries: [
        { find: '@', replacement: '/src' },
      ],
    }),
    css(),
    images({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
  ],
}

