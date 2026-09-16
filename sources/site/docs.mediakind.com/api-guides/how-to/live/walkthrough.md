# Source: https://docs.mediakind.com/api-guides/how-to/live/walkthrough

# Live event walkthrough

This guide builds a real, running `liveEvent` from scratch: a single-camera SRT feed, encoded with a MediaKind-provided template, and verified playable at the end.

The scenario: a single encoder pushes an SRT stream to the platform for a scheduled broadcast, gets encoded according to a template, and lands in an asset for live-to-VOD. If you need several cameras composed into one tiled output instead of just one, see the [multiview walkthrough](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough) instead, it follows the same structure with more inputs.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#prerequisites)

- A project name and [API token](https://docs.mediakind.com/api-guides/getting-started/authentication) with access to its Media, Templates, and Live resources.
- [Registered storage](https://docs.mediakind.com/api-guides/how-to/media/storage) for the recording. Use its name for `<YOUR_STORAGE_ACCOUNT>`.
- An SRT encoder, its public IP address, and a chosen listening port.
- An existing streaming endpoint, or the project location needed to create one.

The commands create resources and start a billed event. Use names that are unused in your project, replace every placeholder, and complete the cleanup step after testing. Template presets and pin names are discovered during the walkthrough.

## Step 1: Create the source

[Section titled “Step 1: Create the source”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-1-create-the-source)

A source tells the platform how your encoder will physically connect. This example uses `SRTListener`, meaning the platform opens a listening port and your encoder connects in to it; use `SRTCaller` if you’d rather have the platform connect out to an SRT server your encoder is already running.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/encoder-london" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "London Encoder" },
    "spec": {
      "networkName": "internet",
      "transport": {
        "type": "SRTListener",
        "port": 5010,
        "allowList": ["<ENCODER_PUBLIC_IP>"],
        "latency": 0.5,
        "maxBitrate": 30000000,
        "ipResource": { "type": "External" }
      }
    }
  }'
```

Replace `<ENCODER_PUBLIC_IP>` with the public IP address from which your encoder connects. Read the source back to get the SRT URL your encoder should connect to:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/encoder-london" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

`status.transport.urls` contains that connection URL. This example omits `contentName`, so the resource below references the source directly by `sourceName`. See [Inputs](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs) for when to use `contentName` instead.

## Step 2: Create the output asset

[Section titled “Step 2: Create the output asset”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-2-create-the-output-asset)

The live resource needs somewhere to write its encoded output. This is required, not optional, on every `liveEvent` and `liveChannel`.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/london-broadcast-archive" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "storageAccountName": "<YOUR_STORAGE_ACCOUNT>",
      "description": "Archive for the London broadcast"
    }
  }'
```

`storageAccountName` must reference storage already registered in your project. See [Storage](https://docs.mediakind.com/api-guides/how-to/media/storage) if you haven’t set that up yet.

## Step 3: Get an encodingLive template

[Section titled “Step 3: Get an encodingLive template”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-3-get-an-encodinglive-template)

Every live resource needs an `encodingLive` template telling it how to encode. MediaKind publishes ready-made presets for this, so start there rather than writing encoding configuration by hand. See [Build with the Templates API](https://docs.mediakind.com/api-guides/how-to/templates) for the full picture of configs, presets, and parameters. List what’s available:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/presets/encodingLive" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

This example uses `default_1080p`, if the presets endpoint returns it for your project. Create your own config from the discovered preset:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/london-broadcast-encoding" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "description": "London Broadcast Encoding" },
    "spec": { "presetName": "default_1080p" }
  }'
```

Read your new config back to inspect its parameters and pins:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/london-broadcast-encoding" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Inspect `spec.parameters` to find the values this config lets you override. Presets can change, so do not assume that a particular parameter is present. Copy the single-input pin name from `status.inputPins[].name`. Use the returned pin name for `<INPUT_PIN>` in the next request.

See [Manage templates](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates) if you need to customize the template’s contents beyond what its declared parameters allow.

## Step 4: Create the liveEvent

[Section titled “Step 4: Create the liveEvent”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-4-create-the-liveevent)

Everything from the previous steps comes together here: the source from Step 1, the asset from Step 2, and the config from Step 3. Create with `spec.state` set to `Stopped` so processing does not start.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "London Broadcast" },
    "spec": {
      "state": "Stopped",
      "inputs": [
        {
          "sourceName": "encoder-london",
          "transformInput": "<INPUT_PIN>"
        }
      ],
      "outputs": [],
      "transform": {
        "type": "LiveEvent",
        "assetName": "london-broadcast-archive",
        "archiveWindowLength": "PT4H",
        "encodingLive": {
          "configRef": {
            "name": "london-broadcast-encoding",
            "version": "latest"
          }
        }
      }
    }
  }'
```

Replace `<INPUT_PIN>` with the exact pin name returned by your config. To override a declared parameter, add `configValues` using a name from `spec.parameters`. Omit `configValues` to use the config defaults.

`outputs` is left empty here because this example only archives to the asset. If you also need to push the stream to a downstream playout system, add a `destinationName`. See [Connect to a destination](https://docs.mediakind.com/api-guides/how-to/live/manage-live#connect-to-a-destination) for details.

## Step 5: Confirm before starting

[Section titled “Step 5: Confirm before starting”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-5-confirm-before-starting)

Immediately before startup, retrieve every dependency as well as the live event. This catches a source, asset, or config that was deleted after the event was created.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/encoder-london" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/london-broadcast-archive" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/london-broadcast-encoding" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Check `spec.inputs[0].sourceName`, `spec.inputs[0].transformInput`, `spec.transform.assetName`, and `spec.transform.encodingLive.configRef`. `status.state` should read `Stopped` or `Pending`.

## Step 6: Start the event

[Section titled “Step 6: Start the event”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-6-start-the-event)

When your encoder is ready, patch `spec.state` to `Running`:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "state": "Running" } }'
```

After requesting startup, begin sending from FFmpeg or your contribution encoder using the source’s returned SRT URL. Monitor resource state and encoder connection status while startup proceeds.

Starting the resource incurs event billing. Poll the lightweight state endpoint while startup continues:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

`status.state` moves through several values on the way to `Running`. See [Resource states](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states) for the full list. Set a timeout on the polling loop rather than waiting indefinitely, and see [Handle a resource that does not start](https://docs.mediakind.com/api-guides/how-to/live/monitor-live#handle-a-resource-that-does-not-start) if the event stays in `Starting`.

Treat an established listener connection as confirmation that the encoder reached the listener, not as confirmation that media is flowing. Wait for `Running`, then verify playback.

## Step 7: Monitor while it runs

[Section titled “Step 7: Monitor while it runs”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-7-monitor-while-it-runs)

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast?\$detailedStatus=true" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

`status.inputs[0]` shows what the input resolved to, and `status.monitoring` links to thumbnail and metadata URLs if the config produces them. Resolution and event-level health do not prove that media is arriving. Check that the encoder is sending and verify the expected video and audio during the playback step. See [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live) for the full breakdown.

## Step 8: Publish and verify playback

[Section titled “Step 8: Publish and verify playback”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-8-publish-and-verify-playback)

Everything so far confirms the pipeline is configured correctly, not that anyone can actually watch it. The asset is required, but it isn’t playable on its own: publish it with a streaming endpoint and a streaming locator, the same way you’d publish a VOD asset.

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

Confirm it reports `Running` before testing playback:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Publish the archive asset with a streaming locator. This example uses clear, unprotected streaming so you can verify playback before adding DRM:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/london-broadcast-locator" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "assetName": "london-broadcast-archive",
      "streamingPolicyName": "Predefined_ClearStreamingOnly"
    }
  }'
```

Ask the locator for its playback paths:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/london-broadcast-locator/listPaths" \
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

Check that the manifest is reachable:

Terminal window

```
curl -I "https://<HOST_NAME><CDN_BASE_PATH><LOCATOR_PATH>"
```

A `200 OK` response confirms that the manifest is reachable. It does not prove that current media is flowing through the complete chain. Confirm that manifest timestamps or segments advance, then open the URL in an HLS-capable player or inspect it with `ffprobe` to verify decoding.

Because the event is still `Running`, what you’re watching is live-to-VOD playback of a sliding DVR window, not a finished recording. The window length is whatever you set as `archiveWindowLength` when you created the event in Step 4. See [Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing) for DASH, DRM, and CDN options beyond this clear-streaming example.

## Step 9: Stop and clean up

[Section titled “Step 9: Stop and clean up”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#step-9-stop-and-clean-up)

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "state": "Stopped" } }'
```

Poll the state endpoint until `status.state` is `Stopped`. When you no longer need the live resource, delete it:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/london-broadcast" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Stop the contribution encoder. If you started a streaming endpoint only for this test, stop it after confirming no other streams need it:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingEndpoints/default/stop" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Use the endpoint name you created and poll its `/state` endpoint until it reports `Stopped`. Keep a shared endpoint running while other streams need it. Review the recording before deleting assets or storage.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/walkthrough/#what-comes-next)

You have created a source, asset, encoding config, and live event, then published the output and checked playback. Multiview, scheduled automation, destinations, and refiners all build on the same structure.

- [Core concepts](https://docs.mediakind.com/api-guides/how-to/live/core-concepts): inputs and outputs, refiners, resource states, and how templates connect to live resources, in full.
- [Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing): the full publishing model, including DASH, DRM, CDN, and playback filters.
- [Manage live channels and events](https://docs.mediakind.com/api-guides/how-to/live/manage-live): the full reference for every operation on liveChannels and liveEvents, including destinations and config overrides.
- [Scheduled operations](https://docs.mediakind.com/api-guides/how-to/live/scheduled-operations): pre-program the start and stop times instead of patching state by hand.
- [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live): the full status object, metrics, and monitoring URLs.
- [Multiview](https://docs.mediakind.com/api-guides/how-to/live/multiview): the equivalent walkthrough for composing several camera feeds into one output.