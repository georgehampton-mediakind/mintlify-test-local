# Source: https://docs.mediakind.com/beam/system-admin/iso-installation/raid-configuration

# RAID and FakeRAID configuration

This page covers the disk RAID configurations supported for the MK.IO Beam system drive.

**RAID vs FakeRAID:** With hardware RAID, the controller assembles the array itself and presents it to the OS as a single ordinary disk (`/dev/sdX`). With FakeRAID, the controller only stores RAID metadata; the OS assembles the array in software, and it appears as `/dev/mdX` with the member disks still visible separately. Check the controller model in the server’s RAID/BIOS utility or management console (for example, iDRAC) to determine which type is in use.

**Sector size:** From MK.IO Beam 1.14.0, the system drive may use either a 512-byte or a 4Kn (4096-byte) sector size. On earlier releases it must be 512 bytes: installation onto a 4Kn drive fails when the installer mounts the boot partition.

## Hardware RAID

[Section titled “Hardware RAID”](https://docs.mediakind.com/beam/system-admin/iso-installation/raid-configuration/#hardware-raid)

Hardware RAID has always been supported for the MK.IO Beam system drive. Before 1.14.0 the virtual disk must be created with a 512-byte block size; from 1.14.0 a 4096-byte block size is also supported. Controllers often default to 4096, so check the block size when creating the virtual disk if the server is running an earlier release.

## FakeRAID

[Section titled “FakeRAID”](https://docs.mediakind.com/beam/system-admin/iso-installation/raid-configuration/#fakeraid)

From MK.IO Beam 1.14.0, FakeRAID is supported for the system drive. The following settings are required:

| Setting | Value |
| --- | --- |
| Sector size | 512 or 4096 |
| OS | RHEL |
| RAID Type | Linux RAID |
| RAID Level | RAID 1 |