# ELC Website

A React + Tailwind CSS landing page for Experiential Learning Corporation (ELC).

## Project structure

- `index.html` — Vite entry point with page metadata and font imports
- `package.json` — project scripts and dependencies
- `tailwind.config.js` — Tailwind CSS configuration and custom brand colors
- `postcss.config.js` — Tailwind/PostCSS integration
- `src/`
  - `main.jsx` — React application bootstrap
  - `App.jsx` — page composition and layout
  - `index.css` — Tailwind base imports and global page styles
  - `components/` — reusable UI components
    - `Navbar.jsx`
    - `Hero.jsx`
    - `About.jsx`
    - `Departments.jsx`
    - `Events.jsx`
    - `Sponsorship.jsx`
    - `Impact.jsx`
    - `Join.jsx`
    - `Team.jsx`
    - `Contact.jsx`
    - `Footer.jsx`

## Run locally

1. Open a terminal in `d:\Elcwebsite`
2. Run `npm install`
3. Run `npm run dev`
4. Open the local Vite URL shown in the terminal

## Build for production

- `npm run build`
- `npm run preview`

## Vercel deployment

This project is ready for Vercel. Push to a Git repo and deploy the root folder as a static site.

If you want a custom Vercel configuration, use `vercel.json` already included.
