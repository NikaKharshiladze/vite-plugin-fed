import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		federation({
			name: 'login_form',
			filename: 'remoteEntry.js',
			exposes: {
				'./LoginForm': './src/bootstrap',
			},
			shared: ['lit'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
});

