import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify('AIzaSyBpJ850Wepdw-T-GAEydJrr9MsafQovzmc')
  },
  server: {
    port: 3000
  }
});