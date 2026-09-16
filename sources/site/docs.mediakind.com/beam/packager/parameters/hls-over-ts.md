# Source: https://docs.mediakind.com/beam/packager/parameters/hls-over-ts

# HLS over TS

Below are the parameters accessed in the **HLS over TS** output:

## General

[Section titled “General”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#general)

| Parameter | Description |
| --- | --- |
| Output name | Output name. The name you want to use for the output. |
| Naming scheme | Timeline |

## HLS

[Section titled “HLS”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#hls)

### Playlist

[Section titled “Playlist”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#playlist)

| Parameter | Description |
| --- | --- |
| Name | Name of the manifest/playlist generated for the current output. Default value is index (for HLS) or manifest (for DASH). If a filtering has been applied to the manifest/playlist, it is recommended to use a name that clearly identifies the defined filtering.<br>**Important:** The manifest name must be unique and different from any other manifest name. |

#### Filtering - Stream characteristics

[Section titled “Filtering - Stream characteristics”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#filtering---stream-characteristics)

| Parameter | Description |
| --- | --- |
| Audio streams filter | Build a filter to select the audio streams that will be included in manifest/playlist. 
Applicable filters: bitrate in kbps and Language |
| Video streams filter | Build a filter to select the video streams that will be included in manifest/playlist. 
Applicable filters: bitrate in kbps, codec (H.264 or HEVC) and No video |
| Subtitle streams filter | Build a filter to select the subtitle streams that will be included in manifest/playlist. 
Applicable filters: bitrate in kbps and Language |
| Thumbnail streams filter | Build a filter to select the thumbnail streams that will be included in manifest/playlist. 
Applicable filters: width and height in pixels |

#### Filtering - Bitrate

[Section titled “Filtering - Bitrate”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#filtering---bitrate)

| Parameter | Description |
| --- | --- |
| Audio streams filter | Build a filter to select the audio streams that will be included in manifest/playlist. 
Applicable filters: bitrate in kbps and Language |
| Video streams filter | Build a filter to select the video streams that will be included in manifest/playlist. 
Applicable filters: bitrate in kbps, codec (H.264 or HEVC) and No video |
| Subtitle streams filter | Build a filter to select the subtitle streams that will be included in manifest/playlist. 
Applicable filters: bitrate in kbps and Language |

#### Filtering - Stream index

[Section titled “Filtering - Stream index”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#filtering---stream-index)

| Parameter | Description |
| --- | --- |
| Indexes | Range or comma separated list of stream indexes, based on the stream position in the input. 
Index of the first stream is '0'. |

## Delivery

[Section titled “Delivery”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#delivery)

### General parameters

[Section titled “General parameters”](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts/#general-parameters)

| Parameter | Description |
| --- | --- |
| Access URL | Portion of the complete access URL that defines the service.<br>Prefer URI unreserved characters (alphanumerical characters plus (, ), -, \_, .). Declaring a subpath (a/b) is possible but may impact performance.<br>Example: `https://[Server IP or FQDN]/packaging/[Output Access URL]/[Live Packaging Service Access URL]/[index.m3u8 OR manifest OR manifest.mpd]` |

**Related information** 
[HLS or DASH over CMAF output configuration](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output) 
[HLS over TS output configuration](https://docs.mediakind.com/beam/packager/hls-output)