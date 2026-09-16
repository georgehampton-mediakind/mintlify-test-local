# Source: https://docs.mediakind.com/beam/contribution/tech-specs

# Technical specifications

## Input / Output cards

[Section titled “Input / Output cards”](https://docs.mediakind.com/beam/contribution/tech-specs/#input--output-cards)

### Baseband input

[Section titled “Baseband input”](https://docs.mediakind.com/beam/contribution/tech-specs/#baseband-input)

Optional hardware required

- **SDI over IP (SMPTE ST 2022-6)**

### Combined SDI and ASI input/output

[Section titled “Combined SDI and ASI input/output”](https://docs.mediakind.com/beam/contribution/tech-specs/#combined-sdi-and-asi-inputoutput)

Optional cards

- **4-port card:** 4xHD -SDI or 4x3G-SDI or 1x12G-SDI or 4xASI. Connector: BNC (F) 75 ohm

- **8-port card:** 8xHD-SDI or 8x3G-SDI or 1x12G-SDI or 8xASI. Connector: BNC (F) 75 ohm

- **Standards supported**

 - HD-SDI: SMPTE 292M; 3G-SDI: SMPTE 424M; 12G-SDI: SMPTE 2082.
 - Embedded audio: SMPTE 299M (HD) SDR/HDR
 - Signaling: SMPTE ST 425-5
 - External sync genlock (black and burst)
 - Max. ASI input rate: 208 Mbps
 - ASI packet length: 188/204 byte packets
 - ASI standard: EN50083-9

### IP output

[Section titled “IP output”](https://docs.mediakind.com/beam/contribution/tech-specs/#ip-output)

Optional cards

- **2x10GbE card:** Connector: Dual SFP+ cages. 10G BASE-T optical transceivers or 10Gbe SFP DAC

- **2x25GbE card:** Connector: Dual SFP28 cages. Can support 1GbE, 10GbE or 25GbE. Can provide hardware acceleration for SMPTE ST 2110 input

## Compressed output

[Section titled “Compressed output”](https://docs.mediakind.com/beam/contribution/tech-specs/#compressed-output)

### Transport stream output

[Section titled “Transport stream output”](https://docs.mediakind.com/beam/contribution/tech-specs/#transport-stream-output)

- Single or multi-service MPEG Transport Stream(s)
- UDP or RTP encapsulated
- RTMP/RTMPS

### Reliable transport

[Section titled “Reliable transport”](https://docs.mediakind.com/beam/contribution/tech-specs/#reliable-transport)

- **SRT and RIST input/output**

 - Carriage of UDP or RTP streams over the SRT protocol

 - SRT listener or caller mode

 - RIST sender mode

 - RIST listener mode

- **Zixi input/output**

 - Zixi sender
 - Zixi feeder or Zixi Receiver mode

### High availability

[Section titled “High availability”](https://docs.mediakind.com/beam/contribution/tech-specs/#high-availability)

- Automated (standalone) 1+1 output synchronization with PTS alignment (either SDI or ST 2110 inputs)

## Content security

[Section titled “Content security”](https://docs.mediakind.com/beam/contribution/tech-specs/#content-security)

### Encryption

[Section titled “Encryption”](https://docs.mediakind.com/beam/contribution/tech-specs/#encryption)

- BISS v1 Mode 1 and E
- BISS v2 Fixed Key and CA Mode
- SRT and RIST Encryption modes (fixed key 128/256 AES)

## Video encoding

[Section titled “Video encoding”](https://docs.mediakind.com/beam/contribution/tech-specs/#video-encoding)

- **Video codecs:** HEVC, H.264, MPEG-2, JPEG-XS
- **Chroma & bit depth:** 4:2:2 10-bit / 8-bit. 4:2:0 8-bit (10-bit UHD).
- **Resolutions:** 480i (SD), up to 2160p (UHD)
- **Framerates:** 23.98, 24, 25, 29.97, 50, 59.94

| UHD | HD | SD |
| :-- | :-- | :-- |
| 4:2:2 10-bit or 4:2:0 8 bit-HEVC | 4:2:2 10-bit or 4:2:0 8-bit MPEG-4 AVC or HEVC | 4:2:0 8-bit MPEG-2, MPEG-4 AVC or HEVC |
| | 4:2:2 or 4:2:0 8-bit MPEG-2 | 4:2:2 8-bit MPEG-2 |
| 4:2:2 10-bit or 8-bit JPEG-XS | 4:2:2 10-bit or 8-bit JPEG-XS | 4:2:2 10-bit or 8-bit JPEG-XS |
| 2160p 23.98, 24, 25, 29.97, 50 or 59.94 frame rates | 1080i25/29.97, 720p50/59.94, 1080p50/59.94 frame rate | 480i 29.97, 576i 25 |

## Audio encoding

[Section titled “Audio encoding”](https://docs.mediakind.com/beam/contribution/tech-specs/#audio-encoding)

- **Audio codecs:** MPEG-1 Layer-II, AAC, HE-AAC, HE-AAC v2 1. Dolby Digital® 2.0 / 5.1, Dolby Digital Plus® 2.0, 5.1, Dolby AC-3
- **Audio channels:** Up to 8 stereo pairs per service
- **Passthrough:** Dolby E®, Dolby Digital®, Dolby Digital Plus®, Linear PCM (as SMPTE 302)
- **Data rate:** From 4.75 kbps to 320 kbps (from 64 to 1024 kbps for DD+)

## Metadata

[Section titled “Metadata”](https://docs.mediakind.com/beam/contribution/tech-specs/#metadata)

- **Subtitles:** Passthrough and translation for EIA-608/CEA-608 and EIA-708/CEA-708 Closed Captions, SCTE-20, DVB Teletext, DVB Subtitles, SCTE-27

## Satellite modulator

[Section titled “Satellite modulator”](https://docs.mediakind.com/beam/contribution/tech-specs/#satellite-modulator)

### Connectivity

[Section titled “Connectivity”](https://docs.mediakind.com/beam/contribution/tech-specs/#connectivity)

- RF output - SMA 50-ohm connector
- RF monitoring output - SMA 50-ohm connector
- 10MHz Input/Output reference - SMA 50-ohm connector

### Dual DVB Common Interface option card

[Section titled “Dual DVB Common Interface option card”](https://docs.mediakind.com/beam/contribution/tech-specs/#dual-dvb-common-interface-option-card)

- Enables support for all major CAM modules
- Multi-service decryption
- Up to 2 CAM modules per option card

### Modulation

[Section titled “Modulation”](https://docs.mediakind.com/beam/contribution/tech-specs/#modulation)

- Type: DVB-S, DVB-DSNG, DVB-S2, DVB-S2X
- Constellation: QPSK, 8PSK, 16APSK to 32APSK 2
- Roll-off: DVB-S/DSNG: 35% DVB-S2: 20, 25 or 35%
- DVB-S2X: 5, 10, 15, 20, 25, 35%
- Symbol rate: 0.05 to 36 MSym/s 2

### RF output

[Section titled “RF output”](https://docs.mediakind.com/beam/contribution/tech-specs/#rf-output)

- L-Band frequency range: 950 MHz to 2150 MHz (1 KHz step)
- L-Band output power: -35 dBm up to +5 dBm (0.1 dB step)
- IF frequency range: 50 MHz to 180 MHz (1 Hz step)
- IF output power: -35 dBm up to +5 dBm (0.1 dB steps)
- IF monitor output power: -20dB on the RF output

### Other functions

[Section titled “Other functions”](https://docs.mediakind.com/beam/contribution/tech-specs/#other-functions)

- Carrier ID insertion
- Spectrum inversion
- Test mode: PRBS, dummy PL frame, carrier ID only
- Configurable option to switch off or mute output at startup

## Monitoring & control

[Section titled “Monitoring & control”](https://docs.mediakind.com/beam/contribution/tech-specs/#monitoring--control)

- **Remote control:** Provided via the Mediakind MK.IO portal
- **Direct control and status monitoring:** Provided via Web browser user interface and REST API
- **Standard protocols:** SNMP, NTP, IGMP