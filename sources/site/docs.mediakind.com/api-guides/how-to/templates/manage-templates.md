# Source: https://docs.mediakind.com/api-guides/how-to/templates/manage-templates

# Manage templates

The Templates API stores reusable processing settings for Live API resources. A customer config belongs to your project; a MediaKind preset provides a starting point to copy into a config. Create an `encodingLive` config from a preset, inspect its input pins, and reference that config when you create a live resource. Each upload creates a version, and the most recently uploaded version is tagged `latest`.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#prerequisites)

You need a project name and an API token with permission to read presets and create configs. Replace `<PROJECT_NAME>` and `<YOUR_TOKEN>` in the requests below. See [Authentication and tokens](https://docs.mediakind.com/api-guides/getting-started/authentication) if you need a token.

## Configs and presets

[Section titled “Configs and presets”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#configs-and-presets)

| Resource | Managed by | How you use it |
| :-- | :-- | :-- |
| Preset | MediaKind | Read it and copy its content into a config with `spec.presetName`. |
| Config | Your project | Create and version it, then reference it from a live resource with `configRef.name`. |

Copying a preset creates a customer config. Later config uploads version that config independently of the preset.

## Browse available presets

[Section titled “Browse available presets”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#browse-available-presets)

List the encoding presets available to your project:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/presets/encodingLive" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Read the returned `value` array. Choose a preset by its `metadata.name` and `metadata.description`. Availability can differ by project, so use the returned name in the next request.

To inspect a preset before copying it, retrieve it by name:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/presets/encodingLive/<PRESET_NAME>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Replace `<PRESET_NAME>` with the name from the list. The preset’s `spec.config` contains the processing configuration. Presets are managed by MediaKind and are read-only.

## Create from a preset

[Section titled “Create from a preset”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#create-from-a-preset)

Copy your selected preset into a customer config named `my-encoding-template`. Set `spec.presetName` to the name returned by the preset list:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "description": "My Encoding Template created from a preset"
    },
    "spec": {
      "presetName": "<PRESET_NAME>"
    }
  }'
```

The response returns `200` or `201` with the config. Its content is copied from the named preset and can be versioned independently. A Live API resource references this customer config through `configRef.name`.

## Get the latest version

[Section titled “Get the latest version”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#get-the-latest-version)

Retrieve the created config to check its content and the pins available to live resources:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The response includes:

| Field | Description |
| --- | --- |
| `spec.config` | The template content. |
| `spec.parameters` | Array of declared parameters, if any. Each has a `name`, `paths`, and optional `description`. |
| `status.inputPins` | Array of available input pins. Each has a `name` and may include `allowMultipleBindings`. |
| `status.outputPins` | Array of available output pins. Each has a `name` and may include `allowMultipleBindings`. |

The `inputPins[].name` values are the exact strings to use as `transformInput` in Live API resource inputs. The `outputPins[].name` values map to `transformOutput` in resource outputs. The `spec.parameters[].name` values are the exact strings to use as keys in `configValues` when referencing this config from a live resource.

Check `allowMultipleBindings` on each pin before wiring up inputs. A pin with `allowMultipleBindings: false` accepts at most one binding. Only pins with `allowMultipleBindings: true` are built to accept more than one.

## Template types

[Section titled “Template types”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#template-types)

Call the types endpoint to list the configuration types supported by your project:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/types" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Each entry in the response’s `types` array describes a configuration type by `name` and `description`. The types you will use for the four documented Live API resource types (`liveChannels`, `liveEvents`, `staticMultiviewChannels`, `staticMultiviewEvents`) are:

| Config type | Used by |
| --- | --- |
| `encodingLive` | Required on every `LiveChannel`, `LiveEvent`, `StaticMultiviewChannel`, and `StaticMultiviewEvent` |
| `multiviewComposing` | Optional, `StaticMultiviewChannel` and `StaticMultiviewEvent` only |
| `streamConditioning` | Optional on any of the four resource types |

Other types may appear in the response. Confirm that the resource you plan to create supports a type before selecting it. The [Live API reference](https://docs.mediakind.com/api-reference/live-api) defines the supported template references for each live resource.

## Create or update a template

[Section titled “Create or update a template”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#create-or-update-a-template)

Use `PUT` at the config’s name to upload a complete `spec.config` object. If the name exists, the upload creates a new version identified by a hash. The new version receives the `latest` tag. Any tags supplied in `metadata.tags` move from their previous versions to this one.

For a custom configuration, start with the full `spec.config` returned by your created config. Its internal fields depend on the encoding engine and config type. Keep the existing processing configuration and change only settings supported by that config. The Templates API accepts the JSON object, but does not define the engine’s encoding fields.

Include `spec.parameters` with the upload if the config exposes parameters you want to retain. The request uses `spec.config` for a full configuration or `spec.presetName` to copy a preset; these are alternative request shapes.

After uploading, [retrieve the latest version](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#get-the-latest-version) and check `metadata.hash`, `spec`, and `status.inputPins` before referencing it from a live resource.

## Declare parameters on a config

[Section titled “Declare parameters on a config”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#declare-parameters-on-a-config)

Parameters expose selected fields so that each live resource can supply its own values while sharing the same config. Add `spec.parameters` alongside the complete `spec.config` when you upload a version.

Each parameter has:

| Field | Requirement | Purpose |
| :-- | :-- | :-- |
| `name` | Required | The key that a live resource uses in `configValues`. |
| `paths` | Required, at least one entry | Locations in the config where the parameter applies. Each path must be unique. |
| `description` | Optional | Explains the setting to someone using the config. |

Use paths from the actual config you are uploading. A parameter can target several paths when the same value applies in multiple places. Declaring a parameter does not supply the rest of the encoding configuration.

A config can omit `parameters`. If the created config already exposes the setting you need, use its existing parameter name in `configValues` instead of uploading a changed config. See [Set parameter values](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#set-parameter-values).

## List versions

[Section titled “List versions”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#list-versions)

Retrieve the saved revisions of a config:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template/versions" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Get a specific version

[Section titled “Get a specific version”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#get-a-specific-version)

Retrieve a version by its hash or by a tag name:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template/versions/latest" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template/versions/<HASH>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Delete a version

[Section titled “Delete a version”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#delete-a-version)

Delete the revision identified by `<HASH>`:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template/versions/<HASH>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Delete a template and all its versions

[Section titled “Delete a template and all its versions”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#delete-a-template-and-all-its-versions)

Delete the named config and its version history:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive/my-encoding-template" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Referencing templates in Live API resources

[Section titled “Referencing templates in Live API resources”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#referencing-templates-in-live-api-resources)

### Reference a config version

[Section titled “Reference a config version”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#reference-a-config-version)

Live API resources reference templates by name and version in the `configRef` field:

```
"encodingLive": {
  "configRef": {
    "name": "my-encoding-template",
    "version": "latest"
  }
}
```

The `latest` tag is mutable and follows the most recently uploaded version. Pin a specific version hash for production workflows that need reproducible configuration.

### Set parameter values

[Section titled “Set parameter values”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#set-parameter-values)

If the config declares parameters, set values for them by name with `configValues`. Read the created config first because preset content and declared parameters can change:

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

Add `configValues` only for names present in the created config’s `spec.parameters`. Replace the placeholders with a declared name and its required leaf JSON value. The reliable source for `transformInput` and `transformOutput` is the created config’s `status.inputPins` and `status.outputPins`. A preset response can expose pins, but the workflow does not depend on it.

`configValues` only accepts names the template has already declared as parameters, and only leaf JSON values (string, number, or boolean) per name. Values apply only to the resource that sets them; the shared template is not modified.

### Apply direct overrides

[Section titled “Apply direct overrides”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#apply-direct-overrides)

To modify a template’s content directly, at any path, whether or not the template author declared a parameter there, add `configOverrides` with JSON Patch operations instead:

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

Replace `<CONFIG_JSON_POINTER>` with the exact path in the referenced config and `<OVERRIDE_VALUE>` with the value, using the JSON type that field expects. A `replace` operation targets an existing field.

Overrides apply only to the resource that specifies them. The shared template is not modified. If a resource sets both `configValues` and `configOverrides`, `configValues` is applied first and `configOverrides` second, so an override always wins on any field they both touch.

Alongside `configRef`, `configOverrides`, and `configValues`, the reference object also accepts `advancedSettingsName`, which points at an advanced-settings configuration block managed by MediaKind. Leave it unset unless MediaKind support has asked you to reference one, since it is not a customer-authored setting.

## List all templates

[Section titled “List all templates”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#list-all-templates)

List all templates across all types:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Filter by type:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/templating/configs/encodingLive" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#what-goes-wrong)

- **The preset name is unavailable.** List presets in the target project and copy a returned name into `spec.presetName`.
- **The live resource uses the wrong pin.** Retrieve the created config and use the exact `status.inputPins[].name` value for `transformInput`.
- **A shared tag points to a new version.** Uploading moves the tags supplied in the request. Use a version hash when a live resource must keep a specific revision.

## Where to go deeper

[Section titled “Where to go deeper”](https://docs.mediakind.com/api-guides/how-to/templates/manage-templates/#where-to-go-deeper)

- [Live event walkthrough](https://docs.mediakind.com/api-guides/how-to/live/walkthrough): use a config to encode a single live input.
- [Multiview](https://docs.mediakind.com/api-guides/how-to/live/multiview): choose between combined composition and encoding or separate configs.
- [Templates API reference](https://docs.mediakind.com/api-reference/templates-api): inspect `TemplatingConfigPutSchema`, `ConfigParameterSchema`, and the version endpoints.