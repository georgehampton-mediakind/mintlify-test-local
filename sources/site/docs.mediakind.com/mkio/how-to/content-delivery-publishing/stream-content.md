# Source: https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content

# Publish content for streaming

To deliver content to viewers, MK.IO uses two infrastructure components that must both be in place before playback is possible:

- **Streaming Endpoint**: The delivery server that handles viewer requests and serves your content from storage. Think of it as the origin that your CDN or media players connect to.
- **Streaming Locator**: Attached to a specific asset, this generates the playback URLs and controls which streaming protocols and protections are applied.

Both must exist before anyone can watch the content. You typically create one endpoint per environment, such as `production` and `staging`, and reuse it across many assets. A locator belongs to one asset, while any streaming endpoint in the same subscription can serve its paths.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#prerequisites)

- At least one asset with content ready to stream (see [Video on demand workflows](https://docs.mediakind.com/mkio/getting-started/video-on-demand-vod-workflows) or [Live streaming workflows](https://docs.mediakind.com/mkio/getting-started/live-streaming-workflows))
- Cloud storage connected to your project (see [Connect cloud storage](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage))

## Create a streaming endpoint

[Section titled “Create a streaming endpoint”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#create-a-streaming-endpoint)

A streaming endpoint is the network infrastructure that serves content from your storage to viewers. Each endpoint has a hostname that becomes part of every playback URL for assets assigned to it.

You can create multiple endpoints, for example separate endpoints for live and VOD content. Each asset is assigned to one endpoint at a time, though you can reassign it.

**Endpoint types:**

| Type | Capacity | Best for |
| --- | --- | --- |
| Shared | Up to 600 Mbps on shared infrastructure | Development, testing, and workloads within the shared capacity |
| Dedicated | 200 Mbps of guaranteed bandwidth per unit | Production workloads that require dedicated, scalable capacity |
| CDN | Backed by dedicated endpoint capacity | Production delivery that benefits from integrated edge caching |

### Open Streaming Endpoints

[Section titled “Open Streaming Endpoints”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#open-streaming-endpoints)

Go to **Streaming Endpoints** in the left navigation and click **\+ Create Streaming Endpoint**.

### Configure the endpoint

[Section titled “Configure the endpoint”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#configure-the-endpoint)

- **Name**: A unique identifier using lowercase letters, numbers, and hyphens (for example, `production`). This becomes part of your playback URLs and is visible to viewers, so keep it descriptive.
- **Description**: Optional. Useful if you run multiple endpoints for different content types.
- **Type**: Shared, Dedicated, or CDN based on your scale requirements. You can switch between Shared and Dedicated at any time.
- **Scale units** (Dedicated only): Start at 1 and increase as your audience grows.
- **CDN**: Enable integrated CDN delivery. See [Streaming endpoints](https://docs.mediakind.com/mkio/understanding/core-concepts/endpoints#cdn-behavior-and-constraints) for cache behavior and constraints.
- **Auto-start**: Enable to activate the endpoint immediately after creation.
- **Tags**: Optional labels for resource grouping and cost tracking.

### Activate the endpoint

[Section titled “Activate the endpoint”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#activate-the-endpoint)

Click **Create**. If you did not enable auto-start, select your endpoint from the list and click **Start**.

A running streaming endpoint incurs costs even when no content is actively being played. Stop endpoints when they are no longer needed. See [MK.IO pricing](https://mediakind.com/mkio/pricing/) for details.

## Create a streaming locator

[Section titled “Create a streaming locator”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#create-a-streaming-locator)

A streaming locator is attached to one asset and generates the playback URLs for it. It controls:

- **Which streaming protocols are available** - Clear streaming, adaptive bitrate streaming, or DRM-protected
- **Access window**: Optional start and end dates that restrict when content can be viewed
- **Output modification**: Optional filters that trim or adjust the manifest

Every asset needs at least one locator before it can be played. You can create multiple locators on the same asset, for example one for public access and one for DRM-protected access. Locator names must be unique within your project.

### Open the asset

[Section titled “Open the asset”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#open-the-asset)

Go to **Assets** and click the name of the asset you want to publish.

### Add a streaming locator

[Section titled “Add a streaming locator”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#add-a-streaming-locator)

Scroll to the **Streaming Locators** section and click **\+ Add Streaming Locator**.

You can also open the **Streaming locator** dropdown at the top of the asset page and choose **\+ Add Streaming Locator**.

### Configure the locator

[Section titled “Configure the locator”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#configure-the-locator)

- **Name**: A unique identifier for this locator (for example, `public-access`). This appears in the playback URL path.

- **Streaming policy**: Controls which protocols and protections apply. Common options:

 | Policy | Use when |
 | --- | --- |
 | `Predefined_ClearStreamingOnly` | Adaptive streaming (HLS/DASH) with no download or DRM |
 | `Predefined_DownloadAndClearStreaming` | Both streaming and direct file download, no DRM |
 | `Predefined_MultiDrmCencStreaming` | HLS/DASH protected with Widevine and PlayReady |

 For protected content, you also need a content key policy. See [Content protection](https://docs.mediakind.com/mkio/understanding/core-concepts/content-protection).

- **Content key policy**: Required when using a DRM streaming policy. Leave empty for clear streaming.

- **Start time** (optional): The earliest date and time the content is accessible. Leave empty for immediate access.

- **Expiration time** (optional): The date and time the locator expires and content becomes unavailable. Leave empty for content that does not expire.

- **Asset filter** (optional): Limits or modifies the output for this asset specifically. See [Create an asset filter](https://docs.mediakind.com/mkio/how-to/content-management/create-an-asset-filter).

- **Account filter** (optional): An account-level filter applied across all assets on this locator.

- **Streaming locator ID** (optional): A custom UUID. MK.IO auto-generates one if left empty.

### Create the locator

[Section titled “Create the locator”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#create-the-locator)

Click **Add**. The locator appears in the Streaming Locators list with its generated ID.

## Apply the endpoint and locator to your asset

[Section titled “Apply the endpoint and locator to your asset”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#apply-the-endpoint-and-locator-to-your-asset)

With both components created, link them to the asset to generate the playback URLs.

### Select a streaming endpoint

[Section titled “Select a streaming endpoint”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#select-a-streaming-endpoint)

On the asset page, open the **Streaming Endpoint** dropdown and select your running endpoint. Only running endpoints appear in this list.

### Select a streaming locator

[Section titled “Select a streaming locator”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#select-a-streaming-locator)

Open the **Streaming locator** dropdown and select the locator you created.

### Apply

[Section titled “Apply”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#apply)

Click **Apply**. MK.IO generates the playback URLs and displays them at the top of the asset page.

Your asset’s HLS and DASH playback URLs are now available. You can copy them for use in players, embed them in your application, or test them directly in the built-in MKPlayer on the asset page.

**Playback URL format:**

```
https://<endpoint-name>.<region>.streaming.mediakind.com/<locator-id>/<manifest-name>.ism/manifest(format=m3u8-cmaf)
https://<endpoint-name>.<region>.streaming.mediakind.com/<locator-id>/<manifest-name>.ism/manifest(format=mpd-time-cmaf)
```

## Next steps

[Section titled “Next steps”](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/stream-content/#next-steps)

[DRM content protection](https://docs.mediakind.com/mkio/how-to/drm-content-protection)

### DRM content protection

Protect your content with Widevine, PlayReady, or FairPlay DRM.

[MKPlayer SDK](https://docs.mediakind.com/mkio/reference/player-sdk)

### MKPlayer SDK

Embed content in your app using the MediaKind player.

[Amazon CloudFront](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing/integrating-amazon-cloudfront)

### Amazon CloudFront

Add a CloudFront CDN in front of your AWS streaming endpoint.

[Asset filters](https://docs.mediakind.com/mkio/how-to/content-management/create-an-asset-filter)

### Asset filters

Trim or modify content delivery without re-encoding.

Use the [Publishing API Guide](https://docs.mediakind.com/api-guides/how-to/media/publishing) to automate streaming endpoints and locators through the Media API.