# Source: https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces

# Configure Bonded Network Interfaces

You can configure bonded network interfaces for redundancy from the command line. The following instructions show how to create an active-backup bond, which keeps one interface active and the other as a passive backup. If the active interface fails, the backup interface takes over automatically.

The example commands use the two 1G onboard NICs available on the E50 and E60 servers (`eno8303` and `eno8403`), and assume that the `eno8303` interface is already configured and working as the management interface.

Run these commands using SSH or directly on the terminal.

### Create the bond interface

[Section titled “Create the bond interface”](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces/#create-the-bond-interface)

In this example, `bond0` is the name of the bond interface being created.

Terminal window

```
sudo nmcli connection add type bond con-name bond0 ifname bond0 bond.options "mode=active-backup"
```

### Add the slave interfaces

[Section titled “Add the slave interfaces”](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces/#add-the-slave-interfaces)

In this example, `eno8303` and `eno8403` are added as slave interfaces.

Terminal window

```
sudo nmcli connection add type ethernet slave-type bond con-name bond0-eno8303 ifname eno8303 master bond0
sudo nmcli connection add type ethernet slave-type bond con-name bond0-eno8403 ifname eno8403 master bond0
```

### Configure the IP address of the bond interface

[Section titled “Configure the IP address of the bond interface”](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces/#configure-the-ip-address-of-the-bond-interface)

The bond interface IP address can be allocated via DHCP or assigned statically.

- To use DHCP:

 Terminal window

    ```
    sudo nmcli connection modify bond0 ipv4.method auto
    ```

- To assign a static IP address, use the values currently assigned to `eno8303`. For example:

 Terminal window

    ```
    sudo nmcli connection modify bond0 ipv4.addresses 192.168.1.42/24 ipv4.gateway 192.168.1.1 ipv4.dns "192.168.1.99,192.168.1.98" ipv4.method manual
    ```

### Activate the bond interface

[Section titled “Activate the bond interface”](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces/#activate-the-bond-interface)

Terminal window

```
sudo nmcli connection down eno8403 && sudo nmcli connection down eno8303 && sudo nmcli connection up bond0
```

### Disable the non-slave connections

[Section titled “Disable the non-slave connections”](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces/#disable-the-non-slave-connections)

Disabling non-slave connections prevents them from conflicting with the bond at reboot or after an upgrade.

Terminal window

```
sudo nmcli connection modify eno8403 ipv4.method "disabled" ipv6.method "disabled" connection.autoconnect no
sudo nmcli connection modify eno8303 ipv4.method "disabled" ipv6.method "disabled" connection.autoconnect no
```

### Configure the firewall

[Section titled “Configure the firewall”](https://docs.mediakind.com/beam/system-admin/network/bonded-interfaces/#configure-the-firewall)

Firewall zone for bonded interfaces can be set on the UI in Beam 1.9 and later. See [Configure network interfaces](https://docs.mediakind.com/beam/system-admin/network/configure-nics).

- For bonded management ports, set the firewall zone to `control`:

 Terminal window

    ```
    sudo nmcli connection modify bond0 connection.zone control && sudo nmcli connection up bond0
    ```

- For bonded data ports, set the firewall zone to `data`:

 Terminal window

    ```
    sudo nmcli connection modify bond0 connection.zone data && sudo nmcli connection up bond0
    ```

The bonded network interface configuration persists on reboot and upgrade when you follow the instructions above.

Rebooting after configuration is recommended to confirm that networking continues to function after a reboot or power failure.