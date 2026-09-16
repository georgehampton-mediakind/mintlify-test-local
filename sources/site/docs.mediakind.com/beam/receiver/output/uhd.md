# Source: https://docs.mediakind.com/beam/receiver/output/uhd

# Configure UHD Video Output

For a _Receiver_ service to output decoded UHD video in the same format, the [Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type) must be set to **UHD**. This _Configuration Type_ enables decoding of SD, HD, and UHD video and exposes additional settings for UHD output.

## UHD Output Over SDI

[Section titled “UHD Output Over SDI”](https://docs.mediakind.com/beam/receiver/output/uhd/#uhd-output-over-sdi)

UHD video is output over SDI using the following SDI output standards, referred to as **Link Mode**:

- Quadrant (Quad‑Link 3G‑SDI, ST 425‑5 Annex B — Square Division)
- Interleaved (Quad‑Link 3G‑SDI, ST 425-5 Two Sample Interleave)
- 12G-SDI (Single‑link UHD)

The **Link Mode** options available will depend on the [SDI output option card](https://docs.mediakind.com/beam/reception/tech-specs/#sdi-output) installed in the MK.IO Beam server.

### Configuring Link Mode

[Section titled “Configuring Link Mode”](https://docs.mediakind.com/beam/receiver/output/uhd/#configuring-link-mode)

To configure the Link Mode for UHD output for a specific _Receiver_ service, follow these steps:

1. Set the _Configuration Type_ is set to **UHD**:

 - See [Change the Configuration Type](https://docs.mediakind.com/beam/receiver/#change-the-configuration-type)
2. Set the SDI output option card so that it is configured for UHD output:

 - See [Set up SDI/ASI cards](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card)
3. On the **Home** page, select the **RECEIVER** item from the required feed, then click ![Edit][base64-image] to edit.

4. In the **Parameters** window, select the **Output** tab.

5. Select the tab for the SDI output type, for example **SDI 1**.

 ![view edit service decode output cp](https://docs.mediakind.com/rx1-img/view_edit_service_decode_output_cp.png)

6. Select the [**Link Mode**](https://docs.mediakind.com/beam/receiver/parameters#sdi-output-parameters-and-status) format required for the video output.

7. Select the [**SDI port**](https://docs.mediakind.com/beam/receiver/output/sdi/) required from the drop-down menu that supports UHD output.

8. Click **Save and Continue** to apply change.

## UHD Output Over SMPTE ST 2022-6

[Section titled “UHD Output Over SMPTE ST 2022-6”](https://docs.mediakind.com/beam/receiver/output/uhd/#uhd-output-over-smpte-st-2022-6)

Currently, UHD output is not supported using SMTPE ST 2022-6.

## UHD Output Over SMPTE ST 2110

[Section titled “UHD Output Over SMPTE ST 2110”](https://docs.mediakind.com/beam/receiver/output/uhd/#uhd-output-over-smpte-st-2110)

To output UHD video using SMPTE ST 2110, ensure the following settings are configured:

1. Set the _Output Profile_ to **SMPTE ST 2110 UHD Output**:

 - See [Configure the Output Profile](https://docs.mediakind.com/beam/receiver/output/#configure-the-output-profile)
2. Set the _Configuration Type_ is set to **UHD**:

 - See [Change the Configuration Type](https://docs.mediakind.com/beam/receiver/#change-the-configuration-type)