# Source: https://docs.mediakind.com/beam/system-admin/iso-installation

# How to install the MK.IO Beam ISO

This step is only required for servers which have not been purchased from MediaKind.

If the MK.IO Beam server and software are purchased separately, the MK.IO Beam software will need to be installed on the server. The MK.IO Beam software is distributed in the form of an ISO image.

### BIOS configuration

[Section titled “BIOS configuration”](https://docs.mediakind.com/beam/system-admin/iso-installation/#bios-configuration)

**Note:** Enabling **High Performance** mode in the BIOS is recommended.

If the system drive uses hardware RAID or FakeRAID, see [RAID and FakeRAID configuration](https://docs.mediakind.com/beam/system-admin/iso-installation/raid-configuration) for supported configurations before continuing.

Review the following settings in the BIOS.

- Secure boot should be disabled.
- TPM support should be disabled.
- The Real Time Clock (RTC) should be set to the correct time and date.

#### ASI/SDI PCIe card support

[Section titled “ASI/SDI PCIe card support”](https://docs.mediakind.com/beam/system-admin/iso-installation/#asisdi-pcie-card-support)

If compatibility with 4-port or 8-port Dektec ASI/SDI option cards is required, then the **PCIe Data Link Feature Exchange** option must be disabled. This must be done before installing any 4-port or 8-port Dektec ASI/SDI option cards into the server.

Installing a 4- or 8-port Dektec ASI/SDI in a server before checking and changing the following settings could prevent the server from booting up.

- If supplied, install the MK Custom BIOS Firmware.
- Boot into the BIOS.
- Check for the **PCIe Data Link Feature Exchange** or **DLFE** setting and disable it. 
 If this setting does not exist and the server will not boot with a Dektec card installed, note the server make, model and BIOS version and contact MediaKind Support.

### Boot configuration

[Section titled “Boot configuration”](https://docs.mediakind.com/beam/system-admin/iso-installation/#boot-configuration)

#### Create a bootable USB drive

[Section titled “Create a bootable USB drive”](https://docs.mediakind.com/beam/system-admin/iso-installation/#create-a-bootable-usb-drive)

The USB drive must be at least 16GB. There are several methods for writing ISO files to USB drives. The following procedure describes the process using the free tool, [Rufus](https://rufus.ie/en/) in Microsoft Windows:

1. Download and install the Rufus tool
2. Run Rufus and connect the target USB drive to the Windows PC
3. Check that the USB drive is detected and shown in the user interface: ![ISO install USB 000](https://docs.mediakind.com/beam-img/ISO-install-USB-000.png)
4. Click the Select button and browse to the ISO file: ![ISO install USB 001](https://docs.mediakind.com/beam-img/ISO-install-USB-001.png)
5. Leave all configuration settings at their defaults and click the Start button: ![ISO install USB 002](https://docs.mediakind.com/beam-img/ISO-install-USB-002.png)
6. When prompted about ISOHybrid image, leave the default ISO Image mode set and click OK: ![ISO install USB 003](https://docs.mediakind.com/beam-img/ISO-install-USB-003.png)
7. If prompted to download the Syslinux installation files, click Yes: ![ISO install USB 004](https://docs.mediakind.com/beam-img/ISO-install-USB-004.png)
8. Check that the correct USB drive is being written to and click OK: ![ISO install USB 005](https://docs.mediakind.com/beam-img/ISO-install-USB-005.png)
9. When the ISO file has been written to the USB drive, Rufus will change the status to READY: ![ISO install USB 006](https://docs.mediakind.com/beam-img/ISO-install-USB-006.png)
10. Click Close and remove the USB drive from the computer: ![ISO install USB 007](https://docs.mediakind.com/beam-img/ISO-install-USB-007.png)

The USB drive is now ready to use to install MK.IO Beam.

#### Boot from the USB drive

[Section titled “Boot from the USB drive”](https://docs.mediakind.com/beam/system-admin/iso-installation/#boot-from-the-usb-drive)

- Insert the bootable USB drive with the MK ISO into a USB port on the server.
- Boot to the One Time Boot Menu or into the BIOS to configure the server to boot from the USB drive. The exact steps for this will vary between different types of server. Refer to the server manufacturer’s documentation for more information.

### ISO installation

[Section titled “ISO installation”](https://docs.mediakind.com/beam/system-admin/iso-installation/#iso-installation)

1. When first booting to the MK.IO Beam ISO, you will see a screen which shows two options, **Start MediaKind Field Service 2.x** and **Troubleshooting**. Select **Start MediaKind Field Service 2.x** and press the Return key. ![ISO install 001](https://docs.mediakind.com/beam-img/ISO-install-001.png)

2. A dialog will be shown stating that no existing configuration has been found. Wait for 5 seconds and the installation will continue. ![ISO install 002](https://docs.mediakind.com/beam-img/ISO-install-002.png)

3. When prompted to install the bundle, click **OK** to continue the installation: ![ISO install 003](https://docs.mediakind.com/beam-img/ISO-install-003.png)

4. A progress screen will be shown. This process can take 20 minutes or more depending on the speed of the USB drive. ![ISO install 004](https://docs.mediakind.com/beam-img/ISO-install-004.png) The progress bar may not change for several minutes, this is normal.

5. Once the install process has completed, the server will reboot: ![ISO install 005](https://docs.mediakind.com/beam-img/ISO-install-005.png)

6. The MediaKind Boot Manager will start: ![ISO install 006](https://docs.mediakind.com/beam-img/ISO-install-006.png)

7. Then the AlmaLinux boot screen will be displayed: ![ISO install 007](https://docs.mediakind.com/beam-img/ISO-install-007.png)

8. When prompted to login, MK.IO Beam is installed on the server.