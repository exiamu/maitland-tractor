# Decision Memory — Maitland Tractor Sales & Service

---

## KEEP: Iron/parchment palette over navy or green

**Decision:** Use iron near-black (`oklch(14% 0.022 42)`) and aged parchment (`oklch(96% 0.018 82)`) as the primary surface pair, with rust accent.

**Why:** Navy + white reads generic dealer/corporate. Green risks borrowing John Deere equity. The iron/parchment/rust combination is what heritage American brands (Woodford Reserve, Filson, Red Wing) use — it communicates earned credibility without owing anything to a tractor brand's color scheme. The rust accent family-matches the machines in the photos (Massey Ferguson red, Kubota orange-red) without being a literal copy of their brand color.

**Avoid:** `#587da8` (the old site's GoDaddy blue). It's forgettable and looks like a bank.

---

## KEEP: Oswald 700 for the hero headline, not Playfair

**Decision:** Use Oswald (condensed grotesque) at heavy weight for the tagline, Playfair Display for section headings.

**Why:** The tagline "It Ain't No Joke When Your Tractor's Broke" has working-man irreverence. Playfair Display would make it precious — too refined for the voice. Oswald at 700 reads like signage that's been on a wall since 1972. Section headings (Playfair) then provide the elegance contrast. The combination of both is more interesting than using either alone.

---

## KEEP: Split layout hero (text left, photo right), not full-bleed overlay

**Decision:** Hero is a CSS grid `55% / 45%` split — text on iron background left, tractor photo full-height right.

**Why:** Full-bleed hero with text overlay is the default for every restaurant site, every local business template. The split layout reads as editorial and intentional. The iron background on the text side gives the headline room to be huge without competing with the photo. The MF 231 "pops.png" at golden hour on the right side earns its space without a dark overlay washing it out.

---

## KEEP: Numbered service cards (01–04), no icons

**Decision:** Service cards display a number (`01`, `02`, etc.) in amber above the title. No icons or emoji.

**Why:** Icons at small sizes for abstract concepts (repair, parts) either look generic (tool wrench icon) or require custom illustration budget we don't have. Numbers in Oswald condensed with the amber color look intentional and premium. The rust top border on each card already provides visual structure.

---

## KEEP: No border-radius on containers

**Decision:** All cards, buttons, and section containers use `border-radius: 0` (default) or at most 2px.

**Why:** Soft rounded corners are a design signature of "modern web" and SaaS products. A 50-year-old tractor shop should feel like corners that have been worn by use, not corners smoothed by a Figma plugin. Sharp edges reinforce the rugged character.

---

## KEEP: Admin system via localStorage + data/tractors.json

**Decision:** Tractor inventory is seeded in `data/tractors.json`. Owner-added listings are stored in `localStorage`. The public tractors page reads localStorage first, then falls back to JSON. Admin form uses `<input type="file">` reading images as base64 data URLs — no server required.

**Why:** No backend, no hosting cost beyond static file serving. Owner can add new tractors from any browser on any device without touching code. Photos stay local to the browser. For production updates, the admin page will include a "Download updated inventory" button to export the full JSON for the developer to commit.

---

## KEEP: Admin inventory form supports multiple photo uploads per tractor

**Decision:** The admin "Add Tractor" form must allow uploading multiple photos, not just one. Each photo is read as a base64 data URL and stored in the `photos` array on the tractor object — same schema as seed inventory.

**Why:** The tractors page carousel already supports multiple photos per tractor (‹ › arrows cycle through `t.photos[]`). The admin form must match that — if Randy adds a new tractor, he should be able to attach all the photos he has, not just one. A single-photo-only form would silently create a worse experience for new listings vs. seed listings.

**How to implement:** The admin form uses `<input type="file" multiple accept="image/*">`. On submit, read all selected files via `FileReader`, collect the base64 results into an array, then store as `photos: [...]` on the tractor object in localStorage. Add a preview strip below the file input showing thumbnails of all selected photos.

---

## AVOID: Pricing displayed on the site without owner confirmation

**Decision:** All inventory cards show "Call for Price" — no dollar amounts until confirmed by Randy.

**Why:** Tractor prices fluctuate with condition, market, and negotiation. Publishing a price that's wrong is worse than no price. The phone CTA actually serves the business better anyway — it gets the customer talking to Randy, who can answer questions and close the sale.
