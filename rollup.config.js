
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import {uglify} from 'rollup-plugin-uglify';
import {babel} from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "lib/index.cjs.js",
                format: "cjs"
            },
            {
                file: "lib/index.esm.js",
                format: "es"
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                useTsconfigDeclarationDir: true
            }),
            postcss(),
            uglify(),
            babel({ babelHelpers: 'bundled' })
        ]
    },
    {
        input: 'lib/types/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: "esm" }],
        external: [/\.scss$/],
        plugins: [dts()]
    }
]
