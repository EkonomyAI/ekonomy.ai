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

Local Next 16.2.6 static build, typecheck, lint, and all five tests passed.
Exported title/canonical URL and sitemap were checked. Existing asset hash tests
passed. Browser screenshot regression was not performed. Nested worktree builds
emit Next's multiple-lockfile/root-inference warning but complete successfully.

Audit at integration time: 26 findings (1 low, 16 moderate, 8 high, 1 critical),
identical counts and vulnerable package names to the pre-integration lockfile.
The critical finding is in existing Next. No audit fix/major framework upgrade
was folded into this change; dependency security remediation is needed before
release. Static export is not a blanket assertion of immunity.

Publication is blocked by unavailable Oiko runtime GitHub credentials. Branch
`feat/nextjs-htk-integration` is local WIP pending verified bot access and human
review. Next action: connect Oiko, verify API + transport, push source branch and
open PR; do not merge/deploy automatically.
