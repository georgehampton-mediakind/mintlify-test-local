# Source: https://docs.mediakind.com/beam/ts-splicer/output-configuration

# Output streams configuration

TS Splicer enables the duplication of a configured input service multiple times to manage distribution to various geographical areas, zones (also referred to as DMA or Designated Market Area in the US) or content partners. Content substitution or modification can happen in a differentiated way for each output group defined.

## Creating an output group

[Section titled “Creating an output group”](https://docs.mediakind.com/beam/ts-splicer/output-configuration/#creating-an-output-group)

An output group represents a collection of TS streams, all behaving identically. For instance, if an output group dedicated to a particular zone initiates a blackout, all TS streams within this group will adhere to the blackout. Multiple TS streams might be necessary for redundancy. From an ad placement perspective, only one ESAM or ad call per output group is made.

- Click the pencil icon to edit the service settings.
- Navigate to the **Outputs** tab.
- To create a new output group, click the **Add output group** button and assign a name.

For clarity, consider using meaningful names like geographical identifiers (VIRD, DMA…) or the content partner name.

- Click **OK** to validate.

## Adding MPEG2-TS Streams to an output group

[Section titled “Adding MPEG2-TS Streams to an output group”](https://docs.mediakind.com/beam/ts-splicer/output-configuration/#adding-mpeg2-ts-streams-to-an-output-group)

TS Splicer supports the creation of MPEG2-TS outputs, whether they’re multicast MPEG2-TS over UDP or utilize a RIST listener.

**Configuration specific to MPEG2-TS/UPD output type**

- **Type:** Select _MPEG2 TS/UDP._
- **Network interface:** Specify the network interface used for the output stream distribution.
- **Source address:** IP address marked as the source in the IPv4 header.
- **Source port:** Designated source port in the IPv4 header.
- **Stream address:** Unicast or multicast IPv4 address for output stream distribution.
- **Stream port:** Port specified as destination in the IPv4 header.

**Configuration specific to RIST output type**

- **Type**: Select _RIST Listener._
- **Network interface**: Specify the network interface used to distribute the output stream.
- **Listener port**: Port to listen on for RIST connections.

**Common MPEG-2 TS parameters**

Once specific output settings are configured, configure the following parameters for your MPEG-2 TS output:

- **Standard:** MPEG-2 TS information is encapsulated to fit the ATSC or the DVB standard.
- **PMT PID:** Packet identifier of the Program Map Table (PMT).
- **PCR PID:** Input the packet identifier for the Program Clock Reference, utilized for synchronizing audio and video packets. If unspecified, the PCR PID defaults to the output Video PID.
- **Target PCR period:** The target time between two PCR information.
- **Target PSI period:** The target time between two PSI information.
- **Program number:** Associated to a specific program. Commonly used in MPTS to differentiate programs within the same MPEG-2 TS stream.
- **Service name:** Service added to the service description table (SDT).
- **Service provider:** Service provider name added to the service description table (SDT).

The last section of the output configuration allows for defining which Elementary Stream (ES) you want to convey to your output, offering PID rewriting capabilities:

- Select the video, audio and metadata streams to include in your output.
- Use the PID column to specify a PID override.
- Click OK to validate the configuration.