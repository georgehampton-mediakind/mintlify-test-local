# Source: https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing

# Configure the audio processing parameters

To configure the audio processing parameters, follow these steps:

1. From the **Media Processing** tab, go to the **Audio processing** section. The audio processing parameters are displayed for each audio input.

2. Select the audio tab stream you want to configure then \[set the appropriate value for each parameter\].

3. You can [configure **Watermarking**](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#audio-watermarking).

4. You can [configure **DTMF extraction**](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#dtmf-extraction).

5. You can configure \[**Signal loss management replacement sound**\]).

6. Click **Save and continue** or **Save and exit** to save your changes.

## Audio watermarking

[Section titled “Audio watermarking”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#audio-watermarking)

To configure audio watermarking, follow these steps:

1. From the **Media Processing** > **Audio processing** tab, go to the **Watermarking** section.

2. Select the watermarking type you want to activate by clicking ![Edit][base64-image].

3. Activate **Insertion** and/or **Extraction** by ticking **Enable**.

4. [Set the appropriate value for each parameter](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/audio-processing#watermarking).

5. Click **Ok** to validate.

6. Click **Save and continue** or **Save and exit** to save your changes.

## DTMF extraction

[Section titled “DTMF extraction”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#dtmf-extraction)

To configure DTMF extraction, follow these steps:

### Create service

[Section titled “Create service”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#create-service)

Create a Live Encoding service.

### Configure the input parameters

[Section titled “Configure the input parameters”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#configure-the-input-parameters)

1. From the **Input** tab, set the **Type** to **MPEG-2 TS/UDP**.

2. Enter the primary source parameters:

 - **Network interface**
 - **Stream address** and **Port**
3. Click **Ok** to validate.

4. Go to the **Input streams selection** > **Audio ID** section then click **Add** to define the audio stream.

 Enter the **PID** of the audio track with cue tones. You should get the following:

 ![el cfig input audio cuetone](https://docs.mediakind.com/_astro/el_cfig_input_audio_cuetone.87TJPpa__ZkkV8Y.webp)

5. Click **Ok** to validate.

6. Go to the **Metadata ID** section then click **Add** to define the metadata stream.

 - Set **Type** to **Cuetones**.
 - Select the audio input stream you just configured as **Source**. You should get the following:

 ![el cfig input metadata cuetone](https://docs.mediakind.com/_astro/el_cfig_input_metadata_cuetone.DMLbNEGg_1EG3qj.webp)

7. Click **Ok** to validate.

8. From the **Media Processing** > **Audio processing** tab, go to the **Cue Tones** section. The **Extract DTMF** checkbox should already be checked to enable DTMF extraction and cue tones detection. You can keep the default parameters.

 ![el cfig processing cuetone](https://docs.mediakind.com/_astro/el_cfig_processing_cuetone.CjXn1Tkw_UWu1t.webp)

### Configure the encoding parameters

[Section titled “Configure the encoding parameters”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#configure-the-encoding-parameters)

1. Go to the **Encoding** tab.

2. From the **Video encoding** section, click **Add** to add and configure the video stream. You can keep the default parameters or adjust them if needed.

3. Click **Ok** to validate.

4. From the **Audio encoding** section, click **Add** to add and configure the audio stream.

 - Set the **Codec** to **MPEG-1 Layer II**.
 - You can keep the default parameters or adjust them if needed.
5. Click **Ok** to validate.

6. If you go to the **Metadata encoding** section, you can see that it is already configured in **Pass-through**.

### Configure the output

[Section titled “Configure the output”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#configure-the-output)

1. From the **Output** tab, click the **Add an output** button then set the output parameters, especially the **Network interface**.

2. Go to the **Output stream** section then click **Add**.

 - Enter the multicast output **IP address** and **Port**.
 - Tick the metadata, audio and video streams. You should get the following:

 ![el cfig output stream cuetones](https://docs.mediakind.com/_astro/el_cfig_output_stream_cuetones.BJgaN_fD_ZztFTP.webp)

3. Click **Ok** to validate.

### Save

[Section titled “Save”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#save)

Click **Save and exit** to save and finalize your service configuration and go back to the **Services** page.

### Run the service

[Section titled “Run the service”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#run-the-service)

[Assign a server to run the service](https://docs.mediakind.com/beam/web-interface/services#assign-a-server-to-run-the-service).

### Check statistics

[Section titled “Check statistics”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/audio-processing/#check-statistics)

Click ![Chart][base64-image] to display service details and to monitor the service. Specific cue tones statistics are displayed.