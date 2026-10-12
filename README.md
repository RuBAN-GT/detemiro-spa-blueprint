# Detemiro SPA Blueprint

This is a toolkit and template collection for building SPAs with React, Modern.js, and other useful tools.

## Project contents

- [detemiro-general-app](./apps/general) - the main Modern.js application template.

## Dependency maintenance

- Keep all `@modern-js/*` packages on the same version and React aligned with React DOM and their types.
- Keep ESLint on major 9 while `eslint-plugin-import` does not support ESLint 10, and TypeScript on major 5 until the tooling supports a coordinated migration.
- The `node-gyp@npm:latest` resolution keeps native build tooling compatible with Node 22.15; revisit it when upgrading the minimum Node version.
- Modern.js currently pulls in `react-side-effect`, whose peer range excludes React 19. Verify the page title and rendering when upgrading rather than suppressing this warning.
- Verify updates with `yarn install --immutable` and `yarn check` (lint, typecheck, and production build). Run `yarn typecheck` for type checking only.

## Docker

Build and run the application with `docker compose up --build`; it is available at `http://localhost:8080`.
The build installs dependencies from the lockfile and produces a standalone Modern.js deployment, including its production dependencies. The runtime image uses that artifact without reinstalling packages.
