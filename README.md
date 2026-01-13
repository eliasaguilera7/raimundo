# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Abg. Raimundo Fernández – Deploy to GitHub Pages (Vite + React)

Production URL:
- https://eliasaguilera7.github.io/raimundo/

## Prerequisites
- Node.js 18+ and npm
- Git remote set to: https://github.com/eliasaguilera7/raimundo
- gh-pages already in devDependencies

## 1) Install dependencies
```bash
npm install
```

## 2) Verify config (already set)
- vite.config.js
  - base: '/raimundo/'
- package.json
  - "homepage": "https://eliasaguilera7.github.io/raimundo"
  - scripts include: dev, build, preview, deploy

## 3) Build and deploy
```bash
npm run build
npm run deploy
```

On first deploy, if the site doesn’t appear:
- In GitHub repo: Settings → Pages → Select “Deploy from a branch”
- Branch: gh-pages, Folder: /(root)

## 4) Local development
```bash
npm run dev
```
Preview production build locally:
```bash
npm run preview
```

## Notes
- Cache busting is enabled; images and favicon update on each build. If you still see old assets, hard refresh (Ctrl/Cmd+Shift+R).
- Assets use import.meta.env.BASE_URL and base '/raimundo/' to work under the repo subpath.

## Troubleshooting
- Blank page or broken assets: ensure base is '/raimundo/' and homepage matches https://eliasaguilera7.github.io/raimundo.
- SPA routing 404s (rare on this single-page): if needed, copy index.html to 404.html before deploy:
  - macOS/Linux: `npm run build && cp dist/index.html dist/404.html && npx gh-pages -d dist`
