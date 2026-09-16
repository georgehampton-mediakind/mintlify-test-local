# Source: https://docs.mediakind.com/beam/system-admin/maintenance/service-settings

# Service settings

You can access additional menus from the **Settings** menu. This menu only displays if Packager, Stream Conditioning or Live Encoder products are used.

## Packager menus

[Section titled “Packager menus”](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#packager-menus)

- [HTTP Headers](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#add-an-http-header)

## Stream Conditioning menus

[Section titled “Stream Conditioning menus”](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#stream-conditioning-menus)

- Stream Conditioning variables

## Live Encoder menus

[Section titled “Live Encoder menus”](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#live-encoder-menus)

- [Nielsen archiving](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#enable-nielsen-log-archiving) (only available in container mode)
- [Live service lineup](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#live-service-lineup)

## Add an HTTP header

[Section titled “Add an HTTP header”](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#add-an-http-header)

1. Click **Settings** ![Three gears](https://docs.mediakind.com/_astro/three-gears.C8qsOy45.svg) to expand menu options.

2. Select **HTTP Headers**. The following page is displayed:

 ![services http headers](https://docs.mediakind.com/_astro/services-http-headers.DCMX89h5_21EIKA.webp)

3. Edit the existing header, or click **Add** to create a new header.

4. Check that required values are correct:

 - URL pattern
 - Headers
5. Select a **Save** option to save changes.

## Enable Nielsen log archiving

[Section titled “Enable Nielsen log archiving”](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#enable-nielsen-log-archiving)

When enabled, Nielsen watermarking logs are sent using an SFTP server.

Watermarking is enabled from the Live Encoding service: **Media processing** > **Audio Processing** > **Watermarking** > **![Edit][base64-image]** > **Insertion** > **Enable**.

1. Select **Settings** from the left-side menu panel to expand and display menu options.
2. Select **Nielsen archiving** from the drop-down menu list. The **Archiving** options display.
3. Select the check box to enable Nielsen archiving.
4. Enter parameters for the SFTP server.

Certain parameters are Nielsen provided and must be registered with Nielsen. See parameter glossary for details.

## Live service Lineup

[Section titled “Live service Lineup”](https://docs.mediakind.com/beam/system-admin/maintenance/service-settings/#live-service-lineup)

The lineup file describes a list of sources (including all the parameters needed to capture the source i.e. multicast address and port, input streams, …) to be used with the Media composer input. This configuration is unique per controller and is used by all the Live Encoder services.

To import the lineup configuration file, follow these steps:

1. Select **Settings** from the left-side menu panel to expand and display menu options.

2. Select **Live service lineup** from the drop-down menu list. The **Live service lineup** options display.

3. You can either create a new service lineup or import an existing one.

 - To create a new service lineup, click **Add** then [enter and/or select the appropriate value for each parameter](https://docs.mediakind.com/beam/live-encoder/parameters/lineup).

 ![UDP lineup file configuration"](https://docs.mediakind.com/_astro/live_servicelineup_view_channel1.E9Ep5qd2_Z19Mkuw.webp)

 ![live servicelineup view st2110](https://docs.mediakind.com/_astro/live_servicelineup_view_st2110.Diw_GcKi_Z5jGqR.webp)

 - To import an existing service lineup, click **Import** then browse to select a service lineup (json file).
4. In the **Actions** column, you can click the ![Edit][base64-image] button to display each service lineup parameters.

5. You can export an existing service lineup:

 - You can either click the **Export** button then copy/paste the json file.
 - Or right-click the **Export** button then select the **Save link as** option and browse to select a location.