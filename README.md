# Sri Nakshatra School – single-page website (React + Vite)

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview    # preview the production build
```

Needs Node 18+. The only runtime dependencies are `react` and `react-dom`.

## Where things live

| What | File |
| --- | --- |
| **All text, links, contact details, documents, gallery/news data** | `src/content.js` |
| Colours, fonts, spacing, animations, breakpoints | `src/styles.css` (tokens at the top) |
| Sections | `src/components/*.jsx` |
| SEO, Open Graph, schema.org JSON-LD | `index.html` |

## Adding real photos (no code changes)

Drop files into `public/images/` using these names. `.webp` is preferred, `.jpg` / `.png` also work.
Until a file exists, that slot shows a designed gradient tile, never a broken image.

```
public/images/
  hero/campus.webp            full-screen hero background
  about/school.webp           "School with a Soul" portrait (4:5 works best)
  philosophy/students.webp    background of the quote section
  admissions/background.webp  background of the admissions banner
  leadership/correspondent.webp, leadership/principal.webp   square portraits
  campus/campus | classroom | activity | event | project .webp
  beyond/creativity | cultural | sports | practical | projects | celebrations | community .webp
  gallery/g1.webp … g12.webp  (categories are set in src/content.js)
  news/n1.webp … n6.webp
```

Tips: export at about 1600 px wide for large images (800 px for cards) and compress to WebP.

## Documents and fee structure

In `src/content.js`:

- `DOCUMENTS` – set each item's `url` (and `download: true` for direct files). Items with `url: null` show "Link to be added".
- `FEE_STRUCTURE_URL` – set to the fee document link. Until then the button sends visitors to the enquiry form.
- `LEADERS[0].message` – the Correspondent's message (the modal shows a "coming soon" note until it is filled).

## Contact form

The enquiry form opens the visitor's email app with a pre-filled message to the school's email address (no backend needed).
To receive submissions directly, point `onSubmit` in `src/components/Contact.jsx` at a form service.

## WhatsApp

Uses the school phone number. Set `whatsappEnabled: false` in `src/content.js` to hide every WhatsApp button.
