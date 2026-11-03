import { workflows } from './src/data/workflows';
import { defineConfig } from '@hacktoolkit/nextjs-htk';

/** Shared HTK contract; company content stays in this consumer repository. */
export default defineConfig({
  site: {
    name: 'Ekonomy AI',
    title: 'Ekonomy AI | The work behind every shift.',
    description: 'Reviewable restaurant workflows for scheduling, payroll preparation, cash reconciliation, menus and staff readiness.',
    url: 'https://www.ekonomy.ai',
    author: 'Ekonomy AI',
  },
  // Sitemap routes, not same-page navigation anchors.
  navigation: [{ name: 'Home', path: '/', showInNav: false }, {name: 'Workflows', path: '/workflows/'}, ...workflows.map(w => ({name: w.shortTitle, path: `/solutions/${w.slug}/`}))],
  footer: { copyright: 'Ekonomy AI' },
  seo: {
    defaultImage: '/brand/ekonomyai-avatar-600.png',
    twitterCard: 'summary',
  },
});
