# Source: https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs

# Inputs

An input connects a live resource to a stream. You define inputs as a list in `spec.inputs`, and each input specifies exactly one source of stream data. You choose exactly one of three fields per input. They are mutually exclusive, so you cannot mix them in a single input entry:

| Field | Connects to | Use when |
| --- | --- | --- |
| `sourceName` | One specific, named source resource (Media API) | You know exactly which physical feed you want, and it won’t change. |
| `contentName` | A content identifier, resolved to a candidate source that can supply it (Media API) | The physical source behind the feed might change, and you want the platform to resolve among available candidates. |
| `flowName` | Another live resource’s output | You are chaining resources together, feeding the output of one flow into another. |

Before defining an input, retrieve the created config and copy its `status.inputPins[].name`. Replace `<INPUT_PIN>` in the following examples with a returned pin name.

A single camera with a direct source reference uses:

```
"inputs": [
  {
    "sourceName": "camera-1-source",
    "transformInput": "<INPUT_PIN>"
  }
]
```

A setup where several sources can supply the same logical content instead references their shared content name:

```
"inputs": [
  {
    "contentName": "camera-1",
    "transformInput": "<INPUT_PIN>"
  }
]
```

In both cases, the live resource keeps the same processing config. `contentName` lets the platform resolve among candidates, but it does not guarantee seamless media-aware failover.

## Flow input refiners

[Section titled “Flow input refiners”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs/#flow-input-refiners)

When an input uses `contentName`, the platform has to pick one specific source (or another flow’s output) to actually supply it. See [Resolving content](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources#resolving-content) for how that resolution works by default. A `refiner` narrows that choice further, without you having to switch to a hard-pinned `sourceName` or `flowName`:

```
"inputs": [
  {
    "contentName": "camera-1",
    "transformInput": "<INPUT_PIN>",
    "refiner": {
      "flow": { "name": "upstream-encode" }
    }
  }
]
```

There are two kinds of input refiner. **`flow`** restricts resolution to a single named upstream flow, the same “another live resource’s output” concept as the `flowName` field above, useful when several flows could technically supply the same content but you want this input fed by one specific one, without giving up the flexibility of `contentName` resolution entirely.

**`labelMatch`** restricts resolution to sources or flows carrying a specific label `key` and `value`, useful when you tag a group of resources and want an input to resolve to whichever one of them is currently reachable, rather than a single fixed name.

```
"refiner": {
  "labelMatch": { "key": "region", "value": "eu-west" }
}
```

Refiners only apply to inputs today. The Live API schema also defines a `refiner` field on outputs and on the flow as a whole, but both are currently empty placeholders reserved for future functionality, setting them has no effect yet.

## What transform pins are

[Section titled “What transform pins are”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs/#what-transform-pins-are)

Every input has a `transformInput` field. This field names the slot, or **pin**, in the processing config that receives the stream. Single-input resources bind one input to one pin. Multiview resources bind several inputs to separate pins.

Think of pins as labelled input jacks on a mixing desk. Your `encodingLive` template defines how many inputs it expects and what each one is called. The `transformInput` value on each flow input tells the platform which jack to plug that camera feed into. If you send four camera feeds, each one gets routed to a different named pin, and the template decides how they are arranged on screen.

### Get pin names

[Section titled “Get pin names”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs/#get-pin-names)

Pin names come from the config itself. After creating a config, retrieve it and read `status.inputPins[].name`. Use those exact values for `transformInput`. Presets and configs can change, so do not treat a pin name from an example as universal.

### Check multiple bindings

[Section titled “Check multiple bindings”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs/#check-multiple-bindings)

Each pin also reports `allowMultipleBindings`. If it’s `false`, only one input can target that pin, a second input pointed at the same pin is a conflict, not a merge. If it’s `true`, the template has been built to accept more than one input on that pin. Check this before assuming you can route two feeds to what looks like the same slot.

Inspect your created config before assigning an input to a pin.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/inputs/#what-comes-next)

- [Outputs](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/outputs): where encoded output goes.
- [Content, sources, and destinations](https://docs.mediakind.com/api-guides/how-to/media/content-and-sources): create the sources and content this page references.