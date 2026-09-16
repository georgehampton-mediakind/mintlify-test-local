# Source: https://docs.mediakind.com/beam/live-encoder/parameters/input/general

# General parameters

| Parameter | Description |
| --- | --- |
| Type | Input streams are either compressed or uncompressed, over a variety of interfaces.

- If IP: supports compressed MPEG2 TS with MPEG2, H.264 and H.265 codec up to UHD.

- If SDI: supports uncompressed inputs with SD, HD and UHD resolutions depending on the SDI board.

- If SDI/IP: supports uncompressed input over IP, up to HD resolution, following SMPTE ST 20226 standard.

- If RTMP: supports H.264 up to HD resolution and AAC only.

- If SMPTE ST 2110: supports uncompressed input over IP, up to HD resolution, following SMPTE ST 2110 standard.

- If MediaComposer : specific input to manage dynamic sources use cases via interface with an ESAM Signal Processing System.

Encoder can ingest SMPTE-2022-6 and encode it to any format with any codec.<br>As for SDI, video and audio are extracted from the input stream.<br>SD and HD formats are supported up to 1080p60. Any HD format will require a 10GB network and a hardware with a 10 GbE input port. |

## MPEG-2 TS/UDP parameters

[Section titled “MPEG-2 TS/UDP parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/input/general/#mpeg-2-tsudp-parameters)

| Parameter | Description |
| --- | --- |
| Input redundancy | Choose the redundancy settings: two modes can be set when two multicast sources (primary and secondary) are available. 
In active/passive mode, the passive source is idle and doesn't even join the multicast address or capture UDP packets. 
In active/active mode, both sources capture in parallel, provide statistics on transport and demux layers, but only one source is fully decoded at any given time. |
| Input loss timeout | The time between the loss of input (full stream or elementary stream) and the switch to another source.<br>Possible values: From 1000 to 9999 ms |
| Input clock computation | MPEG-2 TS clock interpolation mode: “auto” for default mode, “advanced” for newClock mode. Only “auto” mode is compatible with synchronization. |

## SDI parameters

[Section titled “SDI parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/input/general/#sdi-parameters)

| Parameter | Description |
| --- | --- |
| Ingest UHD | Select to enable UHD capture. UHD capture uses the first four input connectors on the SDI card for quad 3GSDI (2 sample interleave or square division) or the first input connector for 12GSDI format. |
| Connector | SDI port used to capture this specific service |
| SDI card number | Select the SDI card number to use. |
| Input label | Input label used for SDI input router, mandatory in case of failover configuration. 
The label is case sensitive and should match with router settings.Format: String of 32 characters maximum. Allowed characters: letters (lower and upper case), digit, \_ and<br>**Note:** See [router configuration](https://docs.mediakind.com/beam/system-admin/network/router-configuration). |

## SDI/IP parameters

[Section titled “SDI/IP parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/input/general/#sdiip-parameters)

| Parameter | Description |
| --- | --- |
| Input loss timeout | The time between the loss of input (full stream or elementary stream) and the switch to another source. |

## RTMP parameters

[Section titled “RTMP parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/input/general/#rtmp-parameters)

| Parameter | Description |
| --- | --- |
| Network interface | Name of the network interface used to capture the input stream |
| Stream name | Name of the stream to request from RTMP server. |
| Connection retry period | Period to wait between source reconnection retries.<br>Possible values: From 1 to 10 seconds. |
| Input buffer length | Period of input material to buffer before starting decode. A longer buffer will be more tolerant to input network issues, but will introduce more delay.<br>Possible values: From 1 to 10 seconds. |

## SMPTE ST 2110 parameters

[Section titled “SMPTE ST 2110 parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/input/general/#smpte-st-2110-parameters)

| Parameter | Description |
| --- | --- |
| Input redundancy | Choose the redundancy settings: SMPTE ST 20227 aims at providing against data loss at the IP packet level when two identical streams are received. Mellanox ConnectX6 card is required to select this mode. None provides no redundancy in the event of failure.<br>When **SMPTE ST 2022-7** is selected as **Input redundancy**, then only the primary source is displayed. You can create a secondary source and specify the network interfaces, as well as the stream indices independently within the SDP file and a single SDP file location or URL for both sources. Note that ST 2022-7 is not supported in v14 but will be available starting v15.<br>**Note:** Thanks to the Mellanox card connectX-6 Dx, Live Encoder benefits from the Rivermax library for ST 2110 ingest. It supports:<br>\- ST 2110-20: HD Video-only<br>\- ST 2110-30, ST 2110-31: Audio<br>\- ST 2110-40: Data<br>This requires a specific license which is being bought alongside the cards. The default path where Rivermax expects to find the license file is:/opt/mellanox/rivermax/rivermax.lic. |
| NMOS Enabled | Enables NMOS for EL service. |
| Max Skew | Only available with **SMPTE ST 2022-7** redundancy.Define the maximum acceptable timestamp difference between the two input streams, beyond which an alarm will be raised and/or stats updated to indicate skew.<br>Possible values: From 10 to 450 ms |

## MediaComposer parameters

[Section titled “MediaComposer parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/input/general/#mediacomposer-parameters)

| Parameter | Description |
| --- | --- |
| Input loss timeout | The time between the loss of input (full stream or elementary stream) and the switch to another source.. |

**Related information** 
[Configure the input stream general parameters](https://docs.mediakind.com/beam/live-encoder/configure/input)