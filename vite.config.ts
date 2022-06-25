/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import * as path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/components': path.resolve(__dirname, './src/components'),
      '~/hooks': path.resolve(__dirname, './src/hooks'),
      '~/lib': path.resolve(__dirname, './src/lib'),
      '~/services': path.resolve(__dirname, './src/services'),
      '~/pages': path.resolve(__dirname, './src/pages'),
      '~/graphql': path.resolve(__dirname, './src/graphql'),
      '~/styles': path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [react()],
});
