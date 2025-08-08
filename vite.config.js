import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/krisha-crm-dashboard/', // 👈 GitHub repo name with slashes
  plugins: [react()],
});