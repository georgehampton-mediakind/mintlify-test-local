# Source: https://docs.mediakind.com/beam/receiver/output

# Configure the output

MK.IO Beam can output decoded video, audio and data using one or more of the following transport methods for distribution to other devices:

[SDI Output](https://docs.mediakind.com/beam/receiver/output/sdi)

### SDI Output

Broadcast standard for transmitting uncompressed video, audio, and data over coaxial or fiber cables.

[SMPTE ST 2022-6 Output](https://docs.mediakind.com/beam/receiver/output/smpte-st-2022-6)

### SMPTE ST 2022-6 Output

IP-based standard that encapsulates a complete SDI signal (video, audio, and data) into a single stream.

[SMPTE ST 2110 Output](https://docs.mediakind.com/beam/receiver/output/smpte-st-2110)

### SMPTE ST 2110 Output

Native IP standard that transports video, audio, and data as separate, independent streams.

[Transport Stream Passthrough](https://docs.mediakind.com/beam/receiver/output/ts-passthrough)

### Transport Stream Passthrough

Convert a satellite feed into an IP UDP multicast transport stream and decrypt the content.

## Output Profile selection

[Section titled “Output Profile selection”](https://docs.mediakind.com/beam/receiver/output/#output-profile-selection)

Some output configurations require optimizations to get the best performance. The following **output profiles** are available:

| Output Profile | Receiver Service Type | Other Service Types |
| :-- | :-- | :-- |
| Standard | Recommended for:<br>\- SDI output (all video formats)<br>\- SMPTE ST 2022-6 output (all video formats)<br>\- SMPTE ST 2110 output (SD/HD video formats) | Recommended |
| SMPTE ST 2110 UHD Output | Mandatory for:<br>\- SMPTE ST 2110 output (UHD video formats) | Not recommended |

These **output profiles** are optimized for the _Receiver_ service and support mixed output configurations. For other service types, such as _Live Encoding_, use the **Standard** output profile.

### Service Running Blocked by the Current Output Profile

[Section titled “Service Running Blocked by the Current Output Profile”](https://docs.mediakind.com/beam/receiver/output/#service-running-blocked-by-the-current-output-profile)

In some cases, a _Receiver_ service may be prevented from starting and entering the _Running_ state. In this case, an alarm is raised indicating that the service configuration is not compatible with the selected **output profile**. Refer to the alarm description for guidance on resolving the issue and bringing the service into the _Running_ state.

For example, if the output profile is set to **Standard** and a UHD receiver service is configured for SMPTE ST 2110 output, a **Service blocked** alarm will indicate that **SMPTE ST 2110 UHD Output** is required. While the alarm is active, the service remains in a _Failed_ state and cannot enter the _Running_ state.

## Configure the Output Profile

[Section titled “Configure the Output Profile”](https://docs.mediakind.com/beam/receiver/output/#configure-the-output-profile)

To configure the output profile, follow these steps:

1. Select **Appliance** from the left-hand side menu.

2. Click the **Output Profile** tab.

3. Select the appropriate output profile setting from the **Output profile** drop-down menu

4. Click the **Apply and Reboot** button.

5. A confirmation pop-up window will appear asking, “Are you sure?”

6. Review any warnings or guidance provided. If you are sure, click **Yes, configure and REBOOT!** Otherwise, click **Cancel** to abort.

7. Following the reboot, refresh the web page. The reboot may take a few minutes to complete.