# Source: https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder

# Configure the Live Encoder service

The following sections explain the basic configuration for the Live Encoder component. For advanced configuration, see the following sections of Live Encoder:

- [Input parameters](https://docs.mediakind.com/beam/live-encoder/configure/input)
- [Encoding parameters](https://docs.mediakind.com/beam/live-encoder/configure/encoding)
- [Output parameters](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output)

To configure the Live Encoder, follow these steps:

1. Click ![Edit][base64-image] next to the **Live Encoder** component within the feed. The Live Encoder settings open.

 ![ce1 channel edit encode cursor](https://docs.mediakind.com/ce1-img/ce1_channel_edit_encode_cursor.png)

2. When you get to the **General** tab, the name is already pre-defined. It will be incremented at each new feed instance so you don’t need to change it.

## Configure the input

[Section titled “Configure the input”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#configure-the-input)

To configure the video, audio and data components, follow these steps:

1. Go to the **Input** tab.

2. In the **General parameters** section, select the input type:

 - [**SDI**](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#sdi-input)
 - or [**SMPTE ST 2110**](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#smpte-st-2110-input)

### SDI input

[Section titled “SDI input”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#sdi-input)

Before you start: ensure you already [set up the SDI card for HD or UHD operation](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card).

To configure an SDI input, follow these steps:

1. From the **General parameters** section:

 - Set the input **Type** to **SDI**.
 - Select a Connector from the drop-down list.
 - You can keep the SDI card number, by default **1** or change it.
2. Go to the **Input streams selection** section: the input video is already configured but you can add an input audio:

 - Go to the **Audio ID** section.
 - Click **Add**. You can either keep the default parameters or modify them as needed.
 - Click **Ok** to validate.
3. Click **Save and continue** to save your changes.

### SMPTE ST 2110 input

[Section titled “SMPTE ST 2110 input”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#smpte-st-2110-input)

Before you start: ensure you already [set up the SMPTE ST 2110 input operation](https://docs.mediakind.com/beam/contribution/how-to/setup-smpte-2110-input).

To configure an SMPTE ST 2110 input, follow these steps:

1. In the **Input** > **General parameters** section, set the input **Type** to **SMPTE ST 2110**.

2. Configure the input video stream:

 - In the **Input streams selection** section, go to the **Video ID** section.
 - Click ![Edit][base64-image] then enter the **SDP file location**.
 - Click **Ok** to validate.
3. Add and configure the input audio stream:

 - In the **Input streams selection** section, go to the **Audio ID** section.
 - Click **Add** then enter the **SDP file location**.
 - Click **Ok** to validate.
4. Click **Save and continue** to save your changes.

**See also** 
[Limitations and Considerations for ST2110 and PTP](https://docs.mediakind.com/beam/contribution/how-to/setup-smpte-2110-input#limitations-and-considerations-for-st2110-and-ptp) 
[Configure SDP files on MK.IO Beam](https://docs.mediakind.com/beam/contribution/how-to/setup-smpte-2110-input#configure-sdp-files-on-mkio-beam) 
[Setup the PTP for ST 2110](https://docs.mediakind.com/beam/contribution/how-to/setup-smpte-2110-input#configure-ptp-for-st-2110)

## Configure video, audio and data components

[Section titled “Configure video, audio and data components”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#configure-video-audio-and-data-components)

### Configure the video component

[Section titled “Configure the video component”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#configure-the-video-component)

To configure the video component go to the **Video encoding** section.

1. Click ![Edit][base64-image] to check and configure the video parameters.

2. Select the appropriate parameters for the video encoding.

3. Click **Ok** to validate.

### Configure the audio component

[Section titled “Configure the audio component”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#configure-the-audio-component)

To configure the audio component go to the **Audio encoding** section.

1. Click **Add**. A new window is displayed. By default audio codec is set to **Pass-through** but you can change it.

2. Select the appropriate parameters for the audio encoding.

3. Click **Ok** to validate.

### Save

[Section titled “Save”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#save)

Click **Save and continue** to save your changes.

## Configure the output

[Section titled “Configure the output”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#configure-the-output)

1. Go to the **Output** tab. A default output has already been created.

2. In the top right corner, click ![Edit][base64-image].

3. Scroll to the **Common MPEG-2 TS parameters** section. You may change some parameters, especially **Standard**, **PCR PID**, **Program number**, **Service name**, **Service provider**.

4. Scroll to the **Output streams** section, click ![Edit][base64-image] then tick the audio stream.

5. You can change the PIDs if needed.

6. Click **Ok** to validate.

7. Click **Save and continue** to save your changes.

## Configure advanced parameters

[Section titled “Configure advanced parameters”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#configure-advanced-parameters)

### CBR

[Section titled “CBR”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#cbr)

To ensure that the video is output as a CBR elementary stream, you need to add an advanced parameter:

1. Go to the **Advanced parameters** tab.

2. Click **Add** then set **Mpeg2ts.NullPacketStuffing** to **False**.

 ![ce1 encode adv param](https://docs.mediakind.com/ce1-img/ce1_encode_adv_param.png)

3. Click **Save and exit** to save and finalize your service configuration.

4. Select the **Home** menu from the left menu bar to go back to the Home page.

### SCTE-35 pass-through

[Section titled “SCTE-35 pass-through”](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder/#scte-35-pass-through)

If passing through SCTE35 messages with a default configuration, a high proportion of null splice messages will be output in comparison to splice messages which contain actual splices. This can be adjusted using the **capDmif.maxScte35Bitrate** advanced parameter. Setting this to a value of **7520** will reduce the number of null splice messages in the output.