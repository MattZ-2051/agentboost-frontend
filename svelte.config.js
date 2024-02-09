import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$lib: './src/lib/*',
			$api: './src/api/*',
			$store: './src/store/*',
			$types: './src/types/*',
			$utils: './src/utils/index.ts',
			$mockData: './src/mockData/*'
		}
	},
	onwarn: (warning, handler) => {
		if (warning.code === 'a11y-click-events-have-key-events') return;
		if (warning.code === 'a11y-no-static-element-interactions') return;
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		handler(warning);
	}
};
export default config;
