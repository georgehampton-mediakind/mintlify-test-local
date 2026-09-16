# Source: https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces

# Configure VLAN Interfaces

VLANs (Virtual LANs) allow you to segment your network by isolating traffic into different broadcast domains on the same physical network infrastructure.

You can add and delete VLAN interfaces on your Beam device from the web UI or the command line.

Configuring VLANs from the UI is available in Beam 1.9 and later.

## Configure VLANs using the UI

[Section titled “Configure VLANs using the UI”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#configure-vlans-using-the-ui)

You can add, edit, and delete VLAN interfaces from the **System Settings** page. To rename an interface or change its VLAN ID or parent interface, you must add a new interface and delete the old one.

### Add a VLAN interface

[Section titled “Add a VLAN interface”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#add-a-vlan-interface)

1. Go to **Servers**, select a server, and open the **System Settings** tab.
2. In the **Network devices** section, click **\+ Add VLAN interface**.
3. In the **Add VLAN Interface** dialog, select the **Parent Interface** and enter the **VLAN ID**.
4. Click **Add VLAN interface**. The new interface appears in the list.
5. Configure its settings, such as IP address and firewall zone. See [Configure network interfaces](https://docs.mediakind.com/beam/system-admin/network/configure-nics) for details.
6. Click **Save** at the bottom of the page to apply the changes.

The new interface is automatically named in the format `<parent_interface>.<vlan_id>`, for example, `eth1.100`.

### Delete a VLAN interface

[Section titled “Delete a VLAN interface”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#delete-a-vlan-interface)

1. Go to **Servers**, select a server, and open the **System Settings** tab.
2. In the **Network devices** section, find the VLAN interface you want to remove and click its **Delete** ![Delete][base64-image] button.
3. In the confirmation dialog, click **Yes, delete it!**.
4. Click **Save** at the bottom of the page to apply the change.

## Configure VLANs using the command line

[Section titled “Configure VLANs using the command line”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#configure-vlans-using-the-command-line)

To manage VLANs from the command line, use the `nmcli` tool. Run these commands using SSH or directly on the device terminal.

### Add a VLAN interface

[Section titled “Add a VLAN interface”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#add-a-vlan-interface-1)

### Create the VLAN interface

[Section titled “Create the VLAN interface”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#create-the-vlan-interface)

Create the VLAN interface with the `nmcli connection add` command. You must specify a connection name, an interface name, the VLAN ID, and the parent physical device.

- `con-name`: A descriptive name for the connection, for example `vlan10`.
- `ifname`: The name for the new VLAN interface, for example `eth0.10`.
- `id`: The VLAN tag number, for example `10`.
- `dev`: The parent physical interface, for example `eth0`.

This example creates a VLAN with ID 10 on the `eth0` interface:

Terminal window

```
sudo nmcli connection add type vlan con-name vlan10 ifname eth0.10 id 10 dev eth0
```

### Configure the IP address

[Section titled “Configure the IP address”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#configure-the-ip-address)

After creating the interface, configure its IP address. You can use DHCP or assign a static IP.

- **To use DHCP:**

 Terminal window

    ```
    sudo nmcli connection modify vlan10 ipv4.method auto
    ```

- **To assign a static IP address:**

 Terminal window

    ```
    sudo nmcli connection modify vlan10 ipv4.addresses 192.168.10.50/24 ipv4.gateway 192.168.10.1 ipv4.method manual
    ```

### Configure the firewall zone

[Section titled “Configure the firewall zone”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#configure-the-firewall-zone)

Assign the VLAN to a firewall zone based on its purpose.

- For a VLAN on a management port, set the zone to `control`:

 Terminal window

    ```
    sudo nmcli connection modify vlan10 connection.zone control
    ```

- For a VLAN on a data port, set the zone to `data`:

 Terminal window

    ```
    sudo nmcli connection modify vlan10 connection.zone data
    ```

### Activate the interface

[Section titled “Activate the interface”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#activate-the-interface)

Activate the new VLAN connection to apply the configuration.

Terminal window

```
sudo nmcli connection up vlan10
```

### Delete a VLAN interface

[Section titled “Delete a VLAN interface”](https://docs.mediakind.com/beam/system-admin/network/vlan-interfaces/#delete-a-vlan-interface-1)

To remove a VLAN interface, delete its `nmcli` connection. This action removes the VLAN interface and its configuration.

Terminal window

```
sudo nmcli connection delete vlan10
```