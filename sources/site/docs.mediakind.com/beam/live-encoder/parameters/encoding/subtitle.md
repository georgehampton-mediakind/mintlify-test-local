# Source: https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle

# Subtitle encoding parameters

## General parameters

[Section titled “General parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#general-parameters)

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles. DVBTTML and DASHIFTTML are only valid when ITV export type is used. Closed caption CEA 608 is only valid when both IPTV export type and 25i/50p to 29.97i/59.94p frame rate conversion are used. |
| Blackout | This blackout configuration will be applied to the related audio/video/subtitles stream. |

## Teletext subtitles

[Section titled “Teletext subtitles”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-subtitles)

### Teletext Pass-through

[Section titled “Teletext Pass-through”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-pass-through)

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles, in this case, **Pass-through**. |
| Override subtitle language in the teletext descriptor | Override language information (ISO639 language triplet) of a selected subtitle. The subtitle selected by the magazine and page should be already present in the descriptor |

### SDI Teletext Pass-through

[Section titled “SDI Teletext Pass-through”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#sdi-teletext-pass-through)

Only available with SDI and SDI/IP input.

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles, in this case, **Pass-through**. |
| Adjust display height | Only available with **DVB-Subtitles** input subtitles.<br>Adjust the display height for NTSC resolution. If not checked, optimized for PAL resolution. |

#### Teletext descriptor

[Section titled “Teletext descriptor”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-descriptor)

| Parameter | Description |
| --- | --- |
| Language | Input language to encode in ISO 639 format (3letter code, lowercase). If not present in the input stream, the subtitles will not be transcoded. |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |
| Field | Closed caption field as defined by the standard. Only one of each value is allowed. |

### DVB-Subtitles with Teletext subtitles input

[Section titled “DVB-Subtitles with Teletext subtitles input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dvb-subtitles-with-teletext-subtitles-input)

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles, in this case, **DVB-Subtitles**. |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |

### DVB-TTML with Teletext subtitles input

[Section titled “DVB-TTML with Teletext subtitles input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dvb-ttml-with-teletext-subtitles-input)

Only available with **Teletext** input subtitles and **Internet TV** export type.

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitle, in this case, **DVB-TTML**. |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |
| Profile | Specify the DVB TTML processor profile. |
| Purpose | Purpose of the subtitle service. |
| Suitable for TTS | Boolean value that indicates whether the subtitles are suitable for texttospeech (TTS). If the value is not set, this means unknown suitability. |
| Forced language | Overwrites the language of the audio track. If not set the original language is kept.<br>Format: 3 alphanumeric characters |

### DASH-IF-TTML with Teletext subtitles input

[Section titled “DASH-IF-TTML with Teletext subtitles input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dash-if-ttml-with-teletext-subtitles-input)

Only available with **Teletext** input subtitles and **Internet TV** export type.

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitle, in this case, **DASHIF-TTML**. |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |
| Profile | Specify the DASHIF TTML processor profile. |
| Role | Role of the subtitle service.

- Main: Programme uses subtitles to translate foreign soundtrack or parts of soundtrack into preferred language.

- Alternate: Subtitles providing a translation of the main audio of the programme.

- Commentary: Subtitles providing additional information for the programme.

- Forcehardofhearing: Subtitles for the hard of hearing in the same language as the programme.

- Subtitle: Generate subtitles.

 |
| Forced language | Overwrites the language of the audio track. If not set the original language is kept.<br>Format: 3 alphanumeric characters |

### DVB-TTML with CEA-608/CEA-708 Closed Captions input

[Section titled “DVB-TTML with CEA-608/CEA-708 Closed Captions input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dvb-ttml-with-cea-608cea-708-closed-captions-input)

Only available with **CEA-608/CEA-708 Closed Captions** input subtitles and **Internet TV** export type.

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitle, in this case, **DVB-TTML**. |
| Profile | Specify the DVB TTML processor profile. |
| Purpose | Purpose of the subtitle service. |
| Suitable for TTS | Boolean value that indicates whether the subtitles are suitable for texttospeech (TTS). If the value is not set, this means unknown suitability. |
| Forced language | Overwrites the language of the audio track. If not set the original language is kept.<br>Format: 3 alphanumeric characters |
| Closed caption service | Specify the CEA608 or CEA708 service number.<br>Possible values for CEA-608: cc\_1, cc\_2, cc\_3 and cc\_4.<br>Possible values for CEA-708: service\_1, service \_2, service \_3 and service \_4 |

### DASHIF-TTML with CEA-608/CEA-708 Closed Captions input

[Section titled “DASHIF-TTML with CEA-608/CEA-708 Closed Captions input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dashif-ttml-with-cea-608cea-708-closed-captions-input)

Only available with **CEA-608/CEA-708 Closed Captions** input subtitles and **Internet TV** export type.

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitle, in this case, **DASHIF-TTML**. |
| Profile | Specify the DASHIF TTML processor profile. |
| Role | Role of the subtitle service.

- Main: Programme uses subtitles to translate foreign soundtrack or parts of soundtrack into preferred language.

- Alternate: Subtitles providing a translation of the main audio of the programme.

- Commentary: Subtitles providing additional information for the programme.

- Forcehardofhearing: Subtitles for the hard of hearing in the same language as the programme.

- Subtitle: Generate subtitles.

 |
| Forced language | Overwrites the language of the audio track. If not set the original language is kept.<br>Format: 3 alphanumeric characters |
| Closed caption service | Specify the CEA608 or CEA708 service number.<br>Possible values for CEA-608: cc\_1, cc\_2, cc\_3 and cc\_4.<br>Possible values for CEA-708: service\_1, service \_2, service \_3 and service \_4 |

### Closed caption CEA 608

[Section titled “Closed caption CEA 608”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#closed-caption-cea-608)

Only available with **Teletext** subtitle input, **IPTV** export type and **25i/50p to 29.97i/59.94p** frame rate conversion.

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles, in this case, **Closed caption CEA 608**. |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |
| Field | Closed caption field as defined by the standard. Only one of each value is allowed. |

## DVB-Subtitles Pass-through

[Section titled “DVB-Subtitles Pass-through”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dvb-subtitles-pass-through)

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles, in this case, **Pass-through**. |
| Forced language | Overwrites the language of the audio track. If not set the original language is kept.. |
| Adjust display height | Only available with **DVB-Subtitles** input subtitles.<br>Adjust the display height for NTSC resolution. If not checked, optimized for PAL resolution. |

## DVB-Subtitles with SCTE-27 subtitles input

[Section titled “DVB-Subtitles with SCTE-27 subtitles input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dvb-subtitles-with-scte-27-subtitles-input)

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to convert the subtitles, in this case, **DVB-Subtitles**. |
| Forced language | Overwrites the language of the audio track. If not set the original language is kept.. |

## DVB-Teletext with ARIB B24 subtitles input

[Section titled “DVB-Teletext with ARIB B24 subtitles input”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#dvb-teletext-with-arib-b24-subtitles-input)

You should define the following parameters:

- Codec used to convert the subtitle, in this case, **DVB-Teletext**.|
- [Selected stream](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#selected-stream-arib-b24-subtitles-input-only): Selection of the stream to encode in the input subtitle. One subtitle encoding section must be defined per language.
- [Teletext encoding](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-descriptor): Configuration of the encoding of the teletext stream.
- [Teletext descriptor](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-encoding): Configuration of the descriptor of the teletext stream.

### Selected stream

[Section titled “Selected stream”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#selected-stream)

| Parameter | Description |
| --- | --- |
| Language | Input language to encode in ISO 639 format (3letter code, lowercase). If not present in the input stream, the subtitles will not be transcoded. |

### Teletext encoding

[Section titled “Teletext encoding”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-encoding)

| Parameter | Description |
| --- | --- |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |

### Teletext descriptor

[Section titled “Teletext descriptor”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#teletext-descriptor-1)

| Parameter | Description |
| --- | --- |
| Language | Input language to encode in ISO 639 format (3letter code, lowercase). If not present in the input stream, the subtitles will not be transcoded. |
| Magazine | 1digit magazine number (18) used to identify the Teletext service. |
| Page | Page number (099) used to identify the Teletext service. |
| Field | Closed caption field as defined by the standard. Only one of each value is allowed. |

**Related information** 
[Configure subtitle encoding](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding)

## Subtitle burn-in configuration parameters

[Section titled “Subtitle burn-in configuration parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle/#subtitle-burn-in-configuration-parameters)

| Parameter | Description |
| --- | --- |
| Burn-in | Configuration of the subtitle to be used for burnin in the video. Format available for burnin: DVBsubtitles, Teletext. |

**Related information** 
[Configure subtitle burn-in](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitle-burnin-encoding)