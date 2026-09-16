# Source: https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding

# Configure the video encoding parameters

To configure the video encoding parameters, follow these steps:

1. From the **Encoding** tab, go to the **Video encoding** section.

2. Click the **Add** button to create a video profile or click ![Edit][base64-image] in the **Actions** column to configure an existing profile.

3. Enter the appropriate value for [**Video encoding**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video) parameters.

4. If you selected Statmux rate control, expand the [**Statmux advanced settings**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#statmux-advanced-parameters) section then enter the appropriate value for each parameter.

5. Expand the [**Codec settings**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#codec-settings) section then enter the appropriate value for each parameter.

6. Expand the [**Video processing**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#video-processing) section then enter the appropriate value for each parameter.

7. Expand the [**GOP settings**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#gop-settings) section then enter the appropriate value for each parameter.

8. Expand the [**Aspect ratio**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#aspect-ratio) section then enter the appropriate value for each parameter.

9. Expand the [**Stream metadata settings**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#stream-metadata-settings) section then enter the appropriate value for each parameter.

10. Expand the [**Subtitle settings**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#subtitle-settings) section then enter the appropriate value for each parameter.

11. Cick **Ok** to validate.

12. You can create a [child encoding](https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding/#create-a-child-encoding-factorization).

13. You can configure [HDR signaling conversion (HEVC)](https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding/#configure-hdr-signaling-conversion-hevc).

14. Click **Save and continue** or **Save and exit** to save your changes.

## Create a child encoding (factorization)

[Section titled “Create a child encoding (factorization)”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding/#create-a-child-encoding-factorization)

MediaKind Live Encoder can factorize the encoding of ABR profiles that have the same resolution and frame rate: processing for parent and child encodings is mutualized to optimize CPU usage.

Before you start: ensure you have created a video encoding stream. This main video stream will be considered as parent.

To create a child video encoding, follow these steps:

1. Select the parent video stream you want to factorize.

2. Click ![Fork][base64-image] in the **Actions** column to create and configure a child encoding with the corresponding [target bit rate](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#general-parameters).

 Child stream bitrates must be more than half of the parent bitrate.

 ![MFVP EL video encoding factorization](https://docs.mediakind.com/_astro/MFVP-EL_video_encoding_factorization.ZHhqeTwt_1qxRiE.webp)

3. Click **Save and continue** or **Save and exit** to save your changes.

## Configure HDR signaling conversion (HEVC)

[Section titled “Configure HDR signaling conversion (HEVC)”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding/#configure-hdr-signaling-conversion-hevc)

You can configure HDR signaling conversion in the encoding options, or choose to keep the initial input ‘as is’ using the **Follow input** option.

1. From the **Video encoding** section, click **Add** to create and configure a new video stream or click ![Edit][base64-image] to edit an existing video stream.

2. Set the video codec to **HEVC main 10 bits**.

3. Expand the **Codec settings** section.

4. Configure the [**Dynamic range mode**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#codec-settings) depending on your conversion requirements.

 ![encoding video hevc10 el](https://docs.mediakind.com/_astro/encoding_video_hevc10_el.CIRxTQfQ_Z1a7S9d.webp)

5. Click **Ok** to validate. The **Encoding** page is displayed.

6. Click **Save and continue** or **Save and exit** to save your changes.

## Align EBP acquisition time on timecodes

[Section titled “Align EBP acquisition time on timecodes”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/video-encoding/#align-ebp-acquisition-time-on-timecodes)

This feature is only available with advanced parameters.

This feature allows aligning wallclock time in the output segments.

A typical use case is when you have several live channels with feeds coming from distinct cameras. The use of the Timecode for the EBP acquisition time allows the end-user player to switch to the closest segment when switching from one live channel to another.

To configure a service, follow these steps:

1. Create an Internet TV service named **wallClock**.

2. Go to the **Advanced parameters** tab, then click **Add** an enter the following parameters:

 | Parameter name | Description | Value |
 | --- | --- | --- |
 | `videoSynchronizer.alignEbpAcquisitionTimeOnTimecodes` | Activates this feature. | Set to **true** |
 | `videoSynchronizer.alignEbpAcquisitionTimeOnTimecodes.margin` | Margin in seconds | Default value is **10** |

3. Go to the **Output** tab, click **Add an output** then go to the **General parameters** section and set the **GOP signaling** to **EBP-based**.

4. Click **Save and exit** to save and finalize your service configuration and go back to the **Services** page.

5. From the **Services** page, click the ![Clock][base64-image] icon of the wallClock service to display statistics.

6. Go to the **Monitoring** page: **EBP alignment on timecode** information is displayed at the bottom right. It includes two parameters:

 - **Aligned** status: indicates if the UTC time was aligned with the Timecode. Possible values: true or false
 - **Offset (ms)**: offset in milliseconds between the Timecode and UTC time (average on 1 second).

 These two parameters let you check if the Timecode and NTP time are almost aligned. They are almost aligned:

 - if the absolute value of the difference is lower than the margin specified in the **Advanced parameters**,
 - or if the absolute value of the difference is greater than the number of seconds in an hour (3600) minus the margin. This means that the timecode and UTC time are spread on two distinct hours.

An alarm can be raised if the UTC Timecode cannot be aligned on the EBP Timecodes, either because there are no Timecodes or because the offset is larger than the margin.