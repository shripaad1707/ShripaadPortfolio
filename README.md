# Shripaad Koduri — Portfolio 2026

Personal portfolio of **Shripaad Koduri**, AI automation engineer & creative developer from Hyderabad.
Built for the **Skillinf Portfolio Design Hackathon 2026**.

**Live:** https://shripaad-portfolio17.vercel.app

## Highlights

- **Bento hero** with a live, draggable n8n-style workflow demo: a WhatsApp lead flows through an AI agent, gets qualified, booked and synced, with a running log for three industries.
- **"What I build" tile** that cycles through services with masked slide transitions and clickable progress bars, plus a two-way marquee of the daily tool stack.
- **Scroll-scrubbed manifesto**: words light up as you scroll, with an inline portrait pill and a spinning badge.
- **Sticky stacked project cards** that scale back as the next one slides over, each with a browser-frame video that plays only while visible.
- **Automation systems** as auto-advancing tabs with an animated pipeline, points and metrics.
- **Studio**: drag carousel of Blender renders and a fanned set of phones playing UGC-style ads.
- Spotlight skill cards, a scroll-filled experience timeline, and a lime contact section with a mailto project form.
- Lenis smooth scrolling, a page loader, a scroll progress bar, click sparks and a cursor-reveal footer wordmark.
- Fully responsive (desktop, tablet, phone) and respects `prefers-reduced-motion`.

## Tech stack

- React 19 + Vite
- Motion (motion/react) for reveals, layout and gesture animation
- Lenis smooth scroll
- React Bits components: DotGrid, ScrollVelocity, SpotlightCard, LogoLoop, CircularText, DecryptedText, CountUp, Magnet, ClickSpark, GradualBlur
- Self-hosted fonts via Fontsource: Bricolage Grotesque, DM Sans, JetBrains Mono

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Credits

Animated components adapted from [React Bits](https://reactbits.dev). Product renders and ad concepts are original work made for this portfolio; all brands shown are fictional.
