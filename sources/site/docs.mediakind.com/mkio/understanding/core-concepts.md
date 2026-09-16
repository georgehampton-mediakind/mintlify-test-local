# Source: https://docs.mediakind.com/mkio/understanding/core-concepts

# Media resource model

MK.IO workflows combine resources for storage, processing, and delivery. The resources you use depend on whether the input is an on-demand file or a continuous live stream.

![MK.IO media resources for live and on-demand workflows](https://docs.mediakind.com/images/assetsunderstand.png)

## Organize media

[Section titled “Organize media”](https://docs.mediakind.com/mkio/understanding/core-concepts/#organize-media)

An [asset](https://docs.mediakind.com/mkio/understanding/core-concepts/assets) is a logical reference to files in connected cloud storage. Processing jobs and live outputs use assets as inputs or destinations. Streaming locators also reference assets when publishing content.

Connect storage before you add or create assets. See [Connect cloud storage](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage) and [Assets and storage](https://docs.mediakind.com/mkio/how-to/content-management).

## Process on-demand media

[Section titled “Process on-demand media”](https://docs.mediakind.com/mkio/understanding/core-concepts/#process-on-demand-media)

A [transform](https://docs.mediakind.com/mkio/understanding/core-concepts/transforms-and-jobs) defines a reusable processing task for file-based content. A job applies that transform to an input and writes the result to an output asset.

Use [Video processing](https://docs.mediakind.com/mkio/how-to/video-processing-encoding) for portal instructions. Use the [Transforms and jobs API Guide](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs) to automate the same workflow.

## Process live media

[Section titled “Process live media”](https://docs.mediakind.com/mkio/understanding/core-concepts/#process-live-media)

A [live event](https://docs.mediakind.com/mkio/understanding/core-concepts/live-event) receives a continuous input for passthrough or encoding. A live output writes the processed stream to an asset and maintains the archive window used for playback.

Use [Live events](https://docs.mediakind.com/mkio/how-to/live-streaming) for portal instructions. Use the [Live streaming API Guide](https://docs.mediakind.com/api-guides/how-to/media/live-streaming) for API workflows.

## Publish media

[Section titled “Publish media”](https://docs.mediakind.com/mkio/understanding/core-concepts/#publish-media)

A [streaming locator](https://docs.mediakind.com/mkio/understanding/core-concepts/locators) associates an asset with a streaming policy and provides the path used for playback. A [streaming endpoint](https://docs.mediakind.com/mkio/understanding/core-concepts/endpoints) packages and delivers the content through HLS or DASH.

Use [Streaming endpoints and playback](https://docs.mediakind.com/mkio/how-to/content-delivery-publishing) to publish content in the portal. The [Publishing API Guide](https://docs.mediakind.com/api-guides/how-to/media/publishing) covers the corresponding API resources.

## Protect playback

[Section titled “Protect playback”](https://docs.mediakind.com/mkio/understanding/core-concepts/#protect-playback)

A [content key policy](https://docs.mediakind.com/mkio/understanding/core-concepts/content-protection) defines how MK.IO issues content keys and authorizes protected playback. A streaming policy can refer to that content key policy when you create a locator.

Use [Content key policies](https://docs.mediakind.com/mkio/how-to/drm-content-protection) for configuration guides. Use the [Content protection API Guide](https://docs.mediakind.com/api-guides/how-to/media/content-protection) for API-based workflows.