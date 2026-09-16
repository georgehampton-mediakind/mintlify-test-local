# Source: https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore

# Backup and restore

Backups include services, templates,failover groups,server definitions and locally defined users. You can back up your configurations to restore a previous configuration (for upgrades or rollbacks or after a server crash, etc.)

The access to configurations is blocked while a backup or restore is in progress. Up to 30 backup files are supported for local backups. The oldest backup is deleted once 30 backups are detected.

The database backup operation is supported; but copying the exported database and restoring it onto another MK.IO Beam server is not supported.

## Backup database configurations

[Section titled “Backup database configurations”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#backup-database-configurations)

Create a backup of MediaKind configurations to save a version locally or on a remote server.

### Display backup MediaKind database options

[Section titled “Display backup MediaKind database options”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-backup-mediakind-database-options)

Back up the MediaKind configuration to a local or remote server. Backups include services, servers, templates and users. Backups are time-stamped.

1. Click ![Gear][base64-image] in the upper-right corner of the screen. The **System Center** menu displays.
2. Select **Backup**. The Backup Controller Database options display.

### Create a local backup

[Section titled “Create a local backup”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#create-a-local-backup)

Local backups of MediaKind settings are still accessible even when no remote access is possible. Backups only include the list of servers, services, templates and user configurations.

1. [Display backup options](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-backup-mediakind-database-options). **Local Backup** is selected by default.

 ![view backup db remote mfvp controller](https://docs.mediakind.com/_astro/view_backup_db_remote_mfvp_controller.DVXxgpxl_2nlOXY.webp)

The **Host**, **Port** and **Path** are only required for a [remote backup](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#restore-configurations-from-a-remote-backup). FTPS is also authorized.

2. Click **Backup now**. The backup is stored on the local drive.

### Create a remote backup

[Section titled “Create a remote backup”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#create-a-remote-backup)

Create remote backups to restore MediaKind settings from a remote server using FTP or FTPS.

1. [Display backup options](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-backup-mediakind-database-options).
2. Select **Remote backup**. [Required fields](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#backup-parameters) are highlighted.
3. Enter the required remote backup settings information.

FTPS is also authorized.

![view backup db remote mfvp controller](https://docs.mediakind.com/_astro/view_backup_db_remote_mfvp_controller.DVXxgpxl_2nlOXY.webp)

Editing the backup file storage location impacts scheduled backups.

4. Click **Backup Now**.
5. Click **Save and exit** to save your changes.

### Schedule an automatic backup (periodic)

[Section titled “Schedule an automatic backup (periodic)”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#schedule-an-automatic-backup-periodic)

Set a schedule to back up the MediaKind database on a regular basis: weekly, daily or hourly. Backup guard times may impact backup availability.

1. [Display backup options](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-backup-mediakind-database-options).
2. Select the **Scheduled Backup** tab to define the scheduled backup.
3. Select the **Enable scheduled backup** checkbox.
4. Select the backup schedule time (hourly, weekly, daily and so on).

The time stamp is based on the current time on the Controller server.

![view scheduled backup db remote mfvp controller](https://docs.mediakind.com/_astro/view_scheduled_backup_db_remote_mfvp_controller.CFDTDAy7_nE1Qk.webp)

5. Open the **Backup Location** tab to set the backup file storage settings, if they are not currently configured.
6. Click **Save and exit** to save your changes.

### Download the Controller database file

[Section titled “Download the Controller database file”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#download-the-controller-database-file)

This tab enables users to download the Controller database file. This file includes Services, Servers, Templates, Failover Groups and Users and indicates the backup of the Controller database at the time stamped date.

1. [Display backup options](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-backup-mediakind-database-options).
2. Select the **Download File** tab to download the Controller database file.
3. Select **Local Backup** to download the locally backed up database.

Downloading remote backups is not currently available.

4. Use the **Year/Month/Backup** drop down lists to select the backup instances to download, as follows:

 1. From the **Year** drop down list, select the year when the required backup was created.
 2. From the **Month** drop down list, select the month when the required backup was created.
 3. From the **Backup** drop down list, select the required backup which includes the time stamp with the time and date. ![view download file db remote mfvp controller](https://docs.mediakind.com/_astro/view_download_file_db_remote_mfvp_controller.CeUDwz36_Z1JFW8b.webp)
5. Click **Download Now** to begin downloading the file locally.

6. Click **Save and exit** to save your changes.

## Restore configurations

[Section titled “Restore configurations”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#restore-configurations)

Restore configurations for recovery or troubleshooting. You must have already created a local or remote backup in order to restore. Backups are selected based on the backup time stamp.

The Database is inaccessible until the restore completes. Only one restore can be launched at a time. Alarms and statistical data are not restored because they are dynamic. The alarms banner is not displayed until the restore completes.

### Display restore options

[Section titled “Display restore options”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-restore-options)

You can restore the MediaKind database configuration from existing local or remote backups.

1. Click ![Gear][base64-image] in the upper-right corner of the screen. The **System Center** menu displays.
2. Select **Restore**. The Restore Controller Database page displays.

### Restore configurations from a remote backup

[Section titled “Restore configurations from a remote backup”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#restore-configurations-from-a-remote-backup)

1. [Display restore options](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-restore-options).
2. Select **Remote Backup**.
3. Select a **Year** > **Month** > **Backup**.

Available backups are time-stamped. Be aware of backup guard time configurations to ensure availability.

![view restore mfvp controller](https://docs.mediakind.com/_astro/view_restore_mfvp_controller.DfcrvKo7_aCOac.webp)

4. Click **Restore**. The Controller is unavailable to all users until the restore completes.

### Restore configurations from a local backup

[Section titled “Restore configurations from a local backup”](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#restore-configurations-from-a-local-backup)

1. [Display restore options](https://docs.mediakind.com/beam/system-admin/maintenance/backup-restore/#display-restore-options). **Local Backup** is selected by default.

 ![view restore mfvp controller](https://docs.mediakind.com/_astro/view_restore_mfvp_controller.DfcrvKo7_aCOac.webp)

2. Expand the **Backup** drop-down list to display available backups, then select a backup to restore.

Available backups are time-stamped. Be aware of backup guard time configurations to ensure availability.

3. Click **Restore**. All users are temporarily assigned to the [Monitoring user group](https://docs.mediakind.com/beam/system-admin/security/user-management#user-group-permissions) until the restore completes or is terminated.