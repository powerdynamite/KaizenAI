# KaizenAI brand guide (v1 proposal)

## Idea
**Kaizen (改善)** means continuous improvement. The brand should feel calm, precise and quietly confident: Japanese
minimalism meeting Microsoft-grade engineering. There is no hype and no robots.

**Tagline:** *Better every day, with Microsoft and AI.*

## Logo
Three ascending steps in a rounded square. Each step is an improvement, and the last one, in vermilion, is "today".
- Mark: `public/favicon.svg` (light steps on ink). An inverted version (ink steps on paper) is in `src/components/Logo.astro`.
- Wordmark: **Kaizen** in ink + **AI** in vermilion, set in Sora Bold.
- Keep clear space of at least the width of one step around the mark. Do not recolour, rotate or add effects.

## Colour
| Token | Hex | Use |
|---|---|---|
| Ink | `#0E1726` | Headings, dark sections, logo tile |
| Vermilion | `#E2492F` | Primary accent, CTAs, the "AI" in the wordmark (torii-gate red) |
| Accent (text) | `#C23A22` | Links, small red text and button backgrounds: passes WCAG AA 4.5:1 (dark mode: `#F2735C`) |
| Vermilion deep | `#A8301B` | Hover states |
| Paper | `#F7F5F0` | Page background (warm off-white, like washi paper) |
| Muted | `#5B6475` | Body secondary text |
| Line | `#E4E0D6` | Borders and dividers |
| Teal | `#1F7A72` | Secondary tags and success states, used sparingly |

Use Vermilion for shapes and large headlines only. For small text and buttons use the Accent (text) shade, which meets accessibility contrast. It should take up roughly 5–10% of any layout.

## Typography
- **Headings:** Sora (600/700), tight letter-spacing (-0.02em)
- **Body:** Inter (400/500/600)
- Both are free (SIL OFL) and self-hosted via Fontsource, so there are no third-party requests.

## Voice
- Plain English. Short sentences. Concrete outcomes over buzzwords.
- Honest about scope: we say what AI *won't* do as readily as what it will.
- Never claim certifications, client logos or case studies we do not have.

## Social image
`public/og-image.png` (1200×630) is used for link previews.
