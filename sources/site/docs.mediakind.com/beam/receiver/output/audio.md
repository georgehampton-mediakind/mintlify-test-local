# Source: https://docs.mediakind.com/beam/receiver/output/audio

# Configure audio output

The Receiver service supports a maximum of 16 channels (8 stereo pairs) of embedding for any baseband audio output.

Before you start, ensure:

- At least one Receiver service is configured.
- A video service and at least 1 audio component is configured to be decoded.

## Add an output audio component

[Section titled “Add an output audio component”](https://docs.mediakind.com/beam/receiver/output/audio/#add-an-output-audio-component)

1. From the **Home** page, select the required field.

2. Select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

3. From the **Parameters** section, select **Output** to display options.

4. Go to the **Audio** tab to open the tab and display options then select **Add component**. An audio component displays.

5. Configure audio output parameters.

 Lipsync may be adjusted in the range +- 50mS. In low delay modes negative lip-sync adjustments may not be possible.

## Add all output audio

[Section titled “Add all output audio”](https://docs.mediakind.com/beam/receiver/output/audio/#add-all-output-audio)

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. From the **Parameters** section, select **Output** to display options.

 ![rx1 output audio add all](https://docs.mediakind.com/rx1-img/rx1_output_audio_add_all.png)

3. Go to the **Audio** tab then select **Add all**. All the decoded audio components that are not currently included in the output audio configuration are added to the component column (**up to a maximum number of embedded channels available for the output video format in use**). Embedded channels are allocated in sequence until all available channels are filled.

## Delete an output audio

[Section titled “Delete an output audio”](https://docs.mediakind.com/beam/receiver/output/audio/#delete-an-output-audio)

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. From the **Parameters** section, select **Output** to display options.

3. Go to the **Audio** tab then click ![Delete][base64-image] in the **Actions** column. The audio component no longer displays.

## Delete all output audio

[Section titled “Delete all output audio”](https://docs.mediakind.com/beam/receiver/output/audio/#delete-all-output-audio)

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. From the **Parameters** section, select **Output** to display options.

3. Go to the **Audio** tab then select **Remove all**. All the audio components are now removed from the list of output configurations.

## Configure Audio Embedding

[Section titled “Configure Audio Embedding”](https://docs.mediakind.com/beam/receiver/output/audio/#configure-audio-embedding)

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. From the **Parameters** section, select **Output** to display options.

3. Go to the **Audio** tab then select a **Component** from the drop-down list. Available audio components are based on the audio being decoded for the service.

4. Select an **Embedding** position from the drop-down list.

 - A single Embedded channel is required to output a stereo audio.
 - 3 Embedded channels are required to output a 5.1 audio.

 ![rx1 receiver output audio embedding](https://docs.mediakind.com/rx1-img/rx1_receiver_output_audio_embedding.png)

 Each audio component is embedded into the output SDI at the selected position.

 | Output Format | Embedded options |
 | :-- | :-- |
 | 1.5G SDI (720p/1080i) | Embedded 1 to 8 |
 | 3G SDI (1080p) | Embedded 1 to 16 |
 | 4 x 3G SDI (2160p) | Embedded 1 to 16 |
 | 12G SDI (2160p) | Embedded 1 to 16 |