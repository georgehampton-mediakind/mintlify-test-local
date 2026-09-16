# Source: https://docs.mediakind.com/api-guides/getting-started/which-api

# Which API to use

Choose an MK.IO API based on the resource you need to manage, not the kind of code you are writing. The cloud APIs share a base URL and bearer authentication, but they own different parts of the platform and are often combined in a single automation flow.

## Start with the workflow

[Section titled “Start with the workflow”](https://docs.mediakind.com/api-guides/getting-started/which-api/#start-with-the-workflow)

Use this table for a quick answer:

| To automate… | Use the… |
| :-- | :-- |
| Reusable content, sources, destinations, storage registration, assets, transforms, jobs, Media API live events and live outputs, streaming locators, streaming endpoints, streaming policies, or content key policies | [Media API](https://docs.mediakind.com/api-reference/media-api) |
| Template-based live channels, live events, and static multiview resources | [Live API](https://docs.mediakind.com/api-reference/live-api) |
| Discover encoding presets, create reusable configs, and manage config versions | [Templates API](https://docs.mediakind.com/api-reference/templates-api) |
| Channels running on a Beam device | [Channels API](https://docs.mediakind.com/api-reference/channels-api) |
| Organizations, projects, users, teams, tokens, payment methods, usage reports, metrics, or webhook rules | [Management API](https://docs.mediakind.com/api-reference/management-api) |
| Beam device registration, backups, restores, software rollouts, or support packages | [Fleets API](https://docs.mediakind.com/api-reference/fleets-api) |
| Networks and sites for Beam deployments | [Infrastructure API](https://docs.mediakind.com/api-reference/infrastructure-api) |

## How the APIs fit together

[Section titled “How the APIs fit together”](https://docs.mediakind.com/api-guides/getting-started/which-api/#how-the-apis-fit-together)

The APIs are separate, but the workflows connect:

1. Use the **Management API** to create a project and assign billing.
2. Use the **Media API** to process or publish content inside that project.
3. Use the **Management API** again to add webhook rules, so your integration reacts to events instead of polling.
4. Use the **Infrastructure API** to define sites and networks for a Beam deployment.
5. Use the **Fleets API** to onboard and operate the Beam devices in those sites.

A complete platform integration typically uses the Management API for setup, then the Media, Fleets, or Infrastructure API for day-to-day operations.

## Media API

[Section titled “Media API”](https://docs.mediakind.com/api-guides/getting-started/which-api/#media-api)

The Media API owns media processing and delivery, and it is where most developers start. Reach for it to ingest, encode, package, protect, or stream content. Its resources include storage instances and credentials, assets and asset filters, transforms and jobs, live events and live outputs, streaming locators and endpoints, and streaming policies and content key policies.

## Live and Templates APIs

[Section titled “Live and Templates APIs”](https://docs.mediakind.com/api-guides/getting-started/which-api/#live-and-templates-apis)

Use the Live API for the resources shown in the portal’s **Live** view: live channels, live events, and static multiview channels and events. The Templates API supplies the encoding and composition configs they reference. The Media API supplies their sources, content, destinations, recording assets, and playback resources.

Start with the [Live event walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough) for one camera or the [Multiview walkthrough](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough) for a composed output. Existing integrations using `/media/liveEvents` and `/media/liveEvents/{event_name}/liveOutputs` use the separate [Media live-streaming workflow](https://docs.mediakind.com/api-guides/how-to/media/live-streaming), shown under **Live Events** in the portal.

## Channels API

[Section titled “Channels API”](https://docs.mediakind.com/api-guides/getting-started/which-api/#channels-api)

The Channels API configures channels on an MK.IO Beam device. It is served by the device through `/ui/connectors/channels-api/latest`, rather than the cloud Live API. Use [Build with the Channels API](https://docs.mediakind.com/api-guides/how-to/channels) for its device connection and authentication requirements.

## Management API

[Section titled “Management API”](https://docs.mediakind.com/api-guides/getting-started/which-api/#management-api)

The Management API owns organization and project administration: access, billing, and account-level configuration. Reach for it to provision an environment, assign permissions, issue tokens, or configure event delivery. Its resources include organizations and projects, users and invites, teams, roles and scopes, personal and organization tokens, payment methods, usage and metrics, and webhook rules.

## Fleets API

[Section titled “Fleets API”](https://docs.mediakind.com/api-guides/getting-started/which-api/#fleets-api)

The Fleets API is the project-scoped operational API for MK.IO Beam, the on-premises product. Reach for it to register devices, protect device state with backups, restore configurations, manage software versions, and collect support packages. Its resources include device inventory and registration, backups and restores, software selection and preload behaviour, and support packages and diagnostics.

## Infrastructure API

[Section titled “Infrastructure API”](https://docs.mediakind.com/api-guides/getting-started/which-api/#infrastructure-api)

The Infrastructure API defines where Beam devices live and which networks are available to them, so it is usually used before or alongside the Fleets API. Its resources include networks, sites, routes from sites to networks, and label-driven filtering of network and site resources.

## Common combinations

[Section titled “Common combinations”](https://docs.mediakind.com/api-guides/getting-started/which-api/#common-combinations)

| Workflow | APIs involved |
| :-- | :-- |
| Build a template-based live or multiview stream | Media API for sources and publishing, Templates API for configs, Live API for processing |
| Create a project, assign billing, then start a VOD workflow | Management API, then Media API |
| Register a webhook for job-completion events | Management API and Media API |
| Define sites and networks, then register Beam devices to them | Infrastructure API, then Fleets API |
| Audit token usage and restrict automation access | Management API |

## Next step

[Section titled “Next step”](https://docs.mediakind.com/api-guides/getting-started/which-api/#next-step)

Once you know which API owns your workflow, make one authenticated request before you build anything larger. [Your first API call](https://docs.mediakind.com/api-guides/getting-started/first-api-call) is the quickest way to confirm that your base URL, token, and project access are correct.