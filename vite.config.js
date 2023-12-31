import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
	plugins: [sveltekit(), basicSsl()],
	//plugins: [sveltekit()],
  server: { port: 3000 }
});
