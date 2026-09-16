# Source: https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding

# Configure metadata encoding

Before you start: ensure you have defined metadata encoding parameters (see [Configure in-band metadata input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/inband-metadata) or [Configure out-of-band metadata input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata)).

1. From the **Encoding** tab, go to the **Metadata encoding** section.

2. Metadata created from the **Input** tab has been already automatically created. You can click ![Edit][base64-image] to edit an existing one or click **Add** to create a new metadata encoding configuration. The **Encoded metadata selection** window displays.

3. Select the **Codec** to define how metadata is processed.

 | Metadata input type | Possible values for Codec |
 | --- | --- |
 | SCTE-35<br>SCTE-35 OOB<br>Cuetones | **Pass-through** or **Conditioning**<br>\- Select **Pass-through** to forward SCTE-35 information in dedicated output metadata track without video conditioning. For Automation (![Clock][base64-image]), metadata must be **Pass-through**.<br>\- **Conditioning** allows video stream conditioning and lets you define a POIS server. It can also be used in [Blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding). |
 | AIT<br>EBIF<br>EISS | **Pass-through** |
 | SMPTE-2038 | **Pass-through**, **Timecode ID3**, or **Tissot clock metadata ID3**<br>In Pass-through mode, you can specify the **Max Bitrate** on output. If the bitrate target is exceeded, an alarm is raised.<br>The Tissot metadata present in the SMPTE-2038 stream contains several game metadata (shot clock, scores, team names,…) sent individually in distinct PES packets. To ensure that the Tissot metadata is available for the clients/players, Live Encoder carries them into one ID3 stream (see [Convert SMPTE 2038 to ID3](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding/#convert-smpte-2038-to-id3)). |

4. For **SMPTE-2038** input metadata, if you selected [**Timecode ID3**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata#timecode-id3-parameters), or [**Tissot clock metadata ID3**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata#tissot-clock-metadata-id3-parameters) codec, specific parameters need to be completed.

5. If metadata is set to **Conditioning**, and if you want to define a POIS server, tick the **Use POIS** checkbox then set the appropriate value for each [POIS parameter](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata#pois-parameters).

6. If metadata is set to **Conditioning** with a POIS server, and if you want to adjust the PTS to ensure that the SCTE-35 marker is equal to the PTS of the corresponding video frame, tick the [**PTS insertion compensation**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata) checkbox.

7. If metadata is set to **Conditioning** and if you want the encoder to retrieve the conditioning status after a failover thus ensuring internal POIS resiliency, tick the [**Recover conditioning state if failover**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata) checkbox.

8. Click **OK** to validate.

9. Click **Save and continue** or **Save and exit** to save your changes.

10. You can specify the conditioned metadata in the [video stream parameters](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#stream-metadata-settings).

11. You can add the conditioned metadata in the [output stream](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).

## Convert SMPTE 2038 to ID3

[Section titled “Convert SMPTE 2038 to ID3”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding/#convert-smpte-2038-to-id3)

MediaKind Live Encoder ingests and converts SMPTE-2038 to provide data downstream based on the incoming time sources. 
To ensure that metadata is available for the clients/players, the Live Encoder carries them into ID3 streams. Two types of data can be extracted from SMPTE-2038 and carried into ID3 streams:

- Tissot metadata: the Tissot metadata in SMPTE-2038 stream contains several game metadata (shot clock, scores, Team names, etc) sent individually in distinct PES packets.
- Timecode information: there are multiple sources of time, and the user can configure the type of timecode to use (LTC, VITC1 or VITC2). The timecodes are embedded in an ID3 stream and identified thanks to MPEG2-TS descriptors. If the input source does not have valid timing data, the timing information is not present in the ID3 data.

This feature is only available with **Internet TV** export type.

To convert SMPTE 2038 to ID3, follow these steps:

1. From the **Input** tab, [configure the SMPTE 2038 in-band metadata in the input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/inband-metadata).

2. Go to the **Encoding** tab and check that **Export type** is set to **Internet TV**.

3. Go to the **Metadata encoding** section to add and configure the subtitle encoding:

 - Click the **Add** button then set the **Codec** to **Timecode ID3**, set **Origin** to **LTC** and enter the **Period** (in ms).

 ![el encoding metadata smpte2038 to id3](https://docs.mediakind.com/_astro/el_encoding_metadata_smpte2038_to_id3.BuBRnZXB_Z29aYPr.webp)

 - Click **OK** to validate.

4. Add the video stream related to the output.

 1. From the **Output** tab, go o the **Output streams** section, then click either the **Add** button (if no stream has been selected) or the edit button, ![Edit][base64-image] in the **Actions** column.

 2. Select the video stream that you configured in Step #3.

 ![EL output stream metadata id3](https://docs.mediakind.com/_astro/EL_output_stream_metadata_id3.DFJmpBZy_4ptdd.webp)

 3. Click **OK** to validate.

 You should see the selected streams in the list of output streams.

5. Click **Save and exit** to save and finalize your service configuration and go back to the **Services** page.

6. [Assign a server to run the service](https://docs.mediakind.com/beam/web-interface/services#assign-a-server-to-run-the-service).

7. Click ![Chart][base64-image] to display service details and monitor the service:

 - **Media info** tab shows the SMPTE-30 metadata at input.

 ![EL stats media info metadata smpte2038](https://docs.mediakind.com/_astro/EL_stats_media_info_metadata_smpte2038.BjEVbD4D_20VG67.webp)

 - **Output** tab shows ID-3 metadata at output.

 ![EL stats output metadata id3](https://docs.mediakind.com/_astro/EL_stats_output_metadata_id3.ubc5hUXE_Z1nGyxT.webp)