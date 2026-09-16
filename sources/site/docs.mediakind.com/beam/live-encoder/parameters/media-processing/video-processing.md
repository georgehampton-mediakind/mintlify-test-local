# Source: https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing

# Video processing

## Video prefiltering

[Section titled “Video prefiltering”](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing/#video-prefiltering)

| Parameter | Description |
| --- | --- |
| Deblocking filter | Removes the MPEG2 blocking artifacts. This filter is fully automated to remove the blocking and ringing effects. |
| Cross-talk filter | Removes noise by processing noise in the source frame by frame. If activated, reduces crosscolor and crossluminance artifacts remaining in the input video. |
| Sharpening filter | Filter applied on all output profiles with a resolution lower than the selected resolution. Used to increase image sharpness. 
Example: Enhance text readability on lower resolutions. |
| Spatial denoising filter | Removes noise by processing noise in the source frame by frame. |
| Diamond filter | Removes noise by processing noise in the source frame by frame. 
The adaptive mode uses both edges and noise detection filters to choose the areas to filter, and to adapt the filtering strength. |
| MCTF | Removes noise by processing noise in the source with a temporal factor. Has a 7 frame rolling window. The 'Adaptive' mode uses a noise detection filter to adapt the filter strength. |

**Related information** 
[Configure the video prefiltering](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/video-processing#video-prefiltering)

## Video adjustment

[Section titled “Video adjustment”](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing/#video-adjustment)

| Parameter | Description |
| --- | --- |
| Crop overscan | Removes the input video overscan area from each edge (left, top, right and bottom). |
| Frame rate conversion | You can convert the frame rate from PAL to NTSC or NTSC to PAL.Video frame rate can be converted from PAL to NTSC (25i to 29.97i / 50p to 59.94p) or NTSC to PAL (29.97i to 25i / 59.94p to 50p).<br>Subtitles, closed captions or timecode are not converted. |
| Aspect ratio | Aspect ratio can be passthrough from WSS and AFD information. You can also override/force the aspect ratio to 16/9 or 4/3.<br>Possible values: **Auto**, **Force 16/9**, **Force 4/3**<br>**Note:** See [Picture aspect ratio handling (Auto)](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#picture-aspect-ratio-handling-auto) for more information. |
| Noise edge removal | Number of lines removed from the top of the video (up to 6 in SD and 14 in HD)<br>Possible values: From 0 to 6 for SD, from 0 to 14 for HD<br>**Note:** 0 means no adjustment. |

**Related information** 
[Configure the video adjustment parameters](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/video-processing#video-adjustment) 
[Output aspect ratio and cropping](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video#output-aspect-ratio-and-cropping)

## Video colorimetry

[Section titled “Video colorimetry”](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing/#video-colorimetry)

| Parameter | Description |
| :-- | :-- |
| Brightness, Contrast, Saturation, Temperature, Hue, Gamma | You can adjust these parameters by dragging the sliders back and forth or enter a value.Possible values: from -100 to +100 in whole digit increments.**Note:** A value of 0 has no effect. |

**Related information** 
[Configure the video colorimetry parameters](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/video-processing#video-colorimetry)

## Freeze frame management

[Section titled “Freeze frame management”](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing/#freeze-frame-management)

| Parameter | Description |
| --- | --- |
| Activate | Display a replacement image when an input freezes (due to input loss or image freeze), if this option is deactivated, then the last decoded image is displayed. |
| Type | The replacement image can be predefined or custom. |
| Image | Replacement image displayed when input freezes (due to input loss or image freeze) |
| Image URL | The path to the replacement image (GIF, PNG or JPEG file). 
Syntax can be either HTTP://path or /path.You should copy your image to the following directory: `/var/mediakind/streams`<br>The image URL should then be: `/tmp/streams/<your-file-name>`; for example, `/tmp/streams/<your-file-name>` |
| Insertion delay | The time between the loss of input (full stream or elementary stream) and the switch to another source. |

**Related information** 
[Configure image on frame freeze](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/video-processing#image-on-frame-freeze)

## Video metadata

[Section titled “Video metadata”](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing/#video-metadata)

| Parameter | Description |
| --- | --- |
| Timecode | Origin of the timecode that can be inserted in the SEI (Insert timecode option is available from the Encoding tab in the Video encoding&gt;Stream metadata settings). Choose Passthrough for the input stream timecode. |

**Related information** 
[Configure video metadata](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/video-processing#video-metadata)

## Video watermark parameters

[Section titled “Video watermark parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/media-processing/video-processing/#video-watermark-parameters)

| Parameter | Description |
| --- | --- |
| Type | The watermarking type |
| Identifier | Define the subscriber ID/distributor Id/payload that will be included into the watermark |
| Territory | Country where the video is brodcasted. |

**Related information** 
[Configure video watermarking](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/video-processing#video-watermarking)