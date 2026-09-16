# Source: https://docs.mediakind.com/beam/ts-splicer

# TS Splicing

A **TS Splicer** (Transport Stream Splicer) dynamically substitutes content within a live MPEG-2 Transport Stream without decoding and re-encoding the video. It works at the compressed domain, swapping content from one source with content from another in response to SCTE-35 trigger signals or a schedule.

MK.IO Beam’s TS Splicer enables seamless insertion, replacement, or switching of MPEG-TS content within a live workflow. It supports alternate content and blackout management as well as linear ad insertion, maintaining stream continuity and standards compliance throughout.

## Alternate content and blackout

[Section titled “Alternate content and blackout”](https://docs.mediakind.com/beam/ts-splicer/#alternate-content-and-blackout)

TS Splicer uses linear stream switching inline with CableLabs ESAM specifications (version 2013) to manage alternate content and blackout scenarios.

Content substitution can be initiated in two ways:

- **Time-based:** The POIS (Placement Opportunity Information Service) instructs TS Splicer to switch to blackout or alternate content at a specified time. In this mode, known as ESAM out-of-band, no SCTE-35 signal is required.

- **Signal-based:** On detecting an SCTE-35 signal, TS Splicer sends an ESAM request for each configured output group. Each output group has distinct ESAM parameters, so the POIS reviews its schedule and cross-references it with the SCTE-35 signal. If there is a match, the POIS directs the output group to switch to blackout or alternate content as defined in the schedule.

Example use cases:

- **Sport blackout:** A sports channel is replicated across multiple geographical areas. Although each area receives an identical stream, unique ESAM parameters characterize each. Based on a pre-determined schedule, certain regions enable blackout to comply with rights restrictions or regional viewing guidelines.
- **Content regionalization:** At specific times, a national channel distributes localized content to different regions.

See [Placement configuration](https://docs.mediakind.com/beam/ts-splicer/placement) for how to set up blackout and alternate content rules.

## Linear ad insertion

[Section titled “Linear ad insertion”](https://docs.mediakind.com/beam/ts-splicer/#linear-ad-insertion)

Linear ad insertion replaces a segment of the primary content with an advertisement in response to SCTE-35 triggers. Similarly to the blackout mechanism, an input channel is duplicated based on the number of geographical zones it serves.

TS Splicer supports three ad insertion modes:

- **SCTE-30:** Communication with legacy ad servers using the SCTE-30 standard.
- **VAST:** Connects directly to a digital Ad Decision Server (ADS), unifying ad insertion for both broadcast and OTT workflows.
- **ESAM (extended):** Uses a MediaKind extension of the ESAM format that returns a content list rather than a single alternate content ID. This mode combines at-the-edge linear schedule ingest with splicing. MK.IO Beam manages the linear schedule ingest, while TS Splicer handles the splicing.

## Dual output prevention

[Section titled “Dual output prevention”](https://docs.mediakind.com/beam/ts-splicer/#dual-output-prevention)

When two TS Splicer instances are deployed in an active/active configuration, MK.IO Beam provides dual output prevention using the Multicast Guard Protocol (MGP). This ensures only one instance has its output enabled at any time, preventing duplicate multicast on the same network.

## Where TS Splicer fits in a workflow

[Section titled “Where TS Splicer fits in a workflow”](https://docs.mediakind.com/beam/ts-splicer/#where-ts-splicer-fits-in-a-workflow)

A TS Splicer sits downstream of encoding, receiving a live transport stream and delivering conditioned output to distribution. For workflows where SCTE-35 event management, signal normalization, and rewriting are needed before the TS Splicer, MK.IO Beam’s [SCTE-35 Rewriting](https://docs.mediakind.com/beam/stream-conditioning) capability handles that upstream layer.