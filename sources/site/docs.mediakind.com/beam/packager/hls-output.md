# Source: https://docs.mediakind.com/beam/packager/hls-output

# HLS over TS specific output settings (HTTP Live Streaming)

Packager can enable the HLS (HTTP Live Streaming) mode over TS (Transport Streams). In this mode, you can configure the following parameters.

## General

[Section titled “General”](https://docs.mediakind.com/beam/packager/hls-output/#general)

You can configure for HLS over TS:

- [General parameters](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts#general)
- [HLS playlists](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts#hls)
- [Delivery](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts#delivery)

## HLS output type configuration

[Section titled “HLS output type configuration”](https://docs.mediakind.com/beam/packager/hls-output/#hls-output-type-configuration)

### Playlists

[Section titled “Playlists”](https://docs.mediakind.com/beam/packager/hls-output/#playlists)

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

[Section titled “Delivery”](https://docs.mediakind.com/beam/packager/hls-output/#delivery)

You can define **Access URL**.

For more details, see [Delivery](https://docs.mediakind.com/beam/packager/parameters/hls-over-ts#delivery).

## Content replacement

[Section titled “Content replacement”](https://docs.mediakind.com/beam/packager/hls-output/#content-replacement)

This feature is not currently used in MK.IO Beam.