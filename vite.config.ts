import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}.{png,jpg}'],
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      $lib: './src/lib/*',
      $api: './src/api/*',
      $store: './src/store/*',
      $types: './src/types/*',
      $utils: './src/utils/index.ts',
      $mockData: './src/mockData/*',
    },
  },
});
