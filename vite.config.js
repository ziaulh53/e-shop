import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  pwa: {
    name: "E-Shop",
    short_name: "E-SHOP",
    themeColor: "#4DBA87",
    manifestOptions: {
      icons: [
        {
          src: "./img/icons/mstile-150x150.png",
          sizes: "150x150",
          type: "image/png",
          purpose: "any",
        },
      ],
      screenshots: [
        {
          src: "/screenshots/screenshot1.png",
          sizes: "1280x800",
          type: "image/png",
        },
      ],
    },
  },
});
