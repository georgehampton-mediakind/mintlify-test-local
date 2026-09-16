# Source: https://docs.mediakind.com/beam/live-encoder/parameters/output

# Output configuration parameters

## General parameters

[Section titled “General parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#general-parameters)

| Parameter | Description |
| --- | --- |
| Transport protocol | DASHIF CMAF Ingest, RTMP, RTMPS, WAVE/SRT or MPEG2 TS outputs are possible. MPEG2 TS output can use either UDP or RTP transport protocol. Choose DASHIF CMAF Ingest to push content to an external DASHIF CMAF Ingest origin server. Choose RTMP(S) to push content to an external RTMP origin server. The RTMP variant is identified within the publishing point (no mix of variants is possible between primary and secondary publishing points). |

## General MPEG-2 TS parameters

[Section titled “General MPEG-2 TS parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#general-mpeg-2-ts-parameters)

| Parameter | Description |
| --- | --- |
| Synchronize | Output stream to be synchronized. |
| Stream synchronization signaling | Activate to signal downstream equipment the status of stream synchronization. Requires EBP signaling. |
| Network interface | Name of the network interface used to distribute the output stream |
| TTL | Time To Live: defines the number of routers an UDP/RTP packet can go through before being discarded.<br>Possible value: From 1 to 255 |
| ToS | Type of Service: information added in the IPv4 header to specify service priority on the network. Used to specify that a service requires low delay and/or high reliability.<br>Possible value: From 0 to 224 |
| GOP signaling | Specifies signaling for stream synchronization. When encoding ABR outputs, the GOPs need to be synchronized across all the lineup streams. |
| Source address | IP address specified as source in the IPv4 header |
| Source port | Port specified as source in the IPv4 header<br>Possible values: From 1 to 65535 |

## General RTMP parameters

[Section titled “General RTMP parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#general-rtmp-parameters)

Live Encoder can push content to an external RTMP origin server so that the operator can contribute to social media such as youtube, facebook or periscope. The H.264 encoding video stream and the optional audio stream are packaged and written to a given defined publishing point.

| Parameter | Description |
| --- | --- |
| Publishing point | URL of the primary Flash Media Server (FMS) publishing point for live streaming. Configuration shall be done the following way: rtmp://{Primary FMS IP Address}/live or rtmp://{Primary FMS host name}/live. Complete the URL with the stream key defined for each stream in the configuration below. Use rtmps server for RTMPS variant: it is not possible to mix RTMP and RTMPS servers between primary and secondary publishing points. |
| Secondary publishing point | URL of the secondary Flash Media Server publishing point. |
| Network interface | The name of the network interface used for dual output prevention. |

**Note:** See [MPEG-2 TS common parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output/#mpeg-2-ts-common-parameters) for specific parameters.

## General DASH-IF CMAF Ingest parameters

[Section titled “General DASH-IF CMAF Ingest parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#general-dash-if-cmaf-ingest-parameters)

DASH-IF CMAF Ingest is a protocol for transport of fragmented MP4 in CMAF container format between a Live Encoder and a Packager. Live Encoder can generate fragmented MP4 in CMAF container format and HTTP push CMAF media segments to a Packager.

| Parameter | Description |
| --- | --- |
| Publishing point | The URL of the Packager entry point, to which the Live Encoder will send the stream (e.g., https://example.com/ingest1). |
| Secondary publishing point | The URL of the secondary Packager entry point, to which the Live Encoder will send a duplicate stream (e.g., https://example.com/ingest2). You can configure up to 5 publishing points by clicking the **Add** button. |

**Note:** See [DASH-IF CMAF parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output/#dash-if-cmaf-parameters) for specific parameters.

**Related information** 
[Configuring the output stream general parameters](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#configure-the-output-stream-general-parameters)

## MPEG-2 TS common parameters

[Section titled “MPEG-2 TS common parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#mpeg-2-ts-common-parameters)

| Parameter | Description |
| --- | --- |
| Standard | MPEG2 TS information is encapsulated to fit the ATSC or the DVB standard. |
| PMT PID | Enter the packet identifier of the Program Map Table. This table defines the structure of the MPEG2TS stream. |
| PCR PID | Enter the packet identifier of the Program Clock Reference. This clock is used to synchronize audio and video packets. If left blank, the PCR PID is set to the output Video PID. |
| Target PCR period | The target time between two PCR information |
| Target PSI period | The target time between two PSI information |
| Program number | Associated to a specific program. Commonly used in MPTS to differentiate programs within the same MPEG2 TS stream. |
| Service name | Service added to the service description table (SDT) |
| Service provider | Service provider name added to the service description table (SDT) |
| Maximum bitrate insertion in PMT | The PMT can provide the maximum bitrate information for each elementary stream. |
| Signal loss management | Defines the behavior in case of signal loss.

- None: this corresponds to the default behavior. The encoder follows the freeze frame management settings. The output will contain either a color bar, a black frame, the last image (by default) or a slate.

- Drop video stream: if the input video elementary stream is lost, the corresponding packets are dropped and replaced by stuffing.

- Drop transport stream: this option allows dropping the whole transport stream. The Encoder also mutes the statmux communication.

 |
| Video frames alignment on PES packets | Each new frame starts with a new PES packet. If a frame finishes before the end of a PES packet then it is filled with stuffing information. Bandwidth is increased if activated.<br>**Note:** This parameter often needs to be activated for interoperability purposes. When activated, it will increase the bandwidth used by null packets. |
| LATM encapsulation for AAC | Support for both ADTS and LATM encapsulation are available for AAC audio tracks. |
| Broadcast ID insertion | The VCT information (if present in the source content) is translated to the broadcaster ID format and inserted in the output stream. |
| Encoding info insertion | The output stream contains the number of black frames, freeze frames, the average bit rate, and the target bitrate between 2 encoding information structures.<br>These encoding statistics present in the output TS stream can then be used by downstream equipment for monitoring and error detection purposes. |
| Splice countdown insertion | Insert splice countdown field in adaptation field around splice points. |
| One AU per PES on audio splices | Enforce a single access unit per PES packet around splice points on audio PIDs. |
| Direct Path for low latency | Activates the optimized data transmission between MK Live Encoding and MK Packaging for OTT latency.<br>It is required to activate this mode on both encoding and packaging sides. |
| CBR output with stuffing packets | Tick this checkbox to use a CBR bitrate on transport stream output in statmux rate control mode |

**Related information** 
[Configure the output stream MPEG-2 TS parameters](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#configure-the-output-stream-mpeg-2-ts-parameters)

## DASH-IF CMAF specific parameters

[Section titled “DASH-IF CMAF specific parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#dash-if-cmaf-specific-parameters)

DASH-IF CMAF Ingest is a protocol for transport of fragmented MP4 in CMAF container format between Live Encoder and a Packager. Live Encoder can:

- Generate fragmented MP4 in CMAF container format.
- HTTP push CMAF media segments to a Packager.

### MP4 general parameters

[Section titled “MP4 general parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#mp4-general-parameters)

| Parameter | Description |
| --- | --- |
| GOPs per segment | The number of GOPs per segment |
| Low latency | Enable low latency for DASHIF CMAF Ingest.<br>This uses HTTP chunked transfer. As a rough guide, the latency from the output of the encoder, can be reduced from around 2 seconds, down to as low as 0.5 seconds, depending on the number of chunks per segment. |
| Unix epoch relative timestamps | Generate timestamps using the Unix epoch as the anchor point.<br>When enabled, the output timestamps are anchored to the Unix epoch instead of being anchored to the service start time. |

### Tracks

[Section titled “Tracks”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#tracks)

List of tracks. Track IDs can be modified if needed. An optional label can be added to provide a textual description of the content (See ISO/IEC 23009-1 \[4\], clause 5.3.7.2 Table 9).

### Output groups

[Section titled “Output groups”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#output-groups)

Click **Add** to include tracks that will be added to the output. See [Define the output stream composition.](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition)

**Related information** 
[Configure a DASH-IF CMAF output](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#configure-a-dash-if-cmaf-output)

## Output stream parameters

[Section titled “Output stream parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#output-stream-parameters)

### MPEG-2 TS, SDI, SDI/IP or SMPTE ST 2110 parameters

[Section titled “MPEG-2 TS, SDI, SDI/IP or SMPTE ST 2110 parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#mpeg-2-ts-sdi-sdiip-or-smpte-st-2110-parameters)

| Parameter | Description |
| --- | --- |
| IP Address | Unicast or multicast output stream IPv4 address |
| Port | Port used to distribute the output stream<br>Range: From 1 to 65535 |
| FEC | Activate FEC (Forward Error Correction) along with the output transport stream to resolve RTP packet loss issues due to network transport. 
Only available in case of MPEG2 TS/RTP. |
| FEC port(s) | Only available if FEC is activated.<br>Port used to transport FEC information<br>Range: From 1 to 65535 |
| Column count | Only available if FEC is activated.<br>Defines the horizontal size of the FEC matrix.<br>Range: From 1 to 20 |
| Row count | Only available if FEC is activated.<br>Defines the vertical size of the FEC matrix.<br>Range: From 4 to 20 |

### RTMP(S) parameters

[Section titled “RTMP(S) parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/output/#rtmps-parameters)

| Parameter | Description |
| --- | --- |
| Stream name/key | Stream name, also known as stream key, that identifies the live stream. |