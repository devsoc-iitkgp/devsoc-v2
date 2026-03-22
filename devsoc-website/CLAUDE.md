@AGENTS.md

# DevSoc Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion v12 · MUI v7

## Project Purpose
Multi-page website for DevSoc — a university developer society. Dark branding-agency aesthetic based on `../hyperealist-template/`, with Framer Motion animations and a full set of pages.

## Stack Notes
- **Tailwind v4**: No `tailwind.config.ts`. All theme tokens defined in `globals.css` via `@theme {}` block.
- **Framer Motion v12**: `motion` components + `useInView`, `useScroll`, `useTransform` for scroll animations.
- **MUI v7**: Used only for social icons in footer (`@mui/icons-material`). No MUI ThemeProvider needed.
- **Fonts**: Google Fonts via `next/font/google` — Bebas Neue (headings/nav), Space Grotesk (body), Playfair Display (italic sub-headers).

## Design Tokens (defined in globals.css @theme)
| CSS var | Value | Tailwind class |
|---------|-------|----------------|
| `--color-ds-bg` | `#070707` | `bg-ds-bg` |
| `--color-ds-yellow` | `#edf738` | `text-ds-yellow` |
| `--color-ds-red` | `#dc2b46` | `text-ds-red` |
| `--color-ds-blue` | `#3e6dd9` | `text-ds-blue` |

## Font Variables (inline style usage)
| Alias | CSS var | Typeface |
|-------|---------|----------|
| `var(--font-byrd)` | `--font-bebas` | Bebas Neue — headings, nav, buttons |
| `var(--font-kobeweb)` | `--font-space-grotesk` | Space Grotesk — body copy |
| `var(--font-newforest)` | `--font-playfair` | Playfair Display italic — sub-headers |

## Key Files
- `src/app/globals.css` — Tailwind import + `@theme` tokens + `@keyframes` (rotate, shake)
- `src/app/layout.tsx` — Fonts + metadata
- `src/components/layout/Navbar.tsx` — Fixed navbar, hide-on-scroll, links to all pages, JOIN US → /join
- `src/components/ui/AnimatedSection.tsx` — Reusable Framer Motion `whileInView` wrapper (up/left/right)
- `src/components/ui/LineAnimation.tsx` — Expanding line animation (used in Testimonials)
- `src/components/ui/CustomCursor.tsx` — Custom cursor; reacts to `data-cursor-color` on parent divs
- `src/components/sections/Section5Contact.tsx` — Shared footer used on every page
- `src/data/projects.ts` — DevSoc project showcase data
- `src/data/testimonials.ts` — Member testimonial data (also used on /join)

## Pages & Routes

### `/` — Home (`src/app/page.tsx`)
Composed of 6 sections in order:
1. **Hero** — rotating flower image, staggered text entrance, shake arrow
2. **Section1Projects** — 2×2 project grid with stagger on scroll
3. **Section2Services** — services table + vector overlay, DevSoc mission (red theme)
4. **Section3Definition** — "dev-" + "society" etymology
5. **Section4Testimonials** — member quotes, expanding line animations (blue theme)
6. **Section5Contact** — scroll-rotate vector, footer nav, social icons

### `/events` — Events page · blue theme `#3e6dd9`
- Hero + inline SVG circuit/grid vector
- Upcoming events 2×2 card grid (type badge, date, tags, register button)
- Workshop series table + calendar SVG
- Past events list (date, title, attendee count)

### `/projects` — Projects page · yellow theme `#edf738`
- Hero + inline SVG code-brackets vector
- Stats strip (projects, contributors, repos, stars)
- All projects: expanded 2-col cards (image + detail side, GitHub link)
- Open source section with contribution heatmap SVG + CTA

### `/about` — About page · mixed theme
- Hero + inline SVG geometric mandala vector
- Mission statement with wave SVG + coloured keyword accents
- Values: 3-col cards (Build in Public / Learn by Doing / Grow Together)
- Leadership: 4-col grid with SVG avatar placeholders
- Technical Directors: table list with role, stack, profile CTA
- Join CTA with 2×2 stats grid

### `/blog` — Blog page · red theme `#dc2b46`
- Hero + inline SVG document/paper vector
- Featured post: full-width 2-col card with quotation SVG
- Category filter bar (ALL / TUTORIAL / DEVLOG / OPINION / CAREER / OPEN SOURCE) — live-filters grid
- Posts grid: 3-col with ghost watermark numbers, tags, author/date
- Newsletter CTA: email subscribe input + recent issues preview
- Write for us strip

### `/join` — Join Us page · yellow theme `#edf738`
- Hero + inline SVG network/community graph vector
- Benefits strip (4 stat counters)
- Tracks grid: PROJECT TEAM / EVENTS CREW / DESIGN TEAM / BLOG WRITER (2×2, each with perks checklist)
- Member stories: testimonial cards (data from `testimonials.ts`)
- Application form: sticky left heading + track selector, right side form fields (name, email, year, degree, GitHub, role, message) with submitted success state
- FAQ: accordion (Framer Motion height animation)

## Animation Rules
- `whileInView` with `viewport={{ once: true, amount: 0.1 }}` — trigger threshold matches original template
- CSS `@keyframes rotate` + `@keyframes shake` in globals.css (infinite, used in Hero)
- All scroll-entrance animations use `<AnimatedSection direction="up|left|right" delay={n} />`
- `useScroll` + `useTransform` for Section5 scroll-rotate vector
- Staggered grid reveals: `staggerVariants` + `cardVariants` pattern used on all card grids
- FAQ accordion uses `motion.div` with `animate={{ height: "auto" | 0 }}`
- Blog category filter re-animates grid on `key={activeCategory}` change

## Inline SVG Vectors (no external files)
Each sub-page defines its own decorative SVG component at the top of the file:
| Page | Component | Description |
|------|-----------|-------------|
| `/events` | `CircuitVector` | Grid with nodes, corner brackets, target rings |
| `/events` | `EventMarkVector` | Calendar grid with highlighted cell |
| `/projects` | `BracketsVector` | Code `< />` brackets with diagonal lines |
| `/projects` | `ContribVector` | Contribution heatmap (random opacity grid) |
| `/about` | `MandalaVector` | Geometric flower/mandala with petal ellipses |
| `/about` | `WaveVector` | Horizontal sine-wave decorative divider |
| `/blog` | `DocumentVector` | Paper doc with folded corner, text lines, pen icon |
| `/blog` | `QuoteVector` | Typographic quotation marks |
| `/join` | `NetworkVector` | Node-edge community graph |
| `/join` | `CheckIcon` | Tiny checkmark for perks lists |

## Layout Conventions
- Every page: `minWidth: "1440px"` outer wrapper, `margin: "0 40px"` inner, `padding: "5.56em"` sections
- Hero sections: `padding: "9em 5.56em 5em"` to clear fixed Navbar
- `data-cursor-color` attribute on section wrappers changes custom cursor colour
- Inline styles only (no Tailwind utility classes in components)
- Page colour themes: yellow (home/projects/join), red (blog), blue (events), mixed (about)
