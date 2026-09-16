# Source: https://docs.mediakind.com/beam/receiver/output/hd-downconvert

# Video Conversion

Each _Receiver_ service can convert an input video resolution to a different output resolution (i.e. up-conversion or down-conversion). The processed video can be passed through to output standards such as SDI, SMPTE ST 2022-6, or SMPTE ST 2110.

## Supported Conversions

[Section titled “Supported Conversions”](https://docs.mediakind.com/beam/receiver/output/hd-downconvert/#supported-conversions)

The following output resolution conversions are supported. Frame-rate is preserved; conversions between interlaced and progressive formats are supported where applicable.

| Input resolution | SD Output | 720p Output | 1080i Output | 1080p Output | 2160p Output |
| :-- | :-: | :-: | :-: | :-: | :-: |
| UHD | | ✔ | ✔ | ✔ | ✔ |
| 1080p | | ✔ | ✔ | ✔ | |
| 1080i | | ✔ | ✔ | ✔ | |
| 720p | | ✔ | ✔ | | |
| SD | ✔ | | | | |

## Configuring Video Scaling

[Section titled “Configuring Video Scaling”](https://docs.mediakind.com/beam/receiver/output/hd-downconvert/#configuring-video-scaling)

Video conversion is controlled using the **Video Scaling** option. It is also available when [Multiple Outputs](https://docs.mediakind.com/beam/receiver/output/multiple-outputs) have been added.

If the decoded input format is not supported by the target output (for example, UHD routed to a 3G-SDI-capable output port), the video must be down-converted to a supported format such as 1080p.

### Enabling Video Scaling

[Section titled “Enabling Video Scaling”](https://docs.mediakind.com/beam/receiver/output/hd-downconvert/#enabling-video-scaling)

To enable video scaling for a specific _Receiver_ service, follow these steps:

1. On the **Home** page, select the **RECEIVER** item from the required feed, then click ![Edit][base64-image] to edit.

2. In the **Parameters** window, select the **Output** tab.

3. From the **Video scaling** drop-down menu, select the required output resolution. Select **No scaling** to disable conversion.

4. After completing the configuration, click **Save and Continue** to apply the changes.

If the decoded input format and the selected **Video scaling** is not supported, an alarm will be raised.