# American Dream — Interactive Sales Deck

A cinematic, browser-based sales tool for the American Dream mega-mall in East Rutherford, NJ. Built for the commercial team to pitch retail tenants, brand partners, and event promoters.

**Live demo:** [Deploy to Vercel — see instructions below]

---

## What It Does

A purpose-built interactive pitch deck — not a website, not a slide deck. Sits at the intersection of luxury brand experience and high-stakes commercial pitch.

| Section | Purpose |
|---|---|
| **Hero** | Cinematic opener with YouTube autoplay + key stats. Immediate emotional impact. |
| **Why Here** | Location data, demographics, trade area story, accessibility |
| **Retail** | Tenant mix, co-tenancy story, retail KPIs, scrolling marquee |
| **Luxury** | Dedicated luxury corridor pitch, brand roster, consumer metrics |
| **Dining** | F&B as destination driver — 100+ concepts, celebrity chefs |
| **Entertainment** | 6 world-class attractions with interactive selector |
| **Events** | Deep module: 4 event types, 6 venue options, past activations, booking CTA |
| **Venues** | Dedicated Performing Arts & Venue sub-module: Performix Arena, Expo Center, Grand Atrium, The Rink — with full specs, capacities, infrastructure details |
| **Leasing** | Deep module: 4 segmented paths (luxury, retail, F&B, pop-up) with space ranges |
| **Sponsorship** | 3 partnership tiers with activation inventories and media channels |
| **Contact** | Lead capture with interest selector and routing confirmation |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Variables + inline styles for component isolation
- **Animation:** CSS transitions + IntersectionObserver (no heavy animation library)
- **Fonts:** Cormorant Garamond (display) + DM Sans (body) + Bebas Neue (mono)
- **Deployment:** Vercel (zero config)

---

## Design Decisions

**Non-linear navigation:** Three navigation systems — fixed top nav, hamburger full-screen overlay, side dot nav, and a bottom Digideck-style section progress bar with counter (01/11).

**Scroll-snap:** `scroll-snap-type: y mandatory` creates a section-by-section deck flow, not a scrolling website. Mirrors how Digideck presents content.

**Video-first:** Hero uses YouTube iframe autoplay (muted, looped, letterbox-scaled to cover). Entertainment section triggers a second video on scroll entry.

**No Framer Motion at runtime:** Despite being in package.json, Framer Motion is unused. IntersectionObserver + CSS transitions achieves equivalent scroll reveals at ~0kb runtime cost.

**Color system:** Obsidian → void → carbon → graphite → smoke creates a 5-level dark depth. Gold is used exclusively for active states, CTAs, and data highlights — never as decoration.

**Typography trio:** Cormorant Garamond (luxury editorial) + DM Sans (modern sans-serif) + Bebas Neue (bold numerics) — avoids every generic AI aesthetic.

---

## Setup & Run

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Deploy to Vercel

```bash
npx vercel        # one command, zero config
```

Or connect the GitHub repo to Vercel and it deploys on every push.

---

## AI Tools Used

- **Claude (Anthropic):** Full codebase architecture, component design, copywriting, data structure, gap analysis and implementation of missing modules (Venues/Performing Arts, SectionProgress)
- **Pollinations AI (image generation):** All section background images are AI-generated via the Pollinations.ai API — zero Unsplash stock photos. Each prompt was crafted to match the section's narrative: luxury boutique interiors for Luxury, concert arena crowd for Events, aerial mall complex at dusk for Hero, etc. No API key required; images are deterministic via seed parameter.
- **Design reference synthesis:** Claude analyzed Digideck patterns, luxury brand UIs (Apple, Hermès, Tesla), and combined strongest interaction patterns into a single coherent system

---

## What I'd Improve With More Time

1. **Real video assets** — Host actual American Dream footage (not reliant on YouTube iframe) with custom controls and true autoplay reliability
2. **Parallax depth** — Layer video, background images, and foreground text at different scroll rates in hero
3. **3D interactive floor plan** — Three.js venue map for Leasing and Venues modules
4. **CMS backend** — Connect to Contentful or Sanity so sales team can update stats without code changes
5. **Analytics integration** — Track section dwell time, CTA clicks, and drop-off to optimize the deck
6. **A/B hero messaging** — Different openers for tenant vs. sponsor vs. event partner visitors
7. **URL param personalization** — `/deck?interest=luxury-leasing` pre-selects the Leasing section on load
8. **Animated data counters** — Count-up animations on stat numbers when sections enter view
