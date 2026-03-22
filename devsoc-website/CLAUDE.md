@AGENTS.md

# DevSoc Website

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion v12 · MUI v7

## Project Purpose
Landing page for DevSoc — a university developer society. Visually identical to `../hyperealist-template/` (dark branding agency theme) with Framer Motion animations added.

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

## Key Files
- `src/app/globals.css` — Tailwind import + `@theme` tokens + `@keyframes` (rotate, shake)
- `src/app/layout.tsx` — Fonts + metadata
- `src/app/page.tsx` — Composes all sections (Server Component)
- `src/components/ui/AnimatedSection.tsx` — Reusable Framer Motion `whileInView` wrapper
- `src/components/ui/LineAnimation.tsx` — Expanding line animation (Section 4)
- `src/data/projects.ts` — DevSoc project showcase data
- `src/data/testimonials.ts` — Member testimonial data

## Sections (in order)
1. **Hero** — rotating flower image, staggered text entrance, shake arrow
2. **Section1Projects** — 2×2 project grid with stagger on scroll
3. **Section2Services** — services table + vector overlay, DevSoc mission
4. **Section3Definition** — "dev-" + "society" etymology
5. **Section4Testimonials** — member quotes, expanding line animations
6. **Section5Contact** — scroll-rotate vector, footer nav, social icons

## Animation Rules
- `whileInView` with `viewport={{ once: true, amount: 0.1 }}` — same threshold as template's IntersectionObserver
- CSS `@keyframes rotate` + `@keyframes shake` kept in globals.css (infinite animations)
- All other scroll animations use `<AnimatedSection>` wrapper
- `useScroll` + `useTransform` for Section5 scroll-rotate vector
