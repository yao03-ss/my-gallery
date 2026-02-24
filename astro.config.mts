import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://yao03-ss.netlify.app/', 
	base: '/',                            
	vite: {
		plugins: [tailwindcss()],
	},
});