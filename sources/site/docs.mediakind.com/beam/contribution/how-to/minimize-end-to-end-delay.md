# Source: https://docs.mediakind.com/beam/contribution/how-to/minimize-end-to-end-delay

# Minimize the end-to-end delay for contribution

In feed templates for contribution use cases, the default configuration for the **Live Encoder** service is already optimized for low delay.

If a Multiplexer service is present, this will add delay. If optimizing for low delay, consider whether a Multiplexer service is required.

If a Multiplexer service is required, delay can be reduced by adjusting the following parameters in the [Mux Advanced Settings](https://docs.mediakind.com/beam/multiplexer/parameters/stream-processing#mux-advanced-settings) section:

- **Input jitter buffer latency** can be reduced to a minimum of **40** ms.
- If **not** using encryption, **Scrambling latency** can be reduced to a minimum of **10** ms.
- If using ASI output with a Dektec 2174b or 2178 card, **ASI output buffer latency** can be reduced to a minimum of **50** ms.