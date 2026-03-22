# DevSoc Website — Implementation Plan

## Project Overview
Convert `hyperealist-template` (React CRA) → Next.js 14 App Router project at `./devsoc-website/`
Same visual design as template, DevSoc-branded content, Framer Motion animations added.

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS (replaces vanilla CSS)
- **Animations:** Framer Motion (replaces IntersectionObserver + CSS keyframes)
- **UI Icons:** MUI v5 (retained from template)
- **Fonts:** Byrd, Kobeweb, Newforest (custom, via `next/font/local`)

## Design Tokens (from template)
| Token | Value | Usage |
|-------|-------|-------|
| `ds-bg` | `#070707` | Background |
| `ds-yellow` | `#edf738` | Primary accent (nav, buttons, hero) |
| `ds-red` | `#dc2b46` | Section 2 accent |
| `ds-blue` | `#3e6dd9` | Section 4 testimonials |
| `font-byrd` | Byrd | Headings, buttons, nav links |
| `font-kobeweb` | Kobeweb | Body default |
| `font-newforest` | Newforest | Italic section sub-headers |

## File Structure
```
devsoc-website/
  src/
    app/
      fonts/                    # Byrd, Kobeweb, Newforest font files
      globals.css               # Tailwind + rotate/shake keyframes
      layout.tsx                # Fonts, metadata, MuiProvider
      page.tsx                  # Composes all sections
    components/
      providers/
        MuiProvider.tsx         # "use client" ThemeProvider
      layout/
        Navbar.tsx              # Scroll hide/show navbar
      sections/
        Hero.tsx
        Section1Projects.tsx
        Section2Services.tsx
        Section3Definition.tsx
        Section4Testimonials.tsx
        Section5Contact.tsx
      ui/
        AnimatedSection.tsx     # Reusable Framer Motion scroll wrapper
        LineAnimation.tsx       # Expanding line animation
    data/
      projects.ts               # DevSoc project showcase
      testimonials.ts           # Member testimonials
      services.ts               # DevSoc programs table
    types/
      index.ts                  # TypeScript interfaces
  public/
    assets/                     # Copied from template
```

## DevSoc Content Mapping
| Section | Template Content | DevSoc Content |
|---------|-----------------|----------------|
| Hero | "act together / branding agency" | "code together / developer society" |
| Section1 | Client projects (NIIR, OMADAYA, etc.) | DevSoc projects (UniTrack, HackPortal, DevSoc App, OpenLMS) |
| Section2 | Brand strategy services | Developer workshops, hackathons, mentorship |
| Section3 | "Hyperealist" etymology | "DevSoc" etymology (dev- + society) |
| Section4 | Client testimonials | Member testimonials |
| Section5 | Agency contact | Join DevSoc / discord.gg/devsoc |

## Animation Strategy
| Template Animation | Replaced With |
|-------------------|---------------|
| CSS `slideUp` + IntersectionObserver | Framer Motion `whileInView` + `AnimatedSection` |
| CSS `fadeIn` delays | Framer Motion `initial/animate` with `transition.delay` |
| CSS `rotate` (infinite) | Keep as CSS via Tailwind arbitrary class |
| CSS `shake` (arrow) | Keep as CSS via Tailwind arbitrary class |
| Scroll-based Section5 rotation | Framer Motion `useScroll` + `useTransform` |
| Section4 line-animation | Framer Motion `motion.div whileInView={{ width: '100%' }}` |

## Enhancements Over Template
1. **Stagger grid items** in Section1 (projects enter with 150ms stagger)
2. **Spring navbar** animation (Framer Motion spring instead of CSS visibility toggle)
3. **Testimonial stagger** in Section4
4. **Hero entrance sequence** precisely matching original CSS delay timing

## Implementation Order
1. `npx create-next-app@latest devsoc-website`
2. Install Framer Motion, MUI, Emotion
3. Copy all assets from `../hyperealist-template/public/` → `public/`
4. Copy font files → `src/app/fonts/`
5. Configure `tailwind.config.ts` with design tokens
6. Write `globals.css` (Tailwind + keyframes)
7. Write `layout.tsx` + `MuiProvider.tsx`
8. Write `AnimatedSection.tsx` + `LineAnimation.tsx`
9. Write `Navbar.tsx`
10. Write `Hero.tsx`
11. Write data files (`projects.ts`, `testimonials.ts`)
12. Write `Section1Projects.tsx` → `Section5Contact.tsx`
13. Write `page.tsx` to compose all sections

## Notes
- All section components need `"use client"` (Framer Motion is browser-only)
- `page.tsx` stays as Server Component for SEO
- `next/image` replaces all `<img>` tags (add `fill` prop for flexible containers)
- MUI Emotion SSR setup required to avoid flash of unstyled content
- Min-width 1440px (desktop-first, same as template)
