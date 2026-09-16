# Source: https://docs.mediakind.com/beam/receiver/output/data

# Configure data output

Data is embedded into the VANC (Vertical Ancillary) lines of the SDI output. It is possible to embed more than one data type onto a single VANC line.

MK.IO Beam Distribution currently supports the following data types:

- VITC / Time code
- AFD / BAR
- Closed Captions
- OP-47 Teletext
- SMPTE 2031 Teletext
- Generic data

See [output parameters](https://docs.mediakind.com/beam/receiver/parameters#sdi-output-parameters-and-status) descriptions for additional information.

Before you start, ensure:

- At least one Receiver service is configured.
- The service to be decoded has been selected from the **Selected Service** list in the **Input** tab.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. From the **Parameters** section, select **Output** to display options.

3. Select **Data** to open the tab and display options.

 ![view edit service output sdi data cp](https://docs.mediakind.com/rx1-img/view_edit_service_output_sdi_data_cp.png)

4. Select the Line number from the drop-down menu. 
 Each selected data component (if present on the incoming transport stream) is now either decoded from a data PID or is extracted from User data or SEI in the video elementary stream.

Generic data is automatically reinserted into the same line it came in.

## Disable data output

[Section titled “Disable data output”](https://docs.mediakind.com/beam/receiver/output/data/#disable-data-output)

Before you start, ensure:

- At least one Receiver service is configured.
- The service to be decoded has been selected from the **Selected Service** list in the **Input** tab.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. From the **Parameters** section, select **Output** to display options.

3. Select **Data** to open the tab and display options.

 ![rx1 receiver output data disable](https://docs.mediakind.com/rx1-img/rx1_receiver_output_data_disable.png)

4. Select **OFF** from the drop-down menu for each data that you want to disable. Once disabled, the data is no longer embedded into SDI outputs.