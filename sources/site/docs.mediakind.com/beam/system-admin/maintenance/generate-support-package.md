# Source: https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package

# Generate a Support Package

A Support Package contains files that allow MediaKind support to recreate your system configuration for testing and troubleshooting. On MK.IO the same process is called **Collect device logs**.

If the server is managed through MK.IO, you can also generate a Support Package from the MK.IO UI using [Collect device logs](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/support-packages). That flow runs from the cloud, so you do not need direct LAN or VPN access to the server, and it emails you a download link which can be forward to support.

Downloading a Support Package from the **Servers** page is not supported using [Access remote UI](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/access-the-remote-device-ui). To generate a Support Package through MK.IO, use [Collect device logs](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/support-packages).

## Generate a Support Package from the server UI

[Section titled “Generate a Support Package from the server UI”](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package/#generate-a-support-package-from-the-server-ui)

1. Go to **Servers** and select a server.
2. In the **Actions** column, click ![Package][base64-image] to open the **Support Package generation** page.
3. Adjust the selection marks next to the collectors to control what the package contains. By default all collectors run.
4. Click **Generate** to create a new Support Package.
5. Click **Download** to save a copy of the Support Package.

The Support Package Generator creates compressed tar files in the most widely accepted (POSIX-PAX) format.

Open the file with a compliant utility such as 7-Zip (at least v21.07), WinRAR, or Linux `tar`. Other tools may corrupt the filenames.

## Collect a Dell SupportAssist Collection

[Section titled “Collect a Dell SupportAssist Collection”](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package/#collect-a-dell-supportassist-collection)

Generating a Dell SupportAssist Collection with the `collect_dell_support_assist.sh` script is available in Beam 1.9 and later.

A Dell SupportAssist Collection is a hardware diagnostic bundle gathered from the server’s iDRAC. Collect it when you need deeper hardware-level diagnostics than the standard Support Package provides, for example when investigating a suspected hardware fault with Dell or MediaKind support.

In Beam 1.9 and later, the SupportAssist Collection is included automatically in the **Host** collector of the Support Package, so you do not need to run this script separately.

### Generate a Dell SupportAssist Collection

[Section titled “Generate a Dell SupportAssist Collection”](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package/#generate-a-dell-supportassist-collection)

Run the `collect_dell_support_assist.sh` script on the server over SSH, then copy the resulting zip file to your workstation.

### Connect to the server

[Section titled “Connect to the server”](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package/#connect-to-the-server)

Connect to the server over SSH as a user with `sudo` privileges.

### Run the collection script

[Section titled “Run the collection script”](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package/#run-the-collection-script)

Run the script as root. The script clears the iDRAC job queue, accepts the SupportAssist EULA, collects the logs from the iDRAC, and exports them to a zip file. Collection can take several minutes.

Terminal window

```
sudo collect_dell_support_assist.sh
```

The script accepts the following options:

- `--output-file <path>`: output file path. Defaults to `/tmp/dell_supportassist.zip`.
- `-h`, `--help`: display help and exit.

If the export fails, the iDRAC may be in a state where it cannot start new jobs or copy collections; in this case, answer `y` at the interactive prompt, to reset the iDRAC and retry. The reset itself takes a few minutes.

### Copy the collection off the server

[Section titled “Copy the collection off the server”](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package/#copy-the-collection-off-the-server)

From your workstation, use `scp` to copy the zip file off the server:

Terminal window

```
scp mfeng@<server-ip>:/tmp/dell_supportassist.zip .
```

Adjust the source path if you used `--output-file`. You can then attach the zip file to your support case.