# KaizenAI brand guide

**Source of truth:** [`docs/brand/KaizenAI_Brand_Identity.pdf`](docs/brand/KaizenAI_Brand_Identity.pdf) covers the logo system,
mark explorations, colour and type, and applications. This file summarises it and adds the website's layout rules.

**Tagline:** *Better every day, with Microsoft and AI.* · **Motto:** 改善, continuous improvement.

## Logo (direction A · Steps)
Three ascending steps; the last one, in vermilion, is today.
- **Primary:** steps in an ink tile plus the wordmark (Sora 700, "Kaizen" in ink, "AI" in vermilion). Inverse: paper tile on ink.
- **Compact:** open steps without the tile, for nav bars. **Mono:** one colour, for print.
- **Scale:** 96 · 48 · 32 · 16 px; the minimum is 16 px. **Clear space:** at least one step-width on every side.
- Code: `src/components/Logo.astro` (`variant="tile" | "open"`, `inverse`). Static file: `public/favicon.svg`.
- 改善 is set from glyph outlines (`src/components/Kanji.astro`), so it renders without a Japanese font.
- The PDF also explores directions B (Ensō) and C (K monogram), but A is current.

## Colour
| Token | Hex | Use |
|---|---|---|
| Ink | `#0E1726` | Headings, dark sections, logo tile |
| Vermilion | `#E2492F` | Brand accent: shapes and large type only |
| Accent (text) | `#C23A22` | Links, buttons and small red text (passes WCAG AA) |
| Vermilion deep | `#A8301B` | Hover and pressed states |
| Paper | `#F7F5F0` | Page background (washi off-white) |
| Muted | `#5B6475` | Secondary body text |
| Line | `#E4E0D6` | Borders and dividers |
| Teal | `#1F7A72` | Tags and success states, used sparingly |

**Proportion:** Paper 55% · Ink 30% · Vermilion 5–10% · Line 6% · Teal ≤ 2%.

## Type
- **Sora:** headings, weights 600 and 700, letter-spacing −0.02em.
- **Inter:** body at 17 px / 1.65, weights 400, 500 and 600. Labels are Inter 600 in uppercase with 0.12em tracking.
- Both are self-hosted via Fontsource under the SIL OFL.

## Website layout rules
These rules keep the site from looking like a template:
- **Label column:** sections use a narrow left column for a small uppercase label (`01 Services`) and a wide right column for content.
- **Ruled rows, not cards:** lists are numbered rows separated by hairlines. There are no icon tiles and no drop shadows.
- **Buttons:** the primary button is accent red with an 8 px radius, and the secondary action is an underlined text link. The header has a single "Contact us" button.
- **Numbering:** `01 02 03` for sections and list items, and `Fig. n.` for screenshot captions.
- **One dark (ink) section per page at most.**

## Voice
Plain English, honest scope, no hype about what AI can do. Never claim certifications, client logos or case studies we do not have.

## Applications
Link preview `public/og-image.png` (1200×630, the ink version from the PDF), browser tab, avatar and business card. See page 4 of the PDF.
