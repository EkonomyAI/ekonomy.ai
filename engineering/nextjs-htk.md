# NextJS-HTK integration

## Provenance and scope

This site consumes **`@hacktoolkit/nextjs-htk@0.3.0`**, pinned exactly in
`package.json` with registry integrity in `package-lock.json`. Its authoritative
repository is https://github.com/hacktoolkit/nextjs-htk (package: `packages/core`).
Source inspected at `4a577a7bf2e2cb78bae67394d6ac491141458ee5`.
The upstream root integration guide still references unpublished/obsolete
`@nextjs-htk/core` APIs; use the actual shipped package exports instead.

## Real integration, not a copied starter

- `htk.config.mts` calls the package's `defineConfig` and owns the typed site
  identity and canonical routes. Existing page metadata consumes it through
  `src/config/site.ts`.
- `scripts/generate-sitemap.mts` calls the package's `generateSitemap`.
  `npm run build` automatically generates `public/sitemap.xml` before Next
  exports it into `docs/sitemap.xml`. Only real routes belong in the sitemap;
  homepage section anchors are not separate pages.
- `.mts` is intentional: 0.3.0 exposes import-only exports. A CommonJS-mode
  `tsx` script cannot require them. Explicit `.mts` imports also work in
  Turbopack; TypeScript enables `allowImportingTsExtensions` with `noEmit`.
- No toolkit bootstrap/reset CSS, theme provider, analytics, or generic page
  layout is injected. Existing approved design, assets, content, interactions,
  and Pages Router/static-export architecture remain unchanged.
- Do not run `htk sync --force`: upstream templates could overwrite local
  Makefile/configuration and introduce inappropriate deployment behavior.

## Repeatable consumer workflow

Run `npm ci`, `npm run typecheck`, `npm run lint`, `npm test`, then
`npm run build`. The tests exercise the installed sitemap utility and package
pin. Generated `docs/` output is not part of this source-only integration commit.
Deployment remains a separately reviewed action; build never pushes Git.

For future sites, use the same published dependency, typed configuration and
build adapter rather than copying toolkit implementation. Keep brand assets,
product copy and site layout in the consumer. Trial upgrades on a branch, inspect
release changes, update the exact package version and lockfile, run the gates,
and compare metadata/sitemap plus mobile and desktop appearance before landing.

## Upstream feedback candidates (not submitted)

1. Align docs/examples with the actual `@hacktoolkit/nextjs-htk` package and
   `Page { name, path }` navigation shape; remove references to absent SEO and
   BaseLayout exports.
2. Add a documented ESM/TypeScript CLI recipe and smoke tests against Next 16,
   including `tsx` consumers without `type: module`.
3. Add deterministic sitemap timestamps / opt-in lastmod, XML escaping and URL
   joining tests. Current generator uses build time for every route; that is not
   proof of editorial modification.
4. Consider a small config-only export and optional UI dependencies so sites
   consuming config/utilities need not install Bootstrap, FontAwesome and Sass.

## Verification and known limitations

Release-check update: Next and eslint-config-next upgraded to 16.4.3; compatible
transitive dependency patches applied. Typecheck, lint, all five tests and static
export pass. Production-only audit reports zero vulnerabilities. Full audit
retains 16 moderate development-tool findings rooted in minimatch <11.0.1.
Do not use audit --force: it proposes an incompatible ESLint downgrade. A major
minimatch override is not assumed compatible with legacy callable consumers.
No critical/high findings remain after compatible remediation.

Canonical metadata and sitemap use https://www.ekonomy.ai, consistent with the
separate CNAME correction in PR #2. This branch is stacked on website PR #1;
merge PR #1 first, then retarget this integration to master. PR #2 remains a
separate change and has not been duplicated here. Build artifacts are not committed.
Browser screenshot regression remains outstanding. No merge/deploy is authorized.
