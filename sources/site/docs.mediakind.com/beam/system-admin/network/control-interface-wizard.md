# Source: https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard

# Control Interface Wizard

# Control Interface Wizard (`control-wizard`)

[Section titled “Control Interface Wizard (control-wizard)”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#control-interface-wizard-control-wizard)

The `control-wizard` is a command-line tool for network configuration on a Beam device. It provides a text-based wizard to configure the primary _Control_ interface, set up an HTTP proxy, and diagnose connectivity issues.

This tool is especially useful during the initial setup of a device before the web UI is accessible, or for troubleshooting network problems directly from the terminal.

## Aliases

[Section titled “Aliases”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#aliases)

For convenience, you can use shorter commands:

- `cw` is an alias for `control-wizard`.
- `cs` is an alias for `control-wizard --status`, which runs the wizard in a read-only monitoring mode.

## When to use the wizard

[Section titled “When to use the wizard”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#when-to-use-the-wizard)

You can use the `control-wizard` to:

- Set the IP address for the _Control_ interface during initial device setup.
- Configure an HTTP proxy if one is required to connect to MK.IO.
- Diagnose network connectivity problems from the terminal.
- View a real-time display of network interface status.

## Configure the Control IP Address

[Section titled “Configure the Control IP Address”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#configure-the-control-ip-address)

During the initial quick start, if the device has not obtained an IP address via DHCP, you must use `control-wizard` to set one manually.

1. Log in to the terminal with the default credentials.
2. Type `control-wizard` (or `cw`) and press Enter.
3. Follow the on-screen prompts to configure the IP address, subnet mask, and gateway for the _Control_ interface.

## Configure an HTTP Proxy

[Section titled “Configure an HTTP Proxy”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#configure-an-http-proxy)

If the device requires an HTTP proxy to reach the internet to connect to MK.IO, you can configure it from the wizard.

### Open the proxy configuration

[Section titled “Open the proxy configuration”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#open-the-proxy-configuration)

1. Log in to the device’s terminal.
2. Run the `control-wizard` command.
3. Press **P** to configure a proxy.

### Enter proxy details

[Section titled “Enter proxy details”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#enter-proxy-details)

1. Enter the **Proxy IP Address**, **Port**, **Username**, and **Password** when prompted.
2. Press **Enter** to apply the settings.

### Verify and quit

[Section titled “Verify and quit”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#verify-and-quit)

1. The wizard automatically tests the proxy settings, and the results are displayed on screen.
2. Press **Q** to quit the wizard.

## Diagnose and View Network Status (`cs`)

[Section titled “Diagnose and View Network Status (cs)”](https://docs.mediakind.com/beam/system-admin/network/control-interface-wizard/#diagnose-and-view-network-status-cs)

The `cs` command provides a read-only, real-time view of network status, which is useful for diagnosing connectivity issues and monitoring interface state. It is an alias for `control-wizard --status`.

When you run `cs`, it displays both the connectivity status to the MK.IO API and the state of local network interfaces, including IP addresses and traffic. This is a useful first step when troubleshooting on-boarding issues.

To use the status viewer, type `cs` in the terminal and press Enter.

Running the full `control-wizard` (or `cw`) for configuration also shows the MK.IO API connectivity test on startup.