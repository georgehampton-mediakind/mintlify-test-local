# Source: https://docs.mediakind.com/beam/receiver/parameters

# Parameter descriptions

## Service parameters

[Section titled “Service parameters”](https://docs.mediakind.com/beam/receiver/parameters/#service-parameters)

| Parameter | Description |
| :-- | :-- |
| Configuration name | The name of the Receiver Configuration |
| Configuration type | Determines the behaviour of the _Receiver_ service, such as TS passthrough output or decoded video output. See [Receiver Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type) for details. |

## Input parameters and status

[Section titled “Input parameters and status”](https://docs.mediakind.com/beam/receiver/parameters/#input-parameters-and-status)

Input parameters vary depending on the **Current input** type.

### Redundancy Mode

[Section titled “Redundancy Mode”](https://docs.mediakind.com/beam/receiver/parameters/#redundancy-mode)

| Parameter | Description |
| :-- | :-- |
| Redundancy mode | Select an input redundancy mode to enable switching between a **Primary** and **Secondary** (backup) input. See the [Receiver Input Redundancy](https://docs.mediakind.com/beam/receiver/input/input-redundancy) section for configuration details. |
| Input loss timeout | Set the delay (in milliseconds) between detecting an input error and switching to the alternate input. |
| Max skew | Specifies the maximum allowed skew (receiver buffer depth), in milliseconds, between the two data paths. If the measured skew exceeds this value, packets may be lost during seamless protection switching. Available only when SMPTE ST 2022-7 is selected.<br>**Note:** The Max skew setting increases the receiver buffer delay and therefore contributes to overall system latency. This may impact [Delay Modes](https://docs.mediakind.com/beam/reception/delay-modes) such as Super Low Delay. |

### IP

[Section titled “IP”](https://docs.mediakind.com/beam/receiver/parameters/#ip)

| Parameter | Description |
| :-- | :-- |
| Current input | Select an input type: IP, ASI, Satellite |
| Unicast | Set input stream to be unicast<br>**Note:** In **Unicast** mode, the control is read only. |
| Stream address | Input stream unicast or multicast IPv4 address |
| IGMPv3 source filtering | IGMP source IPv4 address. List of addresses using a comma to separate, or leave empty to disable source-specific multicast |
| UDP Port | Port used to capture the input stream |
| Network interface | Name of the network interface used to capture the input stream |

| Input Status | Description |
| :-- | :-- |
| Input type | Indicates **IP** is selected as the source |
| Source status | Indicates whether a valid transport stream is present on the input and reports the number of services carried. For example, “Receiving (2 services)” or “Not receiving”. |
| CC errors | Indicates the number of transport stream packets that experienced **Continuity Counter (CC) errors**. Each CC error indicates that one or more transport stream packets were lost or duplicated for a particular **PID**. |
| Bit rate | Total bit rate of the incoming transport stream |

### ASI

[Section titled “ASI”](https://docs.mediakind.com/beam/receiver/parameters/#asi)

| Parameter | Description |
| :-- | :-- |
| Current input | Select an input type: IP, ASI, Satellite |
| Port | Port used to capture the input stream |

| Input Status | Description |
| :-- | :-- |
| Input type | Indicates **ASI** is selected as the source |
| Source status | Indicates whether a valid transport stream is present on the input and reports the number of services carried. For example, “Receiving (2 services)” or “Not receiving”. |
| CC errors | Indicates the number of transport stream packets that experienced **Continuity Counter (CC) errors**. Each CC error indicates that one or more transport stream packets were lost or duplicated for a particular **PID**. |
| Bit rate | Total bit rate of the incoming transport stream |

### Satellite

[Section titled “Satellite”](https://docs.mediakind.com/beam/receiver/parameters/#satellite)

| Input Parameter | Description |
| :-- | :-- |
| Current input | Select an input type: IP, ASI, Satellite |
| Status | Status indicating if the source input is shared with other services |
| Source | Select the RF input port number from the available detected card slots |

| LNB Control Parameter | Description |
| :-- | :-- |
| LNB frequency | The LNB frequency (low noise block down-converter) in MHz input up to 3 decimal places used with the satellite dish. Typically a value of 9750 MHz or 10600 MHz would be used to cover the satellite KU band frequency range 11.70 GHz-12.75 GHz. With this value correctly entered and with the satellite frequency entered the IRD can calculate the frequency of the wanted signal at L-band present on the input connector. |
| LNB voltage | Voltage supplied to LNB. Allows the user to turn the **voltage off** or to set the LNB to the following different LNB voltages:<br>\- 13v (Vertical polarization)<br>\- 18v (Horizontal polarization) |
| 22kHz | LNB band select. Check to select LNB high band. Clear the check box to select LNB low band. This check box enables the LNB 22 kHz signal to be activated. Enabling the 22 kHz tone will command the LNB to switch to its high band local oscillator frequency. |

| Tuning Parameter | Description |
| :-- | :-- |
| Tuner | Where applicable, some satellite demodulator cards provide more than one independent tuner/demodulator pair per physical RF port. These tuners are referenced alphabetically (for example, **Tuner A** and **Tuner B**). If a satellite demodulator card supports only a single tuner/demodulator per RF port, **Tuner A** is assigned by default. In all cases, LNB control is associated with the RF port and is therefore shared across all tuners associated with that RF port. |
| Frequency | The satellite input downlink frequency. This will normally be within the C-band or KU band frequency range. Alternatively, if the LNB LO Frequency was entered as 0 MHz the user can manually calculate and directly enter the wanted L-band frequency. |
| Symbol rate | The symbol rate in MSymbols/sec. This field should be entered with the symbol rate of the wanted signal. |
| Search range | The search range in KHz. Owing to frequency inaccuracies of the transmission system (mostly LNB inaccuracies) the wanted carrier may not be exactly on frequency. This option provides the satellite input with the maximum frequency search limits within which to attempt to acquire the wanted signal. A typical search range is 5000 kHz. |
| C/N Margin Alarm | Carrier-to-Noise margin alarm threshold in dB. |
| MIS Enable | Enable **Multiple Input Stream (MIS)** filtering of a single stream identified by the **Input Stream ID (ISI)**. MIS is a DVB-S2 / DVB-S2X feature that allows multiple independent transport streams to be carried simultaneously on a single satellite carrier (one RF frequency).<br>Disable this for single stream carriers. |
| MIS Stream ID | This parameter sets the **Input Stream ID (ISI)** used to filter and select a single input stream when **MIS** is enabled. If the configured ISI does not match any transmitted stream, the device will report a zero transport stream bit rate and raise a satellite input signal loss alarm. |
| Gold Code | The **Gold code sequence seed** defines the initialization value for the physical‑layer scrambling (Gold) sequence. This sequence can be used to uniquely identify a transmission. The satellite input will lock to the incoming signal only when the Gold code configured matches the code set on the uplink modulator. For this reason, the Gold sequence is often used as a form of fixed‑key signal identification, although it does not provide true conditional‑access security. |

| Input Status | Description |
| :-- | :-- |
| Input type | Indicates **Satellite** is selected as the source |
| Source status | Indicates whether a valid transport stream is present on the input and reports the number of services carried. For example, “Receiving (2 services)” or “Not receiving”. |
| CC errors | Indicates the number of transport stream packets that experienced **Continuity Counter (CC) errors**. Each CC error indicates that one or more transport stream packets were lost or duplicated for a particular **PID**. |
| Bit rate | Total bit rate of the incoming transport stream |
| Signal strength | Input signal strength measured in dBm |
| Bit error ratio | The Bit Error Ratio reported by the satellite demodulator. This is reported as a ratio of number of bit errors divided by total number of bits. |
| FEC errors | The number of FEC errors reported by the satellite demodulator. |
| FEC rate | The FEC rate detected for the locked incoming signal e.g. 3/4, 8/9, etc. |
| Delivery system | Displays the satellite delivery system detected for the locked incoming signal e.g. DVB-S, DVB-S2 or DVB-S2X. |
| Roll off | The roll-off factor detected for the locked incoming signal e.g. 35%, 25%, etc. |
| Pilot | Indicates if pilot symbols are present. |
| Inversion | Indicates the spectrum inversion detected by the demodulator. |
| Modulation | The modulation scheme detected for the locked incoming signal e.g. QPSK, 8PSK, etc. |
| C/N Margin | The Carrier-to-Noise margin for the locked incoming signal reported in dB. |

## Decoding parameters and statuses

[Section titled “Decoding parameters and statuses”](https://docs.mediakind.com/beam/receiver/parameters/#decoding-parameters-and-statuses)

### Decoding

[Section titled “Decoding”](https://docs.mediakind.com/beam/receiver/parameters/#decoding)

| Parameter | Description |
| :-- | :-- |
| Service | Select the service to decode |
| Delay mode | Controls buffer levels and timing, which affects latency across the _Receiver_ service. For more information, [Delay modes](https://docs.mediakind.com/beam/reception/delay-modes/). |

### Video

[Section titled “Video”](https://docs.mediakind.com/beam/receiver/parameters/#video)

| Parameter | Description |
| :-- | :-- |
| Input | Select a PID to decode from the incoming stream or manually enter a PID value to decode |

### Audio

[Section titled “Audio”](https://docs.mediakind.com/beam/receiver/parameters/#audio)

| Parameter | Description |
| :-- | :-- |
| Auto Select | Enables automatic selection of audio streams, disabling manual selection. See [Auto Select](https://docs.mediakind.com/beam/receiver/decoding/#auto-select) for more information. |
| Input | Select a PID to decode from the incoming stream or manually enter a PID value to decode |
| Decode channel configuration | Configure the number of output channels for each decoded audio stream. For details, refer to [Decode Channel Configuration](https://docs.mediakind.com/beam/receiver/decoding/#decode-channel-configuration) |

### Data

[Section titled “Data”](https://docs.mediakind.com/beam/receiver/parameters/#data)

| Parameter | Description |
| :-- | :-- |
| Input | Select a PID to decode from the incoming stream or manually enter a PID value to decode |
| Data Type configuration | Configure the data format for each decoded data stream. For details, refer to [Data Type Configuration](https://docs.mediakind.com/beam/receiver/decoding/#data-type-configuration) |

### Service status

[Section titled “Service status”](https://docs.mediakind.com/beam/receiver/parameters/#service-status)

| Parameter | Description |
| :-- | :-- |
| Selected service | Program number (and service name if present) |
| PCR PID | Numeric value PCR PID being used for the reference clock to decode the selected service |

### Video status

[Section titled “Video status”](https://docs.mediakind.com/beam/receiver/parameters/#video-status)

| Parameter | Description |
| :-- | :-- |
| PID | Numeric value of the PID being used to decode the video from the incoming transport stream |
| Rate | Elementary stream rate of the video being decoded |
| Codec | Video codec being used to decode the video |
| Chroma | Format of chrominance samples<br>_Example:_ 4:2:2 or 4:2:0 |
| Bit depth | Number of bits precision in each luminance/chrominance sample |
| Resolution | Video resolution being decoded |
| Aspect ratio | Signalled aspect ratio of the video being decoded<br>_Example:_ 4:3 or 16:9 |
| Frame rate | Frame rate of the video being decoded\*<br>_Example:_ 25Hz / 29.97Hz / 50Hz / 59.94Hz |

### Audio Status

[Section titled “Audio Status”](https://docs.mediakind.com/beam/receiver/parameters/#audio-status)

| Parameter | Description |
| :-- | :-- |
| Audio X | Displays status as **OK** or **Error** the audio PID being decoded, the audio codec being used, the channel mode and the bitrate |

## Decrypt parameters

[Section titled “Decrypt parameters”](https://docs.mediakind.com/beam/receiver/parameters/#decrypt-parameters)

### BISS

[Section titled “BISS”](https://docs.mediakind.com/beam/receiver/parameters/#biss)

| Parameter | Description |
| :-- | :-- |
| BISS Mode | The BISS decryption mode supported by both BISS1 and BISS2. Beam will automatically switch between the BISS1 or BISS2 version based on the length of the BISS Key entered. For example,<br>\- **Mode 1** for BISS1-1 and BISS2-1<br>\- **Mode E** for BISS1-E or BISS2-E<br>\- **None** to disable BISS decryption |
| BISS Key | The BISS key (hexadecimal characters only) for decrypting the service according to the **BISS Mode** selection:<br>\- Mode 1 requires 12 characters for BISS1, or 32 characters for BISS2<br>\- Mode E requires 16 characters for BISS1, or 32 characters for BISS2 |
| Injected ID | Select the appropriate BISS injected ID stored on the device required for BISS Mode E decryption. |

**Related information**

- [Set BISS to mode 1](https://docs.mediakind.com/beam/receiver/decryption/biss-decryption-modes#set-biss-to-mode-1)
- [Set BISS to mode E](https://docs.mediakind.com/beam/receiver/decryption/biss-decryption-modes#set-biss-to-mode-e)
- [Set BISS Injected ID](https://docs.mediakind.com/beam/receiver/decryption/biss-decryption-modes#set-biss-injected-id)

### BISS-CA

[Section titled “BISS-CA”](https://docs.mediakind.com/beam/receiver/parameters/#biss-ca)

| Parameter | Description |
| :-- | :-- |
| BISS-CA | Enable or disable BISS-CA decryption. |

**Related information**

- [Managing BISS-CA entitlements](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements)

### Director 6

[Section titled “Director 6”](https://docs.mediakind.com/beam/receiver/parameters/#director-6)

| Parameter | Description |
| :-- | :-- |
| Descrambling Enable | Enable or disable Director 6 decryption. |
| Director 6 Hardware ID | A unique identifier used by the Director headend to address the receiving device for over air commands and other Director functionality.<br>**Note:** Setting the **Director Hardware ID** to **None** disables Director functionality for that service. |
| Over air control enable | Allow or ignore Director over air commands sent by the Director headend to remotely control the receiving device.<br>**Note:** This state can be overridden by the Director headend. |
| Export Keyfile | Click this button to download the **Director Export Keyfile** associated with the currently selected **Director 6 Hardware ID**. This keyfile must be registered with the Director headend in order to receive entitlements for successful service decryption. |

| Status | Description |
| :-- | :-- |
| Hardware ID | The unique Director Hardware ID (HWID) currently assigned to the running service configuration. |
| Over air message | Displays messages received over air (transport stream) from the Director headend. |
| Emergency home carrier | Indicates if the Emergency Home Carrier (EHC) associated with the current HWID has been set. |
| Power up carrier | Indicates if the Power Up Carrier (PUC) associated with the current HWID has been set. |
| Download status | Shows progress of any over air download images present in the transport stream triggered by the Director headend. For example, bundle upgrades or new configuration updates. |

**Related information**

- [Supplying Information to the Director Headend](https://docs.mediakind.com/beam/receiver/decryption/director#supplying-information-to-the-director-headend)

### DVB-CI

[Section titled “DVB-CI”](https://docs.mediakind.com/beam/receiver/parameters/#dvb-ci)

| Parameter | Description |
| :-- | :-- |
| CAM slot | Selects the CAM to be used for decrypting the incoming service. |
| Auto recover CAM | When enabled, the device monitors the CAM status and automatically resets the CAM if a decryption failure is detected. This feature is activated by selecting a **timeout threshold**. If the decryption failure persists beyond the configured timeout, the CAM is reset. This process repeats until the decryption failure is resolved. Resetting the CAM will temporarily disrupt the decrypted service. |
| Explore CAM | Extracts the status information and allows setting CAM manufacturer parameters. |
| Reset CAM | Resets the CAM in the selected slot. Resetting the CAM will disrupt the service being decrypted. |

## SDI output parameters and status

[Section titled “SDI output parameters and status”](https://docs.mediakind.com/beam/receiver/parameters/#sdi-output-parameters-and-status)

### Video

[Section titled “Video”](https://docs.mediakind.com/beam/receiver/parameters/#video-1)

| Parameter | Description |
| :-- | :-- |
| Link mode | Select the SDI format for carrying UHD video:<br>\- **Quadrant** (Quad‑Link 3G‑SDI, ST 425‑5 Annex B — Square Division)<br>\- **Interleaved** (Quad‑Link 3G‑SDI, ST 425-5 Two Sample Interleave)<br>\- **12G SDI** (Single‑link UHD) |
| SDI port | Selects the SDI output port on which the video is output. |
| Video Scaling | Configure up-conversion / down‑conversion for the output video. For details, see the [Video Conversion](https://docs.mediakind.com/beam/receiver/output/hd-downconvert) page. |
| Dynamic Range Conversion | Configure the Dynamic Range Conversion for the output video. For details, see the [HDR to SDR](https://docs.mediakind.com/beam/receiver/output/hdr-sdr) page. |
| Dynamic range signalling | Configure the transfer characteristics and colorimetry signalled on the output video. For details, see the [SDR/HDR signalling](https://docs.mediakind.com/beam/receiver/output/sdr-hdr) page. |
| Clock reference | Clock reference of the SDI output.<br>\- **Free running** uses an internally generated reference clock.<br>\- **External sync** synchronizes to externally provided framesync pulses. |
| 3G-SDI level | Select SMPTE mapping scheme for 3G-SDI. |
| Video failure mode | Defines the behavior of the SDI output when the video decode fails. |

### Audio

[Section titled “Audio”](https://docs.mediakind.com/beam/receiver/parameters/#audio-1)

| Parameter | Description |
| :-- | :-- |
| Component | Select which decoded audio to embed in the SDI output. |
| Embedding | Select the position where the audio component will be embedded in the SDI output. |
| Add component | Add a single entry to the list of audio components. |
| Add all | Add all decoded audio components to the list of embedded audio components. |
| Remove all | Remove all entries from the list of embedded audio components. |

### Data

[Section titled “Data”](https://docs.mediakind.com/beam/receiver/parameters/#data-1)

| Parameter | Description |
| :-- | :-- |
| VITC/Time code | If present at the input, VITC/time code information will be inserted in the output SDI at the selected line number. |
| AFD/BAR | If present at the input, AFD (Active Format Description) information will be inserted in the output SDI at the selected line number. |
| Closed captioning | If present at the input, closed captions information will be inserted in the output SDI at the selected line number. |
| OP-47 teletext | If present at the input, OP-47 teletext information will be inserted in the output SDI at the selected line number. |
| SMPTE 2031 teletext | If present at the input, SMPTE 2031 teletext information will be inserted in the output SDI at the selected line number. |
| SCTE 104 splicing | If SCTE 35 _splice\_null_, _splice\_insert_ or _time\_signal_ messages are present at the input, they will be converted to SCTE 104 packets and these will be inserted in the output VANC data at the selected line number.<br>See [SCTE 104 Splicing](https://docs.mediakind.com/beam/receiver/parameters/#scte-104-splicing) for additional settings. |

### Status

[Section titled “Status”](https://docs.mediakind.com/beam/receiver/parameters/#status)

| Parameter | Description |
| :-- | :-- |
| SDI Outputs | Displays the available SDI output ports and the SDI standard supported by each port (for example, 3G or 12G). If a running service has been assigned to an SDI port, the service name and its port assignment are displayed here. |

## SMPTE ST 2022-6 output parameters

[Section titled “SMPTE ST 2022-6 output parameters”](https://docs.mediakind.com/beam/receiver/parameters/#smpte-st-2022-6-output-parameters)

### Video

[Section titled “Video”](https://docs.mediakind.com/beam/receiver/parameters/#video-2)

| Parameter | Description |
| :-- | :-- |
| Video Scaling | Configure up-conversion / down‑conversion for the output video. For details, see the [Video Conversion](https://docs.mediakind.com/beam/receiver/output/hd-downconvert) page. |
| Dynamic Range Conversion | Configure the Dynamic Range Conversion for the output video. For details, see the [HDR to SDR](https://docs.mediakind.com/beam/receiver/output/hdr-sdr) page. |
| Dynamic range signalling | Configure the transfer characteristics and colorimetry signalled on the output video. For details, see the [SDR/HDR signalling](https://docs.mediakind.com/beam/receiver/output/sdr-hdr) page. |
| Video failure mode | Defines the behavior of the output when the video decode fails<br>Possible values: **Freeze frame**, **Black** |

### Audio

[Section titled “Audio”](https://docs.mediakind.com/beam/receiver/parameters/#audio-2)

| Parameter | Description |
| :-- | :-- |
| Component | Select which decoded audio to embed in the output |
| Embedding | Select the position where the audio component will be embedded in the output |
| Add component | Add a single entry to the list of audio components |
| Add all | Add all decoded audio components to the list of embedded audio components |
| Remove all | Remove all entries from the list of embedded audio components |

### Data

[Section titled “Data”](https://docs.mediakind.com/beam/receiver/parameters/#data-2)

| Parameter | Description |
| :-- | :-- |
| VITC/Time code | If present at the input, VITC/time code information will be inserted in the output at the selected line number |
| AFD/BAR | If present at the input, AFD (Active Format Description) information will be inserted in the output at the selected line number |
| Closed captioning | If present at the input, closed captions information will be inserted in the output at the selected line number |
| OP-47 teletext | If present at the input, OP-47 teletext information will be inserted in the output at the selected line number |
| SMPTE 2031 teletext | If present at the input, SMPTE 2031 teletext information will be inserted in the output at the selected line number |
| SCTE 104 splicing | If SCTE 35 _splice\_null_, _splice\_insert_ or _time\_signal_ messages are present at the input, they will be converted to SCTE 104 packets and these will be inserted in the output VANC data at the selected line number.<br>See [SCTE 104 Splicing](https://docs.mediakind.com/beam/receiver/parameters/#scte-104-splicing) for additional settings. |

### Primary and Secondary Streams

[Section titled “Primary and Secondary Streams”](https://docs.mediakind.com/beam/receiver/parameters/#primary-and-secondary-streams)

| Parameter | Description |
| :-- | :-- |
| Output enable | Enable the output |
| Destination IP address | Output multicast IPv4 address |
| Destination port | Output UDP port<br>Possible values: from 1024 to 65535 |
| Network interface | Name of the network interface used for the output stream |
| Source IP address | Source IPv4 address<br>**Note:** Set to **Auto** to automatically use the network interface address |
| Source port | Source UDP port<br>Possible values: from 1024 to 65535<br>**Note:** Set to **Auto** to automatically allocate a value |
| TTL | TTL (time to live) on each RTP output packet<br>Possible values: from 0 to 255 |

### Status

[Section titled “Status”](https://docs.mediakind.com/beam/receiver/parameters/#status-1)

| Parameter | Description |
| :-- | :-- |
| Bitrate | The output bitrate |

## SMPTE ST 2110 output parameters

[Section titled “SMPTE ST 2110 output parameters”](https://docs.mediakind.com/beam/receiver/parameters/#smpte-st-2110-output-parameters)

### Video

[Section titled “Video”](https://docs.mediakind.com/beam/receiver/parameters/#video-3)

| Parameter | Description |
| :-- | :-- |
| Video Scaling | Configure up-conversion / down‑conversion for the output video. For details, see the [Video Conversion](https://docs.mediakind.com/beam/receiver/output/hd-downconvert) page. |
| Dynamic Range Conversion | Configure the Dynamic Range Conversion for the output video. For details, see the [HDR to SDR](https://docs.mediakind.com/beam/receiver/output/hdr-sdr) page. |
| Dynamic range signalling | Configure the transfer characteristics and colorimetry signalled on the output video. For details, see the [SDR/HDR signalling](https://docs.mediakind.com/beam/receiver/output/sdr-hdr) page. |
| Video failure mode | Defines the behavior of the SMPTE ST 2110 output when video decode fails<br>Possible values: **Freeze frame** or **Black** |

### PCM Audio

[Section titled “PCM Audio”](https://docs.mediakind.com/beam/receiver/parameters/#pcm-audio)

| Parameter | Description |
| :-- | :-- |
| Component | Select which decoded audio to carry in the ST 2110-30 output. |
| Embedding | Select the essence stream where the audio component will be carried in the ST 2110-30 output. |
| Lip-sync adjustment | Advance or delay audio output timing with respect to the video. |

### AES3 Audio

[Section titled “AES3 Audio”](https://docs.mediakind.com/beam/receiver/parameters/#aes3-audio)

| Parameter | Description |
| :-- | :-- |
| Component | Select which decoded audio to carry in the ST 2110-31 output. |
| Embedding | Select the essence stream where the audio component will be carried in the ST 2110-31 output. |
| Lip-sync adjustment | Advance or delay audio output timing with respect to the video. |

### Data

[Section titled “Data”](https://docs.mediakind.com/beam/receiver/parameters/#data-3)

| Parameter | Description |
| :-- | :-- |
| VITC/Time code | If present at the input, VITC/time code information will be carried in the ST 2110-40 essence stream for the specifed line number. |
| AFD/BAR | If present at the input, AFD (Active Format Description) information will be carried in the ST 2110-40 essence stream for the specifed line number. |
| Closed captioning | If present at the input, closed captions information will be carried in the ST 2110-40 essence stream for the specifed line number. |
| OP-47 teletext | If present at the input, OP-47 teletext information will be carried in the ST 2110-40 essence stream for the specifed line number. |
| SMPTE 2031 teletext | If present at the input, SMPTE 2031 teletext information will be carried in the ST 2110-40 essence stream for the specifed line number. |
| SCTE 104 splicing | If SCTE 35 _splice\_null_, _splice\_insert_ or _time\_signal_ messages are present at the input, they will be converted to SCTE 104 packets and these will be inserted in the output VANC data at the selected line number.<br>See [SCTE 104 Splicing](https://docs.mediakind.com/beam/receiver/parameters/#scte-104-splicing) for additional settings. |

### Essence

[Section titled “Essence”](https://docs.mediakind.com/beam/receiver/parameters/#essence)

| Parameter | Description |
| :-- | :-- |
| Output enable | Enable the output. |
| Payload type | RTP payload typePossible values: from 0 to 255 |
| Packet Time | Determines the maximum number of channels that can be carried in the essence stream.<br>Applicable to [PCM Audio](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110#pcm-digital-audio-output) and [AES3 Audio](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110#aes3-audio-output) only. |

### Primary / Secondary

[Section titled “Primary / Secondary”](https://docs.mediakind.com/beam/receiver/parameters/#primary--secondary)

| Parameter | Description |
| :-- | :-- |
| Destination IP address | Output multicast IPv4 address |
| Destination port | Output UDP port Possible values: from 1024 to 65535 |
| Network interface | Name of the network interface used for the output streams |
| Source port | Source IPv4 port.<br>**Note:** Set to **Auto** to automatically allocate a value. |
| TTL | TTL (time to live) on each RTP output packet Possible values: from 0 to 255 |

## SCTE 104 Splicing

[Section titled “SCTE 104 Splicing”](https://docs.mediakind.com/beam/receiver/parameters/#scte-104-splicing)

| Parameter | Description |
| :-- | :-- |
| Time signal | Convert SCTE 35 _time\_signal_ messages and output as SCTE 104 _time\_signal\_request\_data_ messages |
| Clamp pre-roll | Clamp minimum pre-roll in SCTE 104 messages to 4 seconds |
| Event ID Filter | Enable filtering on the value of the _splice\_event\_id_ field of SCTE 35 _splice\_insert_ messages. When enabled, for each bit set in **Event ID mask**, the corresponding bit in **Event ID value** must match the corresponding bit in _splice\_event\_id_ to allow the _splice\_insert_ message to be processed and a SCTE 104 message inserted in the output |
| Event ID mask | Bit mask for filtering on _splice\_event\_id_ of SCTE 35 _splice\_insert_ messages. Bits which are set must match the **Event ID value** with the _splice\_event\_id_ field to be inserted as SCTE 104 VANC data |
| Event ID value | Bit value for filtering on _splice\_event\_id_ of SCTE 35 _splice\_insert_ messages. Only bits with the corresponding bit set in **Event ID mask** are considered |

## TS output parameters

[Section titled “TS output parameters”](https://docs.mediakind.com/beam/receiver/parameters/#ts-output-parameters)

| Parameter | Description |
| :-- | :-- |
| Network interface | Name of the network interface used for the output streams |
| Stream address | Output multicast IPv4 address |
| Destination port | Output UDP port Possible values: from 1024 to 65535 |
| TTL | TTL (time to live) on each RTP output packet Possible values: from 0 to 255 |
| Output Smoothing | Enables UDP output smoothing. See [Output Smoothing](https://docs.mediakind.com/beam/receiver/output/ts-passthrough#output-smoothing) for more details. |

## Backup parameters

[Section titled “Backup parameters”](https://docs.mediakind.com/beam/receiver/parameters/#backup-parameters)

| Parameter | Description |
| :-- | :-- |
| Host | Remote server Hostname or IP address.<br>Possible values: 32 characters max |
| Port | IP Port for the secure FTP or FTPS connection.<br>Possible values: 1 to 65535<br>Recommended value: 21 |
| Path | Backup file storage directory on the remote server. This path is a **relative path**, and must exist on the remote server.<br>Possible values: 128 characters max |
| Username | For the secure FTP connection. Must be a valid secure FTP or FTPS server user.<br>Possible values: 16 characters max |
| Password | Allows the configured username to connect to the secure FTP server.<br>Possible values: 16 characters max |

**Related information** 
[Backup and restore configurations](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore)

## Failover parameters

[Section titled “Failover parameters”](https://docs.mediakind.com/beam/receiver/parameters/#failover-parameters)

| Parameter | Description |
| :-- | :-- |
| Group name | Enter a unique failover group name for your selected primary and backup servers. |
| Group processing type | Select the processing type to display compatible servers. |
| Group mode | In Automatic mode, the system triggers a server failover when a critical alarm occurs (manual triggers are still possible). |

**Related information** 
[Create a failover group](https://docs.mediakind.com/beam/system-admin/servers/failover#create-a-failover-group)