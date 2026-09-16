# Source: https://docs.mediakind.com/beam/headends/tech-specs

# Tech Specs

## Input

[Section titled “Input”](https://docs.mediakind.com/beam/headends/tech-specs/#input)

### Compressed input

[Section titled “Compressed input”](https://docs.mediakind.com/beam/headends/tech-specs/#compressed-input)

- **Type:** IP (IGMPv3-based redundancy and dual multicast redundancy), Dual source redundancy (active/active & active/passive modes), Pro-MPEG FEC support
- **Monitoring:** Packet loss statistics
- **Protocol:** MPEG-2 TS (MPTS & SPTS), RTMP
- **Codec:** JPEG-XS, MPEG-2, H.264, HEVC – MPEG-1 LII, Dolby Digital (AC-3), Dolby Digital Plus (E-AC3), AAC, HEAAC v1 and v2, Dolby E (baseband input only), Dolby Digital Plus ATMOS
- **Data rate:** SD / HD up to 50 Mbps, UHD up to 80 Mbps

#### Reliable transport

[Section titled “Reliable transport”](https://docs.mediakind.com/beam/headends/tech-specs/#reliable-transport)

- **SRT and RIST input/output:**

 - Carriage of UDP or RTP streams over the SRT protocol

 - SRT listener or caller mode

 - RIST sender mode

 - RIST listener mode

- **Zixi input/output**

 - Zixi sender
 - Zixi feeder or Zixi Receiver mode

### Baseband input

[Section titled “Baseband input”](https://docs.mediakind.com/beam/headends/tech-specs/#baseband-input)

Optional hardware required

- **SDI:** 3G / HD / SD-SDI (max 16 per server)
- **SDI over IP (SMPTE ST 2022-6)**
- **SMPTE ST 2110**
 - SMPTE ST 2110-20 uncompressed video up to UHD resolution,
 - SMPTE ST 2110-30/31: uncompressed audio,
 - SMPTE ST 2110-40: data (VITC/Time code, AFD/BAR, Closed captioning, OP-47 Teletext, SMPTE 2031 Teletext),
 - All SMPTE ST 2110 essences can be input as ST 2022-7
 - NMOS IS-04 and NMOS IS-05 support

## Pre-processing

[Section titled “Pre-processing”](https://docs.mediakind.com/beam/headends/tech-specs/#pre-processing)

### Enhancement filters

[Section titled “Enhancement filters”](https://docs.mediakind.com/beam/headends/tech-specs/#enhancement-filters)

- **Video:** De-interlacing, Cropping, Letter boxing, Stretching, SD and HD Cross-scaling, 3:2 Pull down, MCTF, Deblocking filter, Spatial denoising filter, Cross Talk filter, Sharpening, Diamond filter
- **Audio:** Automatic loudness control (A/85), Audio gain adjustment, Mute

### Image

[Section titled “Image”](https://docs.mediakind.com/beam/headends/tech-specs/#image)

- **Image settings:** Brightness, Contrast, Saturation, Hue, Gamma, Temperature
- **Image overlays:** Image insertion on input loss
- **Aspect ratio:** WSS, AFD, Video index

## Metadata

[Section titled “Metadata”](https://docs.mediakind.com/beam/headends/tech-specs/#metadata)

- **Subtitles passthrough and translation:** EIA 608/708 Closed Caption, SCTE-20, DVB Teletext, DVB Subtitles, SCTE-27, ARIB B24

- **Metadata:** SCTE-104, SCTE-35, IA 608 / 708 Closed Caption, SCTE-20, DVB Teletext, DVB-VBI, SCTE-27, OP47, SMPTE 2031, VITC , SMPTE 2038, ARIB B24

- **Streaming subtitles**

 - Closed Captions: WebVTT for HLS, DFXP for HSS, WebVTT or SMPTE-TT for DASH
 - DVB-Teletext page 888: WebVTT for HLS, DFXP for HSS, WebVTT or SMPTE-TT for DASH
 - DVB-Subtitles: DFXP for HSS, SMPTE-TT for DASH
- **Ad insertion:** EBIF / EISS / AITSCTE-35 passthrough

- **Nielsen:** Watermark extraction for multi-screen devices

## Video encoding

[Section titled “Video encoding”](https://docs.mediakind.com/beam/headends/tech-specs/#video-encoding)

- **Video codec:** HEVC Main 10, HEVC Main Profile, H.264 Baseline / Main / High profile, MPEG-2

- **HDR:** HDR10, HLG10, PQ10. Dolby Vision 8.1 & 5.0

- **Rate control:** CBR, VBR, constant video quality

- **Data rate:** From 100 kbps to 60 Mbps

- **Resolutions:**

 - Progressive: from QCIF to UHD, up to 60 fps
 - Interlaced: 480i, 576i, 720i and 1080i
- **Templates:** Channel templates creation and management

## Audio encoding

[Section titled “Audio encoding”](https://docs.mediakind.com/beam/headends/tech-specs/#audio-encoding)

- **Audio encoding:** MPEG-4 / MPEG-2 AAC, AAC 5.1, HE-AAC v1 & v2, HE-AAC 5.1 1, Dolby Digital (AC3), Dolby Digital Plus (E-AC3), Dolby Digital Plus ATMOS
- **Audio channels per service:** Up to 8 stereo pairs. Radio channels.
- **Passthrough:** MPEG 1 LII, Dolby Digital (AC-3), Dolby Digital Plus (E-AC3) 5.1-ch or stereo, Dolby E, Dolby Digital Plus ATMOS
- **Data rate:** From 4.75 kbps to 320 kbps (from 64 to 1024 kbps for DD+)

## Multiplexing

[Section titled “Multiplexing”](https://docs.mediakind.com/beam/headends/tech-specs/#multiplexing)

### Processing

[Section titled “Processing”](https://docs.mediakind.com/beam/headends/tech-specs/#processing)

- Full re-multiplexing support including real-time PSI regeneration, and dynamic rules-based passthrough of descriptors
- PID re-mapping
- SI/PSI generation/re-generation and insertion from external source
- Statistical multiplexing bit rate allocation for MediaKind software encoder
- Bitrate policing
- Input Content Extraction

### Content protection

[Section titled “Content protection”](https://docs.mediakind.com/beam/headends/tech-specs/#content-protection)

- DVB-CSA V1, V2 scrambling
- AES-128 scrambling
- BISS Mode 0, 1, 2

## Broadcast output

[Section titled “Broadcast output”](https://docs.mediakind.com/beam/headends/tech-specs/#broadcast-output)

### Output type and format

[Section titled “Output type and format”](https://docs.mediakind.com/beam/headends/tech-specs/#output-type-and-format)

- Adaptive TS / MPEG-2 TS (ALD, EBP, IDR or RAP-based signal)
- SPTS over UDP

### Transmission

[Section titled “Transmission”](https://docs.mediakind.com/beam/headends/tech-specs/#transmission)

- Multicast / Unicast, UDP, RTP

## Streaming output

[Section titled “Streaming output”](https://docs.mediakind.com/beam/headends/tech-specs/#streaming-output)

### Formatting

[Section titled “Formatting”](https://docs.mediakind.com/beam/headends/tech-specs/#formatting)

- Apple HTTP Live Streaming (Over CMAF or TS), Microsoft Smooth Streaming, DASH
- Common CMAF segment delivery for HLS and DASH
- Low latency chunking support for DASH
- RTMP

### Multi audio

[Section titled “Multi audio”](https://docs.mediakind.com/beam/headends/tech-specs/#multi-audio)

- Multiple audio streams per output for HLS, Smooth Streaming and DASH

### Content protection

[Section titled “Content protection”](https://docs.mediakind.com/beam/headends/tech-specs/#content-protection-1)

- Microsoft PlayReady DRM support for HLS/TS, Smooth Streaming and DASH
- Apple Segment for HLS/TS
- FairPlay support for HLS/TS and HLS/CMAF
- Adobe Primetime Access support HLS/TS
- Widevine, PlayReady and Marlin support in CTR mode for DASH
- Widevine and PlayReady support in CBC mode for DASH
- Key provisioning interface to leading CAS & DRM vendors

### Content publishing

[Section titled “Content publishing”](https://docs.mediakind.com/beam/headends/tech-specs/#content-publishing)

- Support for pull scenarios in just-in-time packaging
- Support publishing to local storage or to WebDAV servers

### Origin server

[Section titled “Origin server”](https://docs.mediakind.com/beam/headends/tech-specs/#origin-server)

- Built-in live and VOD origin server for HLS, Smooth Streaming and DASH
- Custom HTTP headers management (Expiry settings, CORS headers…)
- Built-in support of HTTP 1.1 Chunked Transfer Encoding for Low Latency

### CDN

[Section titled “CDN”](https://docs.mediakind.com/beam/headends/tech-specs/#cdn)

- Interfaces to leading CDNs
- Certified with Akamai MSL 4 for HLS and DASH

## Monitoring & control

[Section titled “Monitoring & control”](https://docs.mediakind.com/beam/headends/tech-specs/#monitoring--control)

- **Control interface:** Up to 2 IP ports, monitoring and control ports (primary and spare) through API & GUI
- **Control and system protocols:** REST, HTTP, NTP, FTP, IGMP v2 / v3, SNMP v2 / 3c
- **Content replacement:** SCTE-35 in-band / ESAM out-of-band. Triggers: Time signal, Splice-out / Splice-in, Alternate command, or manually triggered from GUI.
- **High availability:** Support both 1+1 and N+M redundancy schemes. Service synchronization on encoder and packager

## Infrastructure

[Section titled “Infrastructure”](https://docs.mediakind.com/beam/headends/tech-specs/#infrastructure)

- **Servers:** MediaKind-referenced hardware IT Datacenter based on COTS servers
- **CPU:** Intel, AMD