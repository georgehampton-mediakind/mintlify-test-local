# Source: https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing

# Multi-language VOD Dubbing Guide

This guide shows how to use the MK.IO AI dubbing pipeline to generate Spanish, German, and French audio tracks from English-language video content. The completed source asset streams with the original English track and three dubbed tracks that viewers can select.

For a full list of supported languages and more detailed information about the available transforms, visit the [transcription and translation reference page](https://docs.mediakind.com/mkio/reference/encoding-transform-presets/transcription-and-translation-transforms).

**Format requirement:** VOD dubbing requires assets in the **MP4v4** format, which produces a `.mpd` DASH manifest. Assets from older encoding pipelines, including Azure Media Services (AMS) or any source that generates a `.ismc` manifest, are not supported directly. If your asset is in the legacy HSS format, convert it first using the [Convert assets to MP4v4](https://docs.mediakind.com/mkio/how-to/ai-features/convert-hss-for-vod-dubbing) guide, then return here. For supported languages and specifications, see the [AI workflows documentation](https://docs.mediakind.com/mkio/understanding/core-concepts/vod-processing/ai-workflows).

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#prerequisites)

- Active MK.IO project access
- API token: available in **Organisation Settings** → **API Tokens**
- English-language MP4 video (2 to 10 minutes recommended for testing)
- Azure Storage account connected to MK.IO

**Starting point:** If you already have an MP4v4 asset with a `.mpd` manifest, skip to [Step 2](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#step-2-create-multi-language-dubs). If your asset is in the legacy HSS format (it has a `.ismc` manifest), see [Convert HSS assets for VOD dubbing](https://docs.mediakind.com/mkio/how-to/ai-features/convert-hss-for-vod-dubbing) before continuing.

## Step 1: Upload and encode source video

[Section titled “Step 1: Upload and encode source video”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#step-1-upload-and-encode-source-video)

### 1.1 Create an asset

[Section titled “1.1 Create an asset”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#11-create-an-asset)

1. In the MK.IO dashboard, navigate to **Assets** → **\+ Add Asset**.
2. Select your storage location.
3. Enter the asset details:
 - **Asset name:** `english-source-video`
 - **Container:** `videos`
 - **Storage account:** select your Azure Storage account
4. Upload your MP4 file. This guide uses a file named `english-video-demo.mp4`.
5. Select **Upload** and wait for it to complete.

### 1.2 Create an encoding transform and job

[Section titled “1.2 Create an encoding transform and job”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#12-create-an-encoding-transform-and-job)

1. Navigate to **Video Processing** → **Transforms** → **\+ Create Transform**.
2. Configure the transform:
 - **Name:** `encode-streaming`
 - **Type:** Encoding
 - **Preset:** H.264 Multiple Bitrate 1080p
3. Select **Create**.
4. Navigate to **Video Processing** → **Jobs** → **\+ Create Job**.
5. Configure the job:
 - **Name:** `encode-english-source`
 - **Transform:** `encode-streaming`
 - **Input asset name:** `english-source-video`. Select `english-video-demo.mp4`.
 - **Output asset name:** `english-encoded`
6. Select **Create** and monitor the job status.

![Encoding job status view in MK.IO dashboard](https://docs.mediakind.com/images/mkio-dubbing-encoding-jobs.png)

7. Wait for the job status to show **Finished**.

**Why encode first?** Encoding generates the `.mpd` manifest file that track insertion operations require.

## Step 2: Create multi-language dubs

[Section titled “Step 2: Create multi-language dubs”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#step-2-create-multi-language-dubs)

### 2.1 Create a dubbing transform

[Section titled “2.1 Create a dubbing transform”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#21-create-a-dubbing-transform)

A dubbing transform defines the source language and the target languages for the AI dubbing pipeline.

| Parameter | Description |
| :-- | :-- |
| `@odata.type` | Must be set to `#MediaKind.AIPipelinePreset` |
| `pipeline name` | `Predefined_ACSVodSpeechToSpeech` |
| `language` | Source language code (for example, `en-US`) |
| `targetLanguages` | Array of target language codes |
| `speakerCount` | Number of speakers in the source audio (`auto` for automatic detection) |
| `personalVoice` | `true` to preserve the original speaker’s voice characteristics |

- [UI](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#tab-panel-36)
- [API](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#tab-panel-37)

1. Navigate to **Video Processing** → **Transforms** → **\+ Create Transform**.
2. Enter a **Transform name**, for example `dubbing-transform`.
3. Select **AI workflow** as the transform type.
4. Select **Predefined\_ACSVodSpeechToSpeech** from the **AI pipeline** dropdown.
5. Configure the pipeline settings:
 - **Language:** `en-US`
 - **Translate to:** select `es-ES`, `de-DE`, and `fr-FR`
 - **Speaker count:** `auto`
 - **Personal voice:** leave unchecked to use synthetic voices
6. Select **Create**.

PUT`https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/transforms/<TRANSFORM_NAME>`

Path Parameters

`<PROJECT_NAME>`Your unique project identifier

`<TRANSFORM_NAME>`Transform name (for example, dubbing-transform)

Request Body

```
{
  "properties": {
    "description": "AI dub: English to Spanish, German, French",
    "outputs": [
      {
        "preset": {
          "@odata.type": "#MediaKind.AIPipelinePreset",
          "pipeline": {
            "name": "Predefined_ACSVodSpeechToSpeech",
            "arguments": {
              "VodSpeechToSpeechTranslation": [
                {
                  "name": "language",
                  "value": "en-US"
                },
                {
                  "name": "targetLanguages",
                  "value": [
                    "es-ES",
                    "de-DE",
                    "fr-FR"
                  ]
                },
                {
                  "name": "speakerCount",
                  "value": "auto"
                },
                {
                  "name": "personalVoice",
                  "value": false
                }
              ]
            }
          }
        }
      }
    ]
  }
}
```

**Notes on the configuration:**

- **Target languages:** A single dubbing job generates all three language dubs simultaneously.
- **Personal voice:** Setting `personalVoice` to `false` uses a synthetic voice. Set to `true` to attempt to preserve each speaker’s voice characteristics across languages.

### 2.2 Create a dubbing job

[Section titled “2.2 Create a dubbing job”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#22-create-a-dubbing-job)

- [UI](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#tab-panel-38)
- [API](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#tab-panel-39)

1. Navigate to **Video Processing** → **Jobs** → **\+ Create Job**.
2. Enter a **Job name**, for example `dub-english-source`.
3. Under **Select a transform**, choose `dubbing-transform`.
4. Under **Select input**, set:
 - **Input asset name:** `english-encoded`
 - **Filename:** `english-video-demo_320x180_400k.mp4`
5. Under **Configure output**, set:
 - **Asset storage account:** select your Azure Storage account
 - **Output asset name:** enter a new name, for example `dubbed-audio`. MK.IO creates this asset automatically.
6. Select **Create**.

PUT`https://app.mk.io/api/v1/projects/<YOUR_PROJECT_NAME>/media/transforms/<TRANSFORM_NAME>/jobs/<JOB_NAME>`

Path Parameters

`<YOUR_PROJECT_NAME>`Your unique project identifier

`<TRANSFORM_NAME>`The dubbing transform (for example, dubbing-transform)

`<JOB_NAME>`Unique identifier for this dubbing job

Request Body

```
{
  "properties": {
    "description": "Generate Spanish, German, French dubs",
    "priority": "Normal",
    "input": {
      "files": [
        "english-video-demo_320x180_400k.mp4"
      ],
      "@odata.type": "#Microsoft.Media.JobInputAsset",
      "assetName": "english-encoded"
    },
    "outputs": [
      {
        "@odata.type": "#Microsoft.Media.JobOutputAsset",
        "assetName": "dubbed-audio"
      }
    ]
  }
}
```

If you are creating the output asset via the API rather than through the job form, create it first using a PUT request to `/projects/<PROJECT_NAME>/media/assets/dubbed-audio` before submitting the job.

**Input file:** Specify any single encoded bitrate variant from the source asset (for example, `english-video-demo_320x180_400k.mp4`). All variants contain the audio track required for dubbing, so you can use the lowest bitrate file.

**Monitor progress:** Navigate to **Video Processing** → **Jobs** and wait for the job status to show **Finished**.

**Output files:** When the job completes, the `dubbed-audio` asset contains three files:

- `english-video-demo_320x180_400k.mp4_es-ES.mp4`: Spanish
- `english-video-demo_320x180_400k.mp4_de-DE.mp4`: German
- `english-video-demo_320x180_400k.mp4_fr-FR.mp4`: French

## Step 3: Insert audio tracks

[Section titled “Step 3: Insert audio tracks”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#step-3-insert-audio-tracks)

This step adds the dubbed audio tracks to the encoded video asset, making all languages available to viewers.

### 3.1 Create track insertion transforms

[Section titled “3.1 Create track insertion transforms”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#31-create-track-insertion-transforms)

Track insertion transforms must be created through the API. Track insertion jobs can be created using either the UI or API. See step 3.2.

Create three transforms: one per language. Each transform defines the track name, display name, and language code for the inserted audio.

**Spanish insert transform:**

PUT`https://app.mk.io/api/v1/projects/<YOUR_PROJECT_NAME>/media/transforms/<TRANSFORM_NAME>`

Path Parameters

`<YOUR_PROJECT_NAME>`Your unique project identifier

`<TRANSFORM_NAME>`Transform name (for example, spanish-insert)

Request Body

```
{
  "properties": {
    "description": "Insert Spanish audio",
    "outputs": [
      {
        "preset": {
          "tracks": [
            {
              "@odata.type": "#MediaKind.AudioTrack",
              "trackName": "audio-spanish",
              "displayName": "Español (AI Dubbed)",
              "languageCode": "es-ES"
            }
          ],
          "@odata.type": "#MediaKind.TrackInserterPreset"
        },
        "relativePriority": "Normal"
      }
    ]
  }
}
```

**Repeat for German and French:**

- **German transform:** set `trackName` to `audio-german`, `displayName` to `Deutsch (AI Dubbed)`, and `languageCode` to `de-DE`
- **French transform:** set `trackName` to `audio-french`, `displayName` to `Français (AI Dubbed)`, and `languageCode` to `fr-FR`

### 3.2 Create track insertion jobs

[Section titled “3.2 Create track insertion jobs”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#32-create-track-insertion-jobs)

Create one job per language. Each job inserts the corresponding dubbed audio file into the `english-encoded` asset.

- [UI](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#tab-panel-40)
- [API](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#tab-panel-41)

Repeat the following for each language (Spanish, German, French):

1. Navigate to **Video Processing** → **Jobs** → **\+ Create Job**.
2. Enter a **Job name**, for example `job-insert-spanish`.
3. Under **Select a transform**, choose the corresponding insertion transform (for example, `spanish-insert`).
4. Under **Select input**, set:
 - **Input asset name:** `dubbed-audio`
 - **Filename:** the dubbed file for this language (for example, `english-video-demo_320x180_400k.mp4_es-ES.mp4`)
5. Under **Configure output**, set:
 - **Output asset name:** `english-encoded`
6. Select **Create**.

| Language | Transform | Input filename | Output asset |
| :-- | :-- | :-- | :-- |
| Spanish | `spanish-insert` | `..._es-ES.mp4` | `english-encoded` |
| German | `german-insert` | `..._de-DE.mp4` | `english-encoded` |
| French | `french-insert` | `..._fr-FR.mp4` | `english-encoded` |

**Spanish insertion job:**

PUT`https://app.mk.io/api/v1/projects/<YOUR_PROJECT_NAME>/media/transforms/<TRANSFORM_NAME>/jobs/<JOB_NAME>`

Path Parameters

`<YOUR_PROJECT_NAME>`Your unique project identifier

`<TRANSFORM_NAME>`The track insertion transform (for example, spanish-insert)

`<JOB_NAME>`Unique job identifier (for example, job-insert-spanish)

Request Body

```
{
  "properties": {
    "input": {
      "files": [
        "english-video-demo_320x180_400k.mp4_es-ES.mp4"
      ],
      "@odata.type": "#Microsoft.Media.JobInputAsset",
      "assetName": "dubbed-audio"
    },
    "outputs": [
      {
        "@odata.type": "#Microsoft.Media.JobOutputAsset",
        "assetName": "english-encoded"
      }
    ],
    "priority": "Normal"
  }
}
```

**Repeat for German and French:**

- **German:** input file `english-video-demo_320x180_400k.mp4_de-DE.mp4`, job name `job-insert-german`
- **French:** input file `english-video-demo_320x180_400k.mp4_fr-FR.mp4`, job name `job-insert-french`

**Monitor progress:** Wait for all three jobs to show **Finished**.

**Verify:** Navigate to **Assets** → `english-encoded` and open the **Tracks** section. You should see three audio tracks for Spanish, German, and French.

![Asset tracks view showing Spanish, German, and French dubbed audio tracks](https://docs.mediakind.com/images/mkio-vod-dubbing-panel.png)

## Step 4: Configure streaming

[Section titled “Step 4: Configure streaming”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#step-4-configure-streaming)

### 4.1 Create a streaming endpoint

[Section titled “4.1 Create a streaming endpoint”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#41-create-a-streaming-endpoint)

1. Navigate to **Streaming Endpoints** → **\+ Create Streaming Endpoint**.
2. Configure the endpoint:
 - **Name:** `production`
 - **Base URL:** `content`
 - **Type:** Dedicated
3. Select **Create**, then **Start**.

### 4.2 Create a streaming locator

[Section titled “4.2 Create a streaming locator”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#42-create-a-streaming-locator)

1. Navigate to **Assets** and select `english-encoded`.
2. Select the `production` endpoint created in step 4.1.
3. Add a streaming locator:
 - **Name:** `live`
 - **Policy:** `Predefined_DownloadAndClearStreaming`
4. Copy the playback URLs provided.

### 4.3 Test multi-language playback

[Section titled “4.3 Test multi-language playback”](https://docs.mediakind.com/mkio/how-to/ai-features/multi-language-vod-dubbing/#43-test-multi-language-playback)

1. Select the embedded player in the asset details.
2. Use the audio track selector to switch between languages.
3. Confirm that Spanish, German, and French audio tracks are selectable alongside the original English track.