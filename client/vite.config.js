import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" }); // Adjust the path if needed

export default defineConfig({
  plugins: [react()],
});
