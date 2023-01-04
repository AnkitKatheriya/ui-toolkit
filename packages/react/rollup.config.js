import TS from 'rollup-plugin-typescript2'

export default {
    input: [
        'src/index.ts',
        'src/atoms/Button/index.ts',
        'src/atoms/ColorBlock/index.ts'
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
    },
    plugins: [TS()],
    external: ['react']
}