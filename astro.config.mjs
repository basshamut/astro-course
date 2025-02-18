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
  }
});