# Kotor Shore Excursions

Premium cruise-port authority site for passengers visiting Kotor, Montenegro.

**Domain:** [kotorshoreexcursion.com](https://kotorshoreexcursion.com)

## Stack

- Next.js 16 (App Router, static export)
- React 19, TypeScript, Tailwind CSS v4
- Cloudflare Pages deployment via Wrangler

## Commands

```bash
npm run dev              # Local development
npm run generate:data    # Regenerate content from scripts/generate-kotor-data.mjs
npm run download:images  # Fetch CC-licensed images from Wikimedia Commons
npm run build            # Production static export to out/
npm run check-links      # Internal link validation
npm run seo-qa           # Post-build SEO checks (run after build)
npm run pages:deploy     # Build and deploy to Cloudflare Pages
```

## Site structure (World 2.0)

- **Homepage** — Emotional hero, experience selector, Spirit of Kotor editorial, honest advice, Editor's Choice, star-rated cruise passenger snapshot, arrival timeline, excursion categories, Mediterranean linking
- **Shore Excursions Hub** — 12 cruise-timed excursions
- **Planning Guides** — 18 authority pages + 5 passenger-type guides + Mediterranean cruise planning hub
- **Compare** — 6 editorial comparison pages
- **Cruise Planner** — Personalised itineraries with PDF export
- **Cruise Port Guide** — Port of Kotor terminal logistics
- **Ship Schedules** — Kotor port, year/month structure ready for CSV import

## Content

All page content lives in `src/data/` as typed TypeScript modules. Regenerate with:

```bash
npm run generate:data
```

Ship schedule data imports to `src/data/imported-schedules/kotor.json`.
