# Source: https://docs.mediakind.com/api-guides/how-to/live/manage-live

# Manage live channels and events

A `liveChannel` is a 24/7 resource billed monthly. A `liveEvent` is a time-bounded resource billed per minute. Both encode live input according to an `encodingLive` template and use an MK.IO asset for recording. The examples below configure one input. Use liveChannels for permanent infrastructure and liveEvents for scheduled or one-off broadcasts.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#prerequisites)

Before you create a liveChannel or liveEvent, you need:

- A source or content resource for the input. See [Content, sources, and destinations](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources).
- An `encodingLive` configuration template. See [Manage templates](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates).
- The input pin name from the created config’s `status.inputPins[].name`. Every input must bind to a config pin through `transformInput`.
- An MK.IO asset to write output into. This is not optional: `assetName` is a required field on every liveChannel and liveEvent, so create the asset first even if you don’t plan to keep the recording. See [Assets](https://docs.mediakind.com/api-guides/how-to/media/assets).

## Create a liveChannel

[Section titled “Create a liveChannel”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#create-a-livechannel)

Create the resource with `spec.state` set to `Stopped`. This allocates the resource without starting processing.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "My Channel"
    },
    "spec": {
      "state": "Stopped",
      "inputs": [
        {
          "sourceName": "encoder-london",
          "transformInput": "<CONFIG_INPUT_PIN>"
        }
      ],
      "outputs": [],
      "transform": {
        "type": "LiveChannel",
        "assetName": "my-channel-archive",
        "encodingLive": {
          "configRef": {
            "name": "my-encoding-template",
            "version": "latest"
          }
        }
      }
    }
  }'
```

The required transform fields are `type`, `assetName`, and `encodingLive.configRef`.

You can also set `archiveWindowLength` to control how much content is retained in the archive window. The value is an ISO 8601 duration string such as `PT1H30M` for 1 hour 30 minutes. The maximum value is 30 days.

If the asset has a subpath you want to write into, set `assetPath` alongside `assetName`.

## Create a liveEvent

[Section titled “Create a liveEvent”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#create-a-liveevent)

The body structure is identical to a liveChannel. Change the `transform.type` to `LiveEvent`:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveEvents/my-event" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "My Event"
    },
    "spec": {
      "state": "Stopped",
      "inputs": [
        {
          "sourceName": "encoder-london",
          "transformInput": "<CONFIG_INPUT_PIN>"
        }
      ],
      "outputs": [],
      "transform": {
        "type": "LiveEvent",
        "assetName": "my-event-archive",
        "encodingLive": {
          "configRef": {
            "name": "my-encoding-template",
            "version": "latest"
          }
        }
      }
    }
  }'
```

## Connect to a destination

