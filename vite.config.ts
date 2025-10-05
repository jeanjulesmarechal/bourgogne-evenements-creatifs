import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Injection de la date de build pour le développement local
    __BUILD_DATE__: JSON.stringify(new Date().toLocaleString('fr-FR')),
  },
  envPrefix: ['VITE_', 'VERCEL_'],
}));
