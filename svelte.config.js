//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
		}
	},

};

export default config;
