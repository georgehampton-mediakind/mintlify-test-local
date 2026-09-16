# Source: https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough

# Multiview setup walkthrough

This guide walks through the complete setup for a live multiview event, from creating ingest sources to a running `staticMultiviewEvents` resource composing four camera feeds into a single output.

The scenario: four cameras covering a live sports match. Each camera sends an SRT stream to the platform. The output is a single tiled multiview feed stored in an asset and optionally delivered to a downstream playout system.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#prerequisites)

- A project name and [API token](https://docs.mediakind.com/api-guides/getting-started/authentication) with access to Media, Templates, and Live resources.
- [Registered storage](https://docs.mediakind.com/api-guides/how-to/media/storage) for the recording.
- Four SRT encoders and their public IP addresses.
- An existing streaming endpoint, or the project location needed to create one.

Use unused resource names and replace every placeholder. The workflow creates and starts a billed event; complete the cleanup step after testing. Create its content, sources, asset, and config before creating the Live API resource.

## Step 1: Create content resources

[Section titled “Step 1: Create content resources”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-1-create-content-resources)

Content resources are named stream identifiers. Each camera feed gets its own content resource so the platform can track which sources supply which streams.

Create one content resource per camera:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/content/camera-1" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "metadata": { "displayName": "Camera 1" } }'

curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/content/camera-2" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "metadata": { "displayName": "Camera 2" } }'

curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/content/camera-3" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "metadata": { "displayName": "Camera 3" } }'

curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/content/camera-4" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "metadata": { "displayName": "Camera 4" } }'
```

A `201 Created` response for each confirms the content resources are created. `status.state` reports whether active flows use the content: `Active` or `Inactive`. Creating the content identifier alone does not start media processing.

## Step 2: Create sources for each camera

[Section titled “Step 2: Create sources for each camera”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-2-create-sources-for-each-camera)

A source connects a content resource to a physical ingest transport. Each camera encoder will connect to the platform using SRT, so you create an `SRTListener` source for each. The platform allocates an SRT URL that the camera encoder connects to.

Create one source per camera, linking each to its content resource:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/camera-1-source" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "Camera 1 Source" },
    "spec": {
      "contentName": "camera-1",
      "networkName": "internet",
      "transport": {
        "type": "SRTListener",
        "port": 5001,
        "allowList": ["<CAMERA_1_PUBLIC_IP>"],
        "latency": 0.5,
        "maxBitrate": 30000000,
        "ipResource": { "type": "External" }
      }
    }
  }'
```

Repeat for `camera-2-source` through `camera-4-source`, using ports `5002`, `5003`, and `5004` respectively, linking each to its content name, and setting `allowList` to that encoder’s public IP address.

After each PUT succeeds, read back the source to get the allocated SRT connection URL:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/camera-1-source" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The `status.transport.urls` array contains the URL your camera encoder should connect to. Share this URL with whoever configures the encoder for that camera.

`networkName` and most transport settings are configured at creation. The source PATCH endpoint supports content reassignment and selected transport changes. See [Update a source](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources#update-a-source) before recreating a source.

## Step 3: Create an output asset

[Section titled “Step 3: Create an output asset”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-3-create-an-output-asset)

The multiview resource writes its encoded output into an MK.IO asset. Create the asset before you create the live resource.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "storageAccountName": "<YOUR_STORAGE_ACCOUNT>",
      "description": "Multiview archive for the match"
    }
  }'
```

The `storageAccountName` must reference a registered storage instance in your project. See [Storage](https://docs.mediakind.com/api-guides/how-to/media/storage) if you have not registered storage yet.

## Step 4: Set up your encodingLive template

[Section titled “Step 4: Set up your encodingLive template”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-4-set-up-your-encodinglive-template)

The `encodingLive` template controls how the multiview output is encoded. It also defines the input pins that map your camera feeds to positions in the layout.

List the presets available to the project. If the endpoint returns `default_1080p_4up`, you can use it as a Mode 1 example where one `encodingLive` config handles the tiled layout and encoding.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/presets/encodingLive" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Create your own config from it:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-multiview-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "description": "Match Multiview Encoding" },
    "spec": { "presetName": "default_1080p_4up" }
  }'
```

Retrieve its input pins:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-multiview-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Look at `status.inputPins` in the response. Each entry has a `name` field. These are the exact values you will use as `transformInput` in the next step. Inspect `spec.parameters` as well. If the created config declares `multiviewLayout`, you can adjust it with `configValues` when you create the event.

Read the four returned pin names and use them in place of these placeholders:

```
"inputPins": [
  { "name": "<INPUT_1_PIN>", "allowMultipleBindings": false },
  { "name": "<INPUT_2_PIN>", "allowMultipleBindings": false },
  { "name": "<INPUT_3_PIN>", "allowMultipleBindings": false },
  { "name": "<INPUT_4_PIN>", "allowMultipleBindings": false }
]
```

Your template’s pin names may be different. Use whatever `status.inputPins[].name` returns for your template.

## Step 5: Create the multiview event

[Section titled “Step 5: Create the multiview event”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-5-create-the-multiview-event)

Now create the `staticMultiviewEvents` resource. This is where you wire everything together: the sources created in Step 2 connect to pins from Step 4, the template is referenced, and the asset from Step 3 is named.

Create it with `spec.state` set to `Stopped`. This allocates the resource without starting processing.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "Match Multiview"
    },
    "spec": {
      "state": "Stopped",
      "inputs": [
        {
          "contentName": "camera-1",
          "transformInput": "<INPUT_1_PIN>"
        },
        {
          "contentName": "camera-2",
          "transformInput": "<INPUT_2_PIN>"
        },
        {
          "contentName": "camera-3",
          "transformInput": "<INPUT_3_PIN>"
        },
        {
          "contentName": "camera-4",
          "transformInput": "<INPUT_4_PIN>"
        }
      ],
      "outputs": [],
      "transform": {
        "type": "StaticMultiviewEvent",
        "assetName": "match-multiview",
        "archiveWindowLength": "PT4H",
        "encodingLive": {
          "configRef": {
            "name": "my-multiview-template",
            "version": "latest"
          }
        }
      }
    }
  }'
