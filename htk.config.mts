import { defineConfig } from '@hacktoolkit/nextjs-htk';

/** Shared HTK contract; company content stays in this consumer repository. */
export default defineConfig({
  site: {
    name: 'Ekonomy AI',
    title: 'Ekonomy AI | Restaurant know-how. Ready for every shift.',
    description: 'AI operating memory for restaurants, starting with operator coaching and training.',
    url: 'https://ekonomy.ai',
    author: 'Ekonomy AI',
  },
  // Sitemap routes, not same-page navigation anchors.
  navigation: [{ name: 'Home', path: '/', showInNav: false }],
  footer: { copyright: 'Ekonomy AI' },
  seo: {
    defaultImage: '/brand/ekonomyai-avatar-600.png',
    twitterCard: 'summary',
  },
});
