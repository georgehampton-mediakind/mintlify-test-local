# Source: https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6

# Configure SMPTE ST 2022-6 output

# SMPTE ST 2022-6 output

[Section titled “SMPTE ST 2022-6 output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#smpte-st-2022-6-output)

The Receiver service on MK.IO Beam can output SDI over IP using SMPTE ST 2022-6 via the server’s network interfaces.

## Capabilities

[Section titled “Capabilities”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#capabilities)

### Video

[Section titled “Video”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#video)

#### Video formats

[Section titled “Video formats”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#video-formats)

The following video formats are supported:

| Resolution | Frame rate | Bandwidth | Limitations |
| :-- | :-- | :-- | :-- |
| 720 x 480i | 29.97 fps | 0.3 Gbps | |
| 720 x 576i | 25 fps | 0.3 Gbps | |
| 1280 x 720p | 50/59.94 fps | 1.6 Gbps | |
| 1920 x 1080i | 25/29.97 fps | 1.6 Gbps | |
| 1920 x 1080p | 50/59.94 fps | 3.2 Gbps | 3G-SDI Level A only |

UHD is not supported.

#### Video processing

[Section titled “Video processing”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#video-processing)

The following video processing functions are available:

- Video down-convertion (to 1080p, 1080i or 720p)
- Dynamic range conversion, with optional user-supplied lookup table
- Dynamic range signaling of transfer characteristics and colorimetry
- Video failure modes

### Audio

[Section titled “Audio”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#audio)

Up to eight audio components, or a total of eight stereo channels, can be added.

### Data

[Section titled “Data”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#data)

Data is embedded into the VANC (Vertical Ancillary) lines of the SDI frame before encapsulation into SMPTE ST 2022-6. It is possible to embed more than one data type onto a single VANC line.

The following data types are supported:

- VITC/Time code
- AFD/BAR
- Closed captions
- OP-47 teletext
- SMPTE-2031 teletext
- SCTE-104 splicing
- Generic data

### Clock Reference

[Section titled “Clock Reference”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#clock-reference)

SMPTE ST 2022-6 output is synchronized to the PCR contained in the incoming transport stream.

## Network card

[Section titled “Network card”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#network-card)

Any network card with sufficient network bandwidth may be used.

## Add SMPTE ST 2022-6 output

[Section titled “Add SMPTE ST 2022-6 output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#add-smpte-st-2022-6-output)

1. From the **Home** page, select the ****RECEIVER**** item from the required feed then click ![Edit][base64-image].
2. Check that the **Configuration type** is **SD/HD.**
3. In the **Parameters** window, select the **Output** tab.
4. Click the **+** button, then select **SMPTE ST 2022-6** from the drop down menu.

## Configure video processing

[Section titled “Configure video processing”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#configure-video-processing)

For each video processing parameter, select the required value from the drop down list.

See [video](https://docs.mediakind.com/beam/receiver/parameters#video-2) descriptions for additional information.

### HDR to SDR conversion custom lookup table

[Section titled “HDR to SDR conversion custom lookup table”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#hdr-to-sdr-conversion-custom-lookup-table)

When the **Dynamic range conversion** option is set to **Custom HDR to BT.709 lookup table,** a custom lookup table may be specified.

Please refer to the [HDR to SDR](https://docs.mediakind.com/beam/receiver/output/hdr-sdr) section for information on uploading custom lookup tables.

## Configure audio

[Section titled “Configure audio”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#configure-audio)

From the **SMPTE ST 2022-6** tab, select the **Audio** tab.

The output audio component list is initially populated with the decoding audio components at the time the SMPTE ST 2022-6 output was created.

### Add an audio component

[Section titled “Add an audio component”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#add-an-audio-component)

Select **Add component.** A new entry is added to the audio component list.

A new entry is added only when decoding audio components have been configured.

### Configure audio embedding

[Section titled “Configure audio embedding”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#configure-audio-embedding)

For the row corresponding to the output audio component to be configured:

1. Select the audio decoding component from the **Component** drop down list.
2. Select the position where the audio decoding component will be embedded from the **Embedding** drop down list (select the **No embedding** option to disable embedding).
3. Set the lip-sync adjustment in the **Lip-sync adjustment** field. Lip-sync may be adjusted in the range +/- 50 milliseconds. In low delay modes negative lip-sync adjustments may not be possible.

A single embedded channel is required to output stereo audio.

### Remove an audio component

[Section titled “Remove an audio component”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#remove-an-audio-component)

Click the ![Delete][base64-image] button in the **Action** column for the row corresponding to the audio component to be removed.

### Add all audio components

[Section titled “Add all audio components”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#add-all-audio-components)

Select **Add all.** All the decoding audio components that are not currently included in the output audio configuration are added to the component list.

Embedded channels are allocated in sequence until all available channels are filled.

### Remove all audio components

[Section titled “Remove all audio components”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#remove-all-audio-components)

Select **Remove all.** All the audio components are removed from the list of outputs.

## Configure data

[Section titled “Configure data”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#configure-data)

1. From the **SMPTE ST 2022-6** tab, select the **Data** tab.
2. Set the line number from the drop down menu for each data type.
3. Select **OFF** from the drop-down menu for each data type that you want to disable. Once disabled, the data is no longer embedded into the output.

Generic data is automatically reinserted into the same line it came in.

### SCTE-104 splicing

[Section titled “SCTE-104 splicing”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#scte-104-splicing)

1. The SCTE-104 configuration is displayed when the **SCTE 104 splicing** line is set.
2. Apply the configuration values based on the information in the [SCTE-35 to SCTE-104](https://docs.mediakind.com/beam/receiver/output/scte35-to-scte104) section.

See [SCTE 104 Splicing](https://docs.mediakind.com/beam/receiver/parameters/#scte-104-splicing) descriptions for additional information.

## Configure the primary stream

[Section titled “Configure the primary stream”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#configure-the-primary-stream)

1. From the **SMPTE ST 2022-6** tab, select the **Primary stream** tab.
2. Set the **Destination IP address,** **Destination port** and **Network interface.**
3. Optionally, set the **Source IP address** and **Source port.**
4. Optionally, set the **TTL.**

See [streams](https://docs.mediakind.com/beam/receiver/parameters#primary-and-secondary-streams) descriptions for additional information.

## Configure the secondary stream

[Section titled “Configure the secondary stream”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6/#configure-the-secondary-stream)

1. Optionally, from the **SMPTE ST 2022-6** tab, click the **+** button next to the **Primary stream** tab.
2. Follow the same instructions as for the primary stream to configure the secondary stream.