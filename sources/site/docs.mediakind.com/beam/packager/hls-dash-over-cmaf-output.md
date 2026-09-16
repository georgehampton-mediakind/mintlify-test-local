# Source: https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output

# HLS or DASH over CMAF specific output settings

The CMAF (Common Media Application Format) is a fMP4 based format that is used as a common format for both HLS and DASH content delivery. A single copy of the media segments is needed, which leads to significant gains in terms of storage and bandwidth.

## General

[Section titled “General”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#general)

You can configure for both HLS and DASH:

- [General parameters](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf)
- [DASH Manifests](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf#dash)
- [HLS Playlists](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf#hls)
- [Delivery](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf#delivery)
- [Encryption](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf#common-encryption-cenc)

## DASH output type configuration

[Section titled “DASH output type configuration”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#dash-output-type-configuration)

### Manifests

[Section titled “Manifests”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#manifests)

By default, the output manifest is delivered without any specific bitrate filtering. Depending on your delivery needs, you can adjust the bitrate filtering on your manifest and add manifests with variant filtering parameters.

**Stream characteristics** filtering for **DASH over CMAF** outputs can be based on:

- Bitrate in kbps - for Video/Audio/Subtitle streams filters.

 ![MFVP stream char filtering bitrate](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_bitrate.CZikAlL0_2v7Bo2.webp)

- Codec (H.264 or HEVC) - for the Video streams filter.

 ![MFVP stream char filtering codec](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_codec.BgfGAL7Q_PjRea.webp)

- Language (H.264 or HEVC) - for the audio streams filter.

 ![MFVP stream char filtering language](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_language.DkpJJM2s_KUmkt.webp)

- Width (pixels) or Height (pixels) for the Thumbnail streams filter.

 ![MFVP stream char filtering thumbnail](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_thumbnail.L0TK6Gl7_Yyhqs.webp)

## HLS output type configuration

[Section titled “HLS output type configuration”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#hls-output-type-configuration)

### Playlists

[Section titled “Playlists”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#playlists)

By default, the output manifest is delivered without any specific bitrate filtering. Depending on your delivery needs, you can adjust the bitrate filtering on your manifest and add manifests with variant filtering parameters.

**Stream characteristics** filtering for **HLS** outputs can be based either on:

- Bitrate in kbps - for Video/Audio/Subtitle streams filters.

 ![MFVP stream char filtering bitrate](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_bitrate.CZikAlL0_2v7Bo2.webp)

- Codec (H.264 or HEVC) - for the Video streams filter.

 ![MFVP stream char filtering codec](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_codec.BgfGAL7Q_PjRea.webp)

- Language (H.264 or HEVC) - for the audio streams filter.

 ![MFVP stream char filtering language](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_language.DkpJJM2s_KUmkt.webp)

- Width (pixels) or Height (pixels) for the Thumbnail streams filter.

 ![MFVP stream char filtering thumbnail](https://docs.mediakind.com/_astro/MFVP_stream_char_filtering_thumbnail.L0TK6Gl7_Yyhqs.webp)

## Delivery

[Section titled “Delivery”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#delivery)

You can define **Access URL** for playlist, manifests and segments.

For more details, see [Delivery](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf#delivery).

## Encryption

[Section titled “Encryption”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#encryption)

By default, the output manifest is published without any specific encryption. To configure output encryption parameters, you can choose between two encryption modes: CENC or CBCS.

You can also disable audio encryption. For more details, see [Key usage rules](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf#common-encryption-cenc).

| | CENC | CBCS |
| :-- | :-- | :-- |
| **Fixed keys** | | |
| PlayReady | X | X |
| Widevine | X | X |
| Fairplay | X | X |
| **External keys (compatible CPIX)** | | |
| PlayReady | X | X |
| Widevine | X | X |
| MediaRoom | X | X |
| Fairplay | X | X |
| Clearkey | X | X |

## Content replacement

[Section titled “Content replacement”](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output/#content-replacement)

This feature is not currently used in MK.IO Beam.