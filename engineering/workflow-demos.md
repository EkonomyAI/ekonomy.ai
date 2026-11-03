# Workflow pages and illustrative media

Nine distinct solution pages and `/workflows/` explain inputs, operator decisions,
outputs, limitations, setup requirements and measurement plans. These are examples,
not claims of generally available integrations. No live restaurant systems connect
to this website. All scene records are synthetic.

## Reproduction

Run `npm ci`, then `npm run dev -- --port 3346`. With `playwright-core`, a local
Chromium-compatible executable and `ffmpeg` installed, run:

```sh
npx tsx scripts/export-demos.mts
```

Optional environment overrides: `PLAYWRIGHT_MODULE` (module path),
`BROWSER_EXECUTABLE`, and `FFMPEG`. No credentials or remote browser profile needed.
`src/data/workflows.ts` supplies both visible transcripts and deterministic export
frames through `Conversation.tsx`. The noindex `/demo-render/` route is a local
render surface, intentionally excluded from the sitemap.

Each page includes a 20-second GIF deliverable, a smaller muted MP4, a static
poster, visible transcript and native playback controls. GIFs are download-only
rather than unpausable autoplay. Homepage playback respects reduced-motion and
has native controls plus a labeled play/pause button. The 36-second homepage
montage uses the first three workflows. `public/demos/manifest.json` records
actual exported dimensions, target durations and byte sizes.

## Review boundaries

- No production deployment or merge is part of this change.
- Current runtime health, integration support and commercial availability require
  separate verification. Workflow simulations are not execution evidence.
- Calendar synchronization, payroll submission, money movement, automatic ordering,
  universal POS publishing, and automated government filings are not demonstrated.
- Cash example intentionally retains the $40 exception; financial estimates remain
  labeled, and onboarding acknowledgment is not proof of competence.
- Workflow exploration CTAs remain the public next step until an inquiry destination
  is approved. The local planner explains that it does not submit information.
- The longer three-minute film remains a future production plan, not a delivered
  asset or replacement for these short previews.

## Copy review

The exported conversations use one `Workflow preview` label. Dialogue focuses on
the manager’s request and next decision; scope and setup details live in page
sections and FAQs, not repeated disclaimers inside every message. All underlying
records remain synthetic. Regenerate GIFs, videos and posters together after scene
copy changes so transcripts and media stay consistent.
