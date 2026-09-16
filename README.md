# MediaKind documentation — local Mintlify evaluation

This project is a local migration of the MediaKind Astro/Starlight documentation. It is not deployed.

## Run locally

```sh
npm install
npm run dev -- --port 4331
```

Open http://localhost:4331. The CLI is pinned in `package-lock.json`.

```sh
npm run validate
npm run links
```

Mintlify's native search requires `npx mint login` in local development. Hosted search, the visual editor, reader authentication, and hosted MCP require a connected Mintlify project; this local preview does not prove those integrations.

## Content

- 391 authored pages retain their source wording, procedures, tables, screenshots, links, and product structure.
- Cards, Steps, Tabs, Accordions, notes and warnings use Mintlify components. Legacy Beam tooltip imports have been resolved to editable text.
- Seven original OpenAPI files live under `openapi/`. All are byte-for-byte copies of the pinned source files. Endpoint and schema pages reference an explicit spec to avoid cross-product ambiguity.
- Two OpenAPI overlay files change five Python-style named capture patterns to the equivalent ECMAScript syntax for Mintlify's renderer. The original JSON files are untouched.
- 259 endpoint pages and 684 schema pages use the original site’s route-generation rules. Device-local Channels API pages are copy-only.
- `/mcp/overview` contains the previous `/mcp` setup article because Mintlify reserves `/mcp` for its hosted MCP endpoint.
- Source images are preserved. Adjacent Markdown images use content-addressed paths under `_machine-assets/`.
- `docs.json` owns navigation. `style.css` and `custom.js` adapt the existing MediaKind design and connect homepage controls to native search.

## Deliberate evaluation boundaries

The existing Cloudflare MCP proxy, AI Search instances, custom chat widget, PDF/R2 release automation, authentication and deployment pipelines have not been replaced or deployed here. Harmonic downloads remain paused. There were no existing archive-manifest entries to move.

The contribution guides were migrated as existing content. Their Astro paths and build/editor instructions need a dedicated Mintlify authoring pass before this becomes the production contribution workflow.

The native Mintlify header, navigation, API renderer and controls differ from the Astro components. Branding and the homepage are closely matched; this is not a claim of pixel-identical behavior.

## Recovery and evidence

A verified backup of the entire previous experiment is alongside this project:

`../mintlify-test-local-before-migration-20260916-153730`

The previous prototype pages are also retained under `_migration/prototype/`. `_migration/` is excluded from both Mintlify and Git. It contains the migration report, verification evidence and local conversion tools. No plans or migration evidence are committed to Git.

The Astro/Starlight source project has not been edited by this migration. No deployments, commits or pushes were performed.
