# Source: https://docs.mediakind.com/beam/reception/configure-feed-components

# Configure the feed components

After a feed has been created, each service within the feed must be individually configured to create the entire MK.IO Beam configuration. Thus, you will configure:

- [the Receiver service](https://docs.mediakind.com/beam/receiver)
- optionally [the Multiplexer service](https://docs.mediakind.com/beam/multiplexer)
- optionally [the Live Encoder service](https://docs.mediakind.com/beam/live-encoder/configure)

The Reliable Transport service is not included in all of the MK.IO Beam feed templates. It can be added separately via the **Services** page. See [Reliable Transport Configuration](https://docs.mediakind.com/beam/reception/configure-feed-components/reliable-transport)

When editing service parameters, do not modify any interfaces which have been configured to use the “tap0” or “lo” interfaces as those are used internally to pass data between the services.