# Source: https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates

# Templates

The live resource spec controls _what_ to do: which inputs to accept, where to send output, when to run. What it does not control is _how_ to encode. Codec settings, bitrate, output resolution, frame rate are complex, reusable settings that would be cumbersome to repeat in every resource you create.

Templates solve this. You upload your encoding settings once to the **Templates API**, give the template a name, and reference it from as many live resources as you need. This means you can share the same encoding configuration across many resources and update it in one place when settings change.

## Reference a template

[Section titled “Reference a template”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates/#reference-a-template)

Templates are managed through the Templates API and are completely separate from the Live API. Each time you upload a new version, the platform tracks it. The most recently uploaded version is automatically tagged `latest`.

Reference a template in a live resource spec like this:

```
"encodingLive": {
  "configRef": {
    "name": "my-encoding-template",
    "version": "latest"
  }
}
```

The `configRef.name` value must identify a customer config, not a MediaKind preset. Create the config from a preset first, then retrieve the config and read `status.inputPins` and `status.outputPins`. These pin names provide the `transformInput` and `transformOutput` values for the resource.

The `latest` tag is mutable. Pin `configRef.version` to a version hash for production workflows that must remain reproducible.

## Customize a resource configuration

[Section titled “Customize a resource configuration”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates/#customize-a-resource-configuration)

There are two ways to adjust a template’s behavior for a single resource, without changing the shared template itself.

### Use declared parameters

[Section titled “Use declared parameters”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates/#use-declared-parameters)

The first, and the one to prefer, is `configValues`. A template can optionally declare a set of named **parameters**, each one pointing at a specific location (or several) inside the template’s content. If a template declares a parameter, you can set it by name in `configValues` on the resource that references that template:

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

Add `configValues` only for parameters listed in the created config’s `spec.parameters`. Replace the placeholders with a declared name and its required leaf JSON value. You cannot invent a parameter name on the resource side. See [Manage templates](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates) for how a template declares them.

### Apply direct overrides

[Section titled “Apply direct overrides”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates/#apply-direct-overrides)

The second way is `configOverrides`, which applies JSON Patch operations directly against the template’s content, at any path, whether or not the template author intended it to be changed. It’s more powerful, since it isn’t limited to declared parameters, but it requires knowing the template’s internal structure in detail. If both `configValues` and `configOverrides` touch the same field, `configValues` is applied first and `configOverrides` applied second, so `configOverrides` wins.

Alongside `configRef`, `configOverrides`, and `configValues`, the same object accepts an `advancedSettingsName` field. This points at an advanced-settings configuration block that MediaKind manages on your behalf. You will not normally set this yourself. Leave it out unless MediaKind support has specifically asked you to reference one.

## Template types

[Section titled “Template types”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates/#template-types)

The template types used by the four documented Live API resource types are:

| Config type | Required by | Purpose |
| --- | --- | --- |
| `encodingLive` | All four resource types | Live encoding parameters |
| `multiviewComposing` | StaticMultiviewChannel, StaticMultiviewEvent (optional) | Composition layout for multiview, defined separately from encoding |
| `streamConditioning` | Optional on any | Stream conditioning parameters |

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/templates/#what-comes-next)

- [Build with the Templates API](https://docs.mediakind.com/api-guides/how-to/templates): every endpoint, presets, and the full config type reference.
- [Resource states](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states): `spec.state` vs. `status.state`.