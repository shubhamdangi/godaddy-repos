# GoDaddy Repositories 

A small React application that explores public repositories owned by the [GoDaddy](https://github.com/godaddy) on GitHub.

## Getting started

### Clone and Install
```bash
git clone https://github.com/<your-username>/godaddy-repos.git
cd godaddy-repos
```

```bash
npm install
npm run dev
```

The app runs on [Vite](https://vitejs.dev/) and will start a development server on `http://localhost:5173`.

Run the automated tests with:

```bash
npm test
```

## Implementation notes

- **React + Vite** — Vite offers a fast feedback loop, minimal configuration, and first-class ES modules support.
- **React Router** — keeps the list page and the details page focused, with clean URLs for bookmarking.
- **Testing Library + Vitest** — allows writing behaviour-driven tests that exercise the UI from a user's perspective.

## Simplifications

- Displayed only primary language.
- Minimal styling, no UI libraries.
- Focused on clarity and functionality.
