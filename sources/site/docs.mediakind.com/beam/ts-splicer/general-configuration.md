# Source: https://docs.mediakind.com/beam/ts-splicer/general-configuration

# General parameters

Upon creating a TS Splicer service, the **General.** tab is the first to appear. It gathers general settings for redundancy and common network interfaces used for communication with Ad servers and POIS components.

## Configure dual output prevention

[Section titled “Configure dual output prevention”](https://docs.mediakind.com/beam/ts-splicer/general-configuration/#configure-dual-output-prevention)

The dual output prevention feature safeguards against duplicate media multicast on the same network. This is particularly useful in scenarios with active/active encoders. This functionality leverages the Multicast Guard Protocol (MGP) and according to the following principles:

- Point-to-point communication between both encoders, utilizing multicast messages over a dedicated port.
- Constant check so only one encoder has its output enabled at any given time.

![dual output prevention](https://docs.mediakind.com/_astro/dualOutputPrevention_image.DF4KwcDy_1Iqan4.webp)

By default, the first active TS processing instance will have its output enabled.

To set up dual output prevention:

- Check the **Activate** checkbox.
- **Network interface:** Specify the network interface for dual output prevention.
- **Address**: Define the multicast address for communication.
- **Port**: Set the designated port.
- **Group name**: A group encompasses a pair of TS Splicers under dual output prevention. Use this field to identify the group.

## Configure server variant

[Section titled “Configure server variant”](https://docs.mediakind.com/beam/ts-splicer/general-configuration/#configure-server-variant)

Initiating a server variant is straightforward: simply check the **Activate** checkbox. This action will auto-generate both primary and secondary variants.

## Configure network interfaces

[Section titled “Configure network interfaces”](https://docs.mediakind.com/beam/ts-splicer/general-configuration/#configure-network-interfaces)

TS Splicer orchestrates communication with various decision-making entities, notably the Ad Decision Server (ADS) and the POIS component for blackout and alternate content decisioning.

To configure network interfaces:

- **ESAM Network interface:** Specify the name for the interface used to communicate with the POIS
- **VAST Network interface:** Designate the interface for VAST, typically an interface with public internet access.
- **SCTE-30 Network interface:** Define the interface for SCTE-30, which communicates with an Ad Server.