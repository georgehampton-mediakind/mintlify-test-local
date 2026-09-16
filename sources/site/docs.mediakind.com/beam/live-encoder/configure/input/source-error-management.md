# Source: https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management

# Configure source error management

You can configure the encoder behavior in case of source error management. You can :

- [Activate the switch on ES data loss](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management/#configure-switch-on-es-data-loss) to backup the source if video or audio input is lost.
- [Configure a slate (replacement image)](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management/#configure-a-slate) that will be displayed if the input is not detected at start.
- [Activate the fast recovery](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management/#configure-fast-recovery) to recover the signal faster.

## Configure switch on ES data loss

[Section titled “Configure switch on ES data loss”](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management/#configure-switch-on-es-data-loss)

You can activate the **Switch on ES data loss** to backup the source if video or audio input is lost. In case of video or audio input loss of both sources, the option selected with frame freeze management applies (see [Configuring the video prefiltering](https://docs.mediakind.com/beam/live-encoder/parameters/input/source-error-management)).

Works both in Active/Active and in Active/Passive redundancy mode.

1. Display services.

2. Click ![Edit][base64-image] to edit the service. The **General parameters** display.

3. Select the **Input** tab to display parameters.

4. In the **Source error management** section, tick the **Switch on ES data loss** check box.

5. Under **Delay**, specify the time before switching to the backup source when loss of video or audio occurs. See [Input - Source error management](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management).

## Configure a slate

[Section titled “Configure a slate”](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management/#configure-a-slate)

You can specify a slate (replacement image) that will be displayed if the input is not detected.

1. Display services.

2. Click ![Edit][base64-image] to edit the service. The **General parameters** display.

3. Select **Input** tab to display parameters.

4. In the **Source Error Management** section, tick the **Slate if no source at start** check box.

The image displayed is the same as the one configured for **Media Processing** > **Video Processing** > **Freeze Frame Management** section.

5. Select the **Default frame rate** for this slate.

## Configure fast recovery

[Section titled “Configure fast recovery”](https://docs.mediakind.com/beam/live-encoder/configure/input/source-error-management/#configure-fast-recovery)

The **Fast recovery** option is activated by dafault.

- When checked, the encoder will process the access units as soon as possible to recover the signal faster, though temporary macroblocks may appear.
- When unchecked, the encoder will wait for the closest random access point (RAP), prioritizing video quality over signal recovery speed.

1. Display services.

2. Click ![Edit][base64-image] to edit the service. The **General parameters** display.

3. Select **Input** tab to display parameters.

4. In the **Source Error Management** section, tick or untick the **Fast recovery** check box depending on your needs.