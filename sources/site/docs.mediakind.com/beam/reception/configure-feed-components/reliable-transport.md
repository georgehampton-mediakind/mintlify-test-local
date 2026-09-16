# Source: https://docs.mediakind.com/beam/reception/configure-feed-components/reliable-transport

# Configure a Reliable Transport service

Although the Reliable Transport service is not included in any of the MK.IO Beam feed templates, a Reliable Transport service can be added separately and connected to the input or output of a feed. For example, a Reliable Transport service can be added to the input of a Receiver + Multiplexer feed to ingest Reliable Transport input to the MK.IO Beam device.

To create a Reliable Transport service, see [how to create a new Reliable Transport service](https://docs.mediakind.com/beam/reliable-transport/service-management#create-a-new-reliable-transport-service).

If configuring a Reliable Transport service to ingest a Reliable Transport input and provide a TS output to other services running on the MK.IO Beam device, ensure that the upstream service is configured with the **Network Interface**, **Stream Address** and **Port** from the output of the Reliable Transport service.