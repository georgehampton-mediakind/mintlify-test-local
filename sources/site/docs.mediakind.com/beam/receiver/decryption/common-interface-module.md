# Source: https://docs.mediakind.com/beam/receiver/decryption/common-interface-module

# Common Interface Decryption

**Common Interface** (DVB-CI) provides a descrambling solution using a PCMCIA-based card, commonly referred to as a **Conditional Access Module** (CAM). CAMs are available from many different **CA vendors** and offer varying capabilities.

Consumer CAMs are typically limited to descrambling a single service and may also restrict the number of components (PIDs) that can be descrambled simultaneously. Professional CAMs, in contrast, can often descramble multiple services and multiple components per service.

Each CAM is typically limited to a single CA vendor. Therefore, supporting multiple CA vendors requires multiple CAMs, one provided by each vendor. Entitlements are usually stored either on the CAM itself or on a smartcard inserted into the CAM. Decryption can only be enabled on a CAM once the appropriate entitlements have been delivered to the CAM or its associated smartcard, in accordance with the CA vendor’s implementation.

System-level analysis is required to select an appropriate CAM for a given deployment.

## Supported DVB-CI Option Cards

[Section titled “Supported DVB-CI Option Cards”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#supported-dvb-ci-option-cards)

To decrypt transport streams on MK.IO Beam using CAMs, supported **Common Interface** option cards are required. Refer to the **[Decryption](https://docs.mediakind.com/beam/reception/tech-specs#decryption)** section of the technical _Reference_ documentation for a list of compatible cards.

MK.IO Beam supports multiple PCMCIA slots for CAM insertion.

The **Common Interface** option card supported by MK.IO Beam is capable of descrambling transport streams with bitrates of up to 96 Mbps. The actual bitrate that can be processed by each CAM **depends on the capabilities of the CAM itself**.

If the transport stream bitrate exceeds the CAM’s limit, there is no service-limiting feature to remove unused PIDs and reduce the bitrate before it enters the CAM.

## Mutli-Service Descrambling

[Section titled “Mutli-Service Descrambling”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#mutli-service-descrambling)

Depending on the capabilities of the CAM in use, one or more programmes (services) can be descrambled using a single CAM. When the [Receiver Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type) is set to **TS passthrough**, multiple programmes from a single MPTS can be descrambled using the CAM.

For decode-oriented _Receiver Configuration Types_, such as **SD/HD** or **UHD**, only one programme can be configured for descrambling per CAM.

A CAM cannot be shared between multiple running _Receiver_ services. To work around this, a common approach is to configure a single **TS passthrough** _Receiver_ service to descramble multiple programmes using one CAM and output them as a local multicast stream on the MK.IO Beam server. Additional decode-oriented _Receiver_ services can then ingest this locally descrambled multicast and decode individual programmes as required.

## Configuring Common Interface Decryption

[Section titled “Configuring Common Interface Decryption”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#configuring-common-interface-decryption)

Refer to [DVB-CI configuration parameters](https://docs.mediakind.com/beam/receiver/parameters#dvb-ci) for additional settings.

### Enable Common Interface Decryption for Service Decode

[Section titled “Enable Common Interface Decryption for Service Decode”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#enable-common-interface-decryption-for-service-decode)

Common Interface decryption is enabled by assigning a CAM slot in the receiver service configuration.

For a _Receiver_ service that has been configured for **UHD** or **SD/HD**, enable Common Interface decryption using the following steps.

1. From the **Home** page, select the **RECEIVER** item from the required feed, then click ![Edit][base64-image] to edit

2. From the **Parameters** window, select the **Decrypt** tab.

3. Click the **DVB-CI** tab.

4. Select the required CAM from the list of detected CAMs in the **CAM slot** drop-down menu to enable descrambling.

 ![Enable descrambling for Decoding](https://docs.mediakind.com/rx1-img/decode_dvbci_cam_slot.png)

5. From the **Parameters** window, select the **Decoding** tab.

6. From the **Service** drop-down menu, select the programme to be descrambled and decoded, or enter the programme number manually.

7. Once configuration is complete, click **Save and Continue** to apply the changes.

### Enable Common Interface Decryption for TS Passthrough

[Section titled “Enable Common Interface Decryption for TS Passthrough”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#enable-common-interface-decryption-for-ts-passthrough)

For a _Receiver_ service that has been configured for **TS Passthrough**, enable Common Interface decryption using the following steps.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image] to edit

2. From the **Parameters** window, select the **Decrypt** tab.

3. Click the **DVB-CI** tab.

4. Under the **Program Configuration** section, click the **Add Decrypted Program** button. A new row will appear in the decryption table.

 ![Enable descrambling for TS Passthrough](https://docs.mediakind.com/rx1-img/tspassthrough_dvbci_cam_slot.png)

5. Under the **Service** column, select the programme to be descrambled, or enter the programme number manually.

6. Under the **Decryption Type** column, select the required CAM from the drop-down list of detected CAMs and other CA types to enable descrambling.

7. Repeat steps 4 - 6 to add more programmes for descrambling.

8. Once configuration is complete, click **Save and Continue** to apply change.

When a _Receiver_ service is configured for **TS Passthrough**, the **DVB-CI** tab includes a **CAM selection** option listing detected CAM slots. Selecting a CAM here enables [exploring CAM information](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#explore-cam-information) and [resetting the CAM](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#reset-the-cam).

## Explore CAM Information

[Section titled “Explore CAM Information”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#explore-cam-information)

CAM information varies by vendor and between different versions of the same CAM. You can configure parameters such as the CA PIN or language, and view details including the model number, version, and CAM status. The menu structure and its contents are generated by the CAM.

To explore CAM information:

1. The _Receiver_ service or _Feed_ must be in a _Running_ state.

2. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image] to edit

3. From the **Parameters** window, select the **Decrypt** tab.

4. Click the **DVB-CI** tab.

5. Select the required CAM according to the [Receiver Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type):

 - [TS Passthrough](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#tab-panel-32)
 - [SD/HD or UHD](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#tab-panel-33)

 Select the CAM from the **CAM selection** drop-down menu.

 Select the CAM from the **CAM slot** drop-down menu.

 Switching between CAMs will interrupt any programmes currently being descrambled!

6. Click the **Explore CAM in Slot** button to bring up the CAM menu for the CAM assigned in the previous step.

7. A CAM Menu pop-up dialog appears showing the menu structure generated by the CAM.

 ![view cam information cp](https://docs.mediakind.com/rx1-img/view_cam_information_cp.png)

8. Click menu items to navigate through the CAM menus. Some navigation terms within the CAM Menu may be confusing, such as “pressing OK” on a television remote control. In a web browser, simply clicking the menu item performs the same action.

9. Click **Exit** at the bottom of the CAM Menu pop-up dialog to close it.

## Reset the CAM

[Section titled “Reset the CAM”](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#reset-the-cam)

If the CAM or smartcard develops a fault, it may be necessary to remove and reinsert it. If immediate access is not possible, the CAM can be reset remotely through the user interface.

Resetting the CAM briefly stops descrambling, which may disrupt the output transport stream or cause decode errors.

To reset the CAM:

1. The _Receiver_ service or _Feed_ must be in a _Running_ state.

2. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit

3. From the **Parameters** window, select the **Decrypt** tab.

4. Click the **DVB-CI** tab.

5. Select the required CAM according to the [Receiver Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type):

 - [TS Passthrough](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#tab-panel-34)
 - [SD/HD or UHD](https://docs.mediakind.com/beam/receiver/decryption/common-interface-module/#tab-panel-35)

 Select the CAM from the **CAM selection** drop-down menu.

 Select the CAM from the **CAM slot** drop-down menu.

 Switching between CAMs will interrupt any programmes currently being descrambled!

6. Click the **Reset CAM in Slot** button to reset the CAM