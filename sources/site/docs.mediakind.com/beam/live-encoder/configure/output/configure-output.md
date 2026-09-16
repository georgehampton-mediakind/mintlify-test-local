# Source: https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output

# Configure the output

## Configure the output stream general parameters

[Section titled “Configure the output stream general parameters”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#configure-the-output-stream-general-parameters)

To configure the output stream general parameters, follow these steps:

1. From the **Output** tab, click ![Edit][base64-image] to edit the output parameters. The Output parameters display.

2. Configure the [**General parameters**](https://docs.mediakind.com/beam/live-encoder/parameters/output#general-parameters).

3. With MPEG-2 TS output, configure the [associated parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output#general-mpeg-2-ts-parameters).

4. With DASH-IF CMAF Ingest, configure the [associated parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output#general-dash-if-cmaf-ingest-parameters).

5. Configure the [output streams](https://docs.mediakind.com/beam/live-encoder/parameters/output#output-stream-parameters).

6. Click **Save and continue** or **Save and exit** to save your changes.

### Activate EBP on audio output

[Section titled “Activate EBP on audio output”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#activate-ebp-on-audio-output)

1. From the **Output** tab, click ![Edit][base64-image] to edit the output.

2. From the **General parmeters** section, unfold the **GOP signaling** dropdown menu to display possible values.

3. Select either **EBP based** or **ALD based** to display **EBP on audio** checkbox.

 ![screen output parameters ebp on audio mfvp el](https://docs.mediakind.com/_astro/screen_output_parameters_ebp_on_audio_mfvp-el.D_5a2-9w_J79su.webp)

4. Tick the checkbox to activate **EBP on audio**, then click **OK**.

 ![screen output parameters ebp on audio box mfvp el](https://docs.mediakind.com/_astro/screen_output_parameters_ebp_on_audio_box_mfvp-el.CYupwZ69_Z1FukUu.webp)

## Configure the output stream MPEG-2 TS parameters

[Section titled “Configure the output stream MPEG-2 TS parameters”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#configure-the-output-stream-mpeg-2-ts-parameters)

To configure the output stream MPEG-2 TS parameters, follow these steps:

1. From the **Output** tab, click ![Edit][base64-image] to edit the output.

2. Go to the **Common MPEG-2 TS parameters** section. The MPEG-2 TS parameters are displayed.

3. Enter the appropriate values for each [MPEG-2 TS parameter](https://docs.mediakind.com/beam/live-encoder/parameters/output#mpeg-2-ts-common-parameters).

4. You can [specify the streams that will be included in the output stream](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#define-the-output-stream-composition)).

5. Click **Save and continue** or **Save and exit** to save your changes.

## Create output streams

[Section titled “Create output streams”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#create-output-streams)

Before you start: ensure input streams are configured.

1. From the **Output** tab, click ![Edit][base64-image] to edit the output.

2. Go to the **Output streams** section then click the **Add** button. Output stream parameters are displayed.

 ![screen output parameters blank mfvp el](https://docs.mediakind.com/_astro/screen_output_parameters_blank_mfvp-el.DTPLoYcL_2iMzCf.webp)

3. Configure settings and select streams.

4. [Activate FEC](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#activate-fec-on-existing-output-streams) to display additional FEC options.

5. [Link the output to a predefined subset](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#link-an-output-stream-to-a-predefined-subset) to synchronize streams or to distribute the streams across multiple servers.

6. Select any video, audio or subtitle [streams to add to the output](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#define-the-output-stream-composition).

7. Click **Ok** to save.

### Define the output stream composition

[Section titled “Define the output stream composition”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#define-the-output-stream-composition)

You can specify the composition of the output stream by selecting the video, audio and private streams that will be sent to the output.

Before you start: ensure input stream configurations are set.

1. From the **Output** tab, click ![Edit][base64-image] to edit the output.

2. Go to the **Output streams** section then click ![Edit][base64-image] to edit the output stream.

 ![screen output parameters blank mfvp el](https://docs.mediakind.com/_astro/screen_output_parameters_blank_mfvp-el.DTPLoYcL_2iMzCf.webp) _Example of output stream configuration_

3. Tick the check boxes to select the streams to include in the output. Available streams depend on configured Inputs, Processing, and Encoding options.

 - video
 - audio
 - subtitle
 - metadata
 - etc.

 By default, one transport stream is defined using the first video stream and the first audio stream.

4. Click **Ok** to confirm. The output stream configuration is displayed in the output stream IP address and stream composition.

5. Click **Save and continue** or **Save and exit** to save your changes.

### Activate FEC on existing output streams

[Section titled “Activate FEC on existing output streams”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#activate-fec-on-existing-output-streams)

Only available with MPEG-2 TS/RTP transport protocol.

1. From the **Output** tab, click ![Edit][base64-image] to edit the output.

2. Go to the **Output streams** section then click ![Edit][base64-image] to edit the output stream.

3. Tick the **FEC** checkbox to activate. Additional FEC parameters display.

4. Enter [FEC parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output#output-stream-parameters)

5. Click **Ok** to save.

### Link an output stream to a predefined subset

[Section titled “Link an output stream to a predefined subset”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#link-an-output-stream-to-a-predefined-subset)

You can link an output stream to a subset. Once linked, these subsets can be used to synchronize streams or to distribute the streams across multiple servers.

Before you start: ensure [server subsets](https://docs.mediakind.com/beam/live-encoder/configure#create-subset-variants) are created.

1. From the **Output** tab, click ![Edit][base64-image] to edit the output.

2. Go to the **Output streams** section then click ![Edit][base64-image] to edit the output stream.

3. For the **Subset** parameter select an existing preset in the drop-down list. The output stream is linked to the selected subset.

4. Click **Ok** to save.

## Configure a DASH-IF CMAF output

[Section titled “Configure a DASH-IF CMAF output”](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#configure-a-dash-if-cmaf-output)

DASH-IF CMAF Ingest is a protocol for transport of fragmented MP4 in CMAF container format between Live Encoder and a Packager.

To configure a DASH-IF CMAF output, follow these steps:

1. From the **Encoding** tab, go to the **Video** > **Gop settings** section then enter a value for **Low latency fragment(s) per GOP** (see [GOP settings](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#gop-settings)).

2. From the **Output** tab, create or edit an existing output.

 - In the **General parameters** section, set the **Transport protocol** to **DASH-IF CMAF INGEST**, then define the associated parameters (see [Output general parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output#general-parameters)).

 - In the **MP4 general parameters** section, set the number of **GOPs per segment**. You can optionally enable Low latency and Unix epoch relative timestamps. Fragment(s) per GOP value is retrieved from the Low latency fragment(s) per GOP field that you previously defined. (See [DASH-IF CMAF parameters](https://docs.mediakind.com/beam/live-encoder/parameters/output#general-dash-if-cmaf-ingest-parameters))

 - The **Tracks** section displays all the streams configured in the **Encoding** tab. [You can change their track ID and add an optional label](https://docs.mediakind.com/beam/live-encoder/parameters/output#tracks).

 - In the **Output groups** section, select the tracks to be added in the output (see [Defining the output stream composition](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output/#define-the-output-stream-composition)).