# Source: https://docs.mediakind.com/beam/live-encoder/parameters/lineup

# Live service lineup encoding parameters

For each source, you can edit the following parametersdepending on the source input type, either MPEG-2 TS/UDP or SMPTE ST 2110.

## MPEG-2 TS/UDP lineup

[Section titled “MPEG-2 TS/UDP lineup”](https://docs.mediakind.com/beam/live-encoder/parameters/lineup/#mpeg-2-tsudp-lineup)

| Parameter | Description |
| --- | --- |
| Stream address | Input stream unicast or multicast IPv4 address |
| Port | Port used to capture the input stream |
| IGMPv3 source filtering | IGMP source IP address. List of addresses allowed in IGMPv3 using a comma to separate. |
| Input synchronization mode | Input can be synchronized based on PMT program ID or on VCT major and minor channel numbers or the stream PIDs. Make a selection based on the information present on the input stream. |
| FEC port | Port used for FEC<br>Possible values: From 1 to 65535 |
| **Streams** | For each source select which streams will be used and enter the PIDs: List of stream identifiers using a comma to separate.<br>**Note:** If no PID is specified, default PID will be used. |

## SMPTE ST 2110 lineup

[Section titled “SMPTE ST 2110 lineup”](https://docs.mediakind.com/beam/live-encoder/parameters/lineup/#smpte-st-2110-lineup)

| Parameter | Description |
| --- | --- |
| Stream Index | Index of stream within the SDP file. 1 is the first stream.<br>Possible values: From 1 to 1000 |
| SDP File Location | Location of SDP file describing the input stream. Either a URL or a file location.<br>**Note:** The **SDP File Location** must be specified when Live Encoder service is configured with [MediaComposer input type and an SMPTE ST 2110 source](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source#configure-an-smpte-st-2110-input-with-sdp-files), but [if you are using NMOS](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source#configure-an-smpte-st-2110-input-with-nmos), you don’t need to specify it, otherwise it will be ignored since the NMOS Controller supplies the SDP file. |
| Audio format | Select if the audio format should be automatically detected or forced. For uncompressed/Dolby E Passthrough select either 'AES Uncompressed audio' or 'Dolby E' as the input format, and 'SMPTE302/Dolby E Passthrough' from the encoding menu. Dolby E input will not work with Dolby AC4. To decode/reencode Dolby E select Auto or SMPTE337 compressed input as the input format. |
| Stream Index | Index of stream within the SDP file. 1 is the first stream.<br>Possible values: From 1 to 1000 |
| SDP File Location | Location of SDP file describing the input stream. Either a URL or a file location. |
| Channel Group Index | Index of channel group within the SDP audio stream. 1 is the first channel group.<br>Possible values: From 1 to 65535 |
| Stream Index | Index of stream within the SDP file. 1 is the first stream.<br>Possible values: From 1 to 1000 |
| SDP File Location | Location of SDP file describing the input stream. Either a URL or a file location. |
| DPI PID index | Specifies the index to the DPI PID which will carry the resulting splice\_info\_sections.<br>Possible values: From 0 to 65535 |
| Stream Index | Index of stream within the SDP file. 1 is the first stream.<br>Possible values: From 1 to 1000 |
| SDP File Location | Location of SDP file describing the input stream. Either a URL or a file location. |
| Stream Index | Index of stream within the SDP file. 1 is the first stream.<br>Possible values: From 1 to 1000 |
| SDP File Location | Location of SDP file describing the input stream. Either a URL or a file location. |