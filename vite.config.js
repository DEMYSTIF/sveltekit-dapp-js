import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		port: 3600,
		strictPort: false
	},
	preview: {
		port: 4000,
		strictPort: false
	}
};

export default config;
