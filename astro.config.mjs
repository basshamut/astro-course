// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  env: {
    // Add environment variables here. They will be accessible in your components.
    schema:{
      SHOW_BUY_BUTTON: envField.boolean({context: "server", access: "public"}),
    }
  },
  output: 'static',  // Indica que queremos una salida estática
  site: 'https://basshamut.github.io/', // Reemplaza con tu usuario/repositorio de GitHub
  base: '/astro-course/' // IMPORTANTE si el repo no es "tu-usuario.github.io"
});