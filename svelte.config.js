import adapter from '@sveltejs/adapter-auto';
import { imagetools } from 'vite-imagetools';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	}
};

export default config;
