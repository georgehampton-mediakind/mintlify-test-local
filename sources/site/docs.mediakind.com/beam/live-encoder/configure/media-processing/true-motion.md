# Source: https://docs.mediakind.com/beam/live-encoder/configure/media-processing/true-motion

# True Motion de-interlacing

True Motion is MediaKind’s motion-compensated de-interlacing technology. It converts interlaced video to progressive video using advanced de-interlacing, cross-scaling, and inverse telecine filters, and doubles the frame rate of interlaced sources to produce smooth content for OTT players.

> When the input is progressive, enabling True Motion has no effect. Live Encoder does not double frames for progressive sources.

## Frame rate conversion

[Section titled “Frame rate conversion”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/true-motion/#frame-rate-conversion)

For interlaced inputs, True Motion doubles the frame rate. For example, a 1080i30 input becomes a 1080p60 output.

| Ingest | OTT Configuration | Output |
| :-- | :-- | :-- |
| 1080i30 | 1080 True Motion | 1080p60 |
| 1080p30 | 1080 True Motion | 1080p30 |
| 1080i30 | 720p True Motion | 720p60 |
| 1080p30 | 720p True Motion | 720p30 |

## Benefits

[Section titled “Benefits”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/true-motion/#benefits)

**For end users:** Video does not present interlace artifacts on progressive displays.

**For operators:** Content is adapted to internet TV constraints without loss of fine detail.

## Enable True Motion

[Section titled “Enable True Motion”](https://docs.mediakind.com/beam/live-encoder/configure/media-processing/true-motion/#enable-true-motion)

1. Open the service configuration and go to the **Media Processing** tab.
2. In the **Video Pre Filtering** section, enable the **True Motion** option.
3. Select the target OTT configuration (for example, **1080 True Motion** or **720p True Motion**).
4. Select **Save and continue** or **Save and exit** to apply the changes.