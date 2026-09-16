# Source: https://docs.mediakind.com/beam/live-encoder/monitor-statistics

# Monitor service statistics

You can retrieve and monitor detailed statistics information on a service.

The ![Chart][base64-image] icon is only accessible when a Live encoding servive is associated to a server and then running.

1. From the **Services** page, identify the service that you want to monitor and click the related ![Chart][base64-image] icon. The **Statistics** page displays.

2. You can navigate between three tabs:

- [**Media info**](https://docs.mediakind.com/beam/live-encoder/monitor-statistics/#media-info)
- [**Input monitoring**](https://docs.mediakind.com/beam/live-encoder/monitor-statistics/#input-monitoring)
- [**Outputs**](https://docs.mediakind.com/beam/live-encoder/monitor-statistics/#outputs).

You can customize the information displayed such as activating or deactivating the auto refresh by clicking the **Auto refresh** button.

## Media info

[Section titled “Media info”](https://docs.mediakind.com/beam/live-encoder/monitor-statistics/#media-info)

From the **Media info** tab, you can view the following information for each program:

- Video statistics
- Audio statistics
- Preview of the video
- List of other available programs

![MFVP EL service statistics mediainfo](https://docs.mediakind.com/_astro/MFVP-EL-service-statistics-mediainfo.9eE5EbAq_1C9shJ.webp) _Example of Service Statistics>Media info_

## Input monitoring

[Section titled “Input monitoring”](https://docs.mediakind.com/beam/live-encoder/monitor-statistics/#input-monitoring)

From the **Input monitoring info** tab, you can view the following information:

- Quality indicators (ETR290)
- RTP quality indicators
- FEC quality indicators
- Input CC Errors
- Splice schedule

![MFVP EL service statistics input](https://docs.mediakind.com/_astro/MFVP-EL-service-statistics-input.CwwIs1qR_Z16raTX.webp) _Example of Service Statistics>Input monitoring_

## Outputs

[Section titled “Outputs”](https://docs.mediakind.com/beam/live-encoder/monitor-statistics/#outputs)

From the **Outputs** tab, you can view the following information for each output:

- PID number
- Media type (audio, video, subtitles, metadata)
- CC errors
- Information

![MFVP EL service statistics output](https://docs.mediakind.com/_astro/MFVP-EL-service-statistics-output.D_nnqVEq_qGBxK.webp) _Example of Service Statistics>Output monitoring_

- Once you have configured an automated blackout and started a service, you can manually [activate or deactivate the blackout](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding#manually-activate-or-deactivate-a-blackout).

- Once you have activated and configured the [Switch to CBR option](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#switch-to-cbr-parameters), and started the service, you can manually switch from Statmux to CBR (**Switch to CBR** button) or switch back from CBR to Statmux (**Switch to Statmux** button).

 ![EL service statistics output switch to CBR](https://docs.mediakind.com/_astro/EL-service-statistics-output-switch_to_CBR.CmIl93AL_V5voa.webp) _Example of Service Statistics>Outputs with Switch to CBR option activated_