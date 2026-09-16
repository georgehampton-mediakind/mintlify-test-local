# Source: https://docs.mediakind.com/beam/contribution/configure-feed-components/reliable-transport

# Configure a Reliable Transport service

Although the Reliable Transport service is not included in all of the MK.IO Beam feed templates, a Reliable Transport service can be added separately and connected to the input or output of a feed. For example, a Reliable Transport service can be added to the output of an Encoder and Multiplexer feed to provide Reliable Transport output.

To create a Reliable Transport service, see [how to create a new Reliable Transport service](https://docs.mediakind.com/beam/reliable-transport/service-management#create-a-new-reliable-transport-service).

If configuring a Reliable Transport service to provide Reliable Transport output, i.e. taking the output from another service and providing a Reliable Transport output, ensure that:

1. In the **Output** section, set the **Output Mode** to **SRT Caller**.

2. Configure the **Network Interface**, **Stream Address** and **Port** with the same information as the upstream service’s output.

 ![ce1 srt service](https://docs.mediakind.com/ce1-img/ce1_srt_service.png) _Reliable Transport configuration example_