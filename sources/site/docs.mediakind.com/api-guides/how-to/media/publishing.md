# Source: https://docs.mediakind.com/api-guides/how-to/media/publishing

# Streaming and publishing

Publishing has two parts that meet at the playback URL. A **streaming locator** publishes a specific asset and decides its playback and protection behaviour through a streaming policy. A **streaming endpoint** provides the hostname that players connect to and does the just-in-time packaging and encryption. You need both: a locator gives you a path, an endpoint gives you a host, and the playback URL is the two combined. See [Streaming locators](https://docs.mediakind.com/mkio/understanding/core-concepts/locators) and [Streaming endpoints](https://docs.mediakind.com/mkio/understanding/core-concepts/endpoints) for the product background.

## Create and start a streaming endpoint

[Section titled “Create and start a streaming endpoint”](https://docs.mediakind.com/api-guides/how-to/media/publishing/#create-and-start-a-streaming-endpoint)

An endpoint is created with `PUT` and requires `location` and `properties.scaleUnits`. A `scaleUnits` of `0` provisions a shared Standard endpoint; a value above `0` provisions dedicated Premium capacity.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "location": "<PROJECT_LOCATION>",
    "properties": {
      "scaleUnits": 0,
      "description": "Default streaming endpoint"
    }
  }'
```

Playback only works while the endpoint is running, so start it and confirm the state:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/start" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The endpoint’s `hostName` is the value you combine with locator paths to build playback URLs. To enable a Content Delivery Network (CDN), set `cdnEnabled` to `true`; the response then includes a `cdnBasePath` that goes into the URL after the hostname.

A streaming endpoint is shared project infrastructure. It can serve many locators and assets. Confirm all dependencies before stopping an endpoint, because stopping it can interrupt every locator that uses it.

## Publish an asset with a streaming locator

[Section titled “Publish an asset with a streaming locator”](https://docs.mediakind.com/api-guides/how-to/media/publishing/#publish-an-asset-with-a-streaming-locator)

A locator is created with `PUT` and requires `assetName` and `streamingPolicyName`. The example publishes an asset for clear (unprotected) streaming.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/my-locator" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "assetName": "output-video",
      "streamingPolicyName": "Predefined_ClearStreamingOnly"
    }
  }'
```

The locator is also where playback windowing, filters, and protection meet, through optional fields: `startTime` and `endTime` to bound availability, `filters` to apply [playback filters](https://docs.mediakind.com/api-guides/how-to/media/playback-filters), `defaultContentKeyPolicyName` for [content protection](https://docs.mediakind.com/api-guides/how-to/media/content-protection), and `suppressed` to take output offline without deleting the locator.

## Choosing a streaming policy

[Section titled “Choosing a streaming policy”](https://docs.mediakind.com/api-guides/how-to/media/publishing/#choosing-a-streaming-policy)

The `streamingPolicyName` decides what playback the locator allows. Use a predefined policy unless you need behaviour they do not cover.

| Policy | Playback |
| --- | --- |
| `Predefined_DownloadOnly` | Download only, no streaming. |
| `Predefined_ClearStreamingOnly` | Streaming, no protection. |
| `Predefined_DownloadAndClearStreaming` | Download and clear streaming. |
| `Predefined_ClearKey` | Clear Key (AES-128) protection. |
| `Predefined_MultiDrmCencStreaming` | PlayReady and Widevine. |
| `Predefined_MultiDrmStreaming` | PlayReady, Widevine, and FairPlay. |

List the policies available in a project, including any custom ones, with `GET .../media/streamingPolicies`. The DRM policies require a matching content key policy on the locator; see [Content protection](https://docs.mediakind.com/api-guides/how-to/media/content-protection).

## Build the playback URL

[Section titled “Build the playback URL”](https://docs.mediakind.com/api-guides/how-to/media/publishing/#build-the-playback-url)

Ask the locator for its relative paths with `listPaths`:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/my-locator/listPaths" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The response groups paths by protocol and encryption under `streamingPaths`. Each group can contain several entries in `paths[]`, so enumerate every returned entry instead of assuming one path per group. The response also lists any `downloadPaths`.

Build a playback URL from the endpoint hostname, optional `cdnBasePath`, and selected path. Normalize the boundaries so the result contains one slash between each part:

```
https://<hostName><cdnBasePath><path_from_listPaths>
```

The manifest path takes format and encryption options in parentheses. For example, an HLS manifest with Apple sample encryption and two filters applied:

```
https://<hostName>/<streamingLocatorId>/manifest.ism/manifest(format=m3u8-cmaf,encryption=cbcs-aapl,filter=account-filter;asset-filter)
```

Use `format=m3u8-cmaf` for HLS and `format=mpd-time-cmaf` for DASH. The MK.IO product docs recommend fetching playback URLs dynamically through `listPaths` rather than hard-coding them, so that origins can change without breaking clients.

Use progressive verification when testing a live URL:

1. An HTTP `200 OK` response confirms that the manifest is reachable.
2. Advancing manifest timestamps or segments confirm that live material is updating.
3. Successful playback or `ffprobe` inspection confirms that the media decodes.

Streaming endpoint request rate and egress bitrate describe delivery traffic. Do not convert them into viewer, session, or concurrency counts.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/media/publishing/#what-goes-wrong)

- **Playback returns nothing because the endpoint is stopped.** The endpoint must be in the `Running` state. Start it and confirm before testing.
- **A locator returns `404` or `410`.** Before its `startTime`, a locator returns `404 Not Found`; after its `endTime`, it returns `410 Gone`. A `suppressed` locator also returns `404`. Check the time window if playback is unexpectedly unavailable.
- **A DRM policy without a key policy.** Selecting `Predefined_MultiDrmCencStreaming` or similar without a matching content key policy on the locator produces unplayable, encrypted output. See [Content protection](https://docs.mediakind.com/api-guides/how-to/media/content-protection).

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/media/publishing/#what-comes-next)

- [Content protection](https://docs.mediakind.com/api-guides/how-to/media/content-protection): add DRM and key delivery.
- [Automate a VOD pipeline](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline): see publishing in an end-to-end workflow.