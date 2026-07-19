import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'node:fs';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/mycellium/' : '/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mycellium',
        short_name: 'Mycellium',
        description: 'Decentralized WebRTC messaging',
        theme_color: '#1a1a2e',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    host: true,

    https: fs.existsSync('.cert/localhost+3-key.pem')
      ? {
          key: fs.readFileSync('.cert/localhost+3-key.pem'),
          cert: fs.readFileSync('.cert/localhost+3.pem'),
        }
      : undefined,
  },
});
