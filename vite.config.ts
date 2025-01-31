import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  server: {
    port: 5001,
    strictPort: true,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
  plugins: [
    react(),
    svgr(),
    //remove "checker" if you see performance issues. You will rely only on your editor configuration for static typing
    checker({
      typescript: { tsconfigPath: 'tsconfig.src.json' },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
