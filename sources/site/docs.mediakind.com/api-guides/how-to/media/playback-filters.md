# Source: https://docs.mediakind.com/api-guides/how-to/media/playback-filters

# Playback filters

A filter publishes a shaped version of an asset without creating a new one. Use a filter when the manifest should expose only part of the content, only certain tracks, or a different startup quality. Filters shape the manifest at playback time; they do not reprocess content. The asset holds the full media, the filter describes the subset, and the streaming locator applies the filter when it publishes.

## Choosing the filter scope

[Section titled “Choosing the filter scope”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#choosing-the-filter-scope)

There are two scopes, and the choice is about reuse.

| Scope | Path | Use when |
| :-- | :-- | :-- |
| Asset filter | `.../media/assets/{asset_name}/assetFilters/{filter_name}` | The rule belongs to one title or archive. |
| Account filter | `.../media/accountFilters/{filter_name}` | The same rule should apply across many assets in the project. |

Both use the same `MediaFilterProperties` body, which supports three controls: `presentationTimeRange` to clip a time window, `tracks` to select tracks, and `firstQuality` to set the startup bitrate.

## Clip a time window

[Section titled “Clip a time window”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#clip-a-time-window)

This asset filter exposes only the section from 10 to 70 seconds. With `timescale` set to `1`, the timestamps are in seconds.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/source-video/assetFilters/highlights" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "presentationTimeRange": {
        "timescale": 1,
        "startTimestamp": 10,
        "endTimestamp": 70
      }
    }
  }'
```

`timescale` is the number of units per second. It defaults to `10000000` (100-nanosecond units), so set it to `1` when you want to work in whole seconds. The same block also supports the live-only fields `presentationWindowDuration` (the rewind window) and `liveBackoffDuration` (the delay from the live edge).

## Select tracks

[Section titled “Select tracks”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#select-tracks)

This account filter includes audio tracks that are not English, and video tracks between 3 and 5 megabits per second.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/accountFilters/non-english-mid-bitrate" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "tracks": [
        {
          "trackSelections": [
            { "property": "Type", "operation": "Equal", "value": "audio" },
            { "property": "Language", "operation": "NotEqual", "value": "en" }
          ]
        },
        {
          "trackSelections": [
            { "property": "Type", "operation": "Equal", "value": "video" },
            { "property": "Bitrate", "operation": "Equal", "value": "3000000-5000000" }
          ]
        }
      ]
    }
  }'
```

The selectable properties are `Type` (`video`, `audio`, `text`), `Name`, `Language` (an RFC 5646 tag such as `en` or `en-US`), `FourCC` (a codec such as `avc1` or `mp4a`), and `Bitrate` (a single value or a range like `3000000-5000000`). Values are case-insensitive, and each property uses an `operation` of `Equal` or `NotEqual`.

The nesting controls the logic, and it is easy to misread:

- Conditions inside one `trackSelections` array are combined with **AND**.
- Entries in the top-level `tracks` array are combined with **OR**.

So the filter above means “(audio AND not English) OR (video AND 3-5 Mbps)”.

## Set the startup quality

[Section titled “Set the startup quality”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#set-the-startup-quality)

Add `firstQuality` to start HLS playback near a target bitrate. The closest available rung in the ladder is used if the exact bitrate is absent.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/accountFilters/high-start-quality" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "firstQuality": { "bitrate": 5000000 }
    }
  }'
```

## Apply the filter

[Section titled “Apply the filter”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#apply-the-filter)

Add a filter name to the streaming locator’s `filters` list to apply it to playback through that locator. The list accepts both asset and account filters.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/streamingLocators/highlights-locator" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "properties": {
      "assetName": "source-video",
      "streamingPolicyName": "Predefined_ClearStreamingOnly",
      "filters": ["highlights"]
    }
  }'
```

You can also request named filters in the manifest URL with `filter=`, using a semicolon-separated list of asset or account filter names. For example, `filter=highlights` applies the named filter to that playback request. See [Streaming locators](https://docs.mediakind.com/mkio/understanding/core-concepts/locators) for the complete manifest URL syntax.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#what-goes-wrong)

- **The filter has no effect.** Confirm that the locator lists it in `filters` or that the manifest URL requests it with `filter=`. Creating a filter alone does not apply it to playback.
- **Time values look wrong.** Without `timescale: 1`, timestamps are in 100-nanosecond units by default. Set `timescale` to match the unit you intend.
- **A delete is rejected.** A filter cannot be deleted while an active streaming locator still references it. Remove it from the locator first.

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/source-video/assetFilters/highlights" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/media/playback-filters/#what-comes-next)

- [Streaming and publishing](https://docs.mediakind.com/api-guides/how-to/media/publishing): apply filters at publication time.
- [Assets](https://docs.mediakind.com/api-guides/how-to/media/assets): use an asset filter when the rule belongs to one asset.