```

Add a `configValues` object only if the created config declares the parameter you need in `spec.parameters`. Leave it out to use the config defaults. Each input uses `contentName` instead of `sourceName`, which lets the platform resolve among candidates that can supply the content. This does not guarantee seamless media-aware failover. To select a specific source, use `sourceName` instead.

The `transformInput` values must exactly match the pin names from `status.inputPins[].name`.

The `archiveWindowLength` of `PT4H` keeps up to 4 hours of content available in the asset. Adjust this to match the expected length of your event.

## Step 6: Confirm the dependencies

[Section titled “Step 6: Confirm the dependencies”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-6-confirm-the-dependencies)

Immediately before startup, retrieve every source or content resource, the asset, the config, and the multiview resource. Repeat the first two requests for all four cameras.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/<SOURCE_NAME>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/content/<CONTENT_NAME>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-multiview-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Check `spec.inputs` to confirm all four inputs have the correct content names and pin assignments. Check `spec.transform.encodingLive.configRef` against the retrieved config. The resource `status.state` should be `Stopped` or `Pending`.

## Step 7: Start the resource

[Section titled “Step 7: Start the resource”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-7-start-the-resource)

When your camera encoders are ready and the match is about to begin, start the resource by patching `spec.state` to `Running`:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "state": "Running"
    }
  }'
```

Starting the resource incurs event billing. After requesting startup, begin sending from all four SRT encoders using their sources’ returned URLs. Poll the state endpoint until startup completes:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Once `status.state` is `Running`, the multiview composition is active and encoding into the asset.

## Step 8: Monitor during the event

