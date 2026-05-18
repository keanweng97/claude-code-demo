# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a **ServiceNow Fluent SDK** application (scope `x_640383_asset_tra`) for tracking organizational assets. It uses `@servicenow/sdk` v4.6.1 to define ServiceNow platform artifacts (tables, business rules, UI pages) as TypeScript code that gets compiled and deployed to a ServiceNow instance.

## Commands

```bash
npm run build      # Compile and bundle the app (now-sdk build)
npm run deploy     # Deploy to connected ServiceNow instance (now-sdk install)
npm run transform  # Generate keys.ts from Now.ID references (now-sdk transform)
npm run types      # Fetch/update @servicenow/glide type definitions (now-sdk dependencies)
```

Run `npm run transform` after adding new `Now.ID['key']` references in `.now.ts` files — it regenerates `src/fluent/generated/keys.ts`.

## Architecture

The app has three distinct layers that map to ServiceNow platform concepts:

### `src/fluent/` — Platform artifact definitions (`.now.ts` files)
TypeScript files that use Fluent SDK APIs to declare ServiceNow artifacts. These are the source of truth for what gets deployed:
- `tables/` — Table schema definitions using `Table`, `StringColumn`, `ReferenceColumn`, etc. from `@servicenow/sdk/core`
- `business-rules/` — Business rule wiring using `BusinessRule({...})` — connects trigger conditions to server-side functions
- `ui-pages/` — UI page declarations using `UiPage({...})` — registers the React app as a ServiceNow page at a `.do` endpoint
- `index.now.ts` — Entry point that aggregates all Fluent definitions; add new `.now.ts` files here
- `generated/keys.ts` — Auto-generated ID registry for `Now.ID['...']` references; do not edit manually

### `src/server/` — Server-side business logic
Plain JavaScript/TypeScript executed server-side on ServiceNow. Imports from `@servicenow/glide` (e.g., `GlideRecord`, `GlideDateTime`, `gs`). Functions here are referenced by business rules in `src/fluent/business-rules/`.

### `src/client/` — React frontend
A React 18 SPA bundled by `now-sdk build` and embedded in the `UiPage` defined in `src/fluent/ui-pages/`. Communicates with ServiceNow via the Table REST API (`/api/now/table/...`).

Key detail: `AssetService` uses `window.g_ck` as the CSRF token (`X-UserToken` header) — this global is injected by ServiceNow when the page loads. All REST responses use `sysparm_display_value=all` so fields return `{ value, display_value }` objects; use `extractValue()` / `extractDisplayValue()` helpers on `AssetService` to unwrap them.

## ServiceNow-specific conventions

- The app scope prefix is `x_640383_asset_tra` — all table names and sys_ids use this prefix.
- `Now.ID['some-key']` in `.now.ts` files must be registered via `npm run transform` before building.
- Business rule scripts receive `(current, previous)` — these are `GlideRecord`-like objects, not plain JS objects.
- Asset tags are auto-generated (format: `<TYPE_PREFIX><4-digit-number>`, e.g., `COM0001`) if not provided; manual tags must match `/^[A-Z0-9]+$/`.
