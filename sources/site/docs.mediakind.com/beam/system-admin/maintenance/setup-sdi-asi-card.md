# Source: https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card

# Set up SDI/ASI cards

ASI/SDI cards can be configured for different modes of operation. For example, if there are two 4-port ASI/SDI cards in the same chassis, one card can be configured for SDI/ASI output and the other card for HD or UHD SDI input.

## Set up a 4-port SDI/ASI card

[Section titled “Set up a 4-port SDI/ASI card”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#set-up-a-4-port-sdiasi-card)

The following three modes are supported.

#### 4 ASI/HD-SDI/SD-SDI

[Section titled “4 ASI/HD-SDI/SD-SDI”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#4-asihd-sdisd-sdi)

- 4 independent 3G-SDI/ASI ports. Each port can be either SDI or ASI, input or output.

Use this mode for 4 independent SDI/ASI ports, each of which can be an input or an output.

#### 1 UHD 12G or Quad Link 3G

[Section titled “1 UHD 12G or Quad Link 3G”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#1-uhd-12g-or-quad-link-3g)

- Port 1 SDI input/output (up to UHD 12G-SDI) or ASI input/output, **or**
- Ports 1-4 SDI input/output for Interleaved mode for UHD.

For contribution or headend use cases, use this mode for UHD SDI input. For reception use cases, use this mode for UHD SDI output.

#### 1 UHD 12G with downconversion

[Section titled “1 UHD 12G with downconversion”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#1-uhd-12g-with-downconversion)

This mode is not recommended for contribution or headend use cases. For reception use cases, use this mode for UHD SDI output with downconversion.

## Set up an 8-port SDI/ASI card

[Section titled “Set up an 8-port SDI/ASI card”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#set-up-an-8-port-sdiasi-card)

The following three modes are supported.

#### 8 ASI/HD-SDI/SD-SDI

[Section titled “8 ASI/HD-SDI/SD-SDI”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#8-asihd-sdisd-sdi)

- 8 independent 3G-SDI/ASI ports. Each port can be either SDI or ASI, input or output.

Use this mode for 8 independent SDI/ASI ports, each of which can be an input or an output.

#### Dual 4K channels over 12G-SDI or Quad link

[Section titled “Dual 4K channels over 12G-SDI or Quad link”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#dual-4k-channels-over-12g-sdi-or-quad-link)

- Port 1 SDI input/output (up to UHD 12G-SDI) or ASI input/output, **or**

- Ports 1-4 SDI input/output in Interleaved mode for UHD.

- Port 5 SDI input/output (up to UHD 12G-SDI) or ASI input/output, **or**

- Ports 5-8 SDI input/output in Interleaved mode for UHD.

For contribution or headend use cases, use this mode for UHD SDI input. For reception use cases, use this mode for UHD SDI output.

#### Dual 12G-SDI with ASI/SDI side channel

[Section titled “Dual 12G-SDI with ASI/SDI side channel”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#dual-12g-sdi-with-asisdi-side-channel)

This mode is not recommended for contribution or headend use cases. For reception use cases, use this mode for UHD SDI output with ASI/SDI output side channel.

## To set the mode of operation of an SDI/ASI card

[Section titled “To set the mode of operation of an SDI/ASI card”](https://docs.mediakind.com/beam/system-admin/maintenance/setup-sdi-asi-card/#to-set-the-mode-of-operation-of-an-sdiasi-card)

1. From the MK.IO Beam web UI, select the **Appliance** tab.
2. Select the **ASI/SDI interface** tab.
3. Select the **Slot** tab corresponding to the SDI/ASI card. If more than one card is present, there will be a separate slot tab for each card.
4. Select the **ASI/SDI mode** from the drop-down menu.