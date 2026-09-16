# Source: https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores

# Backups and restores

A backup is the safety net for Beam device operations. Take one before a software change or a service removal, and you have a configuration you can roll back to. A backup captures the device’s services, templates, failover groups, server definitions, and local users. Backup and restore operations run asynchronously on the device and return `202 Accepted`.

## Create a backup

[Section titled “Create a backup”](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores/#create-a-backup)

A backup is triggered with `POST` against the device. Use a descriptive `backupName`, such as one with a date, so its purpose is clear later.

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device/backup" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "Pre-update backup" },
    "spec": {
      "backupName": "pre-update-20260415-100000",
      "backupAssetFile": false
    }
  }'
```

The call returns `202 Accepted` and the backup completes on the device over the next while. Configuration access on the device is blocked while a backup or restore is in progress.

## Browse backups

[Section titled “Browse backups”](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores/#browse-backups)

List the backups in a project, and read one to get its stored file details:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/backups" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/backups/<BACKUP_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

A backup record carries its `timestamp`, the `blobStorageUrl` of the stored file, and a `signature` for integrity verification. The list endpoint supports `$filter`; see the [Fleets API reference](https://docs.mediakind.com/api-reference/fleets-api) for the filterable fields.

## Restore a backup

[Section titled “Restore a backup”](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores/#restore-a-backup)

Restore is also a `POST`, with the stored file path from the backup record. It returns `202 Accepted` and applies asynchronously.

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/devices/my-device/restore" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": { "displayName": "Restore pre-update snapshot" },
    "spec": {
      "restoreFilePath": "my-device/<BACKUP_ID>/pre-update-20260415-100000.tar.gz",
      "restoreAssetFile": false
    }
  }'
```

Confirm the backup identity before you restore it onto a live device.

## Upload an external backup

[Section titled “Upload an external backup”](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores/#upload-an-external-backup)

If you already hold a `.tar.gz` backup file, upload it and let MK.IO generate its metadata:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/fleet/uploadBackup" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @my-device-backup.tar.gz
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores/#what-goes-wrong)

- **Restoring a backup onto a different Beam server.** This is not supported. A backup restores to the device it came from. See the on-device detail in [Backup and restore](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore).
- **Old backups disappearing.** A device keeps up to 30 local backups and deletes the oldest when that limit is reached. Download or upload any you must retain.
- **Configuration changes blocked mid-operation.** Device configuration access is locked while a backup or restore runs. Wait for it to finish.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/fleets/backups-and-restores/#what-comes-next)

- [Software and updates](https://docs.mediakind.com/api-guides/how-to/fleets/software-and-updates): take a backup before changing software state.
- [Manage devices](https://docs.mediakind.com/api-guides/how-to/fleets/device-management): return to the device once protection is in place.