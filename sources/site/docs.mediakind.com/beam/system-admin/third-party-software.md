# Source: https://docs.mediakind.com/beam/system-admin/third-party-software

# Third-party software

## Overview

[Section titled “Overview”](https://docs.mediakind.com/beam/system-admin/third-party-software/#overview)

This capability is only supported for drivers and software pre-approved by Mediakind.

Beam is designed and operated as an appliance. Changes made directly to the underlying OS installation are not preserved across software upgrades — when Beam is upgraded and the system is restored, the OS is returned to its baseline state.

Beam 1.10 introduces a dedicated persistent volume mounted at `/opt/third_party`. This volume is not touched during upgrades, so anything placed there survives across software updates. It follows a traditional application layout:

| Directory | Purpose |
| --- | --- |
| `bin/` | Executables |
| `lib/` | Libraries |
| `etc/` | Configuration files |
| `install/` | Hooks for modifying other parts of the system on restore |

For most use cases, placing software into `bin/`, `lib/`, and `etc/` is sufficient. The `install/` subdirectory is only needed when changes must be made to other parts of the system (such as installing RPM packages into the OS or importing container images into k3s) each time the system is restored after an upgrade.

## System hooks (`install/`)

[Section titled “System hooks (install/)”](https://docs.mediakind.com/beam/system-admin/third-party-software/#system-hooks-install)

Files placed under `/opt/third_party/install` are processed automatically each time the system is restored after an upgrade. Place files in the appropriate subdirectory:

### `images/`

[Section titled “images/”](https://docs.mediakind.com/beam/system-admin/third-party-software/#images)

Container image archives (`.tar` files) to be imported into k3s. All `.tar` files found in this directory are imported during restore using:

Terminal window

```
/usr/local/bin/k3s ctr image import --digests <file>.tar
```

### `rpms/`

[Section titled “rpms/”](https://docs.mediakind.com/beam/system-admin/third-party-software/#rpms)

RPM packages (`.rpm` files) to be installed during restore, before k3s starts. A typical use case is NIC drivers not included in the standard Linux kernel. RPMs may be placed directly in `rpms/` to apply on all OS versions, or in a version-specific subdirectory to target a particular OS major release:

| Directory | Applied on |
| --- | --- |
| `rpms/el8/` | Enterprise Linux 8 (e.g. AlmaLinux 8) |
| `rpms/el10/` | Enterprise Linux 10 (e.g. AlmaLinux 10) |

RPMs from both `rpms/` and the matching `el#/` subdirectory are installed in the same invocation. The appropriate `el#/` subdirectory is created automatically during restore if it does not already exist.

### `scripts_early/`

[Section titled “scripts\_early/”](https://docs.mediakind.com/beam/system-admin/third-party-software/#scripts_early)

Shell scripts executed during early restore, before k3s starts. Scripts are discovered by name (`*.sh`), must be executable, and are run in descending numeric sort order (for example, `20_foo.sh` runs before `10_bar.sh`).

### `scripts_k3s/`

[Section titled “scripts\_k3s/”](https://docs.mediakind.com/beam/system-admin/third-party-software/#scripts_k3s)

Shell scripts executed during k3s configuration restore, after container images have been imported. The same discovery and ordering rules apply as for `scripts_early/`.

### `data/`

[Section titled “data/”](https://docs.mediakind.com/beam/system-admin/third-party-software/#data)

Supporting data files for use by scripts. Nothing in this directory is executed or installed automatically. Scripts may reference files here using the full path, for example `/opt/third_party/install/data/<filename>`.

## Script requirements

[Section titled “Script requirements”](https://docs.mediakind.com/beam/system-admin/third-party-software/#script-requirements)

Scripts placed in `scripts_early/` or `scripts_k3s/` must meet the following requirements:

**Executable permission** — Scripts must have the executable bit set before they will be run:

Terminal window

```
chmod +x myscript.sh
```

**Shebang** — Scripts must begin with a valid interpreter line, for example:

```
#!/bin/bash
```

**Idempotent** — The restore process runs on the first boot after a software upgrade. If the unit reboots part-way through an upgrade (for example to upgrade device firmware), the restore runs again from the beginning. Scripts must not fail or produce unintended side effects when run more than once.

All scripts are executed with root privileges. A faulty script can leave the system in an unbootable state. Ensure all scripts are reviewed and tested before deployment.