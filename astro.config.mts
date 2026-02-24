import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://reliable-fenglisu-7dbbcd.netlify.app',
	base: '/'
	vite: {
		plugins: [tailwindcss()],
	},
});
