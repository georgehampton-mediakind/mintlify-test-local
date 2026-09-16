# Source: https://docs.mediakind.com/beam/reception/delay-modes

# Delay modes

## Contribution decoding delay modes (latency)

[Section titled “Contribution decoding delay modes (latency)”](https://docs.mediakind.com/beam/reception/delay-modes/#contribution-decoding-delay-modes-latency)

The modes described here are used to configure decoding delay, or latency of the Contribution decoder. The delay modes affect the delay between the PCR/PTS relationship and delaying picture display (when compared to the system clock reference).

**Delay modes:**

- **Standard:** This is the default value. Standard mode allows using all encoders, in all modes.
- **Low:** This is the **recommended setting for most contribution link use cases.** You can also use this mode in any context where a low delay is required.
- **Super Low:** This is the **recommended setting for simple contribution links when using TS input with SDI output** where the lowest delay is required.

**Low** delay and **Super Low** delay modes have been designed and tested with MK.IO Beam encoders to ensure an optimized error-free minimum end-to-end delay. Post-processing operations in the receiver such as video scaling or HDR/SDR conversion will add to the overall processing time and may not be compatible with these delay modes.

If a problem occurs trying to decode a valid input transport stream, please try the **Standard** delay mode before raising a support request.

Additional input processing, such as descrambling or SMPTE ST 2022-7 input, increases overall latency across all delay modes in the _Receiver_ service.

### Setting delay mode

[Section titled “Setting delay mode”](https://docs.mediakind.com/beam/reception/delay-modes/#setting-delay-mode)

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image].

2. Open the **Decoding** tab in the **Parameters** window.

3. Select a **Delay mode.**

 ![view Delay mode setting](https://docs.mediakind.com/rx1-img/view_delay_mode_cp.png)

4. Click **Save and Continue** to apply change.

### Considerations when using Super Low delay mode

[Section titled “Considerations when using Super Low delay mode”](https://docs.mediakind.com/beam/reception/delay-modes/#considerations-when-using-super-low-delay-mode)

- **Super Low** delay mode is only guaranteed to work with the MK.IO Beam encoder. The encoder configuration needs to be optimized for use with **Super Low** delay mode.
- 1080i25/29.97 inputs are not supported with **Super Low** delay mode.
- Dolby Digital decode requires approximately 15ms of additional processing time which will extend the delay when **Super Low** delay mode is selected. Dolby Digital passthrough is not affected.