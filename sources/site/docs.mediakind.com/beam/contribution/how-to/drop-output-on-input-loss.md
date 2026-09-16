# Source: https://docs.mediakind.com/beam/contribution/how-to/drop-output-on-input-loss

# Drop Output On Input Loss

## Drop IP/ASI output on input loss

[Section titled “Drop IP/ASI output on input loss”](https://docs.mediakind.com/beam/contribution/how-to/drop-output-on-input-loss/#drop-ipasi-output-on-input-loss)

MK.IO Beam can be configured to drop IP/ASI output on input loss. This can be configured for **Live Encoder + Multiplexer** feed templates.

To configure this, follow these steps:

1. For the Live Encoder:

 1. Go to the feed card then edit the Live Encoder by clicking ![Edit][base64-image] next to the **LIVE ENCODER** component within the feed.

 2. Click the **Output** tab then click ![Edit][base64-image] to edit the output.

 3. In the **Common MPEG-2 TS Parameters** section, set the **Signal loss management** to **Drop transport stream**.

 ![Ce1 live output signal loss](https://docs.mediakind.com/ce1-img/Ce1-live-output-signal-loss.png)

2. For the corresponding Multiplexer:

 1. Go to the feed card then edit the Multiplexer by clicking ![Edit][base64-image] next to the **MULTIPLEXER** component within the feed.

 2. From the **Stream Processing** tab, click **Output stream > Service (x)**.

 3. Go to the **Properties** > **Sources** sub-tab then tick the **Output Drop On Input TS Loss** checkbox.

 ![Ce1 mux input ts loss](https://docs.mediakind.com/ce1-img/Ce1-mux-input-ts-loss.png)