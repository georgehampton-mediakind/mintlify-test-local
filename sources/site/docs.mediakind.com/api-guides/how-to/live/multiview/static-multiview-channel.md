# Source: https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel

# Static Multiview Channel

A `staticMultiviewChannels` resource composes multiple live inputs into a single encoded multiview output. It is designed to run continuously as 24/7 production infrastructure and is billed at a monthly flat rate.

For a complete setup guide that covers sources, templates, and the multiview resource together, see [Multiview setup walkthrough](https://docs.mediakind.com/api-guides/how-to/live/multiview/multiview-walkthrough).

## When to use this resource type

[Section titled “When to use this resource type”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#when-to-use-this-resource-type)

Use `staticMultiviewChannels` when your multiview feed needs to be available continuously without a defined start and end time. Common use cases are control room monitoring feeds, permanent studio outputs, and production infrastructure that is always on.

If your multiview feed runs for a defined window (a match, a show, a scheduled broadcast), use `staticMultiviewEvents` instead. Events use per-minute billing.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#prerequisites)

- One source or content resource per input (Media API). See [Content, sources, and destinations](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources).
- An `encodingLive` customer config with input pins configured for multiview (Templates API). Discover presets at runtime, create a config from one, then retrieve the created config’s pins. See [Manage templates](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates).
- Optionally, a `multiviewComposing` template if you are separating composition from encoding.
- An MK.IO asset to write output into.

## Step 1: Check template input pins

[Section titled “Step 1: Check template input pins”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#step-1-check-template-input-pins)

Before creating the resource, read your `encodingLive` template and note the pin names in `status.inputPins[].name`. Each input in the resource spec uses a `transformInput` value that must exactly match a pin name from this list.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-multiview-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

If you are using a `multiviewComposing` template (Mode 2), also read its pins. In Mode 2, `transformInput` must match pins from the `multiviewComposing` template, not the `encodingLive` template.

## Step 2: Create the resource

[Section titled “Step 2: Create the resource”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#step-2-create-the-resource)

Create with `spec.state` set to `Stopped`. The resource is provisioned but does not start processing until you patch it to `Running`.

Choose Mode 1 or Mode 2 depending on how your templates are structured. If you are not sure which to use, see [How composition works](https://docs.mediakind.com/api-guides/how-to/live/multiview#how-composition-works).

### Mode 1: Layout inside the encodingLive template

[Section titled “Mode 1: Layout inside the encodingLive template”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#mode-1-layout-inside-the-encodinglive-template)

Use this when a single `encodingLive` template handles both the visual composition and encoding.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "Main Studio Multiview"
    },
    "spec": {
      "state": "Stopped",
      "inputs": [
        {
          "sourceName": "camera-1",
          "transformInput": "<INPUT_1_PIN>"
        },
        {
          "sourceName": "camera-2",
          "transformInput": "<INPUT_2_PIN>"
        },
        {
          "sourceName": "camera-3",
          "transformInput": "<INPUT_3_PIN>"
        },
        {
          "sourceName": "camera-4",
          "transformInput": "<INPUT_4_PIN>"
        }
      ],
      "outputs": [],
      "transform": {
        "type": "StaticMultiviewChannel",
        "assetName": "main-studio-archive",
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

Each input can use `sourceName` or `contentName`. The example uses `sourceName`. `contentName` lets the platform resolve among candidates that can supply the content, but it does not guarantee seamless media failover.

The pin names in `transformInput` (`<INPUT_1_PIN>` etc.) are illustrative. Use the exact values from your template’s `status.inputPins[].name`.

### Mode 2: Separate multiviewComposing template

[Section titled “Mode 2: Separate multiviewComposing template”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#mode-2-separate-multiviewcomposing-template)

Use this when you want independent control over the visual layout and the encoding parameters. The `multiviewComposing` template defines how feeds are arranged on screen. The `encodingLive` template defines how the composed output is encoded. Pin names in `transformInput` must match the `multiviewComposing` template.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "Main Studio Multiview"
    },
    "spec": {
      "state": "Stopped",
      "inputs": [
        {
          "sourceName": "camera-1",
          "transformInput": "composing/input_1"
        },
        {
          "sourceName": "camera-2",
          "transformInput": "composing/input_2"
        }
      ],
      "outputs": [],
      "transform": {
        "type": "StaticMultiviewChannel",
        "assetName": "main-studio-archive",
        "archiveWindowLength": "P7DT0S",
        "encodingLive": {
          "configRef": {
            "name": "my-encoding-template",
            "version": "latest"
          }
        },
        "multiviewComposing": {
          "configRef": {
            "name": "my-composing-template",
            "version": "latest"
          }
        }
      }
    }
  }'
```

## Optional fields

[Section titled “Optional fields”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#optional-fields)

| Field | Description |
| --- | --- |
| `archiveWindowLength` | ISO 8601 duration string controlling how much content is retained in the asset. Examples: `PT4H` (4 hours) and `P7DT0S` (7 days). Maximum 30 days. |
| `assetPath` | A subpath within the asset to write output into. |
| `streamConditioning` | Optional reference to a `streamConditioning` template for stream conditioning. |
| `configOverrides` | Per-instance JSON Patch operations applied to a template without modifying the shared template. |

## Step 3: Check dependencies

[Section titled “Step 3: Check dependencies”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#step-3-check-dependencies)

Immediately before startup, retrieve each source or content resource, the asset, and every referenced config. Confirm that the references still point to the resources you intend to use.

## Step 4: Start the resource

[Section titled “Step 4: Start the resource”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#step-4-start-the-resource)

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "state": "Running"
    }
  }'
```

After requesting startup, begin sending from every SRT encoder using its source’s returned URL.

Poll the state endpoint until `status.state` is `Running`:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio/state" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Step 5: Monitor the resource

[Section titled “Step 5: Monitor the resource”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#step-5-monitor-the-resource)

Once running, use the full GET to see input resolution, output status, and encoding metrics:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio?\$detailedStatus=true" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The `status.inputs` array shows which content each input resolved to. Resolution and event-level status do not prove that every source is delivering media. Check each encoder’s contribution and verify that every expected tile updates in the composed picture. The `status.monitoring` object contains thumbnail and metadata URLs if your config produces them.

For a full breakdown of what each status field means, see [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live).

## Stop and delete

[Section titled “Stop and delete”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#stop-and-delete)

To take the resource down for maintenance or permanently, stop it first:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "state": "Stopped" } }'
```

Stopping a `staticMultiviewChannels` resource does not change the monthly billing already incurred. When you no longer need the resource:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/live/staticMultiviewChannels/main-studio" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Review the recording and your retention requirements before removing any related assets or storage.

## Scheduled automation

[Section titled “Scheduled automation”](https://docs.mediakind.com/api-guides/how-to/live/multiview/static-multiview-channel/#scheduled-automation)

To automate start and stop windows for maintenance windows or planned events, create a scheduled operation on the resource. See [Scheduled operations](https://docs.mediakind.com/api-guides/how-to/live/scheduled-operations).