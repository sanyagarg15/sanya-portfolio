# Sanya Garg — Portfolio

A dark, violet-accented single-page developer portfolio built with **Vite + React + TypeScript** and **Framer Motion**. Inspired by the layout language of gazijarin.com (numbered sections, side rails, tabbed experience) with a few extras.

## Highlights

- **Preloader** — animated hexagon "S" monogram with a 0→100 counter, then a smooth fade into the site.
- **Draggable freeform canvas** — the *Things I've Built* section is an interactive board. Drag project cards anywhere, grab the empty grid to pan, and hit **reset** to snap everything back.
- **Fully responsive** — desktop side rails collapse, the nav becomes a slide-in mobile menu, and the experience tabs switch from vertical to horizontal on small screens.
- **Motion throughout** — staggered hero intro, scroll-reveal sections, animated tab switching.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Customize

- **Content** lives in `src/data/content.ts` — profile, jobs, projects, skills, awards.
- **Theme** — edit the CSS variables at the top of `src/index.css` (`--accent` is the violet).
- **Resume** — replace `public/Sanya_Garg_Resume.pdf`; the nav button links to it.
- **Social links** — set `github` / `linkedin` in `content.ts`.

## Deploy

Any static host works. Drag the `dist/` folder onto Netlify, or push to GitHub and enable Pages / connect Vercel.
