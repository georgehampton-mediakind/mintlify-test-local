# Source: https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf

# HLS or DASH over CMAF

Below are the parameters accessed in the **HLS or DASH over CMAF** output.

## General

[Section titled “General”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#general)

### General

[Section titled “General”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#general-1)

| Parameter | Description |
| --- | --- |
| Output name | Output name. The name you want to use for the output. |
| Naming scheme | Naming scheme for DASH manifests. 
Timeline mode: every fragment is listed and requested by the player. |
| trun v1 | Enable trun version 1 for fragments allowing negative CTO (Composition Time Offset) values |
| Enable thumbnails | Enable thumbnails generation |

**Related information** 
[HLS or DASH over CMAF output configuration](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output)

## Dash

[Section titled “Dash”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#dash)

### Manifest

[Section titled “Manifest”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#manifest)

| Parameter | Description |
| --- | --- |
| Name | Name of the manifest/playlist generated for the current output.. Default value is index (for HLS) or manifest (for DASH). If a filtering has been applied to the manifest/playlist, it is recommended to use a name that clearly identifies the defined filtering.<br>**Important:** The manifest name must be unique and different from any other manifest name. |

#### Filtering - Stream characteristics

[Section titled “Filtering - Stream characteristics”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#filtering---stream-characteristics)

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

## HLS

[Section titled “HLS”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#hls)

### Playlist

[Section titled “Playlist”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#playlist)

| Parameter | Description |
| --- | --- |
| Name | Name of the manifest/playlist generated for the current output. Default value is index (for HLS) or manifest (for DASH).<br>**Recommendation:** If a filtering has been applied to the manifest/playlist, it is recommended to use a name that clearly identifies the defined filtering. |

**Important:** The manifest name must be unique and different from any other manifest name.

#### Filtering - Stream characteristics

[Section titled “Filtering - Stream characteristics”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#filtering---stream-characteristics-1)

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

## Delivery

[Section titled “Delivery”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#delivery)

### General parameters

[Section titled “General parameters”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#general-parameters)

| Parameter | Description |
| --- | --- |
| Access URL | Portion of the complete access URL that defines the service.<br>Prefer URI unreserved characters (alphanumerical characters plus (, ), -, \_, .). Declaring a subpath (a/b) is possible but may impact performance.<br>Example: `https://[Server IP or FQDN]/packaging/[Output Access URL]/[Live Packaging Service Access URL]/[index.m3u8 OR manifest OR manifest.mpd]` |

## Common encryption (CENC)

[Section titled “Common encryption (CENC)”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#common-encryption-cenc)

### Fixed key generation mode

[Section titled “Fixed key generation mode”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#fixed-key-generation-mode)

| Parameter | Description |
| --- | --- |
| Key | AES key used for encrypting the content. |
| Key ID | Identifier used to uniquely identify the key within the system. |
| PlayReady | Enables PlayReady encryption. |
| Widevine | Enables Widevine encryption. |
| Fairplay | Enables Fairplay encryption. |

PlayReady mode enabled:

| Parameter | Description |
| --- | --- |
| License acquisition URL | License acquisition URL to be used by the player. |
| License UI URL | Nonsilent license acquisition URL to be used by the player. |
| Domain service ID | Domain service identifier.<br>Microsoft provides a unique identifier to the PlayReady technology supplier. |

Widevine mode enabled:

| Parameter | Description |
| --- | --- |
| Provider | Name of the content provider. Also used as the name of the signer. |
| Policy | Usage rules for the encypted output. |

### Compatible CPIX ext. key

[Section titled “Compatible CPIX ext. key”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#compatible-cpix-ext-key)

| Parameter | Description |
| --- | --- |
| Key server URL | URL of the server that will deliver the encryption keys. |
| PlayReady | Enables PlayReady encryption. |
| Widevine | Enables Widevine encryption. |
| Fairplay | Enables Fairplay encryption. |
| Mediaroom | Enables Mediaroom encryption. |
| Clearkey | Enables Clearkey encryption. |

**Key rotation**

| Parameter | Description |
| --- | --- |
| Enable key rotation | Enable key rotation. Leaving key rotation disabled means a single key is requested and used for the whole output. |
| Period | Key rotation period. Choose a value and a unit for the period |
| Start time | Date and time of the first occurrence. All crypto periods are aligned on this date and time, modulo the period: it fixes the phase of the period grid rather than the timestamp of an actual, one-time key request. |
| Time spread | Duration (in seconds) of the time window for spreading key requests out in time. The actual offset is a pseudo-random value in that window, so it is stable for a given output but different across outputs — this staggers key requests instead of having every channel hit the key server at the same instant. |
| Period mode | Choose mode for rotation keys. Possible values are **Index** and **Start/end** (default). In _Index_ mode, the CPIX request/response identifies a crypto period by an integer index. In _Start/end_ mode, it is identified by its actual validity window. |
| Number of key periods to request | Number of key periods to request in advance from the key server. Requesting more than one fetches the current key plus the upcoming one(s) from the key server in a single round trip; the extra keys are cached and reused so no additional request is needed when the next crypto period starts. |

**Key usage rules**

| Parameter | Description |
| --- | --- |
| Track filters/Filtering | Build a filter to select the streams that will be included in Cpix track. 
Applicable filters: streamType (video or audio), width (in pixels), height (in pixels) and codec (H.264 or HEVC) |
| Track type | Type of a track associated to the track. 
Only AZaz09 \_,;:@ and space character are accepted |
| Labels | List of labels associated to the track 
Only AZaz09 \_,;:@ and space character are accepted |
| Disable audio encryption | Disables audio encryption for the output. 
This setting overrides any encryption setting received from the key provider. |

**Related information** 
See [CPIX key rotation and track keys](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#cpix-key-rotation-and-track-keys) below for details on how these settings shape the key requests sent to the key server.

## Common encryption (CBCS)

[Section titled “Common encryption (CBCS)”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#common-encryption-cbcs)

### Fixed key generation mode

[Section titled “Fixed key generation mode”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#fixed-key-generation-mode-1)

| Parameter | Description |
| --- | --- |
| Key | AES key used for encrypting the content. Unit: hexadecimal. |
| Initialization vector | Initialization vector to be used with the key. |
| Key ID | Identifier used to uniquely identify the key within the system. |
| PlayReady | Enables PlayReady encryption. |
| Widevine | Enables Widevine encryption. |
| Fairplay | Enables Fairplay encryption. |

PlayReady mode enabled:

| Parameter | Description |
| --- | --- |
| License acquisition URL | License acquisition URL to be used by the player. |
| License UI URL | Nonsilent license acquisition URL to be used by the player. |
| Domain service ID | Domain service identifier. 
Microsoft provides a unique identifier to the PlayReady technology supplier. |

Widevine mode enabled:

| Parameter | Description |
| --- | --- |
| Provider | Name of the content provider. Also used as the name of the signer. |
| Policy | Usage rules for the encypted output. |

Fairplay mode enabled:

| Parameter | Description |
| --- | --- |
| URI | URI to be used by the player. |
| Key format | Specify how the key is declared in the resource specified in the URL. |

**Key usage rules**

| Parameter | Description |
| --- | --- |
| Disable audio encryption | Disables audio encryption for the output. 
This setting overrides any encryption setting received from the key provider. |

### Compatible CPIX ext. key

[Section titled “Compatible CPIX ext. key”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#compatible-cpix-ext-key-1)

| Parameter | Description |
| --- | --- |
| Key server URL | URL of the server that will deliver the encryption keys. |
| PlayReady | Enables PlayReady encryption. |
| Widevine | Enables Widevine encryption. |
| Fairplay | Enables Fairplay encryption. |
| Mediaroom | Enables Mediaroom encryption. |
| Clearkey | Enables Clearkey encryption. |

**Key rotation**

| Parameter | Description |
| --- | --- |
| Enable key rotation | Enable key rotation. Leaving key rotation disabled means a single key is requested and used for the whole output. |
| Period | Key rotation period. Choose a value and a unit for the period |
| Start time | Date and time of the first occurrence. All crypto periods are aligned on this date and time, modulo the period: it fixes the phase of the period grid rather than the timestamp of an actual, one-time key request. |
| Time spread | Duration (in seconds) of the time window for spreading key requests out in time. The actual offset is a pseudo-random value in that window, so it is stable for a given output but different across outputs — this staggers key requests instead of having every channel hit the key server at the same instant. |
| Period mode | Choose mode for rotation keys. Possible values are **Index** and **Start/end** (default). In _Index_ mode, the CPIX request/response identifies a crypto period by an integer index. In _Start/end_ mode, it is identified by its actual validity window. |
| Number of key periods to request | Number of key periods to request in advance from the key server. Requesting more than one fetches the current key plus the upcoming one(s) from the key server in a single round trip; the extra keys are cached and reused so no additional request is needed when the next crypto period starts. |

**Key usage rules**

| Parameter | Description |
| --- | --- |
| Track filters/Filtering | Build a filter to select the streams that will be included in Cpix track. 
Applicable filters: streamType (video or audio), width (in pixels), height (in pixels) and codec (H.264 or HEVC) |
| Track type | Type of a track associated to the track. 
Only AZaz09 \_,;:@ and space character are accepted |
| Labels | List of labels associated to the track 
Only AZaz09 \_,;:@ and space character are accepted |
| Disable audio encryption | Disables audio encryption for the output. 
This setting overrides any encryption setting received from the key provider. |

## CPIX key rotation and track keys

[Section titled “CPIX key rotation and track keys”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#cpix-key-rotation-and-track-keys)

The **Compatible CPIX ext. key** provider (CENC or CBCS) delegates key generation to an external key server through the [DASH-IF CPIX](https://dashif.org/guidelines/cpix/) protocol. Two independent CPIX mechanisms are available on top of a single fixed key: **key rotation**, which periodically requests a new key over time, and **track keys**, which requests distinct keys for different tracks of the same output.

### Key rotation

[Section titled “Key rotation”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#key-rotation)

When key rotation is enabled, the packager requests a new key from the key server for every crypto period instead of a single key for the whole output:

- The **period** and its **unit** set the crypto period duration (converted to seconds for the key request).
- The **start time** anchors the period grid: period boundaries fall at `start time + n × period`, for every integer `n`. Only the start time’s position _within_ one period matters.
- The **time spread** adds jitter on top of that grid. Rather than requesting a key exactly on the period boundary, the packager offsets the request by a pseudo-random duration somewhere inside the spread window. This avoids many outputs sharing the same period and start time from all hitting the key server at the same instant, while keeping the offset stable for a given output.
- The **period mode** controls how the current crypto period is identified in the CPIX exchange:
 - **Index** — the request/response carries an integer period number.
 - **Start/end** (default) — the request/response carries the period’s actual validity window.
- The **number of key periods to request** lets the packager fetch more than the current key in one CPIX round trip — the current key plus one or more upcoming (lookahead) keys.

Setting the crypto period to 0 (or leaving key rotation disabled) means a single key is requested and used for the entire output — none of the other key rotation parameters apply in that case.

### Track keys

[Section titled “Track keys”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#track-keys)

By default, a single CPIX key applies to every track of an output. Declaring one or more entries in **Tracks** requests one key per entry instead, so different tracks (e.g. UHD video vs. SD video vs. audio) can be encrypted with different keys — a common requirement for tiered DRM policies (for example restricting 4K playback to devices with a stronger security level).

Each track entry combines two independent things:

- **Track type** and **Labels** are sent to the key server as the CPIX usage rule for that track’s key. Both are free-form strings with no built-in normalization — their meaning is a convention agreed with the key server.
- **Filtering** is evaluated locally by the packager only — it is never sent to the key server — to decide which of the output’s actual streams that track key applies to. It supports `streamType` (video or audio), `width` and `height` (in pixels), and `codec` (H.264 or HEVC). The first track whose filter matches a given stream wins; a track without any filtering has no local restriction.

**Important:** the key server may return a different key ID and key periods than the one the packager sent for a given track — always match tracks and keys on the identity returned in the CPIX response, not on the request.

### Combining key rotation with track keys

[Section titled “Combining key rotation with track keys”](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#combining-key-rotation-with-track-keys)

Key rotation and track keys can be combined: the packager then requests one key per **(track, crypto period)** combination — for example, 2 tracks with 3 lookahead periods results in 6 keys in a single CPIX exchange. In that case, each `<ContentKeyUsageRule>` additionally carries a `<KeyPeriodFilter periodId="…"/>` element tying that specific track’s key to the crypto period it is valid for.

**Related information** 
[HLS or DASH over CMAF output configuration](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output) 
[HLS over TS output configuration](https://docs.mediakind.com/beam/packager/hls-output)