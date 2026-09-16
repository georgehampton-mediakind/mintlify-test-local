# Source: https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding

# Configure blackout

## Configure an automated blackout

[Section titled “Configure an automated blackout”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-an-automated-blackout)

Live Encoder can blackout a program on SCTE-35 trigger and replace the video with a still image. 
SCTE-35 metadata can be:

- either [in-band](https://docs.mediakind.com/beam/live-encoder/configure/input/inband-metadata)
- or [out-of-band](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata)

Before you start: ensure you have configured the SCTE-35 metadata in the input stream.

To create a scheduled blackout, follow these steps:

### Configure the metadata encoding

[Section titled “Configure the metadata encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-metadata-encoding)

1. From the **Encoding** tab, go to the **Metadata encoding** section.

2. For each SCTE-35 metadata, click ![Edit][base64-image] in the **Actions** column then set the **Codec** to **Conditioning**.

3. Click **Ok** to validate.

### Configure the blackout encoding

[Section titled “Configure the blackout encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-blackout-encoding)

1. Go to the **Blackout configuration** section.

2. Click **Add** then configure a blackout configuration by selecting and setting the adequate [blackout parameters](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/blackout).

 ![](https://docs.mediakind.com/_astro/EL_encoding_metadata_cfig_blackout_splice.CovKxW8r_Z1CGwBh.webp)

3. Click **Ok** to validate.

### Configure the video encoding

[Section titled “Configure the video encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-video-encoding)

1. Go to the **Video encoding** section.

2. For each video stream, select the associated [**Stream Conditioning** and **Blackout**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#general-parameters) configuration.

 ![EL encoding video blackout](https://docs.mediakind.com/_astro/EL_encoding_video_blackout.DMVEQFHL_Z126X4z.webp)

3. Click **Ok** to validate.

### Configure the audio encoding

[Section titled “Configure the audio encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-audio-encoding)

1. Go to the **Audio encoding** section.

2. For each audio stream, select the associated [**Blackout**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/audio#mpeg-1-layer-ii-dolby-digital-dolby-digital-plus-aac-he-aac-he-aac-v2-parameters) configuration.

 ![EL encoding audio blackout](https://docs.mediakind.com/_astro/EL_encoding_audio_blackout.BzbwJ8vn_ZO1GHE.webp)

3. Click **Ok** to validate.

### Configure the subtitle encoding

[Section titled “Configure the subtitle encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-subtitle-encoding)

1. Go to the **Subtitle encoding** section.

2. For each subtitle stream, select the associated [**Blackout**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/subtitle#general-parameters) configuration.

 ![EL encoding subtitle blackout](https://docs.mediakind.com/_astro/EL_encoding_subtitle_blackout.DOPLeOCe_DnRvm.webp)

3. Click **Ok** to validate.

### Check that blackout is present in the output

[Section titled “Check that blackout is present in the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#check-that-blackout-is-present-in-the-output)

Open the **Output** tab to ensure that blackout is present in the output.

![EL output blackout](https://docs.mediakind.com/_astro/EL_output_blackout.DVPxuOoP_62d08.webp) _Example of output with blackout configured_

### Activate blackout.

[Section titled “Activate blackout.”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#activate-blackout)

You can [Manually activate or deactivate a blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#manually-activate-or-deactivate-a-blackout).

## Configure a manual blackout

[Section titled “Configure a manual blackout”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-a-manual-blackout)

To configure a manual blackout, follow these steps:

### Activate ESAM

[Section titled “Activate ESAM”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#activate-esam)

From the **General** tab, set the **ESAM server network interface** to activate ESAM.

### Create an SCTE-35 out-of-band input stream

[Section titled “Create an SCTE-35 out-of-band input stream”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#create-an-scte-35-out-of-band-input-stream)

Go to the **Input** > **Sources** > **Out-of-band streams** section to create an SCTE-35 out-of-band input stream.

![EL encoding metadata cfig](https://docs.mediakind.com/_astro/EL_encoding_metadata_cfig.Dn1bCMe3_Zq4Vsy.webp)

### Configure the metadata encoding

[Section titled “Configure the metadata encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-metadata-encoding-1)

1. From the **Encoding** tab, go to the **Metadata encoding** section.

2. Next to your SCTE-35 metadata, click the edit button, ![Edit][base64-image] in the **Actions** column then set the **Codec** to **Conditioning**.

 ![EL encoding metadata cfig conditioning](https://docs.mediakind.com/_astro/EL_encoding_metadata_cfig_conditioning.CagX17EK_23Aj5C.webp)

3. Click **OK** to validate.

### Configure the blackout encoding

[Section titled “Configure the blackout encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-blackout-encoding-1)

1. Go to the **Blackout configuration** section.

2. Click **Add** then configure a blackout configuration by selecting and setting the adequate **[blackout parameters](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/blackout).**

 ![](https://docs.mediakind.com/_astro/EL_encoding_metadata_cfig_blackout_splice.CovKxW8r_Z1CGwBh.webp)

3. Click **OK** to validate.

### Configure the video encoding

[Section titled “Configure the video encoding”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-the-video-encoding-1)

1. Go to the **Video encoding** section.

2. For each video stream, click ![Edit][base64-image] to select the associated [**Stream Conditioning** and **Blackout**](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#general-parameters) settings.

 ![EL encoding video blackout](https://docs.mediakind.com/_astro/EL_encoding_video_blackout.DMVEQFHL_Z126X4z.webp) _Example of configuration for Stream Conditioning and Blackout parameters_

3. Click **OK** to validate.

### Check that blackout is present in the output

[Section titled “Check that blackout is present in the output”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#check-that-blackout-is-present-in-the-output-1)

Open the **Output** tab to ensure that blackout is present in the output.

![EL output blackout](https://docs.mediakind.com/_astro/EL_output_blackout.DVPxuOoP_62d08.webp) _Example of output with blackout configured_

### Save

[Section titled “Save”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#save)

Return to the list of services, or edit any parameters then save.

### Check statistics

[Section titled “Check statistics”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#check-statistics)

1. From the list of services, click ![Chart][base64-image] to view statistics.

2. Ensure that blackout configurations display as expected in the **Monitoring** section of the **Statistics** page.

 ![screen stats blackout mfvp el](https://docs.mediakind.com/_astro/screen_stats_blackout_mfvp-el.6lMS4vzn_fuVVU.webp)

### Activate blackout

[Section titled “Activate blackout”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#activate-blackout-1)

You can [Manually activate or deactivate a blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#manually-activate-or-deactivate-a-blackout).

## Configure a scheduled blackout

[Section titled “Configure a scheduled blackout”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-a-scheduled-blackout)

Creating a scheduled blackout is a 4-step process:

1. [Create a scheduled blackout configuration](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#create-a-scheduled-blackout-configuration).
2. [Apply a blackout configuration to video encodings](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-video-encodings).
3. [Apply a blackout configuration to audio encodings](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-audio-encodings).
4. [Check blackout configurations](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#check-blackout-configurations).

### Create a scheduled blackout configuration

[Section titled “Create a scheduled blackout configuration”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#create-a-scheduled-blackout-configuration)

Live Encoder can blackout a program and replace the video with a still image. 
You must first create the blackout configuration, then configure to apply to video encodings.

Before you start, ensure that:

- A **Metadata input stream** must exist.
- Metadata processing is set to **Conditioning** in **Metadata encoding** parameters.

Audio plays during blackout, unless you configure the blackout to mute audio.

1. Display services.

2. Click ![Edit][base64-image] to edit the service.

3. Click the **Encoding** tab to display encoding options.

4. Scroll to **Blackout configuration** and click **+Add** to display parameters. The **Blackout configuration** options display.

 You can create multiple blackout configurations for a single service.

5. Configure the parameters, then click **Ok** to save. Blackout configurations display in the list (see image below).

 ![screen encoding blackout configuration mfvp el](https://docs.mediakind.com/_astro/screen_encoding_blackout_configuration_mfvp-el.B_wOkf9W_Z1bqj1C.webp)

If no **SCTE-35 Input** options display in the list, then [reconfigure inputs](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding).

![screen blackout configuration list mfvp el](https://docs.mediakind.com/_astro/screen_blackout_configuration_list_mfvp-el.DyUAVvmF_1ozuL2.webp)

6. Use the save options to save configurations.

7. Apply the blackout configuration to a [video](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-video-encodings) and/or [audio](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-audio-encodings) encoding.

### Apply a blackout configuration to video encodings

[Section titled “Apply a blackout configuration to video encodings”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-video-encodings)

You can apply a blackout configuration per video encoding.

Before you start: ensure that you created at least one blackout configuration.

Blackout is **not supported in Pass-through**.

1. Display services.

2. Click ![Edit][base64-image] to edit the service.

3. Open the **Encoding** tab, then click ![Edit][base64-image] to edit the video stream.

4. Select the blackout option. All previously created blackout configurations display.

5. Check that the applied Blackout option displays for video encodings.

 ![screen video encoding table blackout mfvp el](https://docs.mediakind.com/_astro/screen_video_encoding_table_blackout_mfvp-el.BfwAK0wo_4MUgx.webp)

6. [Apply the blackout configuration to audio](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-audio-encodings) streams.

7. [Add encodings to output](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).

8. Use the save options to save configurations.

9. Ensure that [Blackout configurations are configured and applied](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#check-blackout-configurations) as expected.

### Apply a blackout configuration to audio encodings

[Section titled “Apply a blackout configuration to audio encodings”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#apply-a-blackout-configuration-to-audio-encodings)

You can apply a blackout configuration per audio encoding.

before you start, ensure that you have created at least one blackout configuration.

Blackout is **not supported in Pass-through**.

1. Display services.

2. Click ![Edit][base64-image] to edit the service.

3. Open the **Encoding** tab, then click ![Edit][base64-image] to edit the audio stream, or **Add** a stream.

4. Click **Blackout** to display the list of previously created blackout configurations, then select a blackout configuration to apply.

 ![screen blackout configuration parameter audio selection mfvp el](https://docs.mediakind.com/_astro/screen_blackout_configuration_parameter_audio_selection_mfvp-el.BemfvEtK_Ziv8LI.webp)

5. Click **OK** to save.

6. Check that audio encodings display in the list with the blackout tag displayed.

 ![screen audio encoding table blackout mfvp el](https://docs.mediakind.com/_astro/screen_audio_encoding_table_blackout_mfvp-el.CdoY5r2D_Z29xz9l.webp)

7. [Add encodings to output](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).

### Check blackout configurations

[Section titled “Check blackout configurations”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#check-blackout-configurations)

Blackout configurations are first created, then applied to video and/or audio encodings. The encodings are then configured in an output stream. Check the overviews to ensure that blackouts are configured and applied.

1. Display services.

2. Click ![Edit][base64-image] to edit the service.

3. Open the **Encoding** tab and ensure that any expected blackout configurations display in the list.

 ![screen blackout configuration list mfvp el](https://docs.mediakind.com/_astro/screen_blackout_configuration_list_mfvp-el.DyUAVvmF_1ozuL2.webp)

4. Check video and audio encodings to ensure that blackout configurations are applied as expected.

5. Open the **Output** tab to ensure expected video and audio encodings display in the list.

 ![screen output stream list blackout mfvp el](https://docs.mediakind.com/_astro/screen_output_stream_list_blackout_mfvp-el.UMnODyD2_Z1YOgWu.webp)

6. Return to the list of services, or edit any parameters and then save.

7. From the list of services, click ![Chart][base64-image] to view statistics.

8. Ensure that blackout configurations display as expected in the **Statistics** page.

 ![screen stats blackout mfvp el](https://docs.mediakind.com/_astro/screen_stats_blackout_mfvp-el.6lMS4vzn_fuVVU.webp)

### Activate blackout

[Section titled “Activate blackout”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#activate-blackout-2)

You can [Manually activate or deactivate a blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#manually-activate-or-deactivate-a-blackout).

## Manually activate or deactivate a blackout

[Section titled “Manually activate or deactivate a blackout”](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#manually-activate-or-deactivate-a-blackout)

Once you have configured a [manual](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-a-manual-blackout) or an [automated blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding/#configure-an-automated-blackout) and started a service, you can manually activate or deactivate it.

Manual blackout activation/deactivation is only available if **Trigger** parameter is set to **spliceOutSpliceIn**.

![EL encoding metadata cfig blackout splice cut](https://docs.mediakind.com/_astro/EL_encoding_metadata_cfig_blackout_splice_cut.5xfd89dj_Z1YJaik.webp)

1. Display statistics on [**Outputs**](https://docs.mediakind.com/beam/live-encoder/monitor-statistics).

![EL stats outputs blackout](https://docs.mediakind.com/_astro/EL_stats_outputs_blackout.BYsPdtqk_Z19yWST.webp)

2. Click the **Activate Blackout** button. A message informs you that the command has been sent.

3. Click **OK**. The current video is blacked out until the specified **Timeout** (if configured); or by clicking the **Deactivate Blackout** button.