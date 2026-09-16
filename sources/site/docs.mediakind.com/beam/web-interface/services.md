# Source: https://docs.mediakind.com/beam/web-interface/services

# Manage services

A service is a set of parameters required for a given processing type. Services can be manually started and stopped.

You can access services from the **Home** page dashboard or the left-side menu panel.

## Display services

[Section titled “Display services”](https://docs.mediakind.com/beam/web-interface/services/#display-services)

Services are listed in a table and are associated to a specific processing type. Service parameters and options depend on the processing type.

Before you start: ensure at least one service is configured.

To display services, follow these steps:

1. Click **Services** in the left-side menu panel. The table of services displays.

2. To easily find a service or refine the display, you can then:

 - Use the [search bar](https://docs.mediakind.com/beam/web-interface/navigation#use-the-search-bar);
 - Filter by specific fields (such as tag, status, processing types, resource, source, animation, alarm level);
 - Show/hide columns by clicking ![Ellipsis][base64-image] at the right of the table headings;
 - Sort the table using the up and down arrows next to each column heading.

## Edit a service

[Section titled “Edit a service”](https://docs.mediakind.com/beam/web-interface/services/#edit-a-service)

To edit a service, just click the name. It takes you to the service editing page.

## Create a service

[Section titled “Create a service”](https://docs.mediakind.com/beam/web-interface/services/#create-a-service)

Service configurations vary per processing type. See the specific component documentation for detailed information about service creation.

1. From the **Services** page, click **Add Service**.

2. Select a processing type. The service parameter options display.

3. You can configure the service parameters.

4. Once you have completed the service configuration, click **Save and exit**.

5. You can [assign a server](https://docs.mediakind.com/beam/web-interface/services/#assign-a-server-to-run-the-service) to the service. Multiple servers may be assigned to a same service.

6. You can use the buttons in the action column to [start](https://docs.mediakind.com/beam/web-interface/services/#start-a-service) or [stop](https://docs.mediakind.com/beam/web-interface/services/#stop-a-service) the service.

## Assign a server to run the service

[Section titled “Assign a server to run the service”](https://docs.mediakind.com/beam/web-interface/services/#assign-a-server-to-run-the-service)

Services require a server to run. Select a server for each service before starting the service.

For failover configurations:

- [Failover](https://docs.mediakind.com/beam/system-admin/servers/failover) only applies to certain processing types and configurations.
- Inactive backup servers (in a failover group) cannot be assigned to run a service.
- A primary server (in a failover group) that is in failover, meaning that a backup server has taken over and it is no longer running services, cannot be assigned to run services.

### Typical use case, a service is assigned to one or more servers

[Section titled “Typical use case, a service is assigned to one or more servers”](https://docs.mediakind.com/beam/web-interface/services/#typical-use-case-a-service-is-assigned-to-one-or-more-servers)

1. From the **Services** page, click **Add Server** in the **Resources** column to display the available servers.

2. Tick one or more servers from the list then click **Save**. The selected servers are shown in the **Resources** column.

3. You can start the service.

### In case of redundant outputs (Live Encoder)

[Section titled “In case of redundant outputs (Live Encoder)”](https://docs.mediakind.com/beam/web-interface/services/#in-case-of-redundant-outputs-live-encoder)

1. From the **Services** page, go to the **Resources** column then click **Add Server** to display the available servers.

2. Select a server from the list then select either **Set Primary** or **Set Secondary**.

**Related information** 
[Create redundancy variants](https://docs.mediakind.com/beam/live-encoder/configure#create-redundancy-variants)

### In case of variants (Live Encoder)

[Section titled “In case of variants (Live Encoder)”](https://docs.mediakind.com/beam/web-interface/services/#in-case-of-variants-live-encoder)

1. From the **Services** page, go to the **Resources** column.

2. Only servers that match the server tags for subsets are offered.

3. Select a server from the list.

**Related information** 
[Create server variants](https://docs.mediakind.com/beam/live-encoder/configure#create-subset-variants)

### In case of variants and redundant outputs (Live Encoder)

[Section titled “In case of variants and redundant outputs (Live Encoder)”](https://docs.mediakind.com/beam/web-interface/services/#in-case-of-variants-and-redundant-outputs-live-encoder)

1. From the **Services** page, go to the **Resources** column.

2. Only servers that match the server tags for subsets are offered.

3. Select a server from the list then select either **Set Primary** or **Set Secondary**.

**Related information** 
[Create server variants](https://docs.mediakind.com/beam/live-encoder/configure#create-subset-variants) 
[Create redundancy variants](https://docs.mediakind.com/beam/live-encoder/configure#create-redundancy-variants)

## Unassign a server from a service

[Section titled “Unassign a server from a service”](https://docs.mediakind.com/beam/web-interface/services/#unassign-a-server-from-a-service)

1. From the **Services** page, go to the **Resources** column.

2. Select a server then click **X** next to the server name. The server is removed and is unassigned from the service.

Jobs that are running on an unassigned server are canceled and put back in the queue to be started again on another server.

## Export a service configuration

[Section titled “Export a service configuration”](https://docs.mediakind.com/beam/web-interface/services/#export-a-service-configuration)

Exported service configurations are for importing onto a **different MediaKind** system. This is useful for component or production support, or testing (parameters and expected function).

Exports exclude the service state (started or stopped). Importing service configurations may require manually starting or stopping other services.

From the **Services** page, click ![Ellipsis][base64-image] in the **Actions** column then click ![Download][base64-image] to export. A file will download in your browser’s default location.

The download date in the file name is in the following format: YYYY/MM/DD.

Multiple services can be exported at once (See the [Bulk Actions](https://docs.mediakind.com/beam/web-interface/services/#bulk-actions) section). The services selected do not need to all be of the same type. Once you have selected your services click ![Ellipsis][base64-image] in the **Actions** column of any service then click ![Download][base64-image] to export. This will download a tar.gz file containing all the configurations of the selected services.

The download tar.gz file will always be called service\_exports\_YYYY-MM-DD.tar.gz.

## Import a service

[Section titled “Import a service”](https://docs.mediakind.com/beam/web-interface/services/#import-a-service)

You can import a single service, or multiple services to a different server where the service is not currently configured. Import files must match expected formatting requirements.

The supported files are:

| File extension | Description |
| :-- | :-- |
| json | A single service configuration |
| tar | An archive containing several json files |
| tar.gz / tgz | A compressed archive containing several json files |
| zip | A zipped archive containing several json files |

Archives must only contain json files.

Before you start, ensure that the exported configuration files for the services are available. (See the [Export a service configuration](https://docs.mediakind.com/beam/web-interface/services/#export-a-service-configuration) section)

Services on a same server require unique ids. Only import the service to a server where the service DOES NOT currently exist. If there is a conflict detected during import, you will be given the option to overwrite the existing service.

1. From the **Services** page, click the **Import services…** button.

2. Click **Select files** to browse for the .json or .tar.gz file previously exported for this service or services. You may select multiple files.

3. Click **Import**. The services are imported and appear in the list of services.

4. Click **Close** to close the import dialog.

If there are any errors during the import, you will be given the option to ignore, continue or ignore all.

If you select to ignore all errors, the import process will continue to completion without stopping on future errors.

Importing a lot of files can take several minutes to complete. During the import process DO NOT navigate away from the import page.

## Start a service

[Section titled “Start a service”](https://docs.mediakind.com/beam/web-interface/services/#start-a-service)

Services can be started and stopped manually from the **Services** page.

Before you start: At least one service has been created and is available in the list of services, and at least one server is assigned to run the service.

From the **Services** page, click ![Play outline][base64-image] in the **Actions** column to launch the service. The **Status** changes to **started**.

If an alarm is raised, click ![Alarm][base64-image] to display all alarms. Alarm colors are based on severity.

## Stop a service

[Section titled “Stop a service”](https://docs.mediakind.com/beam/web-interface/services/#stop-a-service)

Stop a service manually for support, testing or for general system administration purposes. Once stopped, the assigned server no longer executes the service.

Stopping a service cancels any jobs in progress.

1. From the **Services** page, click ![Stop outline][base64-image] in the **Actions** column to stop the service. You are prompted to confirm.

2. Click **Yes, Stop it!**. The service status changes to **stopped**. The service stops running.

## Copy a service

[Section titled “Copy a service”](https://docs.mediakind.com/beam/web-interface/services/#copy-a-service)

From the **Services** page, click ![Ellipsis][base64-image] in the **Actions** column then select ![Clone][base64-image] to copy the service. A “-copy” suffix is added to the name of the duplicated service.

You can simultaneously select and copy several services at once (see [Bulk actions](https://docs.mediakind.com/beam/web-interface/services/#bulk-actions)).

## Delete a service

[Section titled “Delete a service”](https://docs.mediakind.com/beam/web-interface/services/#delete-a-service)

Deleting a service removes a service from the list of available services.

For detailed information regarding a Live Packaging service deletion, see [Deleting a Live Packaging service and managing DVR](https://docs.mediakind.com/beam/packager/live-packaging-service#deleting-a-live-packaging-service-and-managing-dvr).

1. From the **Services** page, click ![Ellipsis][base64-image] in the **Actions** column then select ![Delete][base64-image] to delete the service.

2. Click **Yes, delete it!** to confirm. The service is removed from the services table and is no longer available.

## Failover or revert a service

[Section titled “Failover or revert a service”](https://docs.mediakind.com/beam/web-interface/services/#failover-or-revert-a-service)

If a service is running on a server that is in a service-level failover group, a manual failover/revert can be triggered. For information on this, please refer to the [Request a failover or a revert between servers manually](https://docs.mediakind.com/beam/system-admin/servers/failover#request-a-failover-or-a-revert-between-servers-manually) section.

## Bulk actions

[Section titled “Bulk actions”](https://docs.mediakind.com/beam/web-interface/services/#bulk-actions)

Some operations support bulk actions. You can select multiple services by ticking the corresponding boxes, or you can select all services on the page by ticking the box next to the **Name** column. Then, you can apply bulk operations such as start, stop, copy, and delete. Stopping or deleting multiple services will prompt a warning message.

You can use the search bar, filter by specific fields, or sort the table using the up and down arrows to refine the services displayed before performing a bulk action..

## Configure advanced parameters for an existing service

[Section titled “Configure advanced parameters for an existing service”](https://docs.mediakind.com/beam/web-interface/services/#configure-advanced-parameters-for-an-existing-service)

1. From the **Services** page, click the service name to edit the service then click the **Advanced parameters** tab.

2. Click **Add** then enter the parameter name and value. You can add multiple advanced parameters to the service.

3. Click **Save and continue** before continuing in order to avoid losing the configuration.