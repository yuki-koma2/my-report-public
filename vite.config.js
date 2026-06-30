import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const isPreview = process.argv.includes("preview");

export default defineConfig(({ command }) => ({
  base: command === "build" || isPreview ? "/my-report-public/" : "/",
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["../test/**/*.{test,spec}.{js,jsx}"],
    setupFiles: "../test/setup.js"
  }
}));
