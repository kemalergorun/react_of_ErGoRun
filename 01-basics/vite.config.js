import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Following part is for changing the development port
  server: {
    port: 3000,
  },
  // Following part is for changing the production port
  preview: {
    port: 3001,
  },
});
