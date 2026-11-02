# Ekonomy AI Website

Public website for [ekonomy.ai](https://ekonomy.ai), the umbrella company behind ProvisionOS.

## Stack

- Next.js static export
- TypeScript
- GitHub Pages from `docs/`
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
