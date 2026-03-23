# UI Designer — Figma-to-Code Workflow for DevPev

## Figma File
- **URL:** `https://www.figma.com/design/9IAEKpYVABWY84DI1JIpsZ/devpev-website-design`
- **fileKey:** `9IAEKpYVABWY84DI1JIpsZ`

## Frame Reference
| Page | Node ID | Description |
|---|---|---|
| Home | `9:76` | Main Home (3918px tall — full implementation target) |
| Home alt | `14:203` | Alternate Home variant |
| Blog | `16:30` | Blog listing |
| Events | `23:3` | Events page with Upcoming/Past toggle |
| About | `24:87` | About page |
| Jobs | `24:144` | Jobs page (Positions/Freelance tabs) |
| Terminal | `5:12` | Terminal page |
| Components | `4:11` | Logo, social media icons, reusable elements |

## Figma-to-Code Workflow
1. Run `get_design_context` with the specific nodeId — not just `get_metadata`
2. Note: Figma output is React+Tailwind reference — adapt to this project's patterns
3. Check for existing components before building new ones
4. Map Figma hex colors → existing CSS variables or Tailwind tokens
5. Absolute positions in Figma → flex/grid layouts in code (do NOT use absolute positioning for layout)
6. Use `get_screenshot` to visually verify complex layouts

## DevPev Design Language

### Colors
| Figma/Usage | Code |
|---|---|
| Background | `bg-[#1f1f1f]` or `bg-background` |
| Surface/card | `bg-white/10` |
| Border | `border-white/20` |
| Primary text | `text-white` |
| Secondary text | `text-gray-300` |
| Muted text | `text-gray-500` |
| Accent | `text-indigo-400` / `bg-indigo-600` |

### Typography
- Headings: Geist Mono (`font-mono`) — gives the "developer terminal" aesthetic
- Body: Geist Sans (`font-sans`)
- Large hero text: `text-4xl sm:text-5xl font-bold`
- Section titles: `text-3xl font-bold`
- Body: `text-base text-gray-300`
- Small/meta: `text-sm text-gray-500`
- Terminal-style labels (e.g. `/vision`, `/VIBE`): `font-mono font-bold`

### Spacing & Layout
- Page content: `w-[95%] md:w-[80%] mx-auto` (matches existing Header)
- Content max width: ~1064px centered in 1440px canvas
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`

### Component Patterns
**Navbar:**
- Sticky, floating pill with glassmorphism
- `sticky top-0 z-50 pt-2 sm:pt-4 px-2 sm:px-4`
- Inner: `bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl`

**Cards:**
- `bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6`
- Hover: subtle `hover:bg-white/15 transition-colors`

**Buttons:**
- Primary CTA: `bg-indigo-600/80 hover:bg-indigo-700/80 text-white rounded-full px-5 py-2.5`
- Ghost/text: `text-gray-300 hover:text-white transition-colors`
- Underline link: `hover:underline text-gray-300 hover:text-white`

**Tags/Pills:**
- `bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-gray-300`

**Tabs (e.g. Upcoming/Past, Positions/Freelance):**
- Active: `bg-white/20 text-white`
- Inactive: `text-gray-400 hover:text-white`
- Container: `flex rounded-xl bg-white/5 border border-white/10 p-1`

**Stats bar (Home page):**
- Monospace font, small text, horizontal scroll on mobile
- Format: `key: value` (e.g. `members: 324`)

**Avatar row (Home page):**
- Overlapping circles (`-ml-3`), `rounded-full`, `border-2 border-[#1f1f1f]`

**Footer:**
- Same card style as content: `bg-white/5 rounded-2xl`
- Two columns: Resources + About
- Logo + tagline on left

## Visual Consistency Rules
- Maintain the dark glassmorphism aesthetic across all pages
- All rounded corners: `rounded-2xl` for containers, `rounded-xl` for smaller elements, `rounded-full` for pills
- Consistent blur: `backdrop-blur-xl` on all surfaces
- Never use pure white backgrounds
- Terminal/code aesthetic: monospace font for labels, `/command` style section headers
