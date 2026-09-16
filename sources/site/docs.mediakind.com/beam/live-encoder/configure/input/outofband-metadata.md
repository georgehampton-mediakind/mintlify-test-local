# Source: https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata

# Configure out-of-band metadata in input stream

There are different types of out-of-band metadata:

- The ESAM out-of-band signal interface allows an external module (typically a POIS) to send splice information to Live Encoder. The splice information is used by MediaKind Live Encoder to generate SCTE-35 signals and/or ad markers in the output.
- The SCTE-104/IP out-of-band interface allows an external server to send SCTE-104 over IP messages to Live Encoder that converts them in SCTE-35 to enable stream conditioning actions.
- The ID3 out-of-band allows extracting the Nielsen watermark from the input audio stream, translate it to ID3 tags and output it enabling the monitoring of the audience of each channel distributed over the Internet.

To configure out-of-band metadata input stream, follow these steps:

In our example, we consider that you have selected an **MPEG-2 TS** input type.

1. From the **Input** tab, go to the **Metadata** section then click the **Add** button. The **Metadata selection** window displays.

2. Select a [**Type**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#out-of-band-metadata).

 ![view metadata oob selection type](https://docs.mediakind.com/_astro/view_metadata_oob_selection_type.CCOJFnHx_p5yvL.webp) _Example of configuration for SCTE-35 OOB metadata_

**SCTE-35 OOB** can be used for automation (![Clock][base64-image]) or when there is no SCTE-35 in the input.

3. Enter the appropriate values for the following [parameter](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#scte-35-oob):

- **Network name**
- **Zone identity**
- **ESAM server network interface**

4. Click **Ok** to save settings and return to the service edition options. The metadata stream is added to the list.

If you selected **SCTE-35 OOB** metadata, Live Encoder ESAM out-of-band signal interface is now accessible from `http://<controller.ip>:8080/api/esam/LiveEncodings/<network_name>`.

5. Save your settings to continue or click **Exit** to quit without saving.

6. You can [configure the metadata encoding](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding) and [add the metadata to the output stream](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).

For ESAM out-of-band, the POIS should perform an HTTP POST request to the following URL: `http://<controller.ip>:8080/api/esam/LiveEncodings/<network_name>` 
where:

- `controller.ip` is the [IP address used to connect to the Controller](https://docs.mediakind.com/beam/web-interface/connection).
- `network_name` is the unique acquisition point network name corresponding to the Live Encoder configuration to the input stream metadata.oob you create.

- The body of the HTTP request should be an XML document containing a `SignalProcessingNotification` element as defined in the CableLabs Real-time Event Signaling and Management (ESAM) API (OC-SP-ESAM-API-I03-131025).
- The `acquisitionPointIdentity` attribute of the `SignalProcessingNotification` element and/or the `ResponseSignal` element should match the [**Network name**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#scte-35-oob) parameter.
- If the `ResponseSignal` contains an `AlternateContent` element to trigger alternate content switching, the `zoneIdentity` attribute of the `AlternateContent` element should match the [**Zone identity**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#scte-35-oob) parameter.

## Configure SCTE-35 out-of-band metadata input stream

[Section titled “Configure SCTE-35 out-of-band metadata input stream”](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata/#configure-scte-35-out-of-band-metadata-input-stream)

To configure SCTE-35 out-of-band metadata input stream, follow these steps:

In our example, we consider that you have selected an MPEG-2 TS input.

1. From the **Input** tab, go to the **Out-of-band streams** section then click the **Add** button. The **Metadata selection** window displays.

2. Set the [**Type**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#out-of-band-metadata) to **SCTE-35 OOB**.

 ![view metadata oob selection type](https://docs.mediakind.com/_astro/view_metadata_oob_selection_type.CCOJFnHx_p5yvL.webp) _Example of configuration for SCTE-35 OOB metadata_

 **SCTE-35 OOB** can be used for automation ( ![Clock][base64-image] ) or when there is no SCTE-35 in the input.

3. Enter the appropriate value for the following [parameters](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#scte-35-oob):

 - **Network name**
 - **Zone identity**
 - **ESAM server network interface**
4. Click **Ok** to save settings and return to the service edition options. The metadata stream is added to the list.

If you selected SCTE-35 OOB metadata, Live Encoder ESAM out-of-band signal interface is now accessible from: `http://<controller.ip>:8080/api/esam/LiveEncodings/<network_name>`.

5. Save your settings to continue or click **Exit** to quit without saving.

6. You can [configure the metadata encoding](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding) and [add the metadata to the output stream](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).

**Related information** 
[Configure blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding)

## Configure SCTE-104/IP out-of-band metadata input stream

[Section titled “Configure SCTE-104/IP out-of-band metadata input stream”](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata/#configure-scte-104ip-out-of-band-metadata-input-stream)

To configure SCTE-104/IP out-of-band metadata input stream, follow these steps:

In our example, we consider that you have selected an MPEG-2 TS input.

1. From the **Input** tab, go to the **Out-of-band streams** section, click the **Add** button. **Metadata selection** window displays.

2. Set the [**Type**](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#out-of-band-metadata) to **SCTE-104 / IP OOB**.

 ![view metadata oob SCTE104 selection type](https://docs.mediakind.com/_astro/view_metadata_oob_SCTE104_selection_type.CW19F5wY_16FPpj.webp) _Example of configuration for SCTE-104/IP out-of-band metadata_

3. Enter the appropriate value for the following [parameters](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata#scte-104ip-oob):

 - **DPI PID index**
 - **SCTE-104 server network interface** (if not already configured in the **General** tab).
4. Click **Ok** to save settings and return to the service edition options. The metadata stream is added to the list.

5. Save your settings to continue or click **Exit** to quit without saving.

6. You can [configure the metadata encoding](https://docs.mediakind.com/beam/live-encoder/configure/encoding/metadata-encoding) and [add the metadata to the output stream](https://docs.mediakind.com/beam/live-encoder/configure/output/configure-output#define-the-output-stream-composition).