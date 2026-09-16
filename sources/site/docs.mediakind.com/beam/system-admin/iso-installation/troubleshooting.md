# Source: https://docs.mediakind.com/beam/system-admin/iso-installation/troubleshooting

# Troubleshooting the ISO installation

## If the installation stops and this message is displayed:

[Section titled “If the installation stops and this message is displayed:”](https://docs.mediakind.com/beam/system-admin/iso-installation/troubleshooting/#if-the-installation-stops-and-this-message-is-displayed)

![ISO install 008](https://docs.mediakind.com/beam-img/ISO-install-008.png)

- Check the MD5 of the ISO file against the supplied MD5 checksum. 
 There are several ways to verify MD5 checksums. Please check online for a suitable method for your operating system.
- Check host compatibility 
 Contact MediaKind to confirm that your hardware is supported by MK.IO Beam

## If ISO installation fails with Chassis configuration issues relating to “RTC date/time not valid”:

[Section titled “If ISO installation fails with Chassis configuration issues relating to “RTC date/time not valid”:”](https://docs.mediakind.com/beam/system-admin/iso-installation/troubleshooting/#if-iso-installation-fails-with-chassis-configuration-issues-relating-to-rtc-datetime-not-valid)

- Check the BIOS and ensure the Real Time Clock (RTC) is set to the correct time and date.

## If ISO installation succeeds but the server fails to boot to Beam software:

[Section titled “If ISO installation succeeds but the server fails to boot to Beam software:”](https://docs.mediakind.com/beam/system-admin/iso-installation/troubleshooting/#if-iso-installation-succeeds-but-the-server-fails-to-boot-to-beam-software)

- Check Secure boot is disabled.
- Check TPM support is disabled. 
 Beam software uses a custom bootloader, and this requires the above BIOS options to be set.