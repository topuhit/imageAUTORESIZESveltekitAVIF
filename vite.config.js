import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools';
/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools()]
};

export default config;
