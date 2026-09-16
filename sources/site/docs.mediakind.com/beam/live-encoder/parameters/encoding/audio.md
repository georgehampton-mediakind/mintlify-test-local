# Source: https://docs.mediakind.com/beam/live-encoder/parameters/encoding/audio

# Audio encoding parameters

| Parameter | Description |
| --- | --- |
| Codec | Specify the codec for the audio encoding. 'Passthrough' is not supported when audio input is uncompressed. For PCM or Dolby E Passthrough, select 'SMPTE302 / Dolby E Passthrough'. |

## Pass-through specific parameters

[Section titled “Pass-through specific parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/audio/#pass-through-specific-parameters)

| Parameter | Description |
| --- | --- |
| Insert audio frames on signal loss | Generate audio frames according to the input loss management configured in Media processing tab (silence, 1kHz tone) when the input source is lost.<br>**Note:** If you activate this option, associated monitoring statistics are available from the [Service statistics](https://docs.mediakind.com/beam/live-encoder/monitor-statistics) (see example below). |
| Glitch supression | Only available if **Insert audio frames on signal loss** is checked.<br>Repeat 3 audio frames before enabling input loss audio frames generation. |
| Generate audio frames if no source at start | Only available if **Insert audio frames on signal loss** is checked.<br>If the audio service is missing at startup, generate audio frames according to the input loss management configured in Media processing tab (silence, 1kHz tone). Frames may be encoded in a different codec from the real audio.<br>**Note:** Applies to both use cases where Live Encoder is configured either with SDI or as IP input. |

![el encoding audio passthrough silence stats](https://docs.mediakind.com/_astro/el_encoding_audio_passthrough-silence_stats.OjLxciXo_1ynC68.webp) _Example of audio silence generation statistics_

## SMPTE-302 / Dolby E Pass-through additional parameters

[Section titled “SMPTE-302 / Dolby E Pass-through additional parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/audio/#smpte-302--dolby-e-pass-through-additional-parameters)

| Parameter | Description |
| --- | --- |
| Data Width | Data width of AES audio sample to be encoded.<br>Possible values: **Follow input**, **16-bit**, **20-bit**, or **24-bit** |

## MPEG-1 Layer II, Dolby Digital, Dolby Digital Plus, AAC, HE-AAC, HE-AAC v2 parameters

[Section titled “MPEG-1 Layer II, Dolby Digital, Dolby Digital Plus, AAC, HE-AAC, HE-AAC v2 parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/audio/#mpeg-1-layer-ii-dolby-digital-dolby-digital-plus-aac-he-aac-he-aac-v2-parameters)

| Parameter | Description |
| --- | --- |
| Watermarking | Type of watermarking insertion to use |
| Profile | Profile to use with AAC codec |
| Channels mode | Number of audio channels in the encoded audio track |
| Bit rate | Bandwidth used to encode the audio stream |
| Sampling rate | Number of audio samples per second defined in Hz |
| Frame rate | Frame rate as defined in video input |
| Blackout | This blackout configuration will be applied to the related audio/video/subtitles stream. |

## Dolby Digital additional parameters

[Section titled “Dolby Digital additional parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/audio/#dolby-digital-additional-parameters)

| Parameter | Description |
| --- | --- |
| Dialog normalization | Metadata parameter that controls playback gain.<br>Possible values: **Auto** or, from **\-1 dB** to **\-31 dB.** **Auto** means that no processing will be done on the input. |
| Dolby Surround mode | Decoders can use this flag to automatically switch on Pro Logic decoding. |
| DRC Line Mode Profile | The Dynamic Range Control restricts the signal's absolute peak level for a decoder using the line mode. |
| DRC RF Mode Profile | The Dynamic Range Control restricts the signal's absolute peak level for decoder using the RF mode. |
| DC highpass filter | A DCblocking 3Hz highpass filter applied on the main Dolby channel. Used to remove DC offsets in the program audio. Only switch off in exceptional circumstances. |

**Related information** 
[Configure the audio encoding parameters](https://docs.mediakind.com/beam/live-encoder/configure/encoding)