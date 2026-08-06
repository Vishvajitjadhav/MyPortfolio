# Portfolio UI/UX Revamp — "Orbital Space" Theme

**Date:** 2026-08-07
**Branch:** `feature/space-ui-revamp`
**Owner:** Vishvajit Jadhav

## Goal

Elevate the portfolio's UI/UX into a cohesive, smooth, fully-responsive **space-themed** experience that feels intentionally hand-crafted. Keep it low-latency. Sync content to the latest resume. Centerpiece: a hero where the profile photo reads as a **planet** and skill words **orbit it like particles**.

## Guiding constraints

- **Honesty:** All content stays truthful to the resume. No invented metrics or inflated claims. Remove pre-existing unsupported claims (e.g. Consultadd "reducing manual effort by ~60%").
- **Performance:** GPU-accelerated CSS for continuous animation (no per-frame JS for orbits). Replace unthrottled scroll listeners with IntersectionObserver. Scale particle/star counts on small screens. Respect `prefers-reduced-motion`.
- **Responsive:** Works cleanly from 320px up through desktop; layout adapts to device.
- **Preserve architecture:** Same React + Vite component structure. Refactor styling and content in place; no rewrite of the app shell.

## Design System (new foundation)

Introduce shared design tokens in `src/index.css` (`:root`) and use them everywhere.

- **Base:** `--bg-0: #05060a`, `--bg-1: #0b0d16`, elevated glass `rgba(255,255,255,0.04)` with `backdrop-filter: blur()`.
- **Accent (aurora gradient):** indigo `#6366f1` → cyan `#22d3ee`. Token: `--accent`, plus `--accent-grad`.
- **Secondary (nebula):** violet `#a855f7`.
- **Text:** primary `#e2e8f0`, muted `#94a3b8`.
- **Typography:** `Space Grotesk` for display headings, `Inter` for body. Loaded via `<link>` with `preconnect` in `index.html`; system-font fallback so no layout shift.
- **Legacy tokens:** keep old `--primary-red` etc. aliased to the new accent during migration so nothing breaks mid-refactor, then remove once all components are migrated.
- **Shared primitives (CSS):** `.section-header`, glass `.card` with border-glow-on-hover, `.pill`/tag, buttons, scrollbar, selection — all retuned to the aurora palette.

## Section-by-section changes

### Global (`App.jsx`, `App.css`, `index.css`)
- Replace the per-scroll-event `handleScroll` section tracker in `App.jsx` with an **IntersectionObserver** for active-section detection.
- Add a subtle **cursor spotlight** (soft radial glow following the pointer) on desktop only; disabled for touch and reduced-motion. Lightweight, pointer-events-none overlay.
- Unify scroll-reveal timing/eases across sections.

### ParticleBackground (`ParticleBackground.jsx/.css`)
- Keep the canvas starfield + shooting stars. Retune background gradient to the new deep-space base.
- Reduce star density and shooting-star count on small screens / low-DPI; pause when tab hidden (visibilitychange) to save battery.
- Optionally add a faint parallax nebula glow via CSS (cheap radial gradients), no extra JS cost.

### Hero (`Hero.jsx/.css`) — centerpiece
- Profile image → **planet**: circular, atmospheric rim-light, slow-rotating conic/gradient halo ring, soft outer glow. Retune from red border to aurora.
- Skill words → **orbiting particles**: place words on 1–2 elliptical orbit rings that **continuously revolve** via a single GPU transform animation on the ring container (counter-rotate each word so text stays upright). Depth cue via radius/opacity/scale. Pause/relax on `prefers-reduced-motion`.
- Preserve the click-to-switch persona toggle (dev ↔ creative) swapping the orbiting word sets.
- Update copy to resume positioning: title "Software Engineer" with rotating/emphasis on "Java Backend & AI Engineering"; description aligned to resume summary.
- **Resume button:** point to local `/resume.pdf` (served from `public/`) instead of the Google Drive link.
- Full responsive: orbit + planet scale down; on mobile the orbit radius shrinks and words reduce so nothing overflows.

### Navbar (`Navbar.jsx/.css`)
- Glass navbar retuned to aurora; active-section pill indicator. Ensure mobile hamburger menu opens/closes correctly and is accessible (aria-expanded, focus states). Throttle its scroll listener.

