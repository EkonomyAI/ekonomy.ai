# Ekonomy AI Website

Public website for [ekonomy.ai](https://ekonomy.ai), the umbrella company behind ProvisionOS.

## Stack

- Next.js static export
- TypeScript
- GitHub Pages via GitHub Actions, building source on `master`
- Custom domain via `CNAME`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
make build
```

The static site is generated into `docs/` for GitHub Pages.

## Shared Next.js foundation

This site consumes the published `@hacktoolkit/nextjs-htk` package for typed
configuration and build-time sitemap generation. See
[the integration and upgrade guide](engineering/nextjs-htk.md) for provenance,
verification, boundaries, and upstream feedback candidates.

## Publishing

The `Deploy GitHub Pages` workflow installs locked dependencies with `npm ci`
through `make build`, generates a fresh static export, and runs typecheck, lint,
and tests. Pull requests validate the build without deploying. Changes merged
into `master` build and deploy through the `github-pages` environment. A manual
run on `master` rebuilds and deploys too; runs on other branches never deploy.

The workflow uses Node.js 24.16.0, does not fetch private submodules, and consumes
the published HTK package from npm. Only the deploy job receives Pages/OIDC write
permissions. Deployment uploads the newly built `docs/`, never stale committed
HTML. Keep `CNAME` and `.nojekyll` in the export; `make build` handles both.

For local verification, run `make build`, `npm run typecheck`, `npm run lint`,
and `npm test`. Review generated `docs/` changes alongside source changes when
committing a local export. Open a PR targeting `master`; merge only after review.
`make deploy` only explains this flow and does not commit or push.

Pages must use **Settings → Pages → Build and deployment → Source → GitHub
Actions**. Preserve `www.ekonomy.ai` and **Enforce HTTPS**. The workflow does not
change DNS. After an approved merge, verify the successful deployment and live
homepage rather than relying solely on a green build.
