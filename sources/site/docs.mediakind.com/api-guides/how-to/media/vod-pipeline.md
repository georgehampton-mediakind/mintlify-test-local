# Source: https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline

# Automate a VOD pipeline

This guide walks the complete Video on Demand (VOD) path through the Media API, from a source asset to a playable URL. The individual resources have their own guides; the goal here is to show how they connect so you can build a pipeline with less trial and error.

The sequence is:

1. Create an input asset that points to the source content.
2. Create or reuse a transform.
3. Create a job that applies the transform to the input asset.
4. Wait for the job to finish and the output asset to be ready.
5. Create a streaming locator on the output asset.
6. Start a streaming endpoint and call `listPaths` for the playback URLs.

You need a project with storage already configured, a personal API token, and source content in that storage.

## Step 1: Create the input asset

[Section titled “Step 1: Create the input asset”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#step-1-create-the-input-asset)

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/input-video-001" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "storageAccountName": "primary-azure",
      "container": "input-video-001",
      "description": "Source video for transcoding"
    }
  }'
```

This asset is the input reference for the job. See [Assets](https://docs.mediakind.com/api-guides/how-to/media/assets) for the full set of fields.

## Step 2: Create or reuse the transform

[Section titled “Step 2: Create or reuse the transform”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#step-2-create-or-reuse-the-transform)

Because transforms are reusable, you usually do this once per processing profile, not once per asset.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/standard-encoding" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "description": "H.264 1080p multi-bitrate encoding",
      "outputs": [
        {
          "preset": {
            "@odata.type": "#Microsoft.Media.BuiltInStandardEncoderPreset",
            "presetName": "H264MultipleBitrate1080p"
          },
          "relativePriority": "Normal"
        }
      ]
    }
  }'
```

`presetName` must be one of the documented enum values. See [Transforms and jobs](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs) for the available presets.

## Step 3: Create the job

[Section titled “Step 3: Create the job”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#step-3-create-the-job)

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/standard-encoding/jobs/job-001" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "input": {
        "@odata.type": "#Microsoft.Media.JobInputAsset",
        "assetName": "input-video-001"
      },
      "outputs": [
        {
          "@odata.type": "#Microsoft.Media.JobOutputAsset",
          "assetName": "output-video-001"
        }
      ],
      "description": "Transcode input-video-001 with the standard transform"
    }
  }'
```

The job creates and populates the output asset named here.

## Step 4: Wait for the job to finish

[Section titled “Step 4: Wait for the job to finish”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#step-4-wait-for-the-job-to-finish)

Poll the job state until it reaches `Finished`:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/standard-encoding/jobs/job-001/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

For background automation, subscribe to the `MediaKind.JobStarted` and `MediaKind.JobFinished` [webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks) instead of polling.

## Step 5: Publish the output asset

[Section titled “Step 5: Publish the output asset”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#step-5-publish-the-output-asset)

Create a streaming locator on the output asset, not the source:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/locator-001" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "assetName": "output-video-001",
      "streamingPolicyName": "Predefined_ClearStreamingOnly"
    }
  }'
```

## Step 6: Start the endpoint and get the URLs

[Section titled “Step 6: Start the endpoint and get the URLs”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#step-6-start-the-endpoint-and-get-the-urls)

Start the streaming endpoint if it is not already running, then list the locator paths:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/start" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/locator-001/listPaths" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Combine each path with the endpoint `hostName` to build the playback URLs. See [Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing) for URL construction.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#what-goes-wrong)

- **Publishing too early.** A locator can only publish the asset you point it at. In a VOD pipeline, publish the output asset created by the job, after it reaches `Finished`, not the source asset.
- **Confusing the endpoint and the locator.** The endpoint provides the delivery hostname; the locator provides the asset-specific path. You need both, and the endpoint must be running.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline/#what-comes-next)

- [Transforms and jobs](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs): deeper detail on jobs and presets.
- [Content protection](https://docs.mediakind.com/api-guides/how-to/media/content-protection): add DRM to the published output.
- [Webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks): replace polling with event-driven completion.