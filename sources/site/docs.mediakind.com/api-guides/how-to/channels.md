# Source: https://docs.mediakind.com/api-guides/how-to/channels

# Build with the Channels API

The Channels API is the local API of an MK.IO Beam device. It presents everything the device is doing as a number of _channels_, where one channel can cover the input, the processing, and the output of a single service. It is the API behind the Beam Essentials UI, and it runs on the device itself rather than in the MK.IO cloud.

The Channels API requires an MK.IO Beam device running version `1.12.0` or higher. It is delivered as part of the Beam Essentials UI release, so devices on earlier versions do not serve these endpoints.

## API overview

[Section titled “API overview”](https://docs.mediakind.com/api-guides/how-to/channels/#api-overview)

| Detail | Value |
| :-- | :-- |
| Base path | `<DEVICE_ADDRESS>/api/` |
| Scope | A single Beam device |
| Access | Network access to the device |
| Reference | [Channels API reference](https://docs.mediakind.com/api-reference/channels-api) |

The base URL is the device itself, not `api.mk.io`, and requests go to it over HTTP. The other MK.IO APIs are project-scoped and bearer authenticated against the cloud, so if you already integrate with the Media or Fleets API, treat this as a separate integration. See [Connect to a Beam device](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device) for how to build the address.

## How the main resources connect

[Section titled “How the main resources connect”](https://docs.mediakind.com/api-guides/how-to/channels/#how-the-main-resources-connect)

The API exposes a handful of resource types, and channels are the centre of all of them:

1. A **channel** holds a `spec` (the configuration you send) and a `status` (what the device reports back).
2. **Interfaces** are the physical and network ports available on the device. You read them to fill in the `interface` and `url` fields of a channel.
3. **Channel alarms** are the active faults raised against a named channel.
4. **Metrics** and **system** information describe the device rather than any one channel.

A typical integration reads the interfaces once, creates channels against them, then polls channel status and alarms to drive a dashboard or an alerting rule.

## Common workflow patterns

[Section titled “Common workflow patterns”](https://docs.mediakind.com/api-guides/how-to/channels/#common-workflow-patterns)

### Automate a Beam device

1

[Connect and confirm the version](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device)

2

[Read the available interfaces](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels)

3

[Create and start a channel](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels)

4

[Poll status, health, and alarms](https://docs.mediakind.com/api-guides/how-to/channels/monitor-channels)

## Guides

[Section titled “Guides”](https://docs.mediakind.com/api-guides/how-to/channels/#guides)

[How Beam channels work](https://docs.mediakind.com/api-guides/how-to/channels/how-channels-work)

### How Beam channels work

Channel types, the split between spec and status, and how configuration is applied asynchronously.

[Connect to a Beam device](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device)

### Connect to a Beam device

Build the base URL, use the Swagger page served by the device, and understand the current authentication model.

[Create and manage channels](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels)

### Create and manage channels

A complete worked request, the input and output types each channel type accepts, and how to start, rename, and delete.

[Monitor channels and devices](https://docs.mediakind.com/api-guides/how-to/channels/monitor-channels)

### Monitor channels and devices

Filter the channel list, read health and alarms, fetch thumbnails, and query device metrics.

[Import and export channels](https://docs.mediakind.com/api-guides/how-to/channels/import-and-export)

### Import and export channels

Move a channel configuration between devices, or restore one after a rebuild.

## Where to go deeper

[Section titled “Where to go deeper”](https://docs.mediakind.com/api-guides/how-to/channels/#where-to-go-deeper)

- [Beam Essentials UI](https://docs.mediakind.com/beam/essentials) covers the same channels through the device interface, including the creation wizard.
- [Channels API reference](https://docs.mediakind.com/api-reference/channels-api) is the complete field-level truth for every schema referenced in these guides.