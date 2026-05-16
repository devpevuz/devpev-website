# DevPev Website — TODO

## Event Tracks

### 1. Add `track` field to Event type
- File: `src/lib/events.ts`
- Add `track: "web3" | "dev" | "research"` to `Event` type
- Tag all existing events with their track

### 2. Track badge on event card
- File: `src/app/events/page.tsx`
- Small colored tag in card: `[WEB3]`, `[DEV]`, `[RESEARCH]`
- Visible at a glance on every card

### 3. Track filter bar on events page
- File: `src/app/events/page.tsx`
- Pills below `upcoming | past` tabs: `All · Web3 · Dev · Research`
- Client-side filter, no reload
- **Wait until 5+ events per track before adding** — otherwise mostly empty states

### 4. Track cards section on landing page (Option A — recommended)
- File: `src/app/page.tsx`
- Three cards: Web3 ⛓, Dev 💻, Research 📖
- Each: icon + name + short description + event count badge
- Links to `/events?track=web3` etc.
- Goes in hero/pathways section — explains what DevPev covers to new visitors

### 5. Upcoming events teaser strip on landing page (Option B)
- File: `src/app/page.tsx`
- Show next 2–3 upcoming events with track badge inline
- Format: `[WEB3] Jun 15 · Meetup #22 · Smart Contract Auditing →`
- Place lower on page, below track cards
- Auto-updates as events are added — good for returning visitors

---

## Mobile Polish
- [ ] Projects page — check mobile layout
- [ ] Blog page — check mobile layout
- [ ] About page — check mobile layout

---

## Other
<!-- add more here as ideas come up -->
