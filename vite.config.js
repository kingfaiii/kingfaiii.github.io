import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Use '/' if using yourname.github.io, or '/repo-name/' if it's a sub-project
  plugins: [react()],
});
