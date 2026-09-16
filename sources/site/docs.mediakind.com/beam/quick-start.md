# Source: https://docs.mediakind.com/beam/quick-start

# Quick start

Default credentials differ by purchase type:

- **MK.IO Beam hardware purchased from MediaKind:** credentials are on the paper _Quick Start Guide_ supplied with the hardware.
- **SW Only:** credentials are in the email from SWSupply with a subject containing “Your recent MK.IO Beam purchase…”.

Change the default password after your first login. Select the user icon in the upper right corner of the device UI and choose **Change password**.

Complete the following steps to configure and register your MK.IO Beam device.

### Install the ISO

[Section titled “Install the ISO”](https://docs.mediakind.com/beam/quick-start/#install-the-iso)

This step is required for SW Only customers only. The ISO is pre-installed on MK.IO Beam hardware purchased from MediaKind.

See [Install the ISO](https://docs.mediakind.com/beam/system-admin/iso-installation).

### Set control IP address

[Section titled “Set control IP address”](https://docs.mediakind.com/beam/quick-start/#set-control-ip-address)

This step is only required if the device has not obtained a DHCP address. The IP address displays on the terminal when a monitor and keyboard are attached. Press Return if needed to clear the screen.

1. Log in to the terminal with the default credentials.
2. Type `control-wizard` and press Enter to configure the _Control_ interface. You can also configure an HTTP proxy here if one is needed to reach MK.IO.

### Connect to the web user interface

[Section titled “Connect to the web user interface”](https://docs.mediakind.com/beam/quick-start/#connect-to-the-web-user-interface)

1. In a web browser, go to `http://<Control-IP-Address>`, where `<Control-IP-Address>` is the control IP address set in the previous step.
2. Enter the default **username** and **password** on the login page.

The **Home** page displays.

### Configure the network

[Section titled “Configure the network”](https://docs.mediakind.com/beam/quick-start/#configure-the-network)

See [Network Configuration](https://docs.mediakind.com/beam/system-admin/network/configure-nics).

Set at least one DNS server. DNS is required for connection to MK.IO unless you have configured an HTTP proxy.

For the MK.IO connection requirements and device-management guides, see [Connect MK.IO Beam to MK.IO](https://docs.mediakind.com/beam/connect-to-mkio).

### Configure and activate time synchronization

[Section titled “Configure and activate time synchronization”](https://docs.mediakind.com/beam/quick-start/#configure-and-activate-time-synchronization)

See [How to configure the system clock](https://docs.mediakind.com/beam/system-admin/network/system-clock).

Configure a time source and make it active.

### Register the MK.IO Beam device with MK.IO

[Section titled “Register the MK.IO Beam device with MK.IO”](https://docs.mediakind.com/beam/quick-start/#register-the-mkio-beam-device-with-mkio)

See [device onboarding](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/on-board-fleet-devices).

Registration status persists over an upgrade but does not persist if the device is re-imaged.

### Upgrade to the latest software version

[Section titled “Upgrade to the latest software version”](https://docs.mediakind.com/beam/quick-start/#upgrade-to-the-latest-software-version)

See [updating device software](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/update-device-software).