[Section titled “Connect to a destination”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#connect-to-a-destination)

To send output to an external destination, set `destinationName` on the output. Omit `destinationName` to create an internal output that makes the stream available to downstream resources without external egress.

```
"outputs": [
  {
    "destinationName": "playout-system"
  }
]
```

For an **internal** output (no `destinationName` or `contentName`), you can cap how many downstream flows are allowed to connect to it by setting `transport.maxConnections`:

```
"outputs": [
  {
    "transport": {
      "maxConnections": 10
    }
  }
]
```

`maxConnections` only takes effect when the output has no destination. Once you set `destinationName`, connection limits are controlled by the destination resource itself, not by this field.

## Reference content instead of a source

[Section titled “Reference content instead of a source”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#reference-content-instead-of-a-source)

To let the system resolve which source supplies the stream based on network reachability, use `contentName` on the input instead of `sourceName`:

```
"inputs": [
  {
    "contentName": "channel-1",
    "transformInput": "<CONFIG_INPUT_PIN>"
  }
]
```

`contentName` lets the platform resolve among candidates that can supply the content. It does not by itself guarantee seamless media failover when an encoder stops sending.

## Set per-instance parameter values

[Section titled “Set per-instance parameter values”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#set-per-instance-parameter-values)

If the config you reference declares parameters, set values for them by name with `configValues`. Retrieve the created config first and inspect its current `spec.parameters`; presets can change.

```
"encodingLive": {
  "configRef": {
    "name": "my-encoding-template",
    "version": "latest"
  },
  "configValues": {
    "<PARAMETER_NAME>": "<PARAMETER_VALUE>"
  }
}
```

Add a `configValues` object only when you need an override. Replace the placeholders with a name from `spec.parameters` and its required leaf JSON value: a string, number, or boolean. The API checks values against those declarations. See [Declare parameters on a config](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates#declare-parameters-on-a-config).

## Apply per-instance configuration overrides

[Section titled “Apply per-instance configuration overrides”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#apply-per-instance-configuration-overrides)

For anything a template’s declared parameters don’t cover, use `configOverrides` to apply JSON Patch operations to the template for this resource only. The shared template is not modified.

There’s also an `advancedSettingsName` field on the same object, reserved for MediaKind-managed advanced settings blocks. It isn’t something you’d normally set yourself, only add it if MediaKind support has specifically pointed you at one.

```
"encodingLive": {
  "configRef": {
    "name": "my-encoding-template",
    "version": "latest"
  },
  "configOverrides": {
    "type": "application/json-patch+json",
    "operations": [
      {
        "op": "replace",
        "path": "<CONFIG_JSON_POINTER>",
        "value": "<OVERRIDE_VALUE>"
      }
    ]
  }
}
```

Replace `<CONFIG_JSON_POINTER>` with an existing JSON pointer in the retrieved config and `<OVERRIDE_VALUE>` with the replacement value using that field’s JSON type.

If a resource sets both `configValues` and `configOverrides`, `configValues` is applied first and `configOverrides` second, so an override wins on any field they both touch.

## Check dependencies before startup

[Section titled “Check dependencies before startup”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#check-dependencies-before-startup)

Immediately before each start, retrieve the asset, source or content, and config referenced by the live resource. Confirm that each reference still points to the resource you intend to use.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/my-channel-archive" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/sources/encoder-london" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Start the resource

[Section titled “Start the resource”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#start-the-resource)

Set `spec.state` to `Running` with a PATCH request:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "state": "Running"
    }
  }'
```

Starting the resource incurs channel or event billing. After requesting startup, begin sending SRT from the contribution encoder using the source’s returned URL. Poll until the resource reaches `Running`, then verify playback.

## Stop the resource

[Section titled “Stop the resource”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#stop-the-resource)

Set `spec.state` to `Stopped`:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "state": "Stopped"
    }
  }'
```

## Get a resource

[Section titled “Get a resource”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#get-a-resource)

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel?\$detailedStatus=true" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The response includes `spec`, `metadata`, and `status`. For lightweight state polling, use the state endpoint instead. See [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live).

## List resources

[Section titled “List resources”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#list-resources)

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The list endpoint supports `$top`, `$skiptoken`, `$filter`, `$orderby`, `$label`, and `$label_key` query parameters.

Filterable fields include: `name`, `displayName`, `spec/state`, `spec/transform/type`, `status/state`, `created`, `updated`, and others. See the [Live API reference](https://docs.mediakind.com/api-reference/live-api) for the full list.

To search across all resource types at once, use the search endpoint:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/search" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Update metadata

[Section titled “Update metadata”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#update-metadata)

Use PATCH to update `metadata.displayName` or `metadata.labels` without affecting the resource spec:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "My Channel (updated)"
    }
  }'
```

## Delete a resource

[Section titled “Delete a resource”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#delete-a-resource)

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/liveChannels/my-channel" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

If the resource does not exist, the API returns `204`. Stop the resource before deleting it. Deletion can return `409` while downstream flow inputs still reference the resource.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/manage-live/#what-comes-next)

- [Live event walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough): see every step in this page combined into one worked example, from source creation onward.
- [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live): check state, read metrics, and access thumbnail and metadata URLs.
- [Scheduled operations](https://docs.mediakind.com/api-guides/how-to/live/scheduled-operations): automate start and stop times.
- [Multiview](https://docs.mediakind.com/api-guides/how-to/live/multiview): compose multiple inputs into a multiview output.