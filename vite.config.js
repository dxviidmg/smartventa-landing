import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Inline small CSS files into HTML to eliminate render-blocking requests
function inlineCssPlugin() {
  return {
    name: 'inline-css',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        if (!bundle) return html;
        for (const [name, chunk] of Object.entries(bundle)) {
          if (name.endsWith('.css') && chunk.source && chunk.source.length < 10000) {
            html = html.replace(
              new RegExp(`<link[^>]*href="[^"]*${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`),
              `<style>${chunk.source}</style>`
            );
            delete bundle[name];
          }
        }
        return html;
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCssPlugin()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'mui': ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
})
