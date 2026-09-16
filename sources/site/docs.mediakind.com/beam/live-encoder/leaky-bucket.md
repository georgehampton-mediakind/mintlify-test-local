# Source: https://docs.mediakind.com/beam/live-encoder/leaky-bucket

# Leaky bucket concept

Leaky bucket is a flow-control mechanism designed to reduce the effect of the inevitable variability in input data streams as they are “injected” into communication networks.

The leaky bucket algorithm performs the following functions:

- It controls what the encoder can inject into the network.
- It prevents the data “bucket” from overflowing by automatically regulating the bit rates in the event that the encoder generates too much data or very complex data.
- It prevents “burstiness” in the input stream, ensuring a smooth, even data flow.

![leaky bucket](https://docs.mediakind.com/_astro/leaky_bucket.DzD-5Yei_mhzLU.webp) _Leaky bucket algorithm_