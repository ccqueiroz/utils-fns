import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import json from '@rollup/plugin-json';
const isProduction = process.env.NODE_ENV === 'production';
import pkg from './package.json';

const globals = {};
const name = '@utils-fns/utils';

export default (async () => [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name,
        exports: 'named',
        globals,
        extend: true,
        interop: 'auto',
      },
      {
        file: pkg.module,
        format: 'esm',
        name,
        sourcemap: true,
        globals,
        extend: true,
      },
      {
        file: 'dist/module.umd.js',
        format: 'umd',
        name,
        sourcemap: true,
        globals,
        extend: true,
      },
      {
        file: 'dist/bundle.iife.js',
        format: 'iife',
        name,
        globals,
        extend: true,
        plugins: [
          isProduction && (await import('@rollup/plugin-terser')).default(),
        ],
      },
    ],
    plugins: [
      json(),
      resolve(),
      commonjs({
        include: 'node_modules/**',
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
      },
    ],
    plugins: [dts.default()],
    globals,
    extend: true,
  },
])();
