# Source: https://docs.mediakind.com/beam/live-encoder/configure/input/inband-metadata

# Configure in-band metadata in input stream

To configure in-band metadata input stream, follow these step:

In our example, we consider that you have selected an MPEG-2 TS input.

1. From the **Input** tab, go to the **Input streams selection** > **Metadata ID** section then click the **Add** button. The **Metadata selection** window displays.

 ![view add input metadata el](https://docs.mediakind.com/_astro/view_add_input_metadata_el.-rYfp2IP_1NCNRS.webp)

2. Select a [**Type**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#in-band-metadata).

 ![view metadata selection type](https://docs.mediakind.com/_astro/view_metadata_selection_type.B8f7LZao_Z18soYk.webp)

3. Enter or select the following information depending on the selected type:

 1. Enter a [**PID**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#in-band-metadata).

 2. If you selected **SCTE-35** type, you can apply a **Delay**.

 3. If you selected **Cuetones** type, select the audio source that you previously created.

4. Click **Ok** to save.

 - The in-band metadata stream is added to the list of metadata.
 - The in-band metadata is automatically added to the **Encoding** tab.
5. Click **Save and continue** or **Save and exit** to save your changes.

- You can [configure the metadata encoding](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding).
- You can [add the metadata to the output stream](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).