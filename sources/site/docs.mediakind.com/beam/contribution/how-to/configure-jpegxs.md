# Source: https://docs.mediakind.com/beam/contribution/how-to/configure-jpegxs

# JPEG-XS with Jumbo Frames

Jumbo frames are Ethernet frames with a payload larger than the standard 1500 bytes. Using them can improve network performance for high-bitrate streams like JPEG-XS by reducing packet header overhead. They are recommended for JPEG-XS services at bitrates of 300 Mbps and higher.

To use jumbo frames, you must configure them on your Beam device’s network interfaces and in the Live Encoder service.

Jumbo frames only work if all devices on the network path, including switches and routers, are also configured to support them.

## Configure Jumbo Frames on Network Interfaces

[Section titled “Configure Jumbo Frames on Network Interfaces”](https://docs.mediakind.com/beam/contribution/how-to/configure-jpegxs/#configure-jumbo-frames-on-network-interfaces)

To use jumbo frames for a JPEG-XS stream, you must first enable them on the network interfaces of your Beam device by setting a higher Maximum Transmission Unit (MTU).

See [Configure Jumbo Frames for instructions](https://docs.mediakind.com/beam/system-admin/network/jumbo-frames).

## Enable Jumbo Frames in the Live Encoder Service

[Section titled “Enable Jumbo Frames in the Live Encoder Service”](https://docs.mediakind.com/beam/contribution/how-to/configure-jpegxs/#enable-jumbo-frames-in-the-live-encoder-service)

After configuring the network interfaces, enable jumbo frames for the specific Live Encoder service.

1. In the **Live Encoder** service configuration, go to the **Input** tab and ensure the **Contribution encoding service** checkbox is checked.
2. Under the **Encoding** tab, ensure the codec is set to **JPEG XS 4:2:2** or **JPEG XS 4:2:2 10 bits**.
3. In the output properties under the **Output** tab, check the **Ensure Large Frames** checkbox.

Secure Reliable Transport (SRT) does not support jumbo frames. If you are using JPEG-XS with SRT, do not enable jumbo frames in the Live Encoder or on the network interfaces.

Jumbo frames are enabled by default in the Live Encoder configuration if the bitrate is higher than 1 Mbit/s.