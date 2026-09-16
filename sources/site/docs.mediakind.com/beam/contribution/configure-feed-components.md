# Source: https://docs.mediakind.com/beam/contribution/configure-feed-components

# Configure the feed components

After a feed has been created, each service within the feed must be individually configured to create the entire MK.IO Beam configuration. Thus, you will configure:

- [the Live Encoder service](https://docs.mediakind.com/beam/contribution/configure-feed-components/live-encoder)
- optionally [the Multiplexer service](https://docs.mediakind.com/beam/multiplexer)
- optionally [the Satellite Modulator](https://docs.mediakind.com/beam/contribution/configure-feed-components/satellite-modulator)

The Reliable Transport service is not included in any of the MK.IO Beam feed templates. It can be added separately via the **Services** page. See [Reliable Transport Configuration](https://docs.mediakind.com/beam/contribution/configure-feed-components/reliable-transport)

When editing component parameters, do not modify any interfaces which have been configured to use the “tap0” or “lo” interfaces as those are used internally to pass data between the services.