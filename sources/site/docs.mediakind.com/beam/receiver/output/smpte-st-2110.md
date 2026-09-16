# Source: https://docs.mediakind.com/beam/receiver/output/smpte-st-2110

# Configure SMPTE ST 2110 output

The Receiver service on MK.IO Beam can output uncompressed digital video, audio, and ancillary data over IP networks using SMPTE ST 2110. Unlike [SDI](https://docs.mediakind.com/beam/receiver/output/sdi) and [SMPTE ST 2022‑6](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6), where all content is carried in a single stream, SMPTE ST 2110 transports each Media Type (i.e. video, audio, and ancillary data) as separate, independently routed **essence streams**.

SMPTE ST 2110 uses the Precision Time Protocol (IEEE 1588 PTP) to ensure accurate synchronization between video, audio and data streams.

In some cases, it may be necessary to update the server performance profile by selecting an alternative output profile. See [Output Profile Selection](https://docs.mediakind.com/beam/receiver/output#output-profile-selection) for details.

## Supported Network Cards

[Section titled “Supported Network Cards”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#supported-network-cards)

SMPTE ST 2110 output on MK.IO Beam requires supported hardware option cards. See the **[SMPTE ST 2110](https://docs.mediakind.com/beam/reception/tech-specs#smpte-st-2110-output)** section in the technical _Reference_ documentation for a list of compatible cards.

## Rivermax License

[Section titled “Rivermax License”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#rivermax-license)

When installing the NVIDIA (Mellanox) ConnectX network adapter card into an existing MK.IO Beam system, a Rivermax license is required to enable SMPTE ST 2110 functionality.

Follow the steps below to obtain and install the license.

Rivermax License Procedure

### Install adapter card and connect to server

[Section titled “Install adapter card and connect to server”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#install-adapter-card-and-connect-to-server)

1. Install the adapter card into the server then power on.

2. Connect to the server over SSH as a user with `sudo` privileges.

3. Confirm that the adapter card is detected by the OS with the following command:

 Terminal window

    ```
    lspci | grep ConnectX
    ```

 An example of a single card installed with two ports should look like the following:

 Terminal window

    ```
    01:00.0 Ethernet controller: Mellanox Technologies MT2894 Family [ConnectX-6 Lx]
    01:00.1 Ethernet controller: Mellanox Technologies MT2894 Family [ConnectX-6 Lx]
    41:00.0 Ethernet controller: Mellanox Technologies MT2892 Family [ConnectX-6 Dx]
    41:00.1 Ethernet controller: Mellanox Technologies MT2892 Family [ConnectX-6 Dx]
    ```

The above example indicates that a ConnectX-6 Lx card is present on PCI Bus/Slot `01:00` and that a ConnectX-6 Dx card is present on PCI Bus/Slot `41:00`.

### Obtain adapter card serial number

[Section titled “Obtain adapter card serial number”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#obtain-adapter-card-serial-number)

Run the following command to list detected PCIe cards and extract the adapter card serial number. Use the `-s` option to specify PCI bus/slot IDs if you need to narrow down the target card for licensing.

Terminal window

```
sudo lspci -vv -s 41:00 | grep "Serial number"
```

The serial numbers should look similar to:

Terminal window

```
                        [SN] Serial number: MT2051X19249
                        [SN] Serial number: MT2051X19249
```

### MediaKind Supply

[Section titled “MediaKind Supply”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#mediakind-supply)

Provide the serial number to MediaKind supply: [SW.Supply@mediakind.com](mailto:SW.Supply@mediakind.com)

MediaKind Supply will return a Rivermax license key file.

### Copy Rivermax license to the server

[Section titled “Copy Rivermax license to the server”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#copy-rivermax-license-to-the-server)

If this is the first time the server has had an adapter card installed, use the following steps:

1. Rename the license file to `rivermax.lic`.

2. Copy the license file to the server (for example using SCP).

3. Connect to the server via SSH and copy the file to the Rivermax license directory:

 Terminal window

    ```
    sudo cp rivermax.lic /opt/mellanox/rivermax/rivermax.lic
    ```

### License persistence note

[Section titled “License persistence note”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#license-persistence-note)

After the first reboot, the Rivermax license file is automatically backed up so it can be preserved across [software bundle upgrades](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/update-device-software).

If the new license file is intended to replace an existing Rivermax license, additional steps are required to remove the backed‑up license. In this case, contact MediaKind Customer Support for assistance.

### Restart receiver services

[Section titled “Restart receiver services”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#restart-receiver-services)

If any receiver services configured for SMPTE ST 2110 output are currently **running**, stop and restart them to ensure the updated Rivermax license is applied.

A full system reboot is not required.

## Configure SMPTE ST 2110 Output

[Section titled “Configure SMPTE ST 2110 Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#configure-smpte-st-2110-output)

### SMPTE ST 2110 Output

[Section titled “SMPTE ST 2110 Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#smpte-st-2110-output)

Before you start, ensure at least one Receiver service is configured.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image].

2. Check that the **Configuration type** is **SD/HD** or **UHD** as required.

3. In the **Parameters** window, select the **Output** tab.

4. If the **SMPTE ST 2110** tab is not present under the **Output** tab:

 - Click the ![Add][base64-image] to bring up a prompt to add a new output
 - Select **SMPTE ST 2110** from the drop down menu
 - Click the **Add** button to complete and add the SMPTE ST 2110 output tab
5. Delete the **SDI 1** output using ![Remove][base64-image] button on the tab if not required to maintain optimal performance.

6. Configure each Media Type such as [Video](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#video-output), [PCM Digital Audio](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#pcm-digital-audio-output), [AES3 Audio](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#aes3-audio-output) and [Ancillary Data](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#data-output) to create the necessary essence streams.

7. When two or more outputs exist, they can be deleted by using the ![Remove][base64-image] button on the associated tab.

If a UHD SMPTE ST 2110 output is created, then all other outputs must be deleted as the UHD service only supports a single output.

### Video Output

[Section titled “Video Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#video-output)

To configure ST 2110-20 video for [SMPTE ST 2110 Output](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#smpte-st-2110-output), follow these steps:

1. From the **SMPTE ST 2110** tab, select the **Video** tab.

2. Select any required video options as detailed in the [SMPTE ST 2110 output parameters](https://docs.mediakind.com/beam/receiver/parameters#smpte-st-2110-output-parameters) section

3. Check the [Essence](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#configure-essence-output) settings.

### PCM Digital Audio Output

[Section titled “PCM Digital Audio Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#pcm-digital-audio-output)

Audio **[Auto Select](https://docs.mediakind.com/beam/receiver/decoding/#auto-select)** should be disabled when using SMPTE ST-2110 outputs, as it may result in too many or too few audio channels being carried in the ST 2110-30 essence stream.

SMPTE ST 2110-30 Conformance Level C supports 1 to 8 channels with a 1 msec packet time, or 1 to 64 channels with a 125 usec packet time. Selecting a **Packet Time** of **1 msec** ensures optimal interoperability between devices, while selecting a **Packet Time** of **125 usec** allows more channels to be carried into a single essence stream. Note that, on MK.IO Beam, the actual number of available channels will be limited by the number and configuration of the available audio decoders.

For mixed-vendor environments, 1 ms packet time is recommended unless higher channel density is explicitly required. MK.IO Beam supports additional ST 2110-30 essences if more channels need to be carried.

To configure ST 2110-30 PCM digital audio for [SMPTE ST 2110 Output](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#smpte-st-2110-output), follow these steps:

1. From the **SMPTE ST 2110** tab, select the **PCM Audio** tab.

2. Use the **Add component,** **Add all** or **Remove all** buttons to set the required number of decoded audio components to the list of output components. By default, each audio component will be embedded (carried) in **Essence 1**.

3. If the number of channels exceed the current Essence settings, add more essences by selecting ![Add][base64-image] in the Essence section. For example, ![Add][base64-image] button next to the **Essence 1** tab.

4. Review the list of output audio components and assign to the desired essence stream under the **Embedding** column. For example, **Essence 1** or **Essence 2**.

5. Alternatively, change the **Packet Time** setting in Essence section to change the numbers of channels that can be carried in each essence stream.

6. Select any required PCM audio options as detailed in the [SMPTE ST 2110 output parameters](https://docs.mediakind.com/beam/receiver/parameters#smpte-st-2110-output-parameters) section

7. Check the [Essence](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#configure-essence-output) settings.

### AES3 Audio Output

[Section titled “AES3 Audio Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#aes3-audio-output)

Audio **[Auto Select](https://docs.mediakind.com/beam/receiver/decoding/#auto-select)** should be disabled when using SMPTE ST-2110 outputs, as it may result in too many or too few audio channels being carried in the ST 2110-31 essence stream.

SMPTE ST 2110-31 Conformance Level C supports 1 to 6 channels with a 1 msec packet time, or 1 to 60 channels with a 125 usec packet time. Selecting a **Packet Time** of **1 msec** ensures optimal interoperability between devices, while selecting a **Packet Time** of **125 usec** allows more channels to be carried into a single essence stream. Note that, on MK.IO Beam, the actual number of available channels will be limited by the number and configuration of the available audio decoders.

For mixed-vendor environments, 1 ms packet time is recommended unless higher channel density is explicitly required. MK.IO Beam supports additional ST 2110-31 essences if more channels need to be carried.

To configure ST 2110-31 AES3 audio for [SMPTE ST 2110 Output](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#smpte-st-2110-output), follow these steps:

1. From the **SMPTE ST 2110** tab, select the **AES3 Audio** tab.

 - If AES3 Audio tab is not shown, select the ![Add][base64-image] button next to the Media Type tabs (e.g Video, Data, etc) to add the **AES3 Audio** tab.
2. Use the **Add component,** **Add all** or **Remove all** buttons to set the required number of decoded audio components to the list of output components. By default, each audio component will be embedded (carried) in **Essence 1**.

3. If the number of channels exceed the current Essence settings, add more essences by selecting ![Add][base64-image] in the Essence section. For example, ![Add][base64-image] button next to the **Essence 1** tab.

4. Review the list of output audio components and assign to the desired essence stream under the **Embedding** column. For example, **Essence 1** or **Essence 2**.

5. Alternatively, change the **Packet Time** setting in Essence section to change the numbers of channels that can be carried in each essence stream.

6. Select any required AES3 audio options as detailed in the [SMPTE ST 2110 output parameters](https://docs.mediakind.com/beam/receiver/parameters#smpte-st-2110-output-parameters) section

7. Check the [Essence](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#configure-essence-output) settings.

### Data Output

[Section titled “Data Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#data-output)

To configure ST 2110-40 ancillary data output, follow these steps:

1. From the **SMPTE ST 2110** tab, select the **Data** tab.

2. For each available ancillary data type, select the **line number** that the data should appear on or **OFF** to disable the data type. Details for each data type can be found in the [SMPTE ST 2110 output parameters](https://docs.mediakind.com/beam/receiver/parameters#smpte-st-2110-output-parameters) section.

3. Check the [Essence](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#configure-essence-output) settings.

### Configure Essence Output

[Section titled “Configure Essence Output”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#configure-essence-output)

An SDP file is generated for each essence regardless of whether it is enabled. However, IP streams are only created for enabled essences.

Each **Media Type** is configured as a separate **essence stream** for the SMPTE ST 2110 output. To configure the essence output, follow these steps:

1. From the **Essence 1** tab, enable the output by ticking the **Output enable** checkbox.

2. Override the default value for the **Payload type** if required.

3. Configure any extra parameter specific to the Media Type:

 - **PCM Audio**: The **Packet Time** determines the maximum number of channels carried in the essence.
 - **AES3 Audio**: The **Packet Time** determines the maximum number of channels carried in the essence.
4. Under the **Primary** tab for the current Essence:

 1. Enter the **Destination IP Address** and **Destination Port** for the primary essence stream.
 2. Select the **Network interface** from the options in the pull-down list.
 3. Either leave the **Source port** setting on **Auto** or enter a valid value.
 4. Set a value for the **TTL** parameter.
5. Repeat the above steps for each **Essence** tab introduced.

6. Click **Save and continue** to save your changes.

### SMTPE ST 2022-7

[Section titled “SMTPE ST 2022-7”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#smtpe-st-2022-7)

For downstream SMPTE ST 2110 receivers (e.g. monitors, encoders) that support **SMPTE ST 2022-7 Seamless Protection Switching**, two identical RTP streams are required for each essence. These streams must be carried independently over separate network paths to provide redundancy.

This can be facilitated by MK.IO Beam for each _Receiver_ service outputting SMPTE ST 2110. By enabling a **Secondary** output for each essence stream, the **Primary** stream is duplicated. To configure this, follow the steps below:

1. From the **SMPTE ST 2110** tab, review each Media Type tab. For example, the **Video** tab.

2. Select the **Essence 1** tab.

3. Click ![Add][base64-image] button next to the **Primary** tab to add the **Secondary** tab.

 1. Enter the **Destination IP Address** and **Destination Port** for the secondary essence stream.
 2. Select the **Network interface** from the options in the pull-down list.
 3. Either leave the **Source port** setting on **Auto** or enter a valid value.

 The Secondary source port will use the same value for source port as the Primary setting. This is due to a driver limitation that may be resolved in future releases.

 4. Set a value for the **TTL** parameter.
4. Repeat the above steps for each **Essence** tab under the selected Media Type.

5. Repeat the above steps for each Media Type tab. For example, **PCM Audio**, **AES3 Audio** and **Data** tabs.

6. Click **Save and continue** to save your changes.

## Download SDP File

[Section titled “Download SDP File”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#download-sdp-file)

The SDP (Session Description Protocol) files that describe each SMPTE ST 2110 essence are generated each time the essence parameters and source input are changed. These SDP files can be used to configure the inputs of equipment that are required to receive the SMPTE ST 2110 essence streams.

The SDP file for each media type can be obtained by clicking ![Download][base64-image] in the **Output status** section. This appears on the **Stats** ![Chart][base64-image] page and on the **Edit** ![Edit][base64-image] page for the Output.

The SDP files are automatically regenerated whenever a change to the input source or essence parameters are detected. The initial SDP file generation may only contain the changes related to either the input source or the essence parameters.

It is advisable to wait 30 seconds after setting up an essence and providing a source stream before downloading the SDP files to ensure the SDP file is fully updated.

## NMOS Support

[Section titled “NMOS Support”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#nmos-support)

Once the required service has been started, SMPTE ST 2110 outputs can be discovered using products that support the NMOS IS-04 Discovery and Registration standard. In addition, active SMPTE ST 2110 outputs can be managed using products that support the NMOS IS-05 Device Connection Management standard.

If the device hostname is changed, a reboot is recommended to ensure continued NMOS operation.

### mDNS Configuration

[Section titled “mDNS Configuration”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#mdns-configuration)

The MK.IO Beam supports the ability to use **multicast DNS (mDNS)** protocol to resolve domain names within the attached SMPTE ST 2110 network.

Do not enable this setting in unsupported networks, this may lead to memory issues.

This can be enabled from the GUI via the NMOS tab on the appliance page:

1. Select **Appliance** from the left-hand side menu.

2. Click the **NMOS** tab.

3. Enable the **mDNS Eanble** checkbox as shown below:

 ![rx1 receiver output mds](https://docs.mediakind.com/rx1-img/rx1_receiver_output_mds.png)

4. Set an appropriate name or description in the **Label** so that your node device can be easily identified.

### NMOS Basic Settings

[Section titled “NMOS Basic Settings”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#nmos-basic-settings)

| Parameter | Description |
| :-- | :-- |
| mDNS Eanble | If enabled, use **multicast DNS** to automatically configure NMOS registration settings. |
| Label | This is the label used for the device when used as an NMOS node. |

### NMOS Registration Settings

[Section titled “NMOS Registration Settings”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#nmos-registration-settings)

| Parameter | Description |
| :-- | :-- |
| Registration Address | Manually assign the IP address of the NMOS registration server. |
| Registration Version | Manually assign the registry version for NMOS. |
| Registration Port | Manually assign the port of the NMOS registration server. |

### NMOS Advanced Settings

[Section titled “NMOS Advanced Settings”](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110/#nmos-advanced-settings)

| Parameter | Description |
| :-- | :-- |
| mDNS multi-label domains | When selected, you can enable mDNS to support domains with multiple labels. For example, `en.mediakind.local`, where `en` is subdomain of `mediakind.local`. |
| DNS priority (pri) | This is used for the ‘pri’ TXT record when advertising the node via mDNS. Specifying `2147483647` (maximum value) disables advertisement completely. |
| Registration Server highest Priority | This is used to specify the highest ‘pri’ value of discovered registration server, to avoid development and live systems colliding. Smaller numbers indicate higher priority; 0 is highest priority. |
| Registration Server lowest Priority | This is used to specify the lowest ‘pri’ value of discovered registration server, to avoid development and live systems colliding. Larger numbers indicate lower priority; `2147483647` is lowest priority. |