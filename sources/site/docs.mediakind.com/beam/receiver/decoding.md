# Source: https://docs.mediakind.com/beam/receiver/decoding

# Configure the decoding

After MK.IO Beam locks to an input transport stream, it enables selection of available services (programmes) for decoding. These services are then processed and output according to the configured decoding and output parameters.

## Service selection

[Section titled “Service selection”](https://docs.mediakind.com/beam/receiver/decoding/#service-selection)

Before you start, ensure at least one _Receiver_ service has started and is in a _Running_ state. The input should be configured and locked to a valid input.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit.

2. From the **Parameters** section, select the **Decoding** tab.

3. Select a service from the **Service** drop-down list to decode. The first video and audio components listed in the service PMT will be automatically selected for decode.

4. Click **Save and Continue** to apply change.

It may be necessary to configure the correct [Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type).

### Delay Mode

[Section titled “Delay Mode”](https://docs.mediakind.com/beam/receiver/decoding/#delay-mode)

By default, the **Delay mode** is set to _Standard_, which is optimised for most decode use cases. For more information, see the [Delay Modes](https://docs.mediakind.com/beam/reception/delay-modes) section.

### Checking Service Status

[Section titled “Checking Service Status”](https://docs.mediakind.com/beam/receiver/decoding/#checking-service-status)

Service status can be checked on the same **Edit** ![Edit][base64-image] page or by viewing the **Stats** ![Chart][base64-image] page.

1. Check **Service Status** panel with the following fields:

 - **Selected Service** shows the service number and service name
 - **PCR PID** shows the current PCR PID in use

 ![view status service cp](https://docs.mediakind.com/rx1-img/view_status_service_cp.png)

2. Check the **Video Status** panel. The video PID, component bit rate, codec being used, resolution, picture aspect ratio and frame rate are displayed.

 ![view status service video cp](https://docs.mediakind.com/rx1-img/view_status_service_video_cp.png)

3. Check the **Input Monitor** panel. This displays a thumbnail of the decoded video which is updated every 5 seconds.

 ![view status service input monitor cp](https://docs.mediakind.com/rx1-img/view_status_service_input_monitor_cp.png)

4. Check the **Audio Status** panel. The audio PID, status and codec are displayed. Hover over each audio status field to display additional information, including channel mode, language and bit rate.

 ![view status service audio cp](https://docs.mediakind.com/rx1-img/view_status_service_audio_cp.png)

 The colour of each field provides a quick indication of audio decode status, with green indicating success and red indicating errors.

## Video Decoding

[Section titled “Video Decoding”](https://docs.mediakind.com/beam/receiver/decoding/#video-decoding)

See the **[Video Decoding](https://docs.mediakind.com/beam/reception/tech-specs/#video-decoding)** section in the technical _Reference_ documentation for video codec and resolution capabilities supported by MK.IO Beam.

### Configure video decoding

[Section titled “Configure video decoding”](https://docs.mediakind.com/beam/receiver/decoding/#configure-video-decoding)

The video PID is automatically selected based on the configured [Service Selection](https://docs.mediakind.com/beam/receiver/decoding/#service-selection). This can be overridden as follows:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Video** tab.

 ![Select Edit > Parameters > Video](https://docs.mediakind.com/rx1-img/view_decoding_video.png)

3. Select a video PID from the **Input PID** drop-down list, or manually enter a PID value.

4. Click **Save and Continue** to apply change.

## Audio decoding

[Section titled “Audio decoding”](https://docs.mediakind.com/beam/receiver/decoding/#audio-decoding)

Up to 8 audio components (stereo pairs), or 16 audio channels, can be decoded per _Receiver_ service.

See the **[Audio Decoding](https://docs.mediakind.com/beam/reception/tech-specs/#audio-decoding)** section in the technical _Reference_ documentation for details of the audio codecs supported by MK.IO Beam for decoding and pass-through.

### Decode Channel Configuration

[Section titled “Decode Channel Configuration”](https://docs.mediakind.com/beam/receiver/decoding/#decode-channel-configuration)

Each audio component selected for decoding can be configured with a different number of output channels for embedding in the output stage.

| Decode Channel Configuration | Use case | Output channels |
| :-- | :-- | :-- |
| Stereo | Decode stereo, dual mono, mono, joint stereo or 5.1 downmix | 2 |
| 5.1 | Decode 5.1 audio | 6 |
| 16 | Mandatory for **MPEG-H** decode | 16 |
| Pass-through | No decode. Use this option for compressed audio output | 2 |

### Configure audio decoding

[Section titled “Configure audio decoding”](https://docs.mediakind.com/beam/receiver/decoding/#configure-audio-decoding)

Before you start, ensure [Service Selection](https://docs.mediakind.com/beam/receiver/decoding/#service-selection) is configured.

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Audio** tab to view the audio decode table.

 ![Select Edit > Parameters > Audio](https://docs.mediakind.com/rx1-img/view_decoding_audio.png)

3. The first decoded audio **Name** is automatically given the reference **Audio 1**. This reference is used when configuring audio in the output stage.

4. Select an audio PID from the **Input** drop-down list, or manually enter a PID value.

5. Select the appropriate **[Decode channel configuration](https://docs.mediakind.com/beam/receiver/decoding/#decode-channel-configuration)**.

6. Click **Save and Continue** to apply change.

### Add Audio Decode

[Section titled “Add Audio Decode”](https://docs.mediakind.com/beam/receiver/decoding/#add-audio-decode)

To add a single audio entry (for example, **Audio 2**) to the audio decode table:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Audio** tab to view the audio decode table.

3. Select **Add audio decode** to create a new entry.

4. Configure the new entry by following the steps in [Configure audio decoding](https://docs.mediakind.com/beam/receiver/decoding/#configure-audio-decoding) above.

### Remove Audio Decode

[Section titled “Remove Audio Decode”](https://docs.mediakind.com/beam/receiver/decoding/#remove-audio-decode)

To remove a single audio entry from the audio decode table:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Audio** tab to view the audio decode table.

3. Click the ![Delete][base64-image] icon on the audio decode entry.

### Decode All Input Audio

[Section titled “Decode All Input Audio”](https://docs.mediakind.com/beam/receiver/decoding/#decode-all-input-audio)

To add audio entries for all detected audio components in the configured [Service Selection](https://docs.mediakind.com/beam/receiver/decoding/#service-selection) (this option is only effective when a valid input is incoming):

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Audio** tab to view the audio decode table.

3. Select **Decode all input audio** to create entries for all detected audio components (up to a maximum of eight, **Audio 8**).

4. For each entry, select the appropriate **[Decode channel configuration](https://docs.mediakind.com/beam/receiver/decoding/#decode-channel-configuration)**.

### Remove All Input Audio

[Section titled “Remove All Input Audio”](https://docs.mediakind.com/beam/receiver/decoding/#remove-all-input-audio)

To remove all audio entries from the audio decode table:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Audio** tab to view the audio decode table.

3. Select **Remove all input audio** to empty the audio decode table.

### Auto Select

[Section titled “Auto Select”](https://docs.mediakind.com/beam/receiver/decoding/#auto-select)

When **Auto Select** is enabled, the receiver automatically selects and configures audio components based on the PMT order of the configured [Service Selection](https://docs.mediakind.com/beam/receiver/decoding/#service-selection) from the input transport stream. Existing manual audio decode entries are replaced with automatically generated entries, each configured with the [Decode channel configuration](https://docs.mediakind.com/beam/receiver/decoding/#decode-channel-configuration) set to **Stereo**.

This feature also manages the embedding of audio channels in the output stage. It is best suited for [SDI](https://docs.mediakind.com/beam/receiver/output/sdi) output and is not recommended for use with [SMPTE ST 2110](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/) output configurations.

After a PMT update, the currently assigned audio decoders are reviewed and may be modified:

- Automatic audio selection is based on PMT order, so audio components may be moved, added, or removed.
- Only the first 8 audio components (Stereo) are automatically selected and embedded in the output stage.

To configure _Auto Select_:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Audio** tab to view the audio decode table.

3. Select the **Auto Select** tick box.

 ![view decoding audio auto select mode cp](https://docs.mediakind.com/rx1-img/view_decoding_audio_auto_select_mode_cp.png)

## Data decoding

[Section titled “Data decoding”](https://docs.mediakind.com/beam/receiver/decoding/#data-decoding)

Up to 8 data components can be decoded per _Receiver_ service.

See the **[Ancillary Data](https://docs.mediakind.com/beam/reception/tech-specs/#ancillary-data)** section in the technical _Reference_ documentation for the ancillary data types supported by MK.IO Beam.

The following data types, encapsulated in video (for example, SEI messages or MPEG-2 user data) or as packetised elementary stream (PES) packets, can be processed by the _Receiver_ service and converted for output, for example to SDI.

| Format | Output format |
| :-- | :-- |
| AFD / Bar data | SMPTE ST 2016 |
| Teletext | OP-47 / SMPTE ST 2031 |
| Closed captions | SMPTE ST 334 for EIA-708-B |
| Timecode | SMPTE ST 12 + RP 188 |
| Generic VANC | SMPTE ST 2038 |
| SCTE-35 | SCTE-104 |

### Data Type Configuration

[Section titled “Data Type Configuration”](https://docs.mediakind.com/beam/receiver/decoding/#data-type-configuration)

Where data types are carried as data components (PES packets) in the transport stream, they can be selected as described in the sections below.

Each selected data component must be configured with the appropriate **Data Type configuration** to enable embedding at the output stage.

| Data Type Configuration | Use case |
| :-- | :-- |
| Ancillary | Extraction of generic VANC data |
| Teletext | Extraction of CCIR Teletext System B (EBU Teletext) for conversion to OP-47 or SMTPE ST 2031 |
| SCTE 35 Splicing | Extraction of SCTE-35 data for conversion to SCTE-104 |

### Configure data decoding

[Section titled “Configure data decoding”](https://docs.mediakind.com/beam/receiver/decoding/#configure-data-decoding)

Before you start, ensure [Service Selection](https://docs.mediakind.com/beam/receiver/decoding/#service-selection) is configured.

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Data** tab to view the data decode table.

 ![view edit service decode data cp](https://docs.mediakind.com/rx1-img/view_edit_service_decode_data_cp.png)

3. Select **Add data decode** to create a new entry. The first decoded data **Name** is automatically given the reference **Data 1**.

4. Select a data PID from the **Input** drop-down list, or manually enter a PID value.

5. Select the appropriate **[Data type configuration](https://docs.mediakind.com/beam/receiver/decoding/#data-type-configuration)**.

6. Click **Save and Continue** to apply change.

### Add Data Decode

[Section titled “Add Data Decode”](https://docs.mediakind.com/beam/receiver/decoding/#add-data-decode)

To add a single data entry (for example, **Data 2**) to the data decode table:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Data** tab to view the data decode table.

3. Select **Add data decode** to create a new entry.

4. Configure the new entry by following the steps in [Configure data decoding](https://docs.mediakind.com/beam/receiver/decoding/#configure-data-decoding) above.

### Remove Data Decode

[Section titled “Remove Data Decode”](https://docs.mediakind.com/beam/receiver/decoding/#remove-data-decode)

To remove a single data entry from the data decode table:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Data** tab to view the data decode table.

3. Click the ![Delete][base64-image] icon on the data decode entry.

### Decode All Input Data

[Section titled “Decode All Input Data”](https://docs.mediakind.com/beam/receiver/decoding/#decode-all-input-data)

To add data entries for all detected data components in the configured [Service Selection](https://docs.mediakind.com/beam/receiver/decoding/#service-selection) (this option is only effective when a valid input is incoming):

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Data** tab to view the data decode table.

3. Select **Decode all input data** to create entries for all detected data components (up to a maximum of eight, **Data 8**).

4. For each entry, select the appropriate **[Data type configuration](https://docs.mediakind.com/beam/receiver/decoding/#data-type-configuration)**.

### Remove All Input Data

[Section titled “Remove All Input Data”](https://docs.mediakind.com/beam/receiver/decoding/#remove-all-input-data)

To remove all data entries from the data decode table:

1. From the **Parameters** section, select the **Decoding** tab.

2. Select the **Data** tab to view the data decode table.

3. Select **Remove all input data** to empty the data decode table.