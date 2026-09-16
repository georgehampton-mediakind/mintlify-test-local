# Source: https://docs.mediakind.com/api-guides/how-to/live/core-concepts/outputs

# Outputs

An output defines where encoded stream data goes after processing. You define outputs as a list in `spec.outputs`. An output can:

- Connect to a named destination (`destinationName`), sending the stream to an external RTMP or SRT endpoint.
- Publish a content name (`contentName`), making the processed stream available to downstream live resources by name.
- Be internal: omitting both `destinationName` and `contentName` makes the output available to downstream resources without external egress.

An internal output is useful when you want to chain resources together inside the platform without sending anything to an external system.

## Outputs are not the same as the archive asset

[Section titled “Outputs are not the same as the archive asset”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/outputs/#outputs-are-not-the-same-as-the-archive-asset)

`spec.outputs` controls optional egress: pushing to a destination, publishing a content name, or chaining to another flow. It is a separate thing from `assetName`, which lives on `spec.transform` alongside `encodingLive` and is **required** on every `LiveChannel`, `LiveEvent`, `StaticMultiviewChannel`, and `StaticMultiviewEvent`: you cannot create one of these resources without naming an asset.

Include `assetName` in requests for all four transform types. Use `archiveWindowLength` to control the archive and time-shift window, up to the documented maximum of 30 days. Configuring an external destination does not remove the required asset field.

```
"transform": {
  "type": "LiveEvent",
  "assetName": "my-event-archive",
  "encodingLive": { "configRef": { "name": "my-encoding-template", "version": "latest" } }
}
```

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/outputs/#what-comes-next)

- [Templates](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates): how encoding templates connect to live resources.
- [Manage live channels and events](https://docs.mediakind.com/api-guides/how-to/live/manage-live#connect-to-a-destination): create a destination and connect an output to it.