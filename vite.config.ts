import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Rutas relativas: funciona tanto en la raíz (dominio propio) como en /repo-name/ (github.io)
});
