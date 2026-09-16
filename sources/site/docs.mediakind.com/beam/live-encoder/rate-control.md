# Source: https://docs.mediakind.com/beam/live-encoder/rate-control

# Advanced Rate Control

## CBR mode

[Section titled “CBR mode”](https://docs.mediakind.com/beam/live-encoder/rate-control/#cbr-mode)

In CBR mode, the total rate is set and always maintained.

![Bitrate cbr](https://docs.mediakind.com/_astro/Bitrate_cbr.D8b_kAdi_1lUJAT.webp) _CBR mode_

**Example** 
Over a Satellite link limited to 1.5 Mbps, the encoder can be set at a target bit rate of 1.4 Mbps. We guarantee that the encoder will never go over or under the target bit rate.

As the IP packets might be fragmented, in IP output mode the bit rate can only be guaranteed within ± 3% of the selected rate.

**Benefits** 
This mode can be used in video contribution or any other application where a limited bandwidth is fully allocated to the video feed. By maintaining the data rate constant, one can easily check that the feed is not dropping. This mode is particularly useful with IP Satellite modems.

## Statistical VBR mode

[Section titled “Statistical VBR mode”](https://docs.mediakind.com/beam/live-encoder/rate-control/#statistical-vbr-mode)

For many years the broadcast industry has used expensive and proprietary hardware to provide statistical multiplexing (statmux) features in MPEG-2 transport stream-based networks. With the advent of IP-based networks, the notion of multiplexing and demultiplexing sources that are bundled together is becoming less important, while the requirement to fit multiple channels in a bandwidth-constrained network remains essential.

Drawing from its expertise in MPEG-4 and IP-based video networks, MediaKind has developed a next generation, IP-based, statistical rate control module for broadcast TV networks that provides the highest quality video services in a bandwidth constrained environment. By adding statistical rate control capabilities within the core of the MediaKind Live Encoder encoder, MediaKind enables service providers to both optimize the use of their bandwidth, and avoid the cost of purchasing proprietary statmux technology.

In the case of DTH, multiple IP services are transmitted in bursts on a fixed bandwidth channel. In order to respect the overall bandwidth constraint, there are generally two ways of transmitting the IP traffic: Fixed bandwidth allocation: each service utilizes a constant bandwidth and the streams must be constant bit rate (CBR). The burst size and period are fixed.

Dynamic, variable allocation: each service utilizes a variable bandwidth. The burst size and period are variable.

The latter case is better for video transmission. Given the heterogeneous nature of video signals, it is more appropriate to use more bandwidth on parts of the video that are hard to encode and less on the easier parts. Statistically, there is a high chance that different sources do not need high bandwidth at the same time, so there is an interest in dynamically assigning the bit rate for the transmission of each source. This method is called Statistical Variable Bit Rate mode, or Statistical VBR, and the allocation mechanism Statistical Rate Control.

![Bitrate statmux](https://docs.mediakind.com/_astro/Bitrate_statmux.DrLrBLBJ_ZMbywe.webp) _Aggregated bandwidth of 4 services in Statistical VBR_

The bandwidth savings in this case are very significant. Up to a 30% bit rate reduction has been measured with 8 services.

**Benefits** 
With scarce spectrum resources, the use of statistical rate control in DTH allows the number of available channels to be doubled. The overall subjective quality of the service is also greatly improved.

## Statmux, Statistical rate control

[Section titled “Statmux, Statistical rate control”](https://docs.mediakind.com/beam/live-encoder/rate-control/#statmux-statistical-rate-control)

Statistical rate control for HEVC, H264 and MPEG-2, SD, HD and UHD video is available in DVB and ATSC extreme export types, each statistical rate control pool can be composed of up to 64 services or 80Mbps.

Statistical rate control is a Master/Slave architecture.

- **Slave**: encoder on the network set to encode in VBR with a nominal quality. The slave sends the budget requirements for encoding to a central Master.
- **Master**: module controlling the encoders and distributing the overall bandwidth to the different encoder available on the network.

The “Master” module resides on one encoder. The “Master” guarantees that:

- the sum of all the slave throughputs respect the bandwidth constraints.
- the bit rate is controlled in case of failure: no service interruption, master is automatically replaced by an available “Slave”.

**Benefits for operators** 
Multi-protocol, SD and HD compatible, self-contained statistical rate control for simple integration in existing architecture.

MediaKind Live Encoder provides built-in features to ease Statmux operations. In order to ensure that the bit rate is always correctly distributed over content, MediaKind Live Encoder can detect that a slate has been inserted and thus reduce the bit rate to a slate level CBR bit rate to better manage bandwidth for other streams.

![Bitrate Statmux benefits](https://docs.mediakind.com/_astro/Bitrate_Statmux_benefits.teH9V5IT_220DSH.webp)

No operation is required when a slate is displayed on one channel of the pool, the statistical rate control automatically reclaims the bit rate from this channel.

## CVQ - Constant Video Quality

[Section titled “CVQ - Constant Video Quality”](https://docs.mediakind.com/beam/live-encoder/rate-control/#cvq---constant-video-quality)

A constant quality algorithm with capped bit rate can be used instead of a Constant Bit Rate target. Image bit rate is defined by its instantaneous complexity based on a sophisticated psycho-visual metric.

You can define how to manage the bandwidth:

- **Quality level** mode: the content is encoded at a constant perceptual quality without information on the bandwidth consumption. The aim is to achieve the desired **Quality level**. The scale works with a \[1.0-5.0\] decimal scale and can be directly translated to an equivalent MOS score.

 We recommend limiting the usage of this mode to lab testing. This mode requires media conditioning licensing.

- **Average bit rate** mode: our latest and more complete algorithm of CVQ. While keeping homogeneous quality, the algorithm guarantees the specified **Target bit Rate** over a long period of time (6 hours by default).

 This mode requires media conditioning licensing.

To define the **Target quality** used by the algorithm, a mapping between the bit/pixels of the configuration and the average bit rate was internally measured on a test set for each quality level.

**Related information** 
[Video encoding parameters](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/video)