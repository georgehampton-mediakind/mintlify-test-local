# Source: https://docs.mediakind.com/beam/live-encoder/parameters/input/cross-stream-prevention

# Cross-stream prevention

When multiple channels are broadcast on the network, operators need to ensure that the distributed content actually corresponds to the expected channel.MediaKind Live Encoder proposes a cross-stream prevention mechanism. This feature allows the operator to add an ID to a stream. This ID can then be read and checked by all the systems downstream.

The cross-stream prevention feature relies on ANSI/SCTE35 2016 (Digital Program Insertion Cueing Message for Cable standard).

| Parameter | Description |
| --- | --- |
| Stream ID | Stream ID value inserted in SCTE35 messages for crossstream prevention. |
| Period | Time period between SCTE35 messages. |

**Related information** 
[Configure cross stream prevention](https://docs.mediakind.com/beam/live-encoder/configure/input/cross-stream-prevention)