import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Troque `site` se o endereço mudar (domínio próprio da cliente, por exemplo).
export default defineConfig({
  site: 'https://gicaalegria.gpsoftworks.com',
  vite: { plugins: [tailwindcss()] },
});
