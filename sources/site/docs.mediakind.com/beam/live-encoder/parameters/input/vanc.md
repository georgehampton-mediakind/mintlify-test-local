# Source: https://docs.mediakind.com/beam/live-encoder/parameters/input/vanc

# VANC

Only available with **SMPTE ST 2110** input type.

| Parameter | Description |
| --- | --- |
| Data Type | Data Type carried on the VANC input. This determines what data streams will be generated. Video Metadata will be carried on the Video PID or a separate PID.<br>Possible values: **Video Metadata**, **Subtitles** or **STCE-104** |
| SDP File Location | Location of SDP file describing the input stream. Either a URL or a file location. |
| Stream Index | Index of stream within the SDP file. 1 is the first stream. |
| DPI PID index | Only available with **STCE-104** data type.<br>Specifies the index to the DPI PID which will carry the resulting splice\_info\_sections. |
| Delay | Only available with **STCE-104** data type.<br>If metadata stream is SCTE35, a delay adjusts the trigger time value.<br>Possible values: From 30000 to 60.000 milliseconds. |
| Max bitrate | Highest bitrate that can be used to capture Teletext subtitles |

**Related information** 
[Configure the VANC data input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/vanc-data) 
[SMPTE ST 2110 SDP file](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source#smpte-st-2110-sdp-file)