# Source: https://docs.mediakind.com/beam/system-admin/servers/failover

# Manage failover

## Failover and revert (redundancy)

[Section titled “Failover and revert (redundancy)”](https://docs.mediakind.com/beam/system-admin/servers/failover/#failover-and-revert-redundancy)

Failover mechanisms ensure service continuity. If a whole server fails, or if critical alarms are detected by the processing application, services can be moved to a backup server. The Controller automatically manages failover when the automatic mode is configured. You can also manually failover, or revert once the primary server is repaired. Both server-level and service-level failover are supported.

- For server-level failover, when an alarm is received which is configured to trigger failover:
 - All services on the involved server will be moved to one of the configured backups.
 - That backup server will no longer be available for further failovers
- For service-level failover, when an alarm is received which is configured to trigger failover:
 - If it is a server-level alarm: all services on the involved server will be moved to one of the configured backups (as for a server-level failover).
 - If it is a service-level alarm: only the affected service will be moved.
 - The backup server in use will be reserved for further failovers _from the same primary_

Packager redundancy is managed by the Packager application (cluster of servers). The Controller is not involved in Packager redundancy.

### Timestamps

[Section titled “Timestamps”](https://docs.mediakind.com/beam/system-admin/servers/failover/#timestamps)

- All timestamps are in **Universal Time (UTC)**.
- Failover servers are [selected and grouped](https://docs.mediakind.com/beam/system-admin/servers/failover/#create-a-failover-group) according to processing type.
- [User permissions](https://docs.mediakind.com/beam/system-admin/security/user-management#user-group-permissions) are required to edit failover groups, or to failover or revert.
- If the server has no services assigned, then **default user rights for failover** apply.

### Triggers

[Section titled “Triggers”](https://docs.mediakind.com/beam/system-admin/servers/failover/#triggers)

- Automatic failovers are triggered by alarms that are marked as “triggers failover”.
- By default, all critical alarms will trigger failovers. See [Alarm overrides](https://docs.mediakind.com/beam/system-admin/maintenance/alarms-events#alarm-overrides) for more details.

## Display failover groups

[Section titled “Display failover groups”](https://docs.mediakind.com/beam/system-admin/servers/failover/#display-failover-groups)

1. Click **Failover** from the left-side menu pane. Failover groups display in the table.

 ![view failover groups list mfvp](https://docs.mediakind.com/_astro/view_failover_groups_list_mfvp.DgeQjjKQ_ulxPv.webp)

The alarm icon displays the alarm status for the highest severity alarm based on the servers in the failover group.

2. Click ![View][base64-image] in the **Actions** column to display details.

All time stamps are in **Universal Time (UTC)**.

## Display a failover summary

[Section titled “Display a failover summary”](https://docs.mediakind.com/beam/system-admin/servers/failover/#display-a-failover-summary)

The failover summary table shows progress and status for failover procedures.

1. Click **Failover** from the left-side menu pane. Failover groups display.

2. Scroll to the bottom of the page to display the **Failover summary** table.

 ![view table failover summary mfvp mc](https://docs.mediakind.com/_astro/view_table_failover_summary_mfvp_mc.BE-pQrYB_Z1LQ0jT.webp)

All time stamps are in **Universal Time (UTC)**.

3. Click ![View][base64-image] in the **Actions** column to display details.

## Create a failover group

[Section titled “Create a failover group”](https://docs.mediakind.com/beam/system-admin/servers/failover/#create-a-failover-group)

1. [Display failover groups](https://docs.mediakind.com/beam/system-admin/servers/failover/#display-failover-groups).

2. Click **Add group…**

3. Enter a [**Group name**](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#failover-parameters).

4. Select a [**Failover level**](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#failover-parameters).

5. Select a [**Group processing type**](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#failover-parameters) for the servers in the group.

6. Select a [**Group failover mode**](https://docs.mediakind.com/beam/system-admin/maintenance/parameters#failover-parameters).

The default **Group failover mode** is **Automatic**. You can manually trigger a failover, or revert, even in Automatic group failover mode.

![view failover setup edit mfvp](https://docs.mediakind.com/_astro/view_failover_setup_edit_mfvp.B2J7FJ4Y_14c5zX.webp)

7. Select available servers, and use the arrows to define the list of primary and backup servers. The new failover group displays in the list.

You can use the search option to display and select specific servers (for example, per processing type).

## Edit a failover group

[Section titled “Edit a failover group”](https://docs.mediakind.com/beam/system-admin/servers/failover/#edit-a-failover-group)

1. [Display failover groups](https://docs.mediakind.com/beam/system-admin/servers/failover/#display-failover-groups).

2. Click ![Edit][base64-image]. The **failover setup** page displays.

Edit options are only available when Server settings are modifiable. If there is no button, check user rights or contact an administrator.

3. Edit the [group settings](https://docs.mediakind.com/beam/system-admin/servers/failover/#create-a-failover-group) configuration.

- **Failover level** can only be changed if there is no active failover for this group (no services assigned to a backup).
- **Group processing** type cannot be changed.

![view failover setup group settings mfvp](https://docs.mediakind.com/_astro/view_failover_setup_group_settings_mfvp.CT5evSKY_4BX0H.webp)

4. Edit the server selection for primary and backup servers, then click **Save and exit**. The group is added to the list.

 ![view failover setup select server mfvp](https://docs.mediakind.com/_astro/view_failover_setup_select_server_mfvp.DDi8BRZ6_Z1q7nJb.webp)

## Request a failover or a revert between servers manually

[Section titled “Request a failover or a revert between servers manually”](https://docs.mediakind.com/beam/system-admin/servers/failover/#request-a-failover-or-a-revert-between-servers-manually)

Before you start: At least one [Failover group exists](https://docs.mediakind.com/beam/system-admin/servers/failover/#create-a-failover-group).

User permissions are required to request a failover or a revert. If the server has no services assigned, then [default user rights for failover](https://docs.mediakind.com/beam/system-admin/security/user-management#user-group-permissions) apply.

1. [Display failover groups](https://docs.mediakind.com/beam/system-admin/servers/failover/#display-failover-groups).

2. Click ![View][base64-image] to display details.

3. Click ![Left/Right][base64-image] to failover to backup servers, or revert to primary servers. You are prompted to continue.

4. A modal pop-up is displayed, showing progress and success/failure of this operation.

5. When complete, confirm that the assigned servers are correct, by checking the [services page](https://docs.mediakind.com/beam/web-interface/services#display-services).

For a service-level group, manual failover/revert behave exactly as for a server-level group; all services on the primary server will be moved to the backup. All services on the backup server will be moved back to the configured primary (whether all services due to a manual failover, or service(s) which have been automatically moved in response to an alarm).

If the failover group is service-level, manual failover and revert can be done from the services page.

Manual service failover/revert is only available for services that are assigned to a single server.

1. From the **Services** page, click ![Ellipsis][base64-image] to show more actions on the service you want to failover or revert.

2. Click on the ![Service failover][base64-image] (failover) or ![Service revert][base64-image] (revert) icon to perform the action. Only the icon for the available action is displayed.

3. Click **Yes** to confirm the action.

4. A modal pop-up is displayed, showing progress and success/failure of this operation.

If multiple services are selected, the failover/revert action is only available if all selected services are on the same server.

## Select failover trigger settings

[Section titled “Select failover trigger settings”](https://docs.mediakind.com/beam/system-admin/servers/failover/#select-failover-trigger-settings)

By default, a failover is triggered for any critical alarm. You can select the failover trigger option for any alarm. This also applies to alarms that you have changed from the default alarm severity.

Changes to severity are only applied to future occurrences. Any current or previously existing alarms are unchanged.

1. Click **Alarms** in the left hand menu.

2. Click **Alarm overrides** to display options. The following page displays.

 ![view alarm overides controller](https://docs.mediakind.com/_astro/view_alarm_overides_controller.B8DKFuh0_Z1coRsP.webp)

3. Select a response for **Trigger failover**.

 ![view alarm override failover trigger controller](https://docs.mediakind.com/_astro/view_alarm_override_failover_trigger_controller.D-4_1p_5_2dXmuv.webp)