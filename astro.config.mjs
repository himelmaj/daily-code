// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import rehypePresetMinify from 'rehype-preset-minify'
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-dark' },
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypePresetMinify],
    remarkRehype: { footnoteLabel: 'Footnotes' },
    gfm: false
  }), react(), sitemap()]
})