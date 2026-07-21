import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base is "/sanya-portfolio/" for the GitHub Pages build, "/" for local dev
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/sanya-portfolio/" : "/",
  plugins: [react()],
}));
