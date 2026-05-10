# Art Xperiences

> Cinematic gifting experiences for the moments that matter.

**Art Xperiences** is the central landing page for a growing suite of personalised, link-based gifting experiences built by [Cedric Arts](https://cedricarts.github.io) under [Horizon Synergy](https://cedricarts.github.io). Each experience lets you write a personal message, generate a private shareable link, and deliver something that actually feels like a gift — no apps, no payments, no accounts.

---

## Live Site

[Art Xperiences](https://cedricarts.github.io/art-xperiences/)

---

## Experiences

| Experience | Status | Link |
|---|---|---|
| 🎂 Birthday Experience | ✅ Live | [Birthday Xperience](https://cedricarts.github.io/birthday-experience/#/) |
| 🌸 Mother's Day — A Gift for Mom | ✅ Live | [Mother's Day Xperience]( https://cedricarts.github.io/mothers-day-xp/) |
| 👔 Father's Day — A Gift for Dad | 🔜 Coming June 2026 | — |

---

## What's on the Page

- **Hero** — brand statement and tagline
- **Experience cards** — one per occasion, with live/coming-soon status badges and 3D hover tilt
- **How it works** — three-step explainer
- **Stats bar** — platform highlights
- **Footer** — links to all experiences, ArtWear, and Cedric Arts

---

## Tech

| | |
|---|---|
| Stack | Plain HTML, CSS, JavaScript — zero frameworks |
| Fonts | Playfair Display + DM Sans (Google Fonts) |
| Effects | Canvas star field, CSS glassmorphism, JS 3D card tilt |
| Hosting | GitHub Pages |
| Dependencies | None |

---

## File Structure

```
art-xperiences/
└── index.html       # Entire site — self-contained single file
```

---

## Deploy

1. Create a GitHub repo (e.g. `art-xperiences`)
2. Add `index.html` to the root
3. Go to **Settings → Pages → Deploy from branch → main**
4. Your site is live at `https://yourusername.github.io/art-xperiences/`

---

## Adding a New Experience

When a new experience is ready:

1. Open `index.html`
2. Find the relevant card in the `.cards-grid` section
3. Change `<div class="xp-card disabled"` → `<a href="YOUR_URL" class="xp-card"`
4. Update the badge from `soon` → `live` and text from `Coming soon` → `● Live`
5. Remove the `.card-soon-overlay` div from that card
6. Add the experience to the footer links

---

## Related Projects

- [Birthday Experience](https://cedricarts.github.io/birthday-experience/#/)
- [Mother's Day Experience](#) *(add URL)*
- [ArtWear](https://ca-artwear.netlify.app/)
- [Cedric Arts / Horizon Synergy](https://cedricarts.github.io)

---

*Built by Cedric Arts · Horizon Synergy · Free forever.*
