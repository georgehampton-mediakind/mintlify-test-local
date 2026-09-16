# Source: https://docs.mediakind.com/api-reference/fleets-api

# Fleets API

[Download OpenAPI spec](https://docs.mediakind.com/openapi/beam/fleets-api.json)

Base URL `https://app.mk.io` v1.2.7 19 endpoints OpenAPI 3.0.2

## Overview

The MK.IO Fleet API is the project-level REST API for MK.IO Beam device fleet operations. It supports device administration use cases, including inventory management, backup lifecycle operations, restore actions, service updates, and software tracking.

## Authentication

All endpoints require a bearer token in the `Authorization` header: `Authorization: Bearer <your_token>`

You can create and manage your tokens in your [profile settings](https://app.mk.io/user/profile) under **Your personal API tokens**. Follow the [API tokens guide](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens) for more information.

## Usage

Base URL: `https://app.mk.io`

Typical usage pattern:

- List devices and fleet state.
- Create, upload, or retrieve backups.
- Run restore and software operations.

## Endpoints

[Devices 19 endpoints](https://docs.mediakind.com/api-reference/fleets-api/devices)

[get Get all backups for a project /api/v1/projects/{project\_name}/fleet/backups](https://docs.mediakind.com/api-reference/fleets-api/devices/get-all-backups-for-a-project) [get Get backup details /api/v1/projects/{project\_name}/fleet/backups/{backup\_id}](https://docs.mediakind.com/api-reference/fleets-api/devices/get-backup-details) [patch Rename device backup /api/v1/projects/{project\_name}/fleet/backups/{backup\_id}](https://docs.mediakind.com/api-reference/fleets-api/devices/rename-device-backup) [del Delete device backup /api/v1/projects/{project\_name}/fleet/backups/{backup\_id}](https://docs.mediakind.com/api-reference/fleets-api/devices/delete-device-backup) [get Get device backup /api/v1/projects/{project\_name}/fleet/backups/{backup\_id}/config](https://docs.mediakind.com/api-reference/fleets-api/devices/get-device-backup) [get List Devices /api/v1/projects/{project\_name}/fleet/devices](https://docs.mediakind.com/api-reference/fleets-api/devices/list-devices) [get Get Device /api/v1/projects/{project\_name}/fleet/devices/{name}](https://docs.mediakind.com/api-reference/fleets-api/devices/get-device) [put Create Device /api/v1/projects/{project\_name}/fleet/devices/{name}](https://docs.mediakind.com/api-reference/fleets-api/devices/create-device) [patch Update Device /api/v1/projects/{project\_name}/fleet/devices/{name}](https://docs.mediakind.com/api-reference/fleets-api/devices/update-device) [del Delete Device /api/v1/projects/{project\_name}/fleet/devices/{name}](https://docs.mediakind.com/api-reference/fleets-api/devices/delete-device) [post Create device backup /api/v1/projects/{project\_name}/fleet/devices/{name}/backup](https://docs.mediakind.com/api-reference/fleets-api/devices/create-device-backup) [post Remove selected services from device /api/v1/projects/{project\_name}/fleet/devices/{name}/removeServices](https://docs.mediakind.com/api-reference/fleets-api/devices/remove-selected-services-from-device) [post Restore device backup /api/v1/projects/{project\_name}/fleet/devices/{name}/restore](https://docs.mediakind.com/api-reference/fleets-api/devices/restore-device-backup) [get List Devices /api/v1/projects/{project\_name}/fleet/devices/{name}/software](https://docs.mediakind.com/api-reference/fleets-api/devices/list-devices-get) [get List support packages for a device /api/v1/projects/{project\_name}/fleet/devices/{name}/supportPackages](https://docs.mediakind.com/api-reference/fleets-api/devices/list-support-packages-for-a-device) [post Trigger support package creation on a device /api/v1/projects/{project\_name}/fleet/devices/{name}/supportPackages](https://docs.mediakind.com/api-reference/fleets-api/devices/trigger-support-package-creation-on-a-device) [get Download a support package /api/v1/projects/{project\_name}/fleet/devices/{name}/supportPackages/{package\_name}](https://docs.mediakind.com/api-reference/fleets-api/devices/download-a-support-package) [del Delete a support package /api/v1/projects/{project\_name}/fleet/devices/{name}/supportPackages/{package\_name}](https://docs.mediakind.com/api-reference/fleets-api/devices/delete-a-support-package) [post Upload/override a backup tar.gz and generate metadata /api/v1/projects/{project\_name}/fleet/uploadBackup](https://docs.mediakind.com/api-reference/fleets-api/devices/upload-override-a-backup-tar-gz-and-generate-metadata)