import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['lib/hello.ts'],
    format: ['esm', 'cjs'],
    clean: true,
    dts: true,
    outDir: 'dist',
    minify: true
})