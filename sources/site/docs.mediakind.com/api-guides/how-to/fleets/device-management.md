# Source: https://docs.mediakind.com/api-guides/how-to/fleets/device-management

# Manage devices

Device management is where most Fleets API workflows begin. MK.IO Beam is an on-premises media processing appliance, and the Fleets API is the cloud control plane for it. You register a device into a project, give it a site and the networks it can use, then move into backup, software, or diagnostic operations. For the on-device onboarding steps that precede registration, see [Onboard a fleet device](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/on-board-fleet-devices/api-onboarding).

## Register a device

[Section titled “Register a device”](https://docs.mediakind.com/api-guides/how-to/fleets/device-management/#register-a-device)

A device is created with `PUT`, using its name in the URL. You associate the physical appliance with this record using either a `shortCode` or a `locationId` read from the device web interface.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/beam-encoder-01" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "Beam Encoder 01",
      "labels": { "location": "studio-a", "role": "encoder" }
    },
    "spec": {
      "shortCode": "XU7U23WD",
      "siteName": "headquarters",
      "availableNetworks": []
    }
  }'
```

The fields that matter:

- `shortCode`: the 8-character code from the device web interface. It rotates frequently, so use it promptly.
- `locationId`: a stable device identifier that does not rotate. Prefer it for scripted, large-scale onboarding.
- `siteName`: the site the device belongs to. See [Set up networks and sites](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites).
- `availableNetworks`: the networks the device may use. An empty array gives it access to every network with a route to its site.

After registration, the device web interface shows **Registered: Yes**.

## Read the device and its status

[Section titled “Read the device and its status”](https://docs.mediakind.com/api-guides/how-to/fleets/device-management/#read-the-device-and-its-status)

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/beam-encoder-01" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The `status` block is where you watch the device’s health and software. The fields worth tracking:

| Field | Tells you |
| :-- | :-- |
| `currentSoftwareVersion` | The version running now. |
| `softwareUpgradeState` | `Idle`, `Switching`, or `SwitchFailed` during a version change. |
| `alarmSeverity` | `0` Clear, `1` Info, `2` Warning, `3` Error, `4` Critical. |
| `lastContact` | When the device last reached the cloud. |

The list endpoint supports `$filter`, `$orderby`, `$top`, `$skiptoken`, and label queries, including sorting on `status/alarmSeverity` and `status/currentSoftwareVersion`.

## Update device settings

[Section titled “Update device settings”](https://docs.mediakind.com/api-guides/how-to/fleets/device-management/#update-device-settings)

Use `PATCH` to change settings such as the site, networks, or software preferences:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/beam-encoder-01" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "autoPreloadLatestSoftware": true } }'
```

The software-related fields (`desiredSoftwareVersion`, `preloadSoftwareVersion`, `autoPreloadLatestSoftware`) are covered in [Software and updates](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates).

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/fleets/device-management/#what-goes-wrong)

- **Registration fails because the short code expired.** Short codes rotate. Keep the device interface open so it shows the current code, or register with the non-rotating `locationId` instead.
- **Deleting a device returns `409 Conflict`.** The device is still referenced, for example by an assigned flow. Clear the dependency, then retry the delete.

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/beam-encoder-01" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/fleets/device-management/#what-comes-next)

- [Backups and restores](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores): protect device state before major changes.
- [Software and updates](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates): control desired and preloaded software versions.