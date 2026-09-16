# Source: https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs

# Transforms and jobs

A transform describes what processing should happen. A job applies that processing to a specific input. Together they are the core of Video on Demand (VOD) processing in the Media API. A transform is a recipe you write once; a job runs that recipe against an asset and writes one or more output assets. You usually create a small number of transforms and reuse them across many jobs.

## Create a transform

[Section titled “Create a transform”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#create-a-transform)

A transform is created with `PUT`. Its `outputs` array holds the preset that defines the processing. The example below builds an adaptive-bitrate encoding transform using a built-in encoder preset.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/abr-720p" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "description": "H.264 720p multi-bitrate encoding",
      "outputs": [
        {
          "preset": {
            "@odata.type": "#Microsoft.Media.BuiltInStandardEncoderPreset",
            "presetName": "H264MultipleBitrate720p"
          },
          "onError": "StopProcessingJob",
          "relativePriority": "Normal"
        }
      ]
    }
  }'
```

Each output also accepts `onError` (`ContinueJob` or `StopProcessingJob`) and `relativePriority` (`High`, `Normal`, or `Low`).

## Choosing a preset

[Section titled “Choosing a preset”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#choosing-a-preset)

The preset is selected by `@odata.type`. The most common choice is the built-in encoder, but the Media API also offers format conversion, thumbnails, track insertion, and an Artificial Intelligence (AI) pipeline.

| To… | Use preset `@odata.type` | Key field |
| :-- | :-- | :-- |
| Encode to adaptive bitrate H.264 or H.265 | `#Microsoft.Media.BuiltInStandardEncoderPreset` | `presetName` |
| Convert or repackage to MP4 without re-encoding | `#Microsoft.Media.BuiltInAssetConverterPreset` | `presetName` |
| Generate thumbnails | `#MediaKind.ThumbnailGeneratorPreset` | `thumbnails` |
| Insert a track (for example, captions) | `#MediaKind.TrackInserterPreset` | `tracks` |
| Run an AI pipeline (transcription, translation) | `#MediaKind.AIPipelinePreset` | `pipeline` |

For the built-in encoder, `presetName` chooses the encoding ladder. Single-bitrate options include `H264SingleBitrate720p`, `H264SingleBitrate1080p`, `H265SingleBitrate1080p`, and `H265SingleBitrate4K`. Multi-bitrate options include `H264MultipleBitrateSD`, `H264MultipleBitrate720p`, and `H264MultipleBitrate1080p`, each also available in a `WithCVQ` variant. The [Media API reference](https://docs.mediakind.com/api-reference/media-api) lists the complete enum.

## Run a job

[Section titled “Run a job”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#run-a-job)

A job is created with `PUT` under the transform. It needs an `input` and `outputs`. The input is discriminated by `@odata.type`: use `JobInputAsset` to process a stored asset, or `JobInputHttp` to pull from an external HTTP source. Outputs are always `JobOutputAsset`.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/abr-720p/jobs/job-001" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "input": {
        "@odata.type": "#Microsoft.Media.JobInputAsset",
        "assetName": "input-video",
        "files": ["video.mp4"]
      },
      "outputs": [
        {
          "@odata.type": "#Microsoft.Media.JobOutputAsset",
          "assetName": "output-video"
        }
      ],
      "description": "Encode input-video with the 720p transform",
      "priority": "Normal"
    }
  }'
```

The output asset named here is created and populated by the job. It does not need to exist beforehand.

## Clip the input

[Section titled “Clip the input”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#clip-the-input)

`JobInputAsset` accepts `start` and `end` clip times. Use `AbsoluteClipTime` with an ISO 8601 duration to process only part of the source:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/abr-720p/jobs/clip-job" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "input": {
        "@odata.type": "#Microsoft.Media.JobInputAsset",
        "assetName": "input-video",
        "start": { "@odata.type": "#Microsoft.Media.AbsoluteClipTime", "time": "PT0S" },
        "end": { "@odata.type": "#Microsoft.Media.AbsoluteClipTime", "time": "PT30S" }
      },
      "outputs": [
        { "@odata.type": "#Microsoft.Media.JobOutputAsset", "assetName": "clip-output" }
      ]
    }
  }'
```

## Monitor the job

[Section titled “Monitor the job”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#monitor-the-job)

Poll the job state endpoint while you wait:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/abr-720p/jobs/job-001/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

A job moves through these states:

| State | Meaning |
| :-- | :-- |
| `Queued` | Waiting to be processed. |
| `Scheduled` | Accepted and scheduled for work. |
| `Processing` | Running. |
| `Finished` | Completed successfully. |
| `Error` | Completed with an error. |
| `Canceling` | Cancellation is in progress. |
| `Canceled` | Cancelled. |

For background workers and high-volume pipelines, subscribe to the `MediaKind.JobStarted` and `MediaKind.JobFinished` [webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks) instead of polling.

## Cancel a job

[Section titled “Cancel a job”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#cancel-a-job)

Cancel a job that is no longer needed:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/abr-720p/jobs/job-001/cancelJob" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#what-goes-wrong)

- **An invalid `presetName`.** `presetName` must be one of the documented enum values, such as `H264MultipleBitrate720p`. A made-up name like `AdaptiveStreaming` is rejected. Check the [Media API reference](https://docs.mediakind.com/api-reference/media-api) for the exact list.
- **Publishing the input asset instead of the output.** A job writes to the output asset. Publish that one, not the source.
- **A job reaches `Error`.** The job output object carries an `error` field with the detail. Read the full job, not just `/state`, to see it.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs/#what-comes-next)

- [Automate a VOD pipeline](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline): transforms and jobs in a full publishing workflow.
- [Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing): publish the job output for playback.
- [Webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks): replace status polling with events.