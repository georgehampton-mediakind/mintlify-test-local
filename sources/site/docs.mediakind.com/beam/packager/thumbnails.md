# Source: https://docs.mediakind.com/beam/packager/thumbnails

# Adding a thumbnail to a Catalog

A thumbnail is a still image that acts as the preview image for the video for a given time. Video thumbnails are small images that give you a snapshot of the video streams when moving forward or backward.

The thumbnail streams parameters apply for all the outputs of the catalog for which thumbnails have been enabled. For specific needs, several thumbnails streams can be configured within a catalog. The thumbnails layout and periodicity are defined at the output level.

To add a thumbnail to a Catalog, follow these steps:

1. From the **Services** page, click the **Name** related to the Catalog on which the output will be added.

2. On the Catalog page, click the **Add new thumbnail stream** button from the **Thumbnails** tab.

3. Enter the appropriate value for each parameter:

 - **Name**
 - **Source stream**
 - **Thumbnail size**

 This configuration applies for all the outputs of the catalog.

4. Click **OK** to save.

5. Further configuration steps are required in the output settings configuration:

 - Tick **Enable thumbnails** and configure the [thumbnail layout and periodicity](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output).

 - You can also configure the thumbnail streams filtering for your manifests for [DASH](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output) and [HLS](https://docs.mediakind.com/beam/packager/hls-output) outputs.