### About (`About.jsx/.css`)
- Restyle cards to shared glass primitive. Keep content; verify claims are truthful (theater arts + backend/AI framing is fine). No fabricated metrics.

### Skills (`Skills.jsx/.css`)
- Keep current skill categories **as-is** (user chose to keep the broader list). Restyle tags/cards to aurora glass with hover.

### Experience (`Experience.jsx/.css`) — content sync
Timeline, newest first:
1. **Speed IT Innovations — AI Developer** · Pune · May 2026 – Present
   - Working on production LLM applications — backend LLM orchestration and structured outputs in Java/Spring Boot
   - Implemented LLM guardrails (input/output validation, topic restriction, fallback flows) for reliable responses
   - Reduced end-to-end LLM latency through prompt optimization, response streaming, and caching
   - Tech: Java, Spring Boot, LLM, RAG, Prompt Engineering
2. **Consultadd Inc. — Software Engineer (Trainee)** · Pune · May 2025 – Oct 2025
   - Built concurrency-safe, transactional backend services in Java/Spring Boot for US-based SMB clients
   - Optimized SQL queries and database access paths, improving API response times on large datasets
   - Resolved production issues via structured debugging and logging, improving system stability
   - Translated client requirements into working demos and business-aligned APIs with cross-functional teams
   - Tech: Java, Spring Boot, Hibernate, REST APIs, Microservices, Agile
   - **Remove** the unsupported "~60%" and "automated pipelines" bullets not on the resume.
3. **Independent AI Engineering (Self-Directed)** · Nov 2025 – Apr 2026
   - Specialization sprint in GenAI and full-stack Java; built and shipped three applications
   - Covered RAG pipelines, LLM integration, payment flows, and concurrency-safe backend design
   - Tech: Java, Spring Boot, Python, RAG, LLM, Stripe
4. **Elite Softwares Pvt. Ltd. — Software Engineer Intern** · Pune · Jan 2023 – Dec 2023
   - Developed RESTful APIs in Java/Spring Boot and designed relational schemas for internal applications
   - Wrote optimized SQL for CRUD operations, backend validations, and application performance
   - Tech: **Java, Spring Boot, REST APIs, SQL** (corrected from Python/Django)

### Projects (`Projects.jsx/.css`) — add 4th
Keep Yatrik, AI Interview Copilot, Smart Meeting; add:
- **RAG File Search System** · Dec 2025 · Python, Embeddings, Vector Search, LLM
  - Desc (from resume + repo): offline Retrieval-Augmented Generation system for local semantic search across files/folders — chunking, embedding generation, vector similarity search, LLM for context-grounded answers; improved retrieval accuracy over keyword search.
  - GitHub: `https://github.com/Vishvajitjadhav/RAG-File-Search-System`
  - demo: none; no video → card shows GitHub link, no "Watch Demo" for this card.
- Restyle cards/video modal to aurora glass. Ensure 4-card grid is responsive.

### Education (`Education.jsx/.css`) — add certifications
- Keep the B.E. card. Add a **Certifications** strip:
  - Generative AI with Large Language Models — DeepLearning.AI · 2026
  - AWS Certified Developer – Associate — *In Progress (Target: Sep 2026)*

### Contact (`Contact.jsx/.css`)
- Restyle to aurora glass. Keep Web3Forms integration and links. Update footer year to 2026. Verify contact info matches resume (email/phone/location/socials — all match).

### Assets
- Replace `public/resume.pdf` with the latest `Vishvajit_Jadhav_Resume_SoftwareEngineer.pdf`.

## Non-goals (YAGNI)
- No CMS, no i18n, no dark/light toggle (site is intentionally dark/space).
- No new dependencies beyond web fonts. Reuse framer-motion + react-icons already present.
- No backend changes; contact form stays on Web3Forms.

## Testing / verification
- `npm run dev` and manually verify each section at widths 320 / 375 / 768 / 1024 / 1440.
- Verify: orbit animation smooth (60fps target, no jank), persona toggle works, resume opens local PDF, RAG card links correctly, reduced-motion calms animation, no console errors, `npm run build` succeeds.
- Deliver local dev link to user for review before any push/deploy.

## Rollout
Implement in tasks on `feature/space-ui-revamp`. User reviews locally. Push + `gh-pages` deploy only after explicit approval.
