# Frontend Code Style Guide

This guide defines the baseline frontend architecture rules for SPA projects in this blueprint.

The project follows Feature-Sliced Design (FSD) principles.
Reference documentation: https://feature-sliced.github.io/documentation/docs/get-started/overview

## Terms

- `layer` - a top-level architectural level.
- `slice` - a module inside a layer. In day-to-day project language, slices may also be called modules to avoid confusion with Redux Toolkit slices.
- `segment` - an internal part of a module, for example `ui`, `model`, or `api`.

## Layer Hierarchy

Modules from an upper layer may import only from modules located below them in the hierarchy.

Layer order from top to bottom:

1. `app`
2. `pages`
3. `widgets`
4. `features`
5. `entities`
6. `shared`
7. `external`

Rules:

- A module from `features` must not import from `widgets`.
- A module must not import from another module in the same layer.
- If importing from the same layer is unavoidable, add a short explanatory comment near the import.
- The lower the layer, the more careful the change should be. `shared` and `entities` usually affect the most code.

## Choosing a Module

Create modules by responsibility. A module may represent either a large business abstraction or a concrete UI block.

- Large abstraction example: `banner`, with rendering in `entities`, editing actions in `features`, and a complete editor in `widgets`.
- Small abstraction example: a landing page block or a standalone component placed into the layer that matches its responsibility.

The key rule: choose the layer by responsibility, not by file size.

## Choosing a Layer

### `pages`

Page-level views and layout components.
Each module in this layer represents a separate application page.
For a single-page application, having one module in `pages` is fine.

### `widgets`

Compositions of `entities` and `features`.
Use this layer for larger UI blocks that combine data display with user actions.

### `features`

Business logic and user actions.

Examples: forms, editors, canvases, controls, buttons, and other interactive flows.

### `entities`

Data retrieval and data display without user action handling.

Examples: cards, articles, previews, avatars, statuses, alerts, and readonly layout blocks.
Do not place buttons, forms, sliders, or action handlers here.

### `app`

Application root layer.

Use it for entry points, providers, contexts, routing, and application-level configuration.
The `app` layer does not contain business modules.

### `shared`

Reusable code that is not tied to a specific business entity or feature.

Examples: global styles, variables, generic utilities, and UI-kit components.
The `shared` layer does not contain business modules.

### `external`

External libraries and dependencies.
This is an abstract layer that may be used by any FSD layer.

## Segments

Segments inside a module are optional.

Use segments like `ui`, `model`, and `api` when the module is complex enough to benefit from internal structure.
For small modules, keep the structure simple.

## Public Module API

Every module exposes its public entities through `index.ts`.

- Components, hooks, utilities, requests, and helpers used only inside a module remain private.
- Importing from another module's internal files is forbidden.
- If an entity is needed outside the module, export it explicitly from the module's `index.ts`.

## Barrel Files

Use barrel files intentionally.

- A module-level `index.ts` is the public API boundary.
- Internal directories may have their own `index.ts` when it improves readability.
- Do not export implementation details just to make imports shorter.
