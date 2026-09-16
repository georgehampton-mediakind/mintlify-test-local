# Source: https://docs.mediakind.com/beam/system-admin/network/configure-nics

# Configure network interfaces

You can configure network settings from the **System Settings** tab on the server information page:

1. Go to the **Servers** view.
2. Click the **Details** ![View][base64-image] button to open the server information.
3. Go to the **System Settings** tab.

Changes to network interface configuration can result in the device becoming unreachable.

## Set the hostname

[Section titled “Set the hostname”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#set-the-hostname)

1. Enter the new hostname in the **Hostname** field.
2. Click **Save** at the bottom of the page.

## Set IP addresses, subnet masks, gateway address, DHCP, and firewall zone

[Section titled “Set IP addresses, subnet masks, gateway address, DHCP, and firewall zone”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#set-ip-addresses-subnet-masks-gateway-address-dhcp-and-firewall-zone)

1. Go to the **Network devices** section on the **System Settings** page.
2. Click the **Edit** ![Edit][base64-image] button next to an interface to open its settings.
3. Enable or disable **DHCP**. When DHCP is enabled, the interface IP address and DNS servers are allocated automatically. DHCP-allocated values cannot be edited and are shown for reference only.
4. If DHCP is disabled, enter the IP address and subnet mask in the **Addresses** field using CIDR notation.
5. Optionally, enter the default gateway in the **Gateway** field.
6. Optionally, enter a value in the **Gateway metric** field. Usually this is left blank.
7. Optionally, set the firewall zone in the **Firewall zone** field. Valid values are **control**, **data**, or **control & data (public)**.
8. Click **Confirm**, then click **Save** at the bottom of the page.

While you can configure multiple default gateways, this can cause routing issues and should be done with caution. If you define multiple gateways, ensure the **Control** interface has the lowest gateway metric. In most cases, adding a static route is the recommended way to achieve the desired routing.

## Configure static routes

[Section titled “Configure static routes”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#configure-static-routes)

Configuring static routes and gateway metric is possible in Beam 1.9 and later.

You can add static routes to an interface to direct traffic for specific subnets through a particular gateway. This is often a better alternative to configuring multiple default gateways.

1. In the **Network devices** section, click the **Edit** ![Edit][base64-image] button for the interface you want to configure.
2. In the **Edit Network Device** dialog, in the **Static routes** section:
 - To **add** a route, click **\+ Add route**. Enter the **Destination (CIDR)** and **Gateway**, then click **Add Route**.
 - To **edit** a route, click the **Edit** ![Edit][base64-image] button next to it.
 - To **delete** a route, click the **Delete** ![Delete][base64-image] button next to it.
3. Click **Confirm** in the **Edit Network Device** dialog.
4. Click **Save** at the bottom of the **System Settings** page to apply the changes.

## Set DNS addresses

[Section titled “Set DNS addresses”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#set-dns-addresses)

1. Go to the **DNS** section on the **System Settings** page.
2. Click the **Edit** ![Edit][base64-image] button next to an interface to open its DNS settings.
3. If DHCP is disabled, add at least one DNS server in the **Addresses** field using CIDR notation. DNS servers allocated by DHCP cannot be edited and are shown for reference only.
4. Click **Confirm**, then click **Save** at the bottom of the page.

## Set IGMP version

[Section titled “Set IGMP version”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#set-igmp-version)

1. Go to the **IGMP mode** section on the **System Settings** page.
2. From the drop-down, select **Automatic v2/v3** or **Force v2**.
3. Click **Save** at the bottom of the page.

## Set time synchronization

[Section titled “Set time synchronization”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#set-time-synchronization)

See [Configure System Clock](https://docs.mediakind.com/beam/system-admin/network/system-clock).

## Configure bonded interfaces

[Section titled “Configure bonded interfaces”](https://docs.mediakind.com/beam/system-admin/network/configure-nics/#configure-bonded-interfaces)

To configure active-backup bonded interfaces for redundancy from the command line, see [Configure Bonded Network Interfaces](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces).