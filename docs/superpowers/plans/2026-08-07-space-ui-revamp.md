# Space UI/UX Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio into a cohesive, smooth, fully-responsive space-themed site with an orbital-planet hero, and sync content to the latest resume.

**Architecture:** Keep the existing React + Vite component structure. Introduce a shared design-token system in `index.css`, migrate each component's CSS to it, upgrade the hero's planet/orbit, fix performance (IntersectionObserver, capped particles), and sync content. No new runtime dependencies.

**Tech Stack:** React 18, Vite 5, framer-motion, react-icons, Space Grotesk + Inter web fonts.

## Global Constraints

- **Honesty:** Content must match the resume; no invented metrics. Remove Consultadd "~60%" and "automated pipelines" bullets (not on resume).
- **No new dependencies** beyond Google Fonts `<link>`.
- **Performance:** continuous animation via GPU CSS transforms only; no per-frame JS orbit; IntersectionObserver for section tracking; cap stars/particles on small screens; honor `prefers-reduced-motion`.
- **Responsive:** verified at 320 / 375 / 768 / 1024 / 1440 px.
- **Palette tokens (exact):** `--bg-0:#05060a`, `--bg-1:#0b0d16`, `--accent:#22d3ee`, `--accent-2:#6366f1`, `--nebula:#a855f7`, `--text:#e2e8f0`, `--text-muted:#94a3b8`, `--accent-grad:linear-gradient(135deg,#6366f1,#22d3ee)`.
- **Verification per task:** `npm run build` succeeds AND the affected section renders correctly in `npm run dev` with no console errors.

---

### Task 1: Design-system foundation + assets

**Files:**
- Modify: `index.html` (add font preconnect/link, meta), `src/index.css` (tokens, globals), `src/App.css` (shared primitives)
- Asset: replace `public/resume.pdf`

- [ ] Add `preconnect` + Space Grotesk/Inter `<link>` to `index.html`; update `<title>`/meta description to resume positioning.
- [ ] In `src/index.css` `:root`, add the new palette tokens (exact values above) plus spacing/radius tokens. Alias legacy `--primary-red`/`--dark-bg`/etc. to the new tokens so unmigrated components keep working. Update body font stack (Inter), background to `--bg-0`, scrollbar + `::selection` to aurora. Remove the global `* { transition: ... }` rule (it causes jank); apply transitions per-component instead.
- [ ] In `src/App.css` add shared primitives: `.section-header`, `.glass-card` (glass bg + blur + border, hover border-glow + lift), `.pill`, gradient-text util `.text-grad`.
- [ ] Replace `public/resume.pdf` with the latest resume file.
- [ ] Verify: `npm run build` OK; site loads with new fonts/background, no console errors.
- [ ] Commit: `feat: add space design-system tokens, fonts, shared primitives; update resume`

### Task 2: Global behavior — IntersectionObserver + cursor spotlight

**Files:**
- Modify: `src/App.jsx`, `src/App.css`
- Create: `src/components/CursorGlow.jsx`, `src/components/CursorGlow.css`

**Interfaces:**
- Produces: `<CursorGlow />` — self-contained; renders a fixed pointer-following radial glow; no props.

- [ ] Replace the scroll-loop `handleScroll` in `App.jsx` with an `IntersectionObserver` over the section ids (`rootMargin` tuned so active updates near viewport center); keep `activeSection` state + `Navbar` prop.
- [ ] Create `CursorGlow`: fixed full-screen `pointer-events:none` div; on `mousemove` update CSS vars `--mx/--my`; radial-gradient aurora glow follows cursor. Guard: only attach on devices with a fine pointer (`matchMedia('(pointer:fine)')`) and not `prefers-reduced-motion`.
- [ ] Mount `<CursorGlow />` in `App.jsx` (after `ParticleBackground`).
- [ ] Verify: active nav link updates on scroll; glow follows cursor on desktop, absent on touch; build OK.
- [ ] Commit: `feat: intersection-observer nav tracking + desktop cursor glow`

### Task 3: Hero — planet + orbiting particles + copy + resume link

**Files:**
- Modify: `src/components/Hero.jsx`, `src/components/Hero.css`

- [ ] CSS: restyle `.hero-image` as a **planet** — aurora rim border, layered box-shadow glow, a slow-rotating conic-gradient halo ring behind it (`::before`, `animation: spin 18s linear infinite`), retune `.image-glow` to aurora.
- [ ] CSS: convert `.floating-elements` to a **continuously revolving orbit** — the ring container spins via `@keyframes orbit { to { transform: translate(-50%,-50%) rotate(360deg) } }` (slow, ~40s); each `.float-element` counter-rotates with its own reverse spin so text stays upright. Add a second inner orbit ring style. Keep the existing angle/radius CSS-var positioning. Under `prefers-reduced-motion`, disable the spin (static ring).
- [ ] JSX: keep persona toggle + `useImperativeHandle`. Split words into two orbit rings (e.g. 4 outer + 3 inner). Update headline/description copy to resume positioning ("Java Backend & AI Engineering", resume summary). Change resume button to open `${import.meta.env.BASE_URL}resume.pdf` in new tab.
- [ ] CSS: responsive — planet + orbit scale down at 968/480px so words never overflow; reduce radius via media queries on `--radius`.
- [ ] Verify: orbit revolves smoothly, text upright; toggle swaps word sets; resume opens local PDF; mobile no overflow; build OK.
- [ ] Commit: `feat: orbital-planet hero with revolving skill particles + resume/copy sync`

### Task 4: ParticleBackground perf + retune

**Files:**
- Modify: `src/components/ParticleBackground.jsx`, `src/components/ParticleBackground.css`

- [ ] Retune gradient stops to `--bg-0`/`--bg-1`. Cap star count for small screens (divide area by larger divisor when `innerWidth < 768`) and cap devicePixelRatio work. Pause animation on `document.hidden` (visibilitychange) and resume on focus.
- [ ] Respect `prefers-reduced-motion`: render a static starfield (no shooting stars, no drift) when set.
- [ ] Verify: background matches theme; CPU lower on mobile widths; build OK.
- [ ] Commit: `perf: cap starfield on mobile, pause when hidden, reduced-motion static field`

### Task 5: Navbar restyle + a11y

**Files:**
- Modify: `src/components/Navbar.jsx`, `src/components/Navbar.css`

- [ ] Retune glass navbar + logo + links to aurora; active link gets an aurora underline/pill. Add `aria-expanded`/`aria-label` to the mobile toggle; animate hamburger→close; close menu on link click (already) and on Escape.
- [ ] Verify: mobile menu opens/closes, keyboard accessible, active state visible; build OK.
- [ ] Commit: `feat: aurora navbar restyle + accessible mobile menu`

### Task 6: About + Skills restyle

**Files:**
- Modify: `src/components/About.{jsx,css}`, `src/components/Skills.{jsx,css}`

- [ ] Migrate both to shared glass-card + aurora tokens; retune icons, tags, hover. Keep Skills categories as-is. Keep About copy (truthful). Ensure responsive grids.
- [ ] Verify: both sections themed + responsive; build OK.
- [ ] Commit: `style: aurora restyle for About and Skills`

### Task 7: Experience content sync + restyle

**Files:**
- Modify: `src/components/Experience.jsx`, `src/components/Experience.css`

- [ ] Replace `experiences` array with the 4 roles (Speed IT → Consultadd → Independent AI → Elite) using exact resume bullets from the spec; remove unsupported Consultadd bullets; correct Elite tech to Java/Spring Boot/REST/SQL. Newest-first order.
- [ ] Retune timeline + cards to aurora glass. Responsive.
- [ ] Verify: 4 entries render, content matches resume, timeline responsive; build OK.
- [ ] Commit: `feat: sync experience to resume (Speed IT, Independent AI, Elite fix) + restyle`

### Task 8: Projects — add RAG + restyle

**Files:**
- Modify: `src/components/Projects.jsx`, `src/components/Projects.css`

- [ ] Add RAG File Search System as 4th project (no video → hide Watch Demo + play overlay when `videoId` empty; show GitHub link). GitHub: `https://github.com/Vishvajitjadhav/RAG-File-Search-System`. Use a suitable image (reuse an existing public image or a gradient placeholder if none).
- [ ] Guard the video overlay/`demo-trigger` on presence of `videoId`. Retune cards + modal to aurora glass. Make grid responsive for 4 cards.
- [ ] Verify: 4 cards, RAG links to repo, cards without video don't show play UI, modal still works for others; build OK.
- [ ] Commit: `feat: add RAG File Search project + guard video UI + restyle`

### Task 9: Education + Certifications

**Files:**
- Modify: `src/components/Education.jsx`, `src/components/Education.css`

- [ ] Add a `certifications` array + a Certifications strip below the education card: "Generative AI with Large Language Models — DeepLearning.AI · 2026"; "AWS Certified Developer – Associate — In Progress (Target Sep 2026)". Retune to aurora glass. Responsive.
- [ ] Verify: education + certs render + responsive; build OK.
- [ ] Commit: `feat: add certifications to education + restyle`

### Task 10: Contact restyle + footer

**Files:**
- Modify: `src/components/Contact.jsx`, `src/components/Contact.css`

- [ ] Retune links + form + buttons to aurora glass; keep Web3Forms logic. Update footer year to 2026. Keep contact details (match resume).
- [ ] Verify: form renders/validates, links correct, themed + responsive; build OK.
- [ ] Commit: `style: aurora restyle for Contact + footer year`

### Task 11: Responsive + final polish pass

**Files:**
- Modify: any CSS needing breakpoint fixes; `src/components/ScrollToTop.{jsx,css}`, `src/components/Stamp.{jsx,css}` retune if off-theme.

- [ ] Walk widths 320/375/768/1024/1440; fix overflow, spacing, font scaling, tap targets. Retune ScrollToTop + Stamp to aurora. Confirm reduced-motion path calms all animations. Remove leftover legacy token aliases if fully migrated.
- [ ] Verify: `npm run build` clean; no console errors/warnings; all sections good at all widths.
- [ ] Commit: `polish: responsive pass + retune ScrollToTop/Stamp + cleanup`

## Self-Review

- **Spec coverage:** design system (T1), IO + cursor (T2), hero planet/orbit + copy + resume link (T3), particle perf (T4), navbar (T5), about/skills (T6), experience sync (T7), projects+RAG (T8), education+certs (T9), contact (T10), responsive/reduced-motion/cleanup (T11). All spec sections mapped.
- **Placeholders:** none; each task has concrete deliverables and exact values via Global Constraints.
- **Consistency:** token names reused verbatim across tasks; RAG URL consistent with spec.
