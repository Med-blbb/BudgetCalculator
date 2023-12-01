import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteGhPages from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
