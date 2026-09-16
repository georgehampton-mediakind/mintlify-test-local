# Source: https://docs.mediakind.com/beam/receiver/output/sdr-hdr

# SDR/HDR Signalling

# Set SDR/HDR Signalling

[Section titled “Set SDR/HDR Signalling”](https://docs.mediakind.com/beam/receiver/output/sdr-hdr/#set-sdrhdr-signalling)

SDR/HDR signalling ensures that downstream devices interpret the video signal correctly and apply the appropriate display characteristics (for example, brightness, contrast, and colour gamut).

In most cases, the signalling information is extracted from the incoming transport stream. If this metadata is missing or incomplete, you can override it and explicitly specify the desired dynamic range signalling.

The **Dynamic range signalling** setting does not perform any dynamic range conversion of the decoded video. It only defines the signalling metadata embedded in the outgoing video stream.

## Dynamic Range and Color Standards

[Section titled “Dynamic Range and Color Standards”](https://docs.mediakind.com/beam/receiver/output/sdr-hdr/#dynamic-range-and-color-standards)

SDR and HDR describe the luminance range and transfer characteristics of a video, not the chromaticity or color primaries. ITU-R recommendations BT.601, BT.709, and BT.2020 define those color primaries and colorimetry independently of dynamic range. BT.601 covers SD, with distinct primary sets for 525-line (NTSC) and 625-line (PAL) systems; BT.709’s HD primaries match BT.601’s 625-line variant; BT.2020 covers the wider gamut used for UHD and HDR.

| Video Format | Dynamic Range | Color Standard |
| :-- | :-- | :-- |
| SD | SDR | BT.601 |
| HD | SDR | BT.709 |
| HD | HDR (PQ or HLG) | BT.2020 |
| UHD | HDR (PQ or HLG) | BT.2020 |

In practice, HDR workflows typically use BT.2020 as the color container because modern displays and delivery systems support wider gamuts, but this is a pairing choice rather than a strict requirement.

## Dynamic Range Signalling

[Section titled “Dynamic Range Signalling”](https://docs.mediakind.com/beam/receiver/output/sdr-hdr/#dynamic-range-signalling)

### Supported Signalling Options

[Section titled “Supported Signalling Options”](https://docs.mediakind.com/beam/receiver/output/sdr-hdr/#supported-signalling-options)

The two most commonly used HDR transfer functions are **PQ (SMPTE ST 2084)** and **HLG (ITU-R BT.2100)** and so these are available when selecting the **Dynamic range signalling** in the _Receiver_ service configuration.

| Dynamic range signalling option | Dynamic range<br>signalled on the output | Color standard<br>signalled on the output |
| :-- | :-- | :-- |
| Follow input | \- | \- |
| SDR (BT.709) | SDR | BT.709 |
| SDR (BT.2020) | SDR | BT.2020 |
| HDR HLG10 | HDR HLG transfer function with 10-bit precision | BT.2020 |
| HDR PQ10 | HDR PQ transfer function with 10-bit precision | BT.2020 |

Notes on the **Follow input** selection:

- By default, a new _Receiver_ service outputs video signalling **SDR (BT.709)**.
- When a dynamic range standard is successfully extracted, the output video signals the extracted standard.
- When the dynamic range standard is lost, the last extracted standard continues to be signalled on the output video.
- If the video input is lost, the last decoded standard continues to be signalled on the output video, and outputs video according to the **Video fail mode** selection.
- **Follow input** will automatically follow any conversions made with [HDR to SDR conversion](https://docs.mediakind.com/beam/receiver/output/hdr-sdr) so it will be unnecessary to manually override and select SDR.

### Configuring Dynamic Range Signalling

[Section titled “Configuring Dynamic Range Signalling”](https://docs.mediakind.com/beam/receiver/output/sdr-hdr/#configuring-dynamic-range-signalling)

To manually set the standard to be used for SDR or HDR signalling follow the steps below:

1. On the **Home** page, select the **RECEIVER** item from the required feed, then click ![Edit][base64-image] to edit.

2. In the **Parameters** window, select the **Output** tab.

3. Select the tab for the required output type, for example **SDI 1**.

4. Select the appropriate setting from the **[Dynamic range signalling](https://docs.mediakind.com/beam/receiver/output/sdr-hdr/#dynamic-range-signalling-settings)** drop-down menu:

 - Select **Follow input** to extract the video format from the incoming transport stream and embed into the output video.
 - Select one of the **SDR** or **HDR** standards to override the incoming format and embed into the output video.

 ![view service output parameters sdr hdr signalling](https://docs.mediakind.com/rx1-img/view_service_output_parameters_sdr_hdr_signalling.png)

5. Click **Save and Continue** to apply change.