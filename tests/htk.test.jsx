import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

test('real HTK build utility generates only canonical page routes', () => {
  execFileSync(process.execPath, ['--import', 'tsx', 'scripts/generate-sitemap.mts']);
  const xml = readFileSync('public/sitemap.xml', 'utf8');
  assert.match(xml, /<loc>https:\/\/www.ekonomy.ai\/<\/loc>/);
  assert.equal((xml.match(/<url>/g) || []).length, 11);
  assert.ok(!xml.includes('#'));
  assert.match(xml, /<priority>1<\/priority>/);
});

test('HTK dependency is pinned and no automatic deployment was introduced', () => {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  assert.equal(pkg.dependencies['@hacktoolkit/nextjs-htk'], '0.3.0');
  assert.equal(pkg.scripts.prebuild, 'npm run generate:sitemap');
  assert.ok(!pkg.scripts.build.includes('push'));
});
