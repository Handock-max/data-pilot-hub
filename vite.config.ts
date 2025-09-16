// @ts-nocheck
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// ESM friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  // Base nécessaire pour GitHub Pages (remplacez par le nom exact du repo si différent)
  // Si vous déployez ailleurs, vous pouvez remettre base à "/".
  base: "/data-pilot-hub/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
