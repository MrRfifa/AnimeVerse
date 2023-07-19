import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/AnimeVerse/", // Replace "AnimeVerse" with your actual GitHub repository name
  define: {
    // Expose environment variables to your application
    "process.env.VITE_APP_RAPID_API_KEY": JSON.stringify(
      import.meta.env.VITE_APP_RAPID_API_KEY
    ),
  },
});
