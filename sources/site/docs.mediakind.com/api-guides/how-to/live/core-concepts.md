# Source: https://docs.mediakind.com/api-guides/how-to/live/core-concepts

# Core concepts

The Live API is built around a small set of ideas that appear in every resource you create. If you’d rather start hands-on, the [live event walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough) covers the same concepts in the context of a working example, and links back here wherever more depth is useful.

## Guides

[Section titled “Guides”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/#guides)

[Resource types and lifecycle](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types)

### Resource types and lifecycle

The four resource types, billing models, the desired state model, and sites.

[Inputs](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs)

### Inputs

Connecting a live resource to a stream: `sourceName`, `contentName`, `flowName`, refiners, and transform pins.

[Outputs](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/outputs)

### Outputs

Where encoded output goes: destinations, internal outputs, and the archive asset.

[Templates](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates)

### Templates

How encoding templates connect to live resources, and the `configValues`/`configOverrides` model.

[Resource states](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states)

### Resource states

`spec.state` vs. `status.state`, and what the 13 reported values mean.

## What the Live API depends on

[Section titled “What the Live API depends on”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/#what-the-live-api-depends-on)

The Live API references two other APIs by name but doesn’t manage them directly:

- **Media API**: sources, content, destinations, and assets. See [Content, sources, and destinations](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources).
- **Templates API**: the encoding and composition templates referenced from your live resources. See [Build with the Templates API](https://docs.mediakind.com/api-guides/how-to/templates).

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/#what-comes-next)

- [Live event walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough): a complete end-to-end example.
- [Manage live channels and events](https://docs.mediakind.com/api-guides/how-to/live/manage-live): create and operate liveChannels and liveEvents.
- [Multiview](https://docs.mediakind.com/api-guides/how-to/live/multiview): compose multiple live inputs into a single output.