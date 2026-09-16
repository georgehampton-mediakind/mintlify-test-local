# MediaKind Mintlify evaluation

This is the local Mintlify migration of docs.mediakind.com. The source Astro project is separate. Do not deploy, commit or push without an explicit user request. Do not change Harmonic source systems or resume migration downloads as part of work on this prototype.

## Preserve the content contract

- Never invent product behavior, API fields, UI labels, defaults or required parameters. Preserve exact source terminology and procedure order.
- MK.IO is the cloud platform; MK.IO Beam is the on-premises platform. Keep their APIs and vocabulary separate.
- Use `docs-contribute/style-guide.mdx` for editorial conventions. The other migrated contributor guides contain Astro-specific workflow instructions and require adaptation before use as Mintlify instructions.
- Keep existing page routes stable. The sole intentional article route change is `/mcp` to `/mcp/overview`, because Mintlify reserves `/mcp`.
- Preserve warnings, notes, images and legacy heading anchors. Do not silently remove a migration exception.
- Prefer ordinary Markdown and supported Mintlify components. Do not restore runtime tooltip data imports.

## Files and validation

- `docs.json`: navigation, theme, branding and redirects.
- `style.css`: MediaKind shell and homepage styling.
- `custom.js`: native search integration for homepage controls.
- `openapi/`: pinned source specifications. Preserve source JSON; use explicit, reviewed OpenAPI overlays for renderer compatibility.
- Endpoint pages must use an explicit spec path in `openapi` frontmatter. Schema pages must use an explicit path in `openapi-schema` frontmatter.
- Device-local Channels API pages use `playground: simple`; do not enable hosted requests to customer devices.
- `npm run validate` and `npm run links` check the site. Preview with `npm run dev`.
- `_migration/` contains local evidence and the previous prototype, and is excluded from Git and Mintlify. Do not publish it.

The existing Cloudflare search/MCP backend, Okta integration, archive automation and hosted Mintlify editor have not been configured by this local migration. Do not represent them as completed or infer permissions from this file.
