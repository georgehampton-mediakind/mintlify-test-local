# Source: https://docs.mediakind.com/api-guides/how-to/fleets

# Build with the Fleets API

The Fleets API is the operational API for MK.IO Beam devices. Use it to register devices into a project, protect their configuration with backups, manage software versions, and collect support packages when you need diagnostics.

## API overview

[Section titled “API overview”](https://docs.mediakind.com/api-guides/how-to/fleets/#api-overview)

| Detail | Value |
| --- | --- |
| Base path | `/api/v1/projects/{project_name}/fleet/` |
| Scope | Project |
| Reference | [Fleets API reference](https://docs.mediakind.com/api-reference/fleets-api) |

## How the main resources connect

[Section titled “How the main resources connect”](https://docs.mediakind.com/api-guides/how-to/fleets/#how-the-main-resources-connect)

The Fleets API revolves around a few resource types:

1. A **device** represents the Beam device record in MK.IO.
2. A **backup** is a configuration snapshot you can restore later.
3. **Software** settings on the device control desired and preloaded versions.
4. A **support package** is a diagnostic bundle generated on the device and uploaded to storage.

That means a typical operational flow is: register the device, take backups before risky changes, control software state through device patch operations, and collect support packages when something goes wrong.

## Common workflow patterns

[Section titled “Common workflow patterns”](https://docs.mediakind.com/api-guides/how-to/fleets/#common-workflow-patterns)

### Operate a Beam device

1

[Register and manage devices](https://docs.mediakind.com/api-guides/how-to/fleets/device-management)

2

[Back up configuration before changes](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores)

3

[Control software versions](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates)

4

[Collect a support package for diagnostics](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates)

## Guides

[Section titled “Guides”](https://docs.mediakind.com/api-guides/how-to/fleets/#guides)

[Manage devices](https://docs.mediakind.com/api-guides/how-to/fleets/device-management)

### Manage devices

Register devices, inspect state, and work through the core day-to-day operations.

[Backups and restores](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores)

### Backups and restores

Create backups before changes, inspect stored backup metadata, and restore safely.

[Software and updates](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates)

### Software and updates

Control desired and preloaded software versions and collect support packages for diagnostics.