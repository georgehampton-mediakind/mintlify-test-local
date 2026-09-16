# Source: https://docs.mediakind.com/beam/system-admin/network/jumbo-frames

# Configure Jumbo Frames

Jumbo frames are Ethernet frames with a payload larger than the standard 1500 bytes. Using jumbo frames can improve network performance for high-bitrate video streams by reducing the overhead of packet headers. A common jumbo frame size is 9000 bytes.

To use jumbo frames, you must set the Maximum Transmission Unit (MTU) on the network interfaces of your Beam device. You can configure the MTU using the web UI or the command line.

Jumbo frames only work if all devices on the network path, including switches and routers, are configured to support them.

## Configure MTU using the UI

[Section titled “Configure MTU using the UI”](https://docs.mediakind.com/beam/system-admin/network/jumbo-frames/#configure-mtu-using-the-ui)

Editing MTU on the UI is available in Beam 1.9 and later.

You can set the MTU for a network interface from the **System Settings** page.

1. Navigate to **Servers**, select a server, and go to the **System Settings** tab.
2. In the **Network devices** section, click the **Edit** ![Edit][base64-image] button for the interface you want to configure.
3. In the **Edit Network Device** dialog, enter the desired MTU value (e.g., `9000`) in the **MTU** field.
4. Click **Confirm**.
5. Click **Save** at the bottom of the **System Settings** page to apply the changes.

## Configure MTU using the command line

[Section titled “Configure MTU using the command line”](https://docs.mediakind.com/beam/system-admin/network/jumbo-frames/#configure-mtu-using-the-command-line)

To set the MTU from the command line, run the following `nmcli` command. Replace `ens259f2` with the name of the interface you are configuring.

Terminal window

```
sudo nmcli connection modify ens259f2 802-3-ethernet.mtu 9000
```