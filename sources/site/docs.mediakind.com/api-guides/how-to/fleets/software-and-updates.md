# Source: https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates

# Software and updates

Software management in the Fleets API is device-centric. You inspect the versions available to a device, then set fields on the device resource to choose what runs or preloads. The same surface produces support packages for diagnostics. For the product background, see [Update device software](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/update-device-software).

## List available software

[Section titled “List available software”](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates/#list-available-software)

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device/software" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Each entry reports its `version` and whether the device can move to it, through `status.upgradeCompatible` and `status.downgradeCompatible`. Check those before you target a version.

## Choose how the update happens

[Section titled “Choose how the update happens”](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates/#choose-how-the-update-happens)

Three device-spec fields control software, and the right one depends on whether you want to apply the change now or stage it for later.

| To… | Set | Effect |
| :-- | :-- | :-- |
| Run a specific version now | `desiredSoftwareVersion` | The device switches to it. `softwareUpgradeState` moves `Switching` then `Idle`. |
| Stage a version without applying it | `preloadSoftwareVersion` | The device downloads it; watch `status.preloadedSoftware` for progress. |
| Always keep the newest staged | `autoPreloadLatestSoftware` | The device preloads the latest available version automatically. |

Set the running version:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "desiredSoftwareVersion": "1.2.3.4" } }'
```

Preloading first, then setting the desired version once the download is complete, makes the actual switch fast and predictable.

## Support packages

[Section titled “Support packages”](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates/#support-packages)

A support package is the main diagnostic bundle. List the packages held for a device (up to five, newest first), and trigger a new one:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device/supportPackages" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device/supportPackages" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "Audio sync issue" },
    "spec": {
      "description": "Investigating audio sync drift on the output stream",
      "name": "audio-sync-issue-20260415",
      "collectors": ["Logs", "Host"]
    }
  }'
```

Only `description` is required. Omit `collectors` to include all of them. The call returns `202 Accepted`, and only one support-package operation can run on a device at a time.

## Remove selected services

[Section titled “Remove selected services”](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates/#remove-selected-services)

To remove services from a device, select them by tag. Take a backup first if you might need to restore the current configuration.

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device/removeServices" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "Remove audio services" },
    "spec": {
      "description": "Remove audio processing services",
      "selector": { "tags": { "include": ["audio"], "exclude": [] } }
    }
  }'
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates/#what-goes-wrong)

- **An “upgrade” that becomes a rollback.** Beam devices use a dual-bank mechanism. If the version you set matches the version already in the second bank, the device performs a rollback rather than a fresh upgrade. Confirm the target version is the one you intend.
- **A preloaded version that vanished.** Software-bundle storage is limited, and the device deletes older bundles automatically to make room. Preload close to when you plan to apply.
- **A support package request rejected.** Only one support-package operation runs per device at a time. Wait for the current one to finish.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates/#what-comes-next)

- [Backups and restores](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores): create the rollback point before a software change.
- [Manage devices](https://docs.mediakind.com/api-guides/how-to/fleets/device-management): return to the device resource and its site and network settings.