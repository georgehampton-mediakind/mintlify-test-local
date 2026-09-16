# Source: https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events

# Manage alarms and events

## Alarm icons and alarm state descriptions

[Section titled “Alarm icons and alarm state descriptions”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#alarm-icons-and-alarm-state-descriptions)

Alarm icons use a color code to indicate levels of severity. Alarms may trigger different automatic system responses, like failover. Certain intended, manual actions may trigger a notification event, like when you manually start or stop a service.

Color codes for alarm and event states:

- Alarms

 - ![Alarm red][base64-image] critical
 - ![Alarm yellow][base64-image] major
 - ![Alarm green][base64-image] minor
 - ![Alarm][base64-image] information
- States

 | State | Description |
 | --- | --- |
 | raised | An alarm is active and triggered. Service may be stopped or the server is down. A backup server may be used if [assigned in a failover group](https://docs.mediakind.com/beam/system-admin/servers/failover#display-failover-groups) |
 | cleared | The issue related to the alarm is resolved. This includes restoring services after a failover to a backup server, even if the primary server is down. |

## Customize alarm display time

[Section titled “Customize alarm display time”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#customize-alarm-display-time)

The alarm display refreshes automatically every few seconds. By default, all timestamps are shown in Universal Time (UTC), but you can customize the time zone.

1. Click ![Gear][base64-image] in the upper right corner.
2. Select **Settings**.
3. In the **General** tab, choose your preferred **Alarm display time zone** from the drop-down list.
4. Click **Save** to apply the changes.

## Types of alarms

[Section titled “Types of alarms”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#types-of-alarms)

Different pages are dedicated to specific alarm displays. For example, the **Alarms** page is a centralized alarm overview, the **Service alarms** page displays alarms for the specific service, and the **Failover alarms** page displays alarm and event overviews.

### Alarms page

[Section titled “Alarms page”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#alarms-page)

The alarms page centralizes all alarms and events into a table. The Alarms page is a general alarms overview.

See the [Service alarms page](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#service-alarms-page) or the [Failover alarms page](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#failover-alarms-page) for specific alarm information.

#### Display all alarms and events

[Section titled “Display all alarms and events”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#display-all-alarms-and-events)

The **Alarms** page is an overview of all alarms and events.

To access the **Alarms** page you can:

- Click **Alarms** on the left-side menu to access all **Active alarms**, **Alarm history** and **Alarm overrides**.

 ![view active alarms menu](https://docs.mediakind.com/_astro/view_active_alarms_menu.Ddbb3Dqm_Z1xE9qE.webp)

- Click **Services** on the left-side menu then click ![Alarm][base64-image] in the **Alarm** column to display alarms for a specific service. The Alarm icon is the color of the active alarm with the highest level of severity.

- Use the shortcuts in the top-right corner banner.

 ![view alarm shortcut header](https://docs.mediakind.com/_astro/view_alarm_shortcut_header.BZFZEgin_yDDiS.webp)

You can then use the sort options in the table headers or the search bar to filter on specific alarms, services or servers.

#### Display alarm history

[Section titled “Display alarm history”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#display-alarm-history)

The alarm history for all alarms displays in a tab in the **Alarms** page.

By default, the alarm history is stored for approximately 7 days, or a maximum of 100,000 alarm events.

1. Click **Alarms** from the left-side menu.
2. Click **Alarm History** to view the history for all alarms.
3. Use the sort options in the table headers or the search bar to filter on specific alarms, services or servers.
4. The **Auto refresh** button can be used to control whether new alarms automatically appear in the table. This can be useful to disable on a busy system to stop the screen scrolling.
5. Click the **Download history** button to download a .csv file containing the alarm history.

### Service alarms page

[Section titled “Service alarms page”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#service-alarms-page)

You can access the alarms for a specific service from the **Services** page. An icon in the **Alarms** column indicates that there is at least one alarm for the service. Alarm icons use a color code. The color of the alarm icon in the Alarms column is based on the highest severity alarm known for that service.

An alarm status icon displays per service in relation to the alarm with the highest severity for that service. More than one alarm may exist for a single service.

#### Display service-specific alarms page

[Section titled “Display service-specific alarms page”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#display-service-specific-alarms-page)

The service-specific alarms display in a dedicated page that also displays the alarm history for the service.

1. Display **Services**.
2. Click the alarm icon in the **Alarms** column. The service alarms display.

### Failover alarms page

[Section titled “Failover alarms page”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#failover-alarms-page)

If a failover group exists, then certain critical alarms may trigger a failover. You can check alarms for failover groups, and then drill down to alarms to investigate servers and related services.

In the [Failover group page](https://docs.mediakind.com/beam/system-admin/servers/failover#display-failover-groups), the alarm with the highest severity (in relation to the servers in the failover group) displays in the **Alarm Status** column.

The alarm display is automatically refreshed every few seconds. All time stamps are in **Universal Time (UTC)**.

#### Display failover alarms page

[Section titled “Display failover alarms page”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#display-failover-alarms-page)

The failover alarms page displays alarms and the alarm history for servers in a failover group.

1. Display the **Failover** page from the left-side menu panel.
2. Click the alarm icon in the **Alarm Status** column.

The alarms for the failover group display. You can use failover alarms to determine if a server in the failover group has an alarm, and then if there are service alarms for services running on that server.

## Alarm forwarding (SNMP)

[Section titled “Alarm forwarding (SNMP)”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#alarm-forwarding-snmp)

SNMP alarm forwarding requires you to define a destination where alarms are sent.

### Display the list of SNMP destination configurations

[Section titled “Display the list of SNMP destination configurations”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#display-the-list-of-snmp-destination-configurations)

1. Click ![Gear][base64-image] in the upper right corner of the window.

2. Select **Settings** then click the **SNMP notifications** tab. The SNMP destinations display. You can use the search options or column filters to browse the SNMP notification configurations.

 ![view snmp trap destination table list mfmms](https://docs.mediakind.com/_astro/view_snmp_trap_destination_table_list_mfmms.BvyRgeO5_1pIiJz.webp)

### Add a new SNMP destination

[Section titled “Add a new SNMP destination”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#add-a-new-snmp-destination)

1. Click ![Gear][base64-image] in the upper right corner of the window then select **Settings**.
2. From the **SNMP notifications** tab, click **Add destination**. The SNMP destination parameters display.
3. Enter the [SNMP parameters](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#snmp-parameters-settings-menu) to configure the destination and the version.

The parameters that display to edit SNMP destinations depend on the SNMP version.

5. Save settings to return to the list of SNMP configurations.

### Edit SNMP destination configurations

[Section titled “Edit SNMP destination configurations”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#edit-snmp-destination-configurations)

1. Click ![Gear][base64-image] in the upper right corner of the window then select **Settings**.
2. From the **SNMP notifications** tab, click ![Edit][base64-image] to display SNMP destination parameters.
3. Edit the [SNMP parameters](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#snmp-parameters-settings-menu) and save.

The parameters that display to edit SNMP destinations depend on the SNMP version.

![view snmp v3 parameters](https://docs.mediakind.com/_astro/view_snmp_v3_parameters.DORY7k4y_ZQsM0h.webp) _Example of SNMP v3 configuration_

### Activate/deactivate SNMP notifications

[Section titled “Activate/deactivate SNMP notifications”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#activatedeactivate-snmp-notifications)

1. Click ![Gear][base64-image] in the upper right corner of the window then select **Settings**.
2. From the **SNMP notification** tab, you can activateSNMP notifications either:
 - tick the **Activate** checkbox from the table where SNMP configurations are listed.
 - or click ![Edit][base64-image] and tick the **Activate** checkbox at the top of the SNMP parameters.

### Delete an SNMP destination server

[Section titled “Delete an SNMP destination server”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#delete-an-snmp-destination-server)

1. Click ![Gear][base64-image] in the upper right corner of the window then select **Settings**.
2. From the **SNMP notifications** tab, click ![Delete][base64-image] to delete the SNMP destination configuration. You are prompted to confirm and delete.

## Alarm overrides

[Section titled “Alarm overrides”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#alarm-overrides)

The alarm overrides feature requires specific user rights.

You can manually override alarm severity levels. You can also view the alarms that trigger failover. You can filter the alarms using the search bar.

Changing the **Triggers failover** value impacts the possibility of a failover occurring.

### Override an alarm severity

[Section titled “Override an alarm severity”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#override-an-alarm-severity)

You can change the alarm severity to either critical, major, minor, notice or ignore. The initial default severity displays in the **Alarm overrides** tab if you need to revert to the initial default severity setting. Setting an alarm to “ignore” will exclude that alarm type from displaying in the active and historical alarm views. It will also be excluded from the API responses and SNMP traps. The only evidence of “ignored” alarms will be in log files.

Changes to severity are only applied to future occurrences. Any current or previously existing alarms are unchanged.

1. Click **Alarms** in the left-hand menu panel.

2. Click the **Alarm overrides** tab to display options. The following page displays.

 ![view alarm overides controller](https://docs.mediakind.com/_astro/view_alarm_overides_controller.B8DKFuh0_Z1coRsP.webp)

3. Click the **Current severity** for the specific alarm to display options. A list of severity options displays.

 ![view current severity button alarm override controller](https://docs.mediakind.com/_astro/view_current_severity_button_alarm_override_controller.BykRzxJB_ZYhpOV.webp)

4. Select a severity from the list. The **Current severity** changes.

Changing the severity may increase or decrease the possibility of failover occurrence.

![view alarm override select severity controller](https://docs.mediakind.com/_astro/view_alarm_override_select_severity_controller.B0MGgzrw_1AXXxz.webp)

### Reset the alarm severity to the default setting

[Section titled “Reset the alarm severity to the default setting”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#reset-the-alarm-severity-to-the-default-setting)

Alarm severity can be manually changed. You can reset the alarm severity to the default setting. Changing the **Triggers failover** value impacts the possibility of a failover occurring.

Changes to severity are only applied to future occurrences. Any current or previously existing alarms are unchanged.

1. Click **Alarms** in the left hand menu.
2. Click the **Alarm overrides** tab to display options.
3. Click the **Default severity** for the specific alarm to display options. A list of severity options displays.
4. Select a severity from the list. The **Default severity** changes.

Changing the severity may increase or decrease the possibility of failover occurrence.

## Events

[Section titled “Events”](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events/#events)

Events are displayed in the **Alarms** page. Events notify you of actions that do not impede proper functioning.

Example of an event when you intentionally start or stop a service:

![view active alarms menu table](https://docs.mediakind.com/_astro/view_active_alarms_menu_table.vF9FPXge_18tJJI.webp)