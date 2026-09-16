# Source: https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source

# Configure stream source(s) in input stream

You can configure two multicast sources. To configure a first source, complete the parameters in the **Primary** tab. If you want to configure a second source, you just have to click the **Add** button in the top right corner then complete the parameters in the **Secondary** tab.

For more information on SDI/IP redundancy, see [Configure an SDI/IP redundancy](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-an-sdiip-redundancy).

1. Display services.

2. Click ![Edit][base64-image] to edit the service. The **General parameters** display.

3. Select **Input** tab to display parameters.

4. Go to the **Sources** section then enter and/or select the appropriate values for each [input source](https://docs.mediakind.com/beam/live-encoder/parameters/input/source).

5. Depending on the input type, you can add:

 - [video input(s)](https://docs.mediakind.com/beam/live-encoder/configure/input/video-stream)
 - [audio input(s)](https://docs.mediakind.com/beam/live-encoder/configure/input/audio-stream)
 - [subtitles input(s)](https://docs.mediakind.com/beam/live-encoder/configure/input/subtitle),
 - [VANC data input(s)](https://docs.mediakind.com/beam/live-encoder/configure/input/vanc-data) _(SMPTE ST 2110 input only)_
 - [in-band metadata input(s)](https://docs.mediakind.com/beam/live-encoder/configure/input/inband-metadata)
 - [out-of-band metadata](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata)
 - [cross stream prevention](https://docs.mediakind.com/beam/live-encoder/configure/input/cross-stream-prevention)
6. Click **Save and continue** or **Save and exit** to save your changes.

## Configure an SDI/IP redundancy

[Section titled “Configure an SDI/IP redundancy”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-an-sdiip-redundancy)

You can configure two SDI/IP input sources to allow the management of losses on the input of the encoder. The redundancy works in active/passive mode. On primary input signal loss, the secondary input is used as source, if the backup input is lost, the primary input switches back to the primary source.

To activate the redundancy, follow these steps:

1. Set the input type to **SDI/IP**.

2. Set the timeout before switching, [Input loss timeout](https://docs.mediakind.com/beam/live-encoder/parameters/input/general).

3. Complete the [parameters](https://docs.mediakind.com/beam/live-encoder/parameters/input/source#sdiip) in the **Primary** and **Secondary** tabs:

 - Network interface
 - Stream address
 - Protocol
 - IGMPv3 source filtering

## Configure SMPTE ST 2110 input

[Section titled “Configure SMPTE ST 2110 input”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-smpte-st-2110-input)

We recommend using the Mellanox ConnectX6 card to ingest SMPTE ST 2110 streams in Live Encoder. Without this card the ST 2110 is limited (no PTP support, no ST 2022-7 support, lower density, no UHD, audio level A only).

You can create SMPTE® ST 2110 input to ingest a source that is compliant with the SMPTE ST 2110 specification. 
You can optionally configure the input to use SMPTE ST 2022-7 (see [Configure SMPTE ST 2110 input with ST 2022-7 redundancy](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-smpte-st-2110-input-with-st-2022-7-redundancy)).

You can configure the SMPTE ST 2110 input either:

- [by specifying an SDP file](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-an-smpte-st-2110-input-with-sdp-files) that contains information about the SMPTE ST 2110 content,
- or [by configuring the input to use NMOS IS-04 and IS-05](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-an-smpte-st-2110-input-with-nmos) to provide that information.

## Configure an SMPTE ST 2110 input with SDP files

[Section titled “Configure an SMPTE ST 2110 input with SDP files”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-an-smpte-st-2110-input-with-sdp-files)

When configuring a service with ST 2110 input, every input stream must contain an SDP File location.

To configure an SMPTE ST 2110 input with SDP files, follow these steps:

### Create a service

[Section titled “Create a service”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#create-a-service)

### Configure the input parameters

[Section titled “Configure the input parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-input-parameters)

1. From the **Input** tab, set the **Type** to **SMPTE ST 2110**.

2. Leave the **Input redundancy** to **None**.

3. Complete the parameters in the **Primary** tab:

 - **Network interface**
 - Video input: enter a unique **SDP file location** for both sources and a different **Index** for each source. Both primary and secondary sources share a common SDP file but each source has a different index to select a stream within that SDP file.
 - Audio input: enter a unique **SDP file location** for both sources and a different **Index** for each source, then leave other fields unchanged.
 - VANC input: enter a unique **SDP file location** for both sources and a different **Index** for each source to add video metadata such as Closed Captions, Subtitles or SCTE-104.

### Configure video encoding parameters

[Section titled “Configure video encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-video-encoding-parameters)

1. Click the **Encoding** tab.

2. In the **Video encoding** section, click **Add** then go to the **Subtitle settings** section and tick the **Closed caption** checkbox.

3. Leave the other parameters unchanged.

4. Click **Ok** to validate.

### Configure audio encoding parameters

[Section titled “Configure audio encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-audio-encoding-parameters)

1. In the **Audio encoding** section, click **Add** then set the codec to **MPEG-1 Layer II**.

2. Leave the other parameters unchanged.

3. Click **Ok** to validate.

### Configure the subtitle encoding parameters for path-through

[Section titled “Configure the subtitle encoding parameters for path-through”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-subtitle-encoding-parameters-for-path-through)

If you added Teletext subtitles as VANC data input, you need to configure the **Subtitle encoding** section.

1. If you want the Teletext subtitles to be passed-through, in the **Audio encoding** section, click **Add** then set the codec to **Pass-through**.

2. Select **Initial Teletext page** then enter **Language**. **Magazine** and **Page**.

3. Select **Teletext subtitle page** then enter **Language**, **Magazine** and **Page**.

 ![el encoding subtitles teletext passthrough](https://docs.mediakind.com/_astro/el_encoding_subtitles_teletext_passthrough.DgFcPLir_1jYgVX.webp) _Example of subtitle encoding configuration Pass-through_

4. Click **Ok** to validate.

### Configure the subtitle encoding parameters for DVB conversion

[Section titled “Configure the subtitle encoding parameters for DVB conversion”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-subtitle-encoding-parameters-for-dvb-conversion)

If you added Teletext subtitles as VANC data input, you need to configure the **Subtitle encoding** section.

1. If you want the Teletext subtitles to be converted to BVB, in the **Audio encoding** section, click **Add** then set the codec to **DVB Subtitles**.

2. Enter **Magazine** and **Page**.

 ![el encoding subtitles teletext dvb](https://docs.mediakind.com/_astro/el_encoding_subtitles_teletext_dvb.DUZ-CQ0__Z1WcgaJ.webp) _Example of subtitle encoding configuration (DVB)_

3. Click **Ok** to validate.

### Configure output parameters

[Section titled “Configure output parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-output-parameters)

1. Click the **Output** tab then click the **Add an output** button.

2. Go to the **Output streams** section then click **Add**.

3. Enter the **IP address** and **Port**, then tick the video, audio and optionally VANC stream checkboxes.

4. Click **Ok**.

### Save

[Section titled “Save”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#save)

Click **Save and exit** to save your service configuration and go back to the **Services** page.

## Configure an SMPTE ST 2110 input with NMOS

[Section titled “Configure an SMPTE ST 2110 input with NMOS”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-an-smpte-st-2110-input-with-nmos)

Before you start:

- You need to provide an NMOS Registration and Discovery Server (RDS) that is NMOS IS-04 compliant, and an NMOS Client, which will interact with the NMOS RDS and NMOS Nodes.
- NMOS IS-04 supports different modes of operation for the NMOS Node discovery, Live Encoder mandates discovery using Registered mode with multicast operation.

When configuring a service with NMOS, the SDP file for each input stream is supplied by the NMOS Client, this means that you no longer need to specify the SDP file location.

To configure an SMPTE ST 2110 input with NMOS, follow these steps:

### Create a service

[Section titled “Create a service”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#create-a-service-1)

### Configure the input parameters

[Section titled “Configure the input parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-input-parameters-1)

1. From the **Input** tab, set the **Type** to **SMPTE ST 2110**.

2. Leave the **Input redundancy** to **None**.

3. Tick the **NMOS enabled** checkbox.

4. Complete the parameters in the **Primary** tab:

 - **Network interface**
 - SDP files are greyed for each input stream since this information is supplied by the NMOS Client.

### [Configure the video encoding parameters](https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding)

[Section titled “Configure the video encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-video-encoding-parameters)

### [Configure the audio encoding parameters](https://docs.mediakind.com/beam/live-encoder/configure/encoding/audio-encoding)

[Section titled “Configure the audio encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-audio-encoding-parameters)

### [Configure the output parameters](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output)

[Section titled “Configure the output parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-output-parameters)

### Save

[Section titled “Save”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#save-1)

Click **Save and exit** to save your service configuration and go back to the **Services** page.

- The **Stats** > **Monitoring** tab will display **NMOS Configured** when the NMOS **Enabled** checkbox is ticked.
- In the **Stats** > **Monitoring** tab, if the SDP file is available, you can click the ![Download][base64-image] button next to the **Download SDP file** row to download and view the content of the SDP file, otherwise **Not available** will be displayed and download will not be available.
- Upon first start of the service, each input stream will have an alarm raised indicating “waiting for NMOS” that will be cleared once the NMOS client has configured each input stream.

The state is retained across restarts of the service.

## Configure SMPTE ST 2110 input with ST 2022-7 redundancy

[Section titled “Configure SMPTE ST 2110 input with ST 2022-7 redundancy”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-smpte-st-2110-input-with-st-2022-7-redundancy)

The SMPTE ST 2022-7 standard specifies a form of input redundancy that aims at providing a resiliency against data loss at the IP packet level when two identical streams are received. When one stream loses a packet, the receiver picks out the lost data from the other stream. Senders may transmit duplicated streams by using the mechanisms of separate destination addresses or separate source addresses.

This use case is an example of how to configure SMPTE ST 2110 input with ST 2022-7 redundancy.

### Create a service

[Section titled “Create a service”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#create-a-service-2)

### Configure the input parameters

[Section titled “Configure the input parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-the-input-parameters-2)

1. From the **Input** tab, set the **Type** to **SMPTE ST 2110**.

2. Set the **Input redundancy** to **SMPTE ST 2022-7**.

3. You can set the **Max Skew** which is the maximum expected delay (in ms) between the two sources.

4. Click **Add** to add a secondary source.

e. Complete the parameters in the **Primary** and **Secondary** tabs:

- **Network interface**

- Video input: enter a unique **SDP file location** for both sources and a different **Index** for each source.

 **Note:** Both primary and secondary sources share a common SDP file but each source has a different index to select a stream within that SDP file.

- Audio input: enter a unique **SDP file location** for both sources and a different **Index** for each source, then leave other fields unchanged.

- VANC input: enter a unique **SDP file location** for both sources and a different **Index** for each source to add video metadata such as Closed Captions and SCTE-104.

### Configure video encoding parameters

[Section titled “Configure video encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-video-encoding-parameters-1)

1. Click the **Encoding** tab.

2. In the **Video encoding** section, click **Add** then go to the **Subtitle settings** section and tick the **Closed caption** checkbox.

3. Leave the other parameters unchanged.

4. Click **Ok** to validate.

### Configure audio encoding parameters

[Section titled “Configure audio encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-audio-encoding-parameters-1)

1. In the **Audio encoding** section, click **Add** then set the codec to **MPEG-1 Layer II**. Leave the other parameters unchanged.

2. Leave the other parameters unchanged.

3. Click **Ok** to validate.

### Configure output parameters

[Section titled “Configure output parameters”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#configure-output-parameters-1)

1. Click the **Output** tab then click the **Add an output** button.

2. Go to the **Output streams** section then click **Add**.

3. Enter the **IP address** and **Port**, then tick the video and audio stream checkboxes.

4. Click **Ok**.

### Save

[Section titled “Save”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#save-2)

Click **Save and exit** to save your service configuration and go back to the **Services** page.

**Related information** 
[SMTPE ST 2110 parameters](https://docs.mediakind.com/beam/live-encoder/parameters/input/source#smtpe-st-2110)

## SMPTE ST 2110 SDP file

[Section titled “SMPTE ST 2110 SDP file”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#smpte-st-2110-sdp-file)

The SDP file must conform to the Session Description Protocol as defined in Section 8 of the SMPTE ST 2110-10-2017 specification.

SDP file example:

Terminal window

```
v=0
o=- 1443716955 1443716955 IN IP4 192.168.61.19
s=emsfp-a0-9b-b8 1-0-0
t=0 0
m=video 60020 RTP/AVP 96
c=IN IP4 239.0.2.22/64
a=source-filter: incl IN IP4 239.0.2.22 172.23.240.105
a=rtpmap:96 raw/90000
a=fmtp:96 sampling=YCbCr-4:2:2; width=1920; height=1080; exactframerate=30000/1001;
depth=10; TCS=SDR; colorimetry=BT709; PM=2110GPM; SSN=ST2110-20:2017; TP=2110TPN;
interlace;
a=mediaclk:direct=0
a=ts-refclk:ptp=IEEE1588-2008:b8-59-9f-ff-fe-60-ff-c8:0
```

### ST 2022-7 configuration

[Section titled “ST 2022-7 configuration”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#st-2022-7-configuration)

The SDP file may specify duplicate RTP streams that are compliant to ST 2022-7, as defined in Section 8 of the ST2110-10-2017 specification.

SDP file example:

Terminal window

```
v=0
o=- 123456 2 IN IP4 192.168.1.2
s=SMPTE ST2022-7 DUP streams
t=0 0
a=recvonly
a=group:DUP primary secondary
m=video 50020 RTP/AVP 96
c=IN IP4 224.1.1.1/64
a=source-filter: incl IN IP4 224.1.1.1 192.168.1.2
a=rtpmap:96 raw/90000
a=fmtp:96 sampling=YCbCr-4:2:2; width=1920; height=1080; exactframerate=25;
depth=10; TCS=SDR; colorimetry=BT709;
PM=2110GPM; TP=2110TPN; SSN=ST2110-20:2017
a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:127
a=mediaclk:direct=0
a=mid:primary
m=video 50020 RTP/AVP 96
c=IN IP4 224.2.1.2/64
a=source-filter: incl IN IP4 224.2.1.2 192.168.1.2
a=rtpmap:96 raw/90000
a=fmtp:96 sampling=YCbCr-4:2:2; width=1920; height=1080; exactframerate=25;
depth=10; TCS=SDR; colorimetry=BT709;
PM=2110GPM; TP=2110TPN; SSN=ST2110-20:2017
a=ts-refclk:ptp=IEEE1588-2008:39-A7-94-FF-FE-07-CB-D0:127
a=mediaclk:direct=0
a=mid:secondary
```

### Multi-channel audio

[Section titled “Multi-channel audio”](https://docs.mediakind.com/beam/live-encoder/configure/input/input-stream-source/#multi-channel-audio)

For multi-channel audio, the SDP file can specify how audio channels are grouped.

SDP file example:

Terminal window

```
a=fmtp:97 channel-order=SMPTE2110.(ST,ST,ST,ST) - 4 Stereo pairs
a=fmtp:97 channel-order=SMPTE2110.(51,ST) - 5.1 (6 channels) plus a stereo pair
a=fmtp:97 channel-order=SMPTE2110.(M,M,DM,ST,ST) - mono, mono, dual mono,
stereo, stereo
```