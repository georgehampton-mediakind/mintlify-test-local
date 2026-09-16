# Source: https://docs.mediakind.com/beam/receiver/output/ts-passthrough

# Transport Stream Passthrough

The _Receiver_ service [Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type) can be configured for **TS passthrough** instead of **decode**. The incoming transport stream can be received via any supported receiver input — such as [satellite](https://docs.mediakind.com/beam/receiver/input/#satellite-transport-stream-input), [ASI](https://docs.mediakind.com/beam/receiver/input/#asi-transport-stream-input), or [IP](https://docs.mediakind.com/beam/receiver/input/#ip-transport-stream-input) — and the resulting output transport stream is transmitted only as an IP/UDP multicast.

The transport stream is passed through unaltered, except when it is [decrypted](https://docs.mediakind.com/beam/receiver/decryption/) by one of the supported Conditional Access (CA) systems.

Refer to [TS Output parameters](https://docs.mediakind.com/beam/receiver/parameters/#ts-output-parameters) for additional settings.

### Configure a receiver service TS Passthrough

[Section titled “Configure a receiver service TS Passthrough”](https://docs.mediakind.com/beam/receiver/output/ts-passthrough/#configure-a-receiver-service-ts-passthrough)

1. From the **Services** page, click **Add service** then select **Receiver**. A new window displays:

 ![Add Service TS Passthrough cp RX1](https://docs.mediakind.com/rx1-img/Add_Service_TS_Passthrough_cp_RX1.png)

2. Configure the following parameters:

 - Enter a suitable **Name** for the service.
 - Select the **Type** to be **TS Passthrough**.
 - Select the **Server** to be Receiver to create and configure the service.
3. Click **OK** to create the service which will now appear in the services list.

4. From the **Services** page, click the _service name_ for the newly created **TS Passthrough** service to edit the configuration.

5. Configure the input source for [satellite](https://docs.mediakind.com/beam/receiver/input/#satellite-transport-stream-input), [ASI](https://docs.mediakind.com/beam/receiver/input/#asi-transport-stream-input), or [IP](https://docs.mediakind.com/beam/receiver/input/#ip-transport-stream-input).

6. Configure [decryption](https://docs.mediakind.com/beam/receiver/decryption) settings to define how incoming services in the transport stream are decrypted.

7. Select the **Output** tab under the **Parameters** section.

 ![Config output TS over IP cp RX1](https://docs.mediakind.com/rx1-img/Config_output_TS_over_IP_cp_RX1.png)

8. Configure the following parameters:

 - Select the **Network interface** for the outgoing transport stream.
 - Enter a **Stream address** (Multicast IP address) and **UDP port** number for the outgoing transport stream.
 - Enter the **Time to live** for the outgoing data packets.
9. Once complete, click **Save and exit**.

### Output Smoothing

[Section titled “Output Smoothing”](https://docs.mediakind.com/beam/receiver/output/ts-passthrough/#output-smoothing)

Enabling **Output Smoothing** for a **TS Passthrough** _Receiver_ service helps distribute UDP packets more evenly during transmission without modifying any timestamps. This can reduce packet inter-arrival time (IAT) variability and mitigate issues in downstream components that are sensitive to bursty UDP delivery.

However, enabling this feature introduces a slight increase in CPU usage and end-to-end latency. Additionally, if the input stream contains packet loss or gaps, Output Smoothing may preserve or even amplify those gaps in the resulting UDP output stream, as it does not reconstruct missing data but only reshapes packet timing.

To change this setting:

1. From the **Services** page, click the _service name_ for the **TS Passthrough** service to edit the configuration.

2. In the **Parameters** window, select the **Output** tab.

3. Select or clear the **Output Smoothing** checkbox to enable or disable the feature.

4. Once complete, click **Save and exit**.