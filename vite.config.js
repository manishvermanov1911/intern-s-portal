import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD

export default defineConfig({
  plugins: [react()],
});
=======
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [react(), flowbiteReact()],
});
>>>>>>> f17ffa7 (updated some ui in faq)
