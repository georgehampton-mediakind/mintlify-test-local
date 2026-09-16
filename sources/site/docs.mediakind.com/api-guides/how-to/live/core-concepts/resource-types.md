# Source: https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types

# Resource types and lifecycle

## The four resource types

[Section titled “The four resource types”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types/#the-four-resource-types)

Every resource in the Live API is a live processing unit. You create one, define its inputs and outputs, assign a template that controls how it encodes, and then start it. There are four types, chosen by the combination of what you need and how you want to be billed.

| Resource | Billing | Use when |
| --- | --- | --- |
| `liveChannels` | Monthly flat fee, charged immediately on start | You need a 24/7 live feed that is always encoding |
| `liveEvents` | Per-minute | You need a live feed for a defined broadcast window |
| `staticMultiviewChannels` | Monthly flat fee, charged immediately on start | You need to compose multiple feeds into a multiview output, continuously |
| `staticMultiviewEvents` | Per-minute | You need to compose multiple feeds into a multiview output for a specific event |

All four share the same body structure, the same lifecycle, and the same endpoints pattern. Choose the matching `spec.transform.type` and configuration fields for your resource. Multiview can also reference a `multiviewComposing` config.

## The desired state model

[Section titled “The desired state model”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types/#the-desired-state-model)

Live API resources use a desired state model. The `spec.state` field tells the platform what you want the resource to be doing. Set it to `Stopped` to create and configure the resource without active processing. Set it to `Running` to begin startup.

This means you can create a resource in advance and verify its configuration before startup. A stopped resource can still take time to move through `Starting`. Stop a resource by patching `spec.state` back to `Stopped`, not by deleting it.

Create with `Stopped`. Start by patching to `Running`. Stop by patching back to `Stopped`. Delete when you no longer need the resource at all.

## Sites

[Section titled “Sites”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types/#sites)

Each live resource runs on a site. For a normal cloud workflow, omit `spec.siteName` so MK.IO uses the project’s cloud site. Set an explicit site only when you deliberately target that site. Do not copy `world` into cloud examples because it can route the resource toward a device site.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types/#what-comes-next)

- [Inputs](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs): connect a live resource to a stream.
- [Live event walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough): see these resource types created and started in a working example.