# Source: https://docs.mediakind.com/api-guides/how-to/live/monitor-live

# Monitor live resources

The Live API provides three ways to observe a running resource: a lightweight state endpoint for polling, a full status object on the resource GET response, and a monitoring object that carries thumbnail and metadata URLs for visual inspection.

## Check the current state

[Section titled “Check the current state”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#check-the-current-state)

The state endpoint returns only the current state of the resource. Use it in polling loops rather than reading the full resource each time.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The response contains `status.state`. This is a separate concept from the `spec.state` you set (which only has two values, `Stopped` and `Running`). `status.state` reflects everything the platform reports while getting there, and has 13 possible values:

```
"", Pending, Allocating, Allocated, Starting, Started, Running,
Updating, Stopping, Stopped, Deleting, Deleted, UnableToStart
```

Compare the reported state with the desired state and check `status.info` on the full resource for any informational message. Do not assume every resource visits every intermediate value.

Use the same pattern for liveEvents, staticMultiviewChannels, and staticMultiviewEvents by substituting the resource type in the path.

### Handle a resource that does not start

[Section titled “Handle a resource that does not start”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#handle-a-resource-that-does-not-start)

`Starting` means the resource is still transitioning. The API does not guarantee that a resource leaves `Starting` within a fixed time, so set your own timeout in any polling loop rather than waiting indefinitely.

If a resource stays in `Starting` for longer than you expect, check that the contribution encoder is sending media. Check the source URL, listener allow list, encryption settings, and encoder connection status alongside `status.state` and `status.info`.

Confirm that every referenced resource still exists. Check the asset named in `spec.transform.assetName`, the sources or content named in `spec.inputs`, and the config named in `spec.transform.encodingLive.configRef`.

## Read full status

[Section titled “Read full status”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#read-full-status)

The full GET response includes `status.state`, input status, output status, and the assigned device and site:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel?\$detailedStatus=true" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The `status` object includes:

| Field | Description |
| --- | --- |
| `state` | Current resource state. |
| `siteDisplayName` | Display name of the site the resource runs on. |
| `deviceName` | Name of the device the resource is assigned to, if applicable. |
| `deviceDisplayName` | Display name of the device, if applicable. |
| `shortId` | Short visual identifier. Do not use for programmatic purposes. |
| `inputs` | Array of input status objects. |
| `outputs` | Array of output status objects. |
| `metrics` | Dictionary of metric samples. |
| `monitoring` | Dictionary of monitoring context objects. |

## Inspect input and output status

[Section titled “Inspect input and output status”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#inspect-input-and-output-status)

### Input status

[Section titled “Input status”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#input-status)

Each entry in `status.inputs` reflects the resolved assignment for that input. See [Resolving content](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources#resolving-content) for how the platform gets from `contentName` to one of these:

| Field | Description |
| --- | --- |
| `contentName` | The resolved content name for this input. |
| `contentDisplayName` | The display name of the resolved content. |
| `sourceName` | The source assigned to this input, if resolution landed on a source rather than a flow. |
| `sourceDisplayName` | Display name of that source. |
| `sourceShortId` | Short visual identifier for the source. Do not use for programmatic purposes. |
| `sourceUrl` | The ingress URL for the source, if it has one. |
| `upstreamFlowName` | The name of an upstream flow providing the input, if resolution landed on a flow rather than a source. |
| `networkName` | The network the input is assigned to. Empty if resolved from a directly-connected source such as SDI. |
| `networkDisplayName` | Display name of the network. |
| `deviceInterfaceName` | The device interface assigned to the input, if applicable. |

When an input is resolved, `sourceName` identifies the assigned source or `upstreamFlowName` identifies the upstream flow. Both can be empty when no assignment has been resolved.

None of these fields report whether media is arriving. They describe assignment and resolution, not what is flowing through the input. A source `Active` state, successful Domain Name System (DNS) resolution, or an established listener connection has the same boundary: each confirms assignment or use, not live media flow.

Read the current input assignments from each response; do not substitute the desired `spec.inputs` values when a status field is empty.

### Output status

[Section titled “Output status”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#output-status)

Each entry in `status.outputs` shows where output is being sent:

| Field | Description |
| --- | --- |
| `contentName` | The content name published by this output, if set. |
| `contentDisplayName` | Display name of that content. |
| `destinationUrl` | The egress URL of the connected destination, if applicable. |
| `destinationDisplayName` | Display name of the destination. Empty for an internal output with no destination. |
| `downstreamFlowNames` | Names of downstream flows connected to this output. |
| `networkName` | The network the output is assigned to. Empty for a directly-connected destination such as SDI. |
| `networkDisplayName` | Display name of the network. |
| `deviceInterfaceName` | The device interface assigned to the output, if applicable. |
| `transport` | Transport settings specific to this output. |

## Read metrics

[Section titled “Read metrics”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#read-metrics)

The full resource response includes `status.metrics`, a dictionary keyed by metric name. Inspect the returned metrics alongside resource state, input assignments, and playback. A resource state or a single metric is not a substitute for checking that the expected sources reach the output.

For project-level metrics export and monitoring storage, see [Monitor MK.IO services](https://docs.mediakind.com/mkio/how-to/monitor-your-services). Use the export URL returned for your project and retain samples in your monitoring system when you need history.

## Verify media delivery

[Section titled “Verify media delivery”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#verify-media-delivery)

1. Check `status.inputs` against the source or content references in `spec.inputs`.
2. Confirm that each contribution encoder is sending to its source’s returned URL.
3. Use the monitoring URLs below for a preview when they are returned.
4. [Publish the output asset](https://docs.mediakind.com/api-guides/how-to/media/publishing) and verify the expected video and audio in a compatible player. For multiview, check every tile.

An `Active` source means it is in use. Input assignment, resource state, and a reachable manifest each verify a different part of the workflow; none alone proves that the current media reaches viewers.

## Access monitoring URLs

[Section titled “Access monitoring URLs”](https://docs.mediakind.com/api-guides/how-to/live/monitor-live/#access-monitoring-urls)

The `status.monitoring` object provides URLs for visual monitoring. Each key is a monitoring context name. Each value contains:

| Field | Description |
| --- | --- |
| `thumbnailUrl` | URL of a thumbnail image for the stream at this context. |
| `metadataUrl` | URL of stream metadata at this context. |

The contexts available depend on the transform type and configuration. Fetch the thumbnail URL to display a visual preview of the stream. Fetch the metadata URL for structured data about the current stream state.

```
"monitoring": {
  "encode": {
    "thumbnailUrl": "https://...",
    "metadataUrl": "https://..."
  }
}
```