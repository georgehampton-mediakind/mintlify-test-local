# Source: https://docs.mediakind.com/beam/system-admin/servers/servers

# Manage servers

The **Servers** view displays system information to monitor and manage servers. The statuses indicate server availability: **connected** or **connection lost**.

## Server Status

[Section titled “Server Status”](https://docs.mediakind.com/beam/system-admin/servers/servers/#server-status)

The actions available are dependent on the installation type, server type and the user role.

- Administrators can click the **Delete** ![Delete][base64-image] button to remove a server that is no longer in use in the system.
- You can use the **Reboot** ![Reload][base64-image] button to restart the server by clicking **Yes** at the displayed **Are you sure?** confirmation message.
- Click the **Details** ![View][base64-image] button to display the server information ([Display server information (system)](https://docs.mediakind.com/beam/system-admin/servers/servers/servers#displaying-server-information-system)).
- Click the **Stats** ![Chart][base64-image] button to view server statistics, such as CPU, memory, disk usage, and network statistics.
- Click the **Support package** ![Package][base64-image] button to [generate a support package](https://docs.mediakind.com/beam/system-admin/maintenance/generate-support-package).
- If the connection is lost when the server is in a failover group then check if failover occurred.
- You can also check alarms or alarm history to investigate possible causes.
- You can also check server information for IP configurations.

## Server processing types

[Section titled “Server processing types”](https://docs.mediakind.com/beam/system-admin/servers/servers/#server-processing-types)

Additional processing types are available from the **Servers** page.

| Processing type | Required Software |
| :-- | :-- |
| Controller | Controller provides a centralized configuration and control interface, manages failover for Live Encoder, and offers a flexible licensing management for MediaKind applications. |
| Arbiter | A server which is fulfilling the role of the database arbiter. |

## Display servers

[Section titled “Display servers”](https://docs.mediakind.com/beam/system-admin/servers/servers/#display-servers)

Servers are listed in a table. You can view server settings and usage statistics per server.

1. Click **Servers** from the left-side menu. The table of servers displays.

2. Edit the number of [rows displayed](https://docs.mediakind.com/beam/web-interface/navigation#edit-the-number-of-rows-displayed) or use the [search bar](https://docs.mediakind.com/beam/web-interface/navigation#use-the-search-bar) to filter the display.

## Display server information (system)

[Section titled “Display server information (system)”](https://docs.mediakind.com/beam/system-admin/servers/servers/#display-server-information-system)

Check server functions and performance to manage server and service allocation, or to view license information. System settings and information displays for each server.

1. Click **Servers** on the left-side menu.

2. Click ![View][base64-image] in the **Actions** column to view server information. Information based on the server type displays.

3. Click the tabs to display server information.

 - **General**
 - **System Settings**
 - **Statistics**