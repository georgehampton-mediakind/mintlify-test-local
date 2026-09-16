# Source: https://docs.mediakind.com/beam/receiver/decryption/director

# Director 6

Director 6 delivers secure, end‑to‑end management for contribution and distribution networks, with enhanced content security beyond Director 5 (not supported in Beam).

## Director Features

[Section titled “Director Features”](https://docs.mediakind.com/beam/receiver/decryption/director/#director-features)

[Conditional Access](https://docs.mediakind.com/beam/receiver/decryption/director/#conditional-access-ca)

### Conditional Access

Enhanced content protection and entitlement management.

[Over Air Control](https://docs.mediakind.com/beam/receiver/decryption/over-air-control)

### Over Air Control

Remotely configure receivers through satellite links.

## Conditional Access (CA)

[Section titled “Conditional Access (CA)”](https://docs.mediakind.com/beam/receiver/decryption/director/#conditional-access-ca)

A Trusted Platform Module (TPM) must be fitted. If not fitted, the Director 6 functionality will be hidden. Please contact MediaKind Customer Support on how to check this.

When the [Receiver Configuration Type](https://docs.mediakind.com/beam/receiver/#receiver-configuration-type) is set to **TS passthrough**, it is possible to configure multiple programmes from a single MPTS to be descrambled using Director 6. For decode-oriented _Receiver Configuration Types_, such as **SD/HD** or **UHD**, only a single service can be configured for descrambling and decoding.

### Supplying Information to the Director Headend

[Section titled “Supplying Information to the Director Headend”](https://docs.mediakind.com/beam/receiver/decryption/director/#supplying-information-to-the-director-headend)

Receivers under the control of a _Director 6 headend_ system must be registered by supplying the **Director Key File** downloaded from the unit. This contains all the information necessary for the _Director 6 headend_ to authorize decrypting scrambled content or accepting Over-Air-Control (OAC) commands.

Before you start, ensure at least one service is configured.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image] to edit

2. From the **Parameters** window, select the **Decrypt** tab.

3. Click the **Director 6** tab.

4. From the **Director 6 hardware ID** drop down list, select an ID entry that the _content provider_ can use to address the receiver service.

 ![Exporting Director 6 Keyfile](https://docs.mediakind.com/rx1-img/director_export_keyfile.png)

5. Click **Export Keyfile** button to download the **Director Key File**.

6. If other Director 6 hardware IDs are assigned to other receiver services, repeat the above steps to export and download the Director Key File for each unique Director 6 hardware ID assignment.

7. Send the Director Key File(s) to the _content provider_ who will manage entitlements.

## Configuring Director 6 Decryption

[Section titled “Configuring Director 6 Decryption”](https://docs.mediakind.com/beam/receiver/decryption/director/#configuring-director-6-decryption)

### Enable Director 6 Decryption for Service Decode

[Section titled “Enable Director 6 Decryption for Service Decode”](https://docs.mediakind.com/beam/receiver/decryption/director/#enable-director-6-decryption-for-service-decode)

Director 6 decryption is enabled by ticking the **Descrambling Enable** check box in the receiver service configuration. This allows multiple service configurations to decrypt using **Director 6** without being limited to the Director 6 hardware ID.

For a receiver service that has been configured for UHD or SD/HD, enable Director 6 decryption with the following steps.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image] to edit

2. From the **Parameters** window, select the **Decrypt** tab.

3. Click the **Director 6** tab.

4. Tick the **Descrambling Enable** check box.

 ![Enable descrambling for Decoding](https://docs.mediakind.com/rx1-img/director_enable_decryption.png)

5. Once configuration is complete, click **Save and Continue** to apply change.

### Enable Director 6 Decryption for TS Passthrough

[Section titled “Enable Director 6 Decryption for TS Passthrough”](https://docs.mediakind.com/beam/receiver/decryption/director/#enable-director-6-decryption-for-ts-passthrough)

For a receiver service that has been configured for TS Passthrough, enable Director 6 decryption with the following steps.

1. From the **Home** page, select the **RECEIVER** item from the required feed then click ![Edit][base64-image] to edit

2. From the **Parameters** window, select the **Decrypt** tab.

3. Click the **Director 6** tab.

4. Under the **Program Configuration** section, click the **Add Decrypted Program** button.

5. A new row will appear in the decryption table, set the **Service** to be decrypted and set the _Decryption Type_ to **Director 6**.

 ![Enable descrambling for TS Passthrough](https://docs.mediakind.com/rx1-img/director_enable_decryption_passthrough.png)

6. Once configuration is complete, click **Save and Continue** to apply change.