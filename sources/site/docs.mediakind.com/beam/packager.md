# Source: https://docs.mediakind.com/beam/packager

# Packaging

A **packager** takes an encoded video stream and prepares it for delivery across different devices and streaming platforms. It segments the stream into small chunks and generates manifest files that tell the player what is available, at what bitrates, and in what order to request segments. This is the foundation of adaptive bitrate (ABR) streaming, where a player adjusts quality in real time based on network conditions.

MK.IO Beam’s Packager converts live encoded outputs into HLS and DASH formats, handling the underlying segmentation and manifest generation automatically.

## Output formats

[Section titled “Output formats”](https://docs.mediakind.com/beam/packager/#output-formats)

- **HLS and DASH over CMAF (Common Media Application Format):** A modern packaging approach where HLS and DASH manifests reference the same underlying media segments, reducing storage and simplifying multi-format delivery.
- **HLS over TS (HTTP Live Streaming):** The original HLS format using MPEG-2 TS segments, broadly supported across a wide range of players and devices.

Outputs can include encryption and manifest filtering to control which bitrates or tracks are exposed.

## Key concepts

[Section titled “Key concepts”](https://docs.mediakind.com/beam/packager/#key-concepts)

**Catalog:** The catalog links outputs to live packaging services. It must be created first to host outputs. Any live packaging service added to a catalog can be delivered by any output in that catalog.

**Output:** A set of specific delivery parameters for a defined input stream. It contains processing and encryption parameters and is added to a catalog to serve content to viewers.

**Live Packaging service:** Configuration of the live input parameters. Once associated with a catalog, the service is available for delivery using the outputs defined in that catalog.

## DVR and thumbnails

[Section titled “DVR and thumbnails”](https://docs.mediakind.com/beam/packager/#dvr-and-thumbnails)

Live Packaging services include DVR (Digital Video Recording) configuration, which controls how much of the live stream is held in the sliding window available to the player. Thumbnail generation is also available, providing preview images from the live stream.

## Enabling the Packager

[Section titled “Enabling the Packager”](https://docs.mediakind.com/beam/packager/#enabling-the-packager)

The Packager function is not enabled by default on a MK.IO Beam server. You need to enable live packaging in the server’s general parameters before creating Packager services. See [Enable Packager](https://docs.mediakind.com/beam/packager/enable-packager) for instructions.

## Common use cases

[Section titled “Common use cases”](https://docs.mediakind.com/beam/packager/#common-use-cases)

- Delivering live events over OTT platforms to web and mobile players.
- Publishing live channels with DVR for catch-up viewing.
- Producing multi-format output from a single live source.

To start configuring outputs, see [Manage Catalogs, outputs and thumbnails](https://docs.mediakind.com/beam/packager/catalog).