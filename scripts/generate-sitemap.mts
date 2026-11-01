import { writeFileSync } from 'node:fs';
import { generateSitemap } from '@hacktoolkit/nextjs-htk/utils';
import config from '../htk.config.mts';

// Executed before Next export; no deploy, git operation, or external service.
writeFileSync('public/sitemap.xml', generateSitemap({
  siteUrl: config.site.url,
  pages: config.navigation,
}));
