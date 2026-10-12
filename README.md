# Solstice Coffee Bar

A premium, editorial specialty-coffee website built with Next.js (App Router) and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build/verify before deploying:

```bash
npm run lint
npm run build
```

## Editing content

Everything editable lives in two files — no component code needs to change:

- `data/site.ts` — brand name, tagline, hero copy and hero image path, address, phone, opening hours, footer.
- `data/menu.ts` — menu tabs and products. Add items like `{ name: "Latte", price: "125 EGP" }` (description and image are optional).

## Adding photography

No images are included yet — every photo spot renders a neutral placeholder until you add one.

Image folders are set up at:

```
public/images/
  hero/
  coffee/
  food/
  atmosphere/
  location/
  menu/
```

To add a photo, drop the file into the matching folder and point the relevant `image` field at it, e.g. in `data/menu.ts`:

```ts
{
  name: "Flat White",
  description: "Double espresso with silky, tightly steamed milk.",
  price: "120 EGP",
  image: "/images/menu/flat-white.webp",
}
```

The hero currently uses an illustrated artwork at `public/images/hero/hero.svg`. To use a photo, put it in `public/images/hero/` and change `site.hero.image` in `data/site.ts`.

Page order: Hero → Menu → Visit → Footer. Menu tabs are empty until you add products to `data/menu.ts` (empty tabs show a "coming soon" message).

Prefer `.webp` or `.avif`, and export images close to their real display size to keep pages fast.

## Notes

- Menu tabs are a client-side interaction (no page navigation); only the active category's images are ever rendered/requested.
- Scroll-reveal animation respects `prefers-reduced-motion`.
- A `CafeOrCoffeeShop` structured-data block and Open Graph metadata are set up in `app/layout.tsx` — update the placeholder address/phone there via `data/site.ts` before going live.
- No online ordering, cart, accounts, or jobs sections are included by design.
