# Source: https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata

# Metadata encoding parameters

| Parameter | Description |
| --- | --- |
| Codec | Select the codec used to refine the stream object type. |
| Use POIS | Only available with **Conditioning**.<br>Tick this checkbox if you want to define a POIS server. |
| PTS insertion compensation | Only available with **Conditioning**.<br>Enable pts insertion compensation.<br>If checked, the pts\_adjustment of an SCTE-35 event will be adjusted so that the splice\_time + pts\_adjustment corresponds to the PTS of the video frame, as illustrated below:<br>![pts insertion compensation](https://docs.mediakind.com/_astro/pts_insertion_compensation.Bbs1C30k_Z1gPU31.webp)<br>**Note:** Arm time is the time that separates the SCTE-35 event from its execution. |
| Recover conditioning state if failover | If 'By Controller' is selected, this option enables to keep the conditioning status after an encoder failover without the need of any external system. |

## POIS parameters

[Section titled “POIS parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata/#pois-parameters)

| Parameter | Description |
| --- | --- |
| Delay | If metadata stream is SCTE35, a delay adjusts the trigger time value.<br>Possible values: From 30000 to 60.000 |
| URL | URL for the POIS (Placement Opportunity Information Service) (if any) |
| Network interface | Name of the network interface used to communicate with the POIS |
| Network name | ID shared with the POIS for the current channel |
| Zone identity | The area ID for this channel distribution. Commonly used for regionalization. |

## Tissot clock metadata ID3 parameters

[Section titled “Tissot clock metadata ID3 parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata/#tissot-clock-metadata-id3-parameters)

| Parameter | Description |
| --- | --- |
| Period | Target frequency of sending encoded metadata.<br>If higher than the key frame period, encoded metadata will only be present on key frames.<br>Possible values: From 0 to 65535 ms |

## Timecode ID3 parameters

[Section titled “Timecode ID3 parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/metadata/#timecode-id3-parameters)

| Parameter | Description |
| --- | --- |
| Origin | Type of the timecode used to filter SMPTE 2038 input. |
| Period | Target frequency of the Timecode ID3 in ms.<br>Possible values: From 0 to 65535 ms |