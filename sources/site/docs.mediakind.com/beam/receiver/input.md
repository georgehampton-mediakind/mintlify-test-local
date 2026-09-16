# Source: https://docs.mediakind.com/beam/receiver/input

# Transport Stream Input Configuration

There are multiple types of transport stream configurations. Each type presents a different set of parameters.

![view edit service cp](https://docs.mediakind.com/rx1-img/view_edit_service_cp.png)

## Satellite transport stream input

[Section titled “Satellite transport stream input”](https://docs.mediakind.com/beam/receiver/input/#satellite-transport-stream-input)

The number of satellite inputs will depend on the option card installed. You can route each satellite input to an independent service, or route a single satellite input to multiple services.

The satellite input option cards that are compatible with MK.IO Beam will comply with the following standards:

- DVB-S (EN300-421)
- DVB-S2 (EN302-307-1)
- DVB-S2X (EN302-307-2)

DVB-S2 offers up to a 30% increase in data rate carriage for an equivalent link margin compared to what the older DVB-S standard can offer. This functionality is often partnered with MPEG-4 or HEVC compression to give bandwidth efficient distribution of high definition or ultra-high definition services.

DVB-S2X is an extension to the DVB-S2 standard and can provide up to 20% performance improvement compared to DVB-S2 and increase the efficiency of satellite links. This will enable an increase in video quality or an increase in the number of video services or a reduction in leased satellite bandwidth, bringing lower operational expenditure.

### Supported Satellite Demodulator Cards

[Section titled “Supported Satellite Demodulator Cards”](https://docs.mediakind.com/beam/receiver/input/#supported-satellite-demodulator-cards)

Satellite input on MK.IO Beam requires supported hardware option cards. See the **[Satellite Input](https://docs.mediakind.com/beam/reception/tech-specs#satellite-input)** section in the technical _Reference_ documentation for a list of compatible cards.

### Input ports with multiple Tuners and Demodulators

[Section titled “Input ports with multiple Tuners and Demodulators”](https://docs.mediakind.com/beam/receiver/input/#input-ports-with-multiple-tuners-and-demodulators)

Some satellite demodulator cards support more than one tuner and demodulator pairs connected to each RF input port. In this case, an additional tuning parameter is available in the configuration called **Tuner** where the tuner is referenced alphabetically for that RF port, for example **Tuner A** and **Tuner B**.

| Physical RF Input | First Tuner/Demod | Second Tuner/Demod |
| --- | --- | --- |
| RF port 1 | Tuner A | Tuner B |
| RF port 2 | Tuner A | Tuner B |

Each tuner operates independently and can tune to either a different frequency or the same frequency as another tuner. LNB control is independent per physical RF input; therefore, **Tuners A and B share the same LNB control**.

### Configure a receiver service for satellite input

[Section titled “Configure a receiver service for satellite input”](https://docs.mediakind.com/beam/receiver/input/#configure-a-receiver-service-for-satellite-input)

Before you start, ensure a **Receiver** service is configured.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image].

2. From the **Primary** tab, select **Satellite** for the **Input type**. Satellite input options display.

3. Set the **LNB** parameters, [**LNB frequency**, **LNB voltage** and **22kHz**](https://docs.mediakind.com/beam/receiver/parameters#satellite).

4. Set the [**Tuning** parameters](https://docs.mediakind.com/beam/receiver/parameters#satellite). This will vary based on the card fitted:

 - [Digital Devices SX8](https://docs.mediakind.com/beam/receiver/input/#tab-panel-22)
 - [Dektec DTA-2127](https://docs.mediakind.com/beam/receiver/input/#tab-panel-23)

 If **Digital Devices SX8** installed, configure **Tuner**, **Frequency**, **Symbol rate**, **Search range**, **C/N Margin Alarm**, **MIS enable**, **MIS Stream ID**, and **Gold code**

 ![view parameters satellite input cp](https://docs.mediakind.com/rx1-img/view_parameters_satellite_input_cp.png)

 If **Dektec DTA-2127** installed, configure **Frequency**, **Symbol rate** and **C/N Margin Alarm**

 ![view parameters dektec satellite input cp](https://docs.mediakind.com/rx1-img/view_parameters_dektec_satellite_input_cp.png)

5. Ensure that the **Source Status** is green (receiving) for existing sources, and that no errors occur. ![view parameters satellite input status cp](https://docs.mediakind.com/rx1-img/view_parameters_satellite_input_status_cp.png)

## ASI transport stream input

[Section titled “ASI transport stream input”](https://docs.mediakind.com/beam/receiver/input/#asi-transport-stream-input)

### Supported ASI Input Cards

[Section titled “Supported ASI Input Cards”](https://docs.mediakind.com/beam/receiver/input/#supported-asi-input-cards)

ASI input on MK.IO Beam requires supported hardware option cards. See the **[ASI Input](https://docs.mediakind.com/beam/reception/tech-specs#asi-input)** section in the technical _Reference_ documentation for a list of compatible cards.

### Setup ASI/SDI option card for ASI mode

[Section titled “Setup ASI/SDI option card for ASI mode”](https://docs.mediakind.com/beam/receiver/input/#setup-asisdi-option-card-for-asi-mode)

To use the card as an ASI card it must be configured as follows (see also [Set up SDI/ASI cards](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/)):

1. Select **Appliance** from the left-hand side menu.

2. Click the **ASI/SDI Interface** tab.

3. Select the **Slot** Tab corresponding to the SDI/ASI card. If more than one card is present, there will be a separate slot tab for each card.

4. Select :

 - For the Dektec 2174B cards : **4 ASI/HD-SDI/SD-SDI** from the **ASI/SDI Mode** drop down menu.
 - For the Dektec 2178 cards : **8 ASI/HD-SDI/SD-SDI** from the **ASI/SDI Mode** drop down menu.
5. Click the **Apply and Reboot** button.

6. A confirmation pop-up window will appear asking, “Are you sure?”

7. Review any warnings or guidance provided. If you are sure, click **Yes, configure and REBOOT!** Otherwise, click **Cancel** to abort.

8. Following the reboot, refresh the web page. The reboot may take a few minutes to complete.

### Configure a receiver service for ASI input

[Section titled “Configure a receiver service for ASI input”](https://docs.mediakind.com/beam/receiver/input/#configure-a-receiver-service-for-asi-input)

Before you start, ensure a **Receiver** service is configured.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit.

2. From the **Primary** tab, select **ASI** for **Input type**.

3. Select the port on the ASI card where the transport stream is connected (the port number maps directly to the numbering on the card).

4. Ensure that the [**Input Status**](https://docs.mediakind.com/beam/receiver/parameters#asi) is green (receiving) and that they’re no errors (this only applies if the source currently exists).

## IP transport stream input

[Section titled “IP transport stream input”](https://docs.mediakind.com/beam/receiver/input/#ip-transport-stream-input)

A Receiver service can support decoding or passthrough of transport streams via Ethernet.

### Configure a receiver service for IP unicast input

[Section titled “Configure a receiver service for IP unicast input”](https://docs.mediakind.com/beam/receiver/input/#configure-a-receiver-service-for-ip-unicast-input)

Before you start, ensure at least one **Receiver** service is configured.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit.

2. From the **Primary** tab, tick [**Unicast**](https://docs.mediakind.com/beam/receiver/parameters#ip). [**Stream address**](https://docs.mediakind.com/beam/receiver/parameters#ip) is greyed out and a port parameter displays.

 ![view edit service input unicast cp](https://docs.mediakind.com/rx1-img/view_edit_service_input_unicast_cp.png)

3. Enter the UDP [**Port**](https://docs.mediakind.com/beam/receiver/parameters#ip) number for the incoming transport stream.

4. Select the Ethernet port for the [**Network interface**](https://docs.mediakind.com/beam/receiver/parameters#ip) that the incoming transport stream is available on.

5. Ensure that the [**Input status**](https://docs.mediakind.com/beam/receiver/parameters#ip) is green (receiving) and that they’re no errors (this only applies if the source currently exists).

### Configure a receiver service for IP multicast input

[Section titled “Configure a receiver service for IP multicast input”](https://docs.mediakind.com/beam/receiver/input/#configure-a-receiver-service-for-ip-multicast-input)

Before you start, ensure at least one **Receiver** service is configured.

Transport streams can be streamed over either Ethernet (IP) or ASI depending on the hardware installation.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit.

2. From the **Primary** tab, check that the [**Unicast**](https://docs.mediakind.com/beam/receiver/parameters#ip) checkbox is unticked then enter a multicast [**Stream address**](https://docs.mediakind.com/beam/receiver/parameters#ip).

 ![view edit service cp](https://docs.mediakind.com/rx1-img/view_edit_service_cp.png)

 The Multicast parameter is grayed out if **Unicast** is selected.

3. Enter the [**UDP port**](https://docs.mediakind.com/beam/receiver/parameters#ip) number for the incoming transport stream.

4. Select the Ethernet port for the [**Interface**](https://docs.mediakind.com/beam/receiver/parameters#ip) that the incoming transport stream is available on.

5. Ensure that the [**Input status**](https://docs.mediakind.com/beam/receiver/parameters#status) is green (receiving) and that they’re no errors (this only applies if the source currently exists).