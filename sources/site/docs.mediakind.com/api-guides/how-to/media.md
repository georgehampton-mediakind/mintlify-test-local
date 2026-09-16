# Source: https://docs.mediakind.com/api-guides/how-to/media

# Build with the Media API

The Media API is the operational API for media processing and delivery in MK.IO. Use it when you need to register storage, create assets, run transforms and jobs, manage live events, publish content with streaming locators, or protect playback with streaming and content key policies.

## API overview

[Section titled “API overview”](https://docs.mediakind.com/api-guides/how-to/media/#api-overview)

| Detail | Value |
| --- | --- |
| Base path | `/api/v1/projects/{project_name}/media/` |
| Scope | Project |
| Reference | [Media API reference](https://docs.mediakind.com/api-reference/media-api) |

## How the core resources connect

[Section titled “How the core resources connect”](https://docs.mediakind.com/api-guides/how-to/media/#how-the-core-resources-connect)

The Media API becomes much easier to use once you understand the sequence:

1. A **storage** instance tells MK.IO how to reach cloud storage.
2. An **asset** points to content in that storage.
3. A **transform** defines processing instructions.
4. A **job** applies the transform to the asset and creates output assets.
5. A **streaming locator** publishes an asset by linking it to a **streaming policy**.
6. A **streaming endpoint** provides the delivery domain for the playback paths returned by `listPaths`.
7. A **content key policy** becomes part of the chain when you need DRM or token-based key delivery.

That resource model supports both VOD and live workflows. The difference is whether the asset is created from existing stored content or continuously written by a live output.

## Common workflow patterns

[Section titled “Common workflow patterns”](https://docs.mediakind.com/api-guides/how-to/media/#common-workflow-patterns)

### VOD workflow

[Section titled “VOD workflow”](https://docs.mediakind.com/api-guides/how-to/media/#vod-workflow)

1. [Register storage](https://docs.mediakind.com/api-guides/how-to/media/storage).
2. [Create a source asset](https://docs.mediakind.com/api-guides/how-to/media/assets).
3. [Run a transform job](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs).
4. [Publish with a streaming locator](https://docs.mediakind.com/api-guides/how-to/media/publishing).

### Media API live event

[Section titled “Media API live event”](https://docs.mediakind.com/api-guides/how-to/media/#media-api-live-event)

1. [Register storage](https://docs.mediakind.com/api-guides/how-to/media/storage).
2. [Create and start a live event](https://docs.mediakind.com/api-guides/how-to/media/live-streaming).
3. [Create a live output to archive the stream](https://docs.mediakind.com/api-guides/how-to/media/live-streaming).
4. [Publish with a streaming locator](https://docs.mediakind.com/api-guides/how-to/media/publishing).

### Live API template-based workflow

[Section titled “Live API template-based workflow”](https://docs.mediakind.com/api-guides/how-to/media/#live-api-template-based-workflow)

1. [Create a source and asset](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources).
2. [Create a config from a preset](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates).
3. [Create and start the Live API event](https://docs.mediakind.com/api-guides/how-to/live/walkthrough).
4. [Publish the output asset](https://docs.mediakind.com/api-guides/how-to/media/publishing).

### Protected playback

[Section titled “Protected playback”](https://docs.mediakind.com/api-guides/how-to/media/#protected-playback)

1. [Publish with a DRM-capable streaming policy](https://docs.mediakind.com/api-guides/how-to/media/publishing).
2. [Create a content key policy](https://docs.mediakind.com/api-guides/how-to/media/content-protection).
3. [Create a streaming locator referencing both](https://docs.mediakind.com/api-guides/how-to/media/publishing).

## Guides

[Section titled “Guides”](https://docs.mediakind.com/api-guides/how-to/media/#guides)

[Storage](https://docs.mediakind.com/api-guides/how-to/media/storage)

### Storage

Register Azure, AWS, or Google storage and manage the credentials MK.IO uses to access it.

[Assets](https://docs.mediakind.com/api-guides/how-to/media/assets)

### Assets

Create assets, inspect tracks, request file access information, organize content with labels, and apply filters.

[Download asset files](https://docs.mediakind.com/api-guides/how-to/media/download-asset-files)

### Download asset files

Retrieve one file from an asset by requesting access information, then using the returned access URL and JWT.

[Playback filters](https://docs.mediakind.com/api-guides/how-to/media/playback-filters)

### Playback filters

Create asset or account filters for time ranges, track selection, and startup quality, then apply them through locators.

[Transforms and jobs](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs)

### Transforms and jobs

Define reusable processing profiles and run them against assets.

[Live streaming](https://docs.mediakind.com/api-guides/how-to/media/live-streaming)

### Live streaming

Create Media API live events, connect encoders, archive with live outputs, and publish live playback.

[Live API walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough)

### Live API walkthrough

Build a template-based Live API event. Use this workflow for multiview and reusable encoding configs.

[Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing)

### Streaming and publishing

Create streaming endpoints, locators, and policies, then retrieve playback URLs.

[Content protection](https://docs.mediakind.com/api-guides/how-to/media/content-protection)

### Content protection

Add DRM and key-delivery configuration to published assets.

[Content, sources, and destinations](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources)

### Content, sources, and destinations

Create content identifiers, ingest sources, and egress destinations for use with the Live API.

## Workflow guide

[Section titled “Workflow guide”](https://docs.mediakind.com/api-guides/how-to/media/#workflow-guide)

[Automate a VOD pipeline](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline)

### Automate a VOD pipeline

Follow an end-to-end flow from source asset through transform job to published playback.