# D1 Skincare Landing Page

Simple static landing page built with HTML + SCSS (compiled with Sass).

## Tech Stack

- HTML5
- SCSS (Dart Sass)
- Vanilla JavaScript

## Project Structure

```text
.
├─ index.html
├─ package.json
├─ assets/
│  ├─ scss/
│  │  └─ style.scss
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ main.js
│  ├─ images/
│  └─ fonts/
└─ .gitignore
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Build CSS once:

```bash
npm run sass
```

3. Run Sass in watch mode while developing:

```bash
npm run sass:watch
```

4. Open `index.html` in your browser.

## NPM Scripts

- `npm run sass` → compile `assets/scss/style.scss` to `assets/css/style.css`
- `npm run sass:watch` → auto-compile on SCSS changes

## SCSS Workflow

- Edit styles in `assets/scss/style.scss`
- Keep `npm run sass:watch` running during development
- Commit both SCSS and generated CSS so static hosting works without a build step

## Git Workflow

```bash
git add .
git commit -m "Describe your update"
git push
```

## Notes

- `node_modules/` is ignored via `.gitignore`
- Source maps under `assets/css/*.map` are ignored