[Section titled “Step 8: Monitor during the event”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-8-monitor-during-the-event)

While the event runs, use the full GET to check input resolution, output status, and metrics:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview?\$detailedStatus=true" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

In the response:

- `status.inputs[].contentName` shows which content name each input resolved to.
- `status.metrics` contains metrics reported by the resource.
- `status.monitoring` contains thumbnail and metadata URLs if your template produces them, allowing you to verify the composition visually.

Confirm that every encoder is sending. Inspect the composed picture to verify that all four expected sources are present and updating; resource state alone does not establish that every camera is delivering media.

See [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live) for the full breakdown of what each status field means.

## Step 9: Publish and verify playback

[Section titled “Step 9: Publish and verify playback”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-9-publish-and-verify-playback)

A healthy `status.metrics` reading confirms the pipeline is running, not that anyone can watch it. Publish the archive asset the same way you’d publish a VOD asset, with a streaming endpoint and a streaming locator, then check the manifest actually plays.

If you don’t already have a running streaming endpoint in this project, create one and start it:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "location": "<PROJECT_LOCATION>",
    "properties": { "scaleUnits": 0 }
  }'

curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/start" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Confirm it reports `Running`:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Publish the `match-multiview` asset with a streaming locator. This example uses clear, unprotected streaming so you can verify playback before adding DRM:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/match-multiview-locator" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "assetName": "match-multiview",
      "streamingPolicyName": "Predefined_ClearStreamingOnly"
    }
  }'
```

Ask the locator for its playback paths:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/match-multiview-locator/listPaths" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Each `streamingPaths[]` group can contain several entries in its `paths[]` array. Select the protocol and encryption combination you need, then retrieve the streaming endpoint you are using:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Replace `default` if you are reusing an endpoint with a different name. Read `properties.hostName` and `properties.cdnBasePath` from the response. Insert the CDN base path between the hostname and the selected locator path. Omit that part when no base path is returned, and use one slash at each boundary:

```
https://<HOST_NAME><CDN_BASE_PATH><LOCATOR_PATH>
```

`<HOST_NAME>` is `properties.hostName`, `<CDN_BASE_PATH>` is the optional `properties.cdnBasePath`, and `<LOCATOR_PATH>` is the selected entry from `streamingPaths[].paths[]`.

Check that it’s actually reachable:

Terminal window

```
curl -I "https://<HOST_NAME><CDN_BASE_PATH><LOCATOR_PATH>"
```

A `200 OK` confirms that the manifest is reachable. Confirm that its timestamps or segments advance, then open the URL in an HLS-capable player or inspect it with `ffprobe`. Check the composed picture to verify that all four cameras are flowing and tiled correctly.

This is live-to-VOD playback of a sliding DVR window while the event is still `Running`, bounded by the `archiveWindowLength` you set in Step 5. See [Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing) for DASH, DRM, and CDN options.

## Step 10: Stop and clean up

[Section titled “Step 10: Stop and clean up”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#step-10-stop-and-clean-up)

When the match ends, stop the resource:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "state": "Stopped" } }'
```

Billing stops once the resource transitions to `Stopped`. The encoded content remains in the asset and is available for playback.

When you no longer need the resource, delete it:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Review the recording and your retention requirements before removing any related assets or storage.

## Automating start and stop

[Section titled “Automating start and stop”](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough/#automating-start-and-stop)

Rather than manually patching the state, you can pre-schedule start and stop times using scheduled operations. Create the scheduled operation after the resource is created and before the event starts:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewEvents/match-multiview/scheduledOperations/match-window" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "type": "MediaKind.ScheduledOperation.StartStop",
      "startTime": "<START_TIME_UTC>",
      "endTime": "<END_TIME_UTC>",
      "correlationData": {
        "matchId": "premier-league-round-5"
      }
    }
  }'
```

See [Scheduled operations](https://docs.mediakind.com/api-guides/how-to/live/scheduled-operations) for the full guide.