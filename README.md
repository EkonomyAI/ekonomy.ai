# Ekonomy AI Website

Public website for [ekonomy.ai](https://ekonomy.ai), the umbrella company behind ProvisionOS.

## Stack

- Next.js static export
- TypeScript
- GitHub Pages via GitHub Actions, publishing committed `docs/`
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

The `Deploy GitHub Pages` workflow publishes the committed `docs/` directory
when changes land on `master`. It can also be run manually from Actions on
`master`. It does not install dependencies or rebuild the site: build and
commit updated static output as part of the reviewed change before publishing.

The workflow checks out without submodules, uploads the Pages artifact, and
deploys through the `github-pages` environment using GitHub's Pages actions.
Deployments share a concurrency group and do not cancel an in-progress deploy.

For initial activation, select **Settings → Pages → Build and deployment →
Source → GitHub Actions** after this workflow is merged. Preserve the custom
domain `www.ekonomy.ai` and **Enforce HTTPS**, then run the workflow on `master`
and verify the deployment succeeds. The workflow does not change DNS.
