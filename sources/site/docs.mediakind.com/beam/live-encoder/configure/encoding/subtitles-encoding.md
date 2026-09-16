# Source: https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding

# Configure subtitle encoding

Before you start: ensure you have configured a [subtitle input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/subtitle).

1. From the **Encoding** tab, go to the **Subtitle encoding** section.

2. Click **Add** to create a new subtitle processing configuration or click ![Edit][base64-image] to edit an existing one. The **Subtitles encoding** window displays.

3. Select the **Codec** to define how metadata is processed:

 - **Pass-through**
 - **DVB-Subtitles**
 - **DVB-Teletext**
 - **Closed caption CEA 608** (only valid with both IP TV export type and 25i/50p to 29.97i/59.94p frame rate conversion)
 - **DVB-TTML** (only valid with Internet TV export type)
 - **DASHIF-TTML** (only valid with Internet TV export type)

Possible values depend on [subtitle type](https://docs.mediakind.com/beam/live-encoder/parameters/input/subtitle).

4. Depending on the selected codec, [specific parameters](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle) must be configured.

5. Click **Save and continue** or **Save and exit** to save your changes.

6. Add the conditioned metadata to the output stream (see [Define the output stream composition](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition)).

## Convert Teletext to Closed Caption

[Section titled “Convert Teletext to Closed Caption”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#convert-teletext-to-closed-caption)

To convert Teletext to Closed Caption, follow these steps:

### Add input subtile

[Section titled “Add input subtile”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-input-subtile)

From the **Input** tab, go to the **Sources** > **Input streams selection** > **Subtitle ID** section then [Configure input subtitle selection](https://docs.mediakind.com/beam/live-encoder/configure/input/subtitle) by setting the **Type** to **Teletext**.

### Check Video adjustment

[Section titled “Check Video adjustment”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-video-adjustment)

Go to the **Media processing** tab then go to the **Video processing** > **Video adjustment** section and check that **Frame rate conversion** is set to **25i/50p to 29.97i/59.94p**.

### Check export type

[Section titled “Check export type”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-export-type)

Go to the **Encoding** tab then check that **Export type** is set to **IPTV**.

### Configure subtitle encoding

[Section titled “Configure subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-subtitle-encoding)

Go to the **Metadata encoding** section to add and configure the subtitle encoding:

1. Click the **Add** button then set the **Codec** to **Closed caption CEA 608**.

2. Click the **Add** button then specify the input teletext**Magazine**, the **Page** and the destination CEA 608 **Field**.

 ![EL encoding video subtitle CC CEA608](https://docs.mediakind.com/_astro/EL_encoding_video_subtitle_CC_CEA608.CxJWPtOd_Z1d20gT.webp)

3. Click **OK** to validate.

### Configure subtitle encoding

[Section titled “Configure subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-subtitle-encoding-1)

Go to the **Video encoding** section to configure the video encoding.

1. Go to the **Video encoding** > **Stream metadata setting** section.

2. Tick the **Closed caption** checkbox then in the **Closed caption stream**, select the stream created in Step #5.

 ![EL encoding video metadata settings CC](https://docs.mediakind.com/_astro/EL_encoding_video_metadata_settings_CC.Sj6E5xQa_Z2s2WDH.webp)

3. Click **OK** to validate.

### Add the video stream related to the output

[Section titled “Add the video stream related to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-the-video-stream-related-to-the-output)

1. Go to the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or ![Edit][base64-image] in the **Actions** column.

3. Select the video stream that you configured in Step #6 that includes the closed caption.

 ![EL output stream video CC](https://docs.mediakind.com/_astro/EL_output_stream_video_CC.y6L5ZbSh_2dKkYA.webp)

4. Click **OK** to validate. You should see the selected streams in the list of output streams.

## Convert Teletext to TTML

[Section titled “Convert Teletext to TTML”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#convert-teletext-to-ttml)

To convert Teletext to TTML, follow these steps:

### Add input subtile

[Section titled “Add input subtile”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-input-subtile-1)

1. From the **Input** tab, go to the **Sources** > **Input streams selection** > **Subtitle ID** section and [Configure input subtitle selection](https://docs.mediakind.com/beam/live-encoder/parameters/input/subtitle) by setting the **Type** to **Teletext**.

### Check export type

[Section titled “Check export type”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-export-type-1)

2. Check that **Export type** is set to **Internet TV**.

### Configure the subtitle encoding

[Section titled “Configure the subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-the-subtitle-encoding)

1. Click the **Encoding** tab then go to the **Subtitle encoding** section. Teletext subtitle has been added to the **Encoding** tab. By default **Codec** is set to **Pass-through**.

2. Click ![Edit][base64-image] to edit the subtitle encoding.

3. Select the codec used to convert the subtitles, **DVB-TTML**. A new window let you configure the [TTML parameters](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle#dvb-ttml-with-teletext-subtitles-input).

4. Click **Ok** once done. You should get the following:

 ![el ttml encoding](https://docs.mediakind.com/_astro/el_ttml_encoding.BMn7aUWa_Z1mpWOo.webp)

### Add the subtitle stream to the output

[Section titled “Add the subtitle stream to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-the-subtitle-stream-to-the-output)

1. Click the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or the edit button, ![Edit][base64-image] in the **Actions** column.

3. Tick the subtitle stream that you configured in the previous step.

4. Click **OK** to validate. You should see the selected streams in the list of output streams.

 ![el ttml output](https://docs.mediakind.com/_astro/el_ttml_output.Cy1kRuIW_2upqqy.webp)

## Convert ARIB B24 to DVB-Teletext

[Section titled “Convert ARIB B24 to DVB-Teletext”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#convert-arib-b24-to-dvb-teletext)

Only available with MPEG-2 TS/UDP input type (or MediaComposer with MPEG-2 TS/UDP source only).

To convert ARIB B24 subtitles to Teletext, follow these steps:

### Add an ARIB B24 subtitle at the input

[Section titled “Add an ARIB B24 subtitle at the input”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-an-arib-b24-subtitle-at-the-input)

1. From the **Input** tab, go to the **Sources** > **Input streams selection** > **Subtitle ID** section.

2. Click **Add** then set the **Type** to **ARIB B24** and enter either the **PID** or **Language** of the subtitle. You should get the following:

 ![el arib input](https://docs.mediakind.com/_astro/el_arib_input.COBuMQ3A_ZehVw1.webp)

### Configure the subtitle encoding

[Section titled “Configure the subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-the-subtitle-encoding-1)

1. Click the **Encoding** tab then go to the **Subtitle encoding** section. ARIB B24 subtitle has been added to the **Encoding** tab. By default **Codec** is set to **Pass-through**.

2. Click ![Edit][base64-image] to edit the subtitle encoding.

3. Select the codec used to convert the subtitles, **DVB-Teletext**. You should get the following:

 ![el arib encoding](https://docs.mediakind.com/_astro/el_arib_encoding.yp-SPTa3_ZPJjIJ.webp)

### Add the subtitle stream to the output

[Section titled “Add the subtitle stream to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-the-subtitle-stream-to-the-output-1)

1. Click the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or the edit button, ![Edit][base64-image] in the **Actions** column.

3. Tick the subtitle stream that you configured in the previous step.

4. Click **OK** to validate. You should see the selected streams in the list of output streams.

 ![el arib output](https://docs.mediakind.com/_astro/el_arib_output.CSkQjYGU_ZuUV5M.webp)

### Check that ARIB B24 subtitles are present

[Section titled “Check that ARIB B24 subtitles are present”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-that-arib-b24-subtitles-are-present)

. You can check that ARIB B24 subtitles are present in the input by displaying statistics. ![el arib stats](https://docs.mediakind.com/_astro/el_arib_stats.CcllFMec_Z1YK7QI.webp)

. You can check that ARIB B24 subtitles are present in the output by opening the output stream in a player.

## Convert CEA-608/708 Closed Captions to TTML for DASH output

[Section titled “Convert CEA-608/708 Closed Captions to TTML for DASH output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#convert-cea-608708-closed-captions-to-ttml-for-dash-output)

To convert CEA-608/708 Closed Captions to TTML, follow these steps:

### Add input subtile

[Section titled “Add input subtile”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-input-subtile-2)

1. From the **Input** tab, go to the **Sources** > **Input streams selection** > **Subtitle ID** section and [Configure input subtitle selection](https://docs.mediakind.com/beam/live-encoder/parameters/input/subtitle) by setting the **Type** to **CEA-608/CEA-708 Closed Captions**.

### Check export type

[Section titled “Check export type”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-export-type-2)

2. Check that **Export type** is set to **Internet TV**.

### Configure the subtitle encoding

[Section titled “Configure the subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-the-subtitle-encoding-2)

1. Click the **Encoding** tab then go to the **Subtitle encoding** section.

2. Click **Add**. A new window let you configure the subtitle parameters.

3. Select the codec used to convert the subtitles, **DVB-TTML** or **DASHIF-TTML** then configure the [DVB-TTML](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle#dvb-ttml-with-cea-608cea-708-closed-captions-input) or [DASHIF-TTML](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle#dashif-ttml-with-cea-608cea-708-closed-captions-input).

4. Click **Ok** once done.

### Add the subtitle stream to the output

[Section titled “Add the subtitle stream to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-the-subtitle-stream-to-the-output-2)

1. Click the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or the edit button, ![Edit][base64-image] in the **Actions** column.

3. Tick the subtitle stream that you configured in the previous step.

4. Click **OK** to validate. You should see the selected streams in the list of output streams.

## Convert ARIB B24 to DVB-Teletext

[Section titled “Convert ARIB B24 to DVB-Teletext”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#convert-arib-b24-to-dvb-teletext-1)

Only available with MPEG-2 TS/UDP input type (or MediaComposer with MPEG-2 TS/UDP source only).

To convert ARIB B24 subtitles to Teletext, follow these steps:

### Add an ARIB B24 subtitle at the input

[Section titled “Add an ARIB B24 subtitle at the input”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-an-arib-b24-subtitle-at-the-input-1)

1. From the **Input** tab, go to the **Sources** > **Input streams selection** > **Subtitle ID** section.

2. Click **Add** then set the **Type** to **ARIB B24** and enter either the **PID** or **Language** of the subtitle. You should get the following:

 ![el arib input](https://docs.mediakind.com/_astro/el_arib_input.COBuMQ3A_ZehVw1.webp)

### Configure the subtitle encoding

[Section titled “Configure the subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-the-subtitle-encoding-3)

1. Click the **Encoding** tab then go to the **Subtitle encoding** section. ARIB B24 subtitle has been added to the **Encoding** tab. By default **Codec** is set to **Pass-through**.

2. Click ![Edit][base64-image] to edit the subtitle encoding.

3. Select the codec used to convert the subtitles, **DVB-Teletext**. You should get the following:

 ![el arib encoding](https://docs.mediakind.com/_astro/el_arib_encoding.yp-SPTa3_ZPJjIJ.webp)

### Add the subtitle stream to the output

[Section titled “Add the subtitle stream to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-the-subtitle-stream-to-the-output-3)

1. Click the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or the edit button, ![Edit][base64-image] in the **Actions** column.

3. Tick the subtitle stream that you configured in the previous step.

4. Click **OK** to validate. You should see the selected streams in the list of output streams.

 ![el arib output](https://docs.mediakind.com/_astro/el_arib_output.CSkQjYGU_ZuUV5M.webp)

### Check that ARIB B24 subtitles are present

[Section titled “Check that ARIB B24 subtitles are present”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-that-arib-b24-subtitles-are-present-1)

. You can check that ARIB B24 subtitles are present in the input by displaying statistics. ![el arib stats](https://docs.mediakind.com/_astro/el_arib_stats.CcllFMec_Z1YK7QI.webp)

. You can check that ARIB B24 subtitles are present in the output by opening the output stream in a player.

## Convert DVB-Sub to DVB-Teletext using OCR

[Section titled “Convert DVB-Sub to DVB-Teletext using OCR”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#convert-dvb-sub-to-dvb-teletext-using-ocr)

This feature relies on an open-source OCR (Optical Character Recognition) engine that extracts printed or written text from images. Once converted to Text, the subtitles are converted to DVB-Teletext.

To convert DVB-Subtitles to DVB-Teletext, follow these steps:

### Add a DVB subtitle at the input

[Section titled “Add a DVB subtitle at the input”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-a-dvb-subtitle-at-the-input)

1. From the **Input** tab, go to the **Sources** > **Input streams selection** > **Subtitle ID** section.

2. Click **Add** then set the **Type** to **DVB-Subtitles** and enter either the **PID** or **Language** of the subtitle. You should get the following:

 ![el dvbsub input](https://docs.mediakind.com/_astro/el_dvbsub_input.dpGjkWUm_2l4tWp.webp)

### Configure the subtitle encoding

[Section titled “Configure the subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#configure-the-subtitle-encoding-4)

1. Click the **Encoding** tab then go to the **Subtitle encoding** section. DVB subtitle has been added to the list of subtitles. By default **Codec** is set to **Pass-through**.

2. Click ![Edit][base64-image] to edit the subtitle encoding.

Usually, there is no need to set the Forced language field because the language is directly retrieved from the input DVB Subtitles. If the language is not set or is wrong in the input DVB subtitle descriptor, it can be set by the “Forced language” field.

3. Select the codec used to convert the subtitles, **DVB-Teletext**. You should get the following:

 ![el dvbsub encoding](https://docs.mediakind.com/_astro/el_dvbsub_encoding.DGzzZ7bH_28pXjS.webp)

### Add the subtitle stream to the output

[Section titled “Add the subtitle stream to the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#add-the-subtitle-stream-to-the-output-4)

1. Click the **Output** tab.

2. Go to the **Output streams** section, then click either the **Add** button (if no stream has been selected) or the edit button, ![Edit][base64-image] in the **Actions** column.

3. Tick the subtitle stream that you configured in the previous step.

4. Click **OK** to validate. You should see the selected streams in the list of output streams.

 ![el dvbsub output](https://docs.mediakind.com/_astro/el_dvbsub_output.DWYsk_pX_1VoWyW.webp)

### Check the average OCR confidence

[Section titled “Check the average OCR confidence”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-the-average-ocr-confidence)

You can display statistics to check the average OCR confidence (in the range 0-100) on the last converted subtitle.

### Check that DVB subtitles are present

[Section titled “Check that DVB subtitles are present”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/subtitles-encoding/#check-that-dvb-subtitles-are-present)

You can check that DVB subtitles are present in the output by opening the output stream in a player.