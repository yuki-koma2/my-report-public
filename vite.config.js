import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/my-report-public/" : "/",
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  plugins: [react(), tailwindcss()]
}));
