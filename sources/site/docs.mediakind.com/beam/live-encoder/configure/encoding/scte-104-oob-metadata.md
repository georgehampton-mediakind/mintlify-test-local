# Source: https://docs.mediakind.com/beam/live-encoder/configure/encoding/scte-104-oob-metadata

# SCTE-104/IP out-of-band metadata

Live Encoder supports out-of-band conditioning via SCTE-104/IP, on the same principle as ESAM.

- Live Encoder can receive conditioning triggers from an external server, using SCTE-104 over IP messages.
- Once received, SCTE-104 messages are decoded, sent to the targeted channel (based on DPI PID index) and converted in SCTE-35 in order to enable stream conditioning actions.

![EL SCTE104 adsmart](https://docs.mediakind.com/_astro/EL_SCTE104_adsmart.CG1PDseh_Z20NKHh.webp) _SCTE-104 out-of-band IP conditioning_

## Configure SCTE-104/IP out-of-band metadata

[Section titled “Configure SCTE-104/IP out-of-band metadata”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/scte-104-oob-metadata/#configure-scte-104ip-out-of-band-metadata)

Before you start, ensure that [you have added and configured the SCTE-104/IP out-of-band metadata in the input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata#configure-scte-104ip-out-of-band-metadata-input-stream).

Configuring SCTE-104/IP out-of-band metadata requires multiple steps:

### Configure the metadata encoding

[Section titled “Configure the metadata encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/scte-104-oob-metadata/#configure-the-metadata-encoding)

1. From the **Encoding** tab, go to the **Metadata encoding** section.

2. For each SCTE-104/IP metadata, click ![Edit][base64-image] in the **Actions** column then set the **Codec** to **Conditioning**.

 ![EL encoding metadata cfig conditioning](https://docs.mediakind.com/_astro/EL_encoding_metadata_cfig_conditioning.CagX17EK_23Aj5C.webp)

3. Click **Ok** to validate.

### Configure the video encoding

[Section titled “Configure the video encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/scte-104-oob-metadata/#configure-the-video-encoding)

1. Go to the **Video encoding** section.

2. For each video stream, select the associated [**Stream Conditioning**](https://docs.mediakind.com/beam/live-encoder/configure/encoding).

 ![EL encoding video adsmart](https://docs.mediakind.com/_astro/EL_encoding_video_adsmart.BGQp8O8M_1hmqtC.webp) _Example of video configuration_

3. Click **Ok** to validate.

### Add the SCTE-35 conditioned stream related to the SCTE-104/IP to the output

[Section titled “Add the SCTE-35 conditioned stream related to the SCTE-104/IP to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/scte-104-oob-metadata/#add-the-scte-35-conditioned-stream-related-to-the-scte-104ip-to-the-output)

1. Go to the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or ![Edit][base64-image] in the **Actions** column.

3. For each video stream, tick the associated [**Stream Conditioning**](https://docs.mediakind.com/beam/live-encoder/configure/encoding).

 ![EL output metadata conditioning](https://docs.mediakind.com/_astro/EL_output_metadata_conditioning.Csd4iBVO_Z1Xu9li.webp)

4. Click **Ok** to validate. You should see the selected streams in the list of output streams.