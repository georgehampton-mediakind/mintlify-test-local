# Source: https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements

# Managing BISS-CA entitlements

To successfully decrypt BISS-CA content, MK.IO Beam Distribution must have the correct entitlements. The _Content Provider_ requires a public key exported from the receivers [BISS-CA Key Pair table](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-decryption#managing-biss-ca-keys).

To get the correct entitlements, follow these steps:

### Obtaining BISS-CA entitlements

1

[Contact content provider](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#step-1---contact-content-provider)

2

[Exchange keys](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#step-2---exchange-keys)

3

[Check authorization](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#step-3---check-authorization)

## Step #1 - Contact content provider

[Section titled “Step #1 - Contact content provider”](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#step-1---contact-content-provider)

Contact the provider of the scrambled content and determine how they wish to exchange key pairs. They will require one of the following methods:

- **Method 1**: The receiver operator must send a public key to the content provider.
- **Method 2**: The content provider will send a public/private key pair to the receiver operator.

The keys will need to be exchanged between the content provider and the receiver operator using an out-of-band method chosen by the content provider.

## Step #2 - Exchange keys

[Section titled “Step #2 - Exchange keys”](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#step-2---exchange-keys)

- [Method 1: Send Public Key](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#tab-panel-30)
- [Method 2: Import Public/Private Key](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#tab-panel-31)

If requested by the content provider, the receiver operator must supply a **public key** to enable entitlement by the scrambler using a **self-generated key pair**.

1. If a self-generated key pair is not already available, [create a self-generated key pair](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-decryption#create-a-self-generated-key-pair).

2. [Export the public key](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-decryption#export-the-public-key).

3. Send the public key to the content provider who will manage entitlements.

The content provider will supply a public and private key pair to the receiver operator, which must be imported into the receiver. This is done using an **injected key pair**.

1. [Import injected key pair](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-decryption#import-injected-key-pair).

2. The public key should already be registered with the content provider who will manage entitlements.

## Step #3 - Check authorization

[Section titled “Step #3 - Check authorization”](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-entitlements/#step-3---check-authorization)

1. [Enable BISS-CA decryption for service decode](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-decryption#enable-biss-ca-decryption-for-service-decode).

2. From the **Services** page, click ![Alarm][base64-image] to view the alarms page.

3. Confirm that no alarms are raised.

4. If the raised alarm **Label** reports **BISS CA not decrypting** and the **Info** column states **not authorized** then this is due to one or more of the following conditions:

 - The EKID recovered from the transport stream does not match the EKID of any key pair stored on the receiver.
 - The content provider has not enabled entitlements.
 - The content provider has revoked entitlements.
5. Contact the content provider to confirm that the correct public key has been registered and that entitlements have been enabled.

It may be necessary to refer to the EKID value, see [Managing BISS-CA keys](https://docs.mediakind.com/beam/receiver/decryption/biss-ca-decryption#managing-biss-ca-keys).