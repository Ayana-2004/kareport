# KarePort Landing Page — Next.js + Tailwind

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Folder structure

```
app/
  layout.js      → loads fonts once, wraps every page (like <head> + <body>)
  page.js         → the actual landing page — stacks all the sections
  globals.css     → pulls in Tailwind's base/components/utilities layers
components/
  Header.jsx
  Hero.jsx              → hero + the animated route SVG
  WhyKerala.jsx
  Features.jsx          → 6 feature cards, driven by a data array
  Journey.jsx            → 5-step timeline, driven by a data array
  Accreditations.jsx     → accreditation explainers + which apply per category
  Enquiry.jsx             → layout wrapper around the form
  EnquiryForm.jsx         → 'use client' — the only interactive piece
  Footer.jsx
tailwind.config.js        → KarePort's colors + fonts as reusable classes
```

## Editing content

- Feature cards → edit the `FEATURES` array at the top of `Features.jsx`
- Journey steps → edit the `STEPS` array at the top of `Journey.jsx`
- Colors/fonts → edit `tailwind.config.js`, then use classes like `bg-teal`,
  `text-gold`, `font-display` anywhere
- WhatsApp number → `WHATSAPP_NUMBER` constant in `EnquiryForm.jsx`

## Deploying

Push this to GitHub and import it on vercel.com (Next.js's own platform) —
it detects the framework automatically and needs no extra config.
