# Source: https://docs.mediakind.com/beam/release-notes

# MK.IO Beam Release Notes

## MK.IO Beam 1.14.0.1

[Section titled “MK.IO Beam 1.14.0.1”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-11401)

4th September 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features)

- Support for reception workflows using the Essentials UI
- Automatic CPIX key rotation. See [Key Rotation](https://docs.mediakind.com/beam/packager/parameters/hls-or-dash-over-cmaf/#compatible-cpix-ext-key)
- BEAM ISO to support Servers with hardware RAIDed Disks. See [RAID and FakeRAID configuration](https://docs.mediakind.com/beam/system-admin/iso-installation/raid-configuration)

## MK.IO Beam 1.13.0.7

[Section titled “MK.IO Beam 1.13.0.7”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-11307)

21st August 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-1)

- Addition of an RT (reliable transport) failover group for high availability distributed deployments
- Manual CPIX key rotation

## MK.IO Beam 1.12.0.7

[Section titled “MK.IO Beam 1.12.0.7”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-11207)

17th July 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-2)

- Essentials UI for new customers only
- Ability to change the audio line-up on a Receiver service without interruption in the video output for SDI output only
- Null Packet Removal from Multiplexer transport stream output bitrate allowing users to remove NULL packets (PID 0x1FFF) from the MPEG transport stream output

## MK.IO Beam 1.11.0.4

[Section titled “MK.IO Beam 1.11.0.4”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-11104)

2nd July 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-3)

- SMPTE ST 2110 end to end latency reduced to match SDI performance
- Packager - CPIX key and credential support
- Support for multiple UHD ST2110 outputs on a single Mellanox card

## MK.IO Beam 1.10.0.2

[Section titled “MK.IO Beam 1.10.0.2”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-11002)

29th May 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-4)

- Add Support for 100G ST 2110 Network Card in MK.IO Beam
- Add support for ConnectX-6 Lx EN Adapter Card
- Make 3pp software persistent over upgrade
- Ability to enter a Stream ID for a SRT session

## MK.IO Beam 1.9.0.5

[Section titled “MK.IO Beam 1.9.0.5”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1905)

24th April 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-5)

- Configuration of IP settings of bonded interfaces on the UI
- Creation and deletion of VLAN interfaces on the UI
- Configuration of IP settings of VLAN interfaces on the UI
- Configuration of route metrics on the UI to allow support for multiple default gateways
- Configuration of jumbo frames on the UI to simplify configuration of JPEG-XS encode
- Configuration of static routes on the UI
- 8 tuners supported on the 4-port RF input card (Digital Devices SX8)
- Add information from Dell SupportAssist to Beam support package

## MK.IO Beam 1.8.0.3

[Section titled “MK.IO Beam 1.8.0.3”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1803)

27th March 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-6)

- Add H.264 High to the list of Contribution codecs
- Removal of the four service limitation for SMPTE ST 2110 output
- Support for down conversion modes: 1080i to 720p, 1080P to 720P, 720P to 1080i, UHD to 1080i, UHD to 1080P, UHD to 720P
- Beam with distributed headends including Packaging
- Static routes configuration now retained on upgrade

## MK.IO Beam 1.7.0.4

[Section titled “MK.IO Beam 1.7.0.4”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1704)

27th February 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-7)

- ST2022-6 output over IP
- UI configuration support for HTTPS Proxy
- Add Support for Multi-Payload SMPTE ST 2110-40 VANC Reception
- Reception – support for super low delay mode for 1080i video sources
- Packager redundancy in Beam using a failover group
- MK.IO should pick up RF cards from Beam appliances and add them to the ‘Device’ page similar to ‘IP’ and ‘SDI/ASI’
- BEAM with HA Head ends - Support for Multiplexer redundancy

## MK.IO Beam 1.6.0.5

[Section titled “MK.IO Beam 1.6.0.5”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1605)

30th January 2026

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-8)

- Support for router control for headend deployments of MK.IO Beam
- HDR/SDR custom Look-up Table (LUT) upload and selection
- It is now possible to enable/disable Packaging on the MK.IO Beam UI
- CPIX integration using HMAC for live events and linear channels
- Include alarms exposed to Prometheus so they can be viewed on a remote Grafana instance
- Support for UHD decode over SMPTE ST 2110 output
- BEAM with HA Head ends - Support for Packager and EL on separate servers
- Provide HTTPS access to Packaged output
- Splicing now supported in Distributed Head end deployments

## MK.IO Beam 1.5.0.4

[Section titled “MK.IO Beam 1.5.0.4”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1504)

27 November 2025

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-9)

- Introduction of the X20 server
- Live to live splicing is now supported
- Support for backup and apply of device configurations from MK.IO

## MK.IO Beam 1.4.0.3

[Section titled “MK.IO Beam 1.4.0.3”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1403)

31 October 2025

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-10)

- Support for high availability headend deployments with Live Encoding
- Support for SD resolutions with SMPTE ST 2110 output
- Improvements to decode latency
- Bonding capability for all ports

## MK.IO Beam 1.3.0.0

[Section titled “MK.IO Beam 1.3.0.0”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1300)

9 October 2025

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-11)

- Introduction of X40 server
- Support for multiple CI option cards in a single chassis
- Software decode supports HDR to SDR dynamic range conversion
- Software decode support for additional sub-sampled resolutions for 720p- and 1080i-based content
- Support for running MK.IO Beam in a VM for controller use cases on ESXI virtualization
- Support for installing the MK.IO Beam software ISO via BMC or iDRAC
- PTP, clock source and IGMP parameters can be configured on the UI
- Network status information available on the UI

## MK.IO Beam 1.2.0.1

[Section titled “MK.IO Beam 1.2.0.1”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1201)

5 August 2025

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-12)

- Introduction of C30 and H70 servers
- Server pair 1+1 redundancy for headends
- Support for multiple Digital Devices RF input cards in a single chassis
- Receiver service support for AMD CPUs
- Simplification of JPEG-XS encode configuration
- Support for ASI output on Dektec DTA-2127

## MK.IO Beam 1.1.0.2

[Section titled “MK.IO Beam 1.1.0.2”](https://docs.mediakind.com/beam/release-notes/#mkio-beam-1102)

23 June 2025

### New features

[Section titled “New features”](https://docs.mediakind.com/beam/release-notes/#new-features-13)

- Support for E50 and E60 servers for contribution encode and headend use cases.
- 4:2:2 8-bit and 10-bit progressive and interlaced H.264 and H.265 HD software encode.
- RF input and SDI output via Dektec DTA-2127 RF input option card.
- 4:2:2 and 4:2:0 H.265 UHD software decode.
- 4:2:2 10-bit SMPTE ST 2110 output with software decode.
- The Dektec DTA-2178 8-port SDI option card is now supported with reception. It is possible to output up to 8 baseband outputs with one Dektec DTA-2178 card and more with multiple DTA-2178 cards.
- Hostname, IP, NTP, firewall zones, DHCP and DNS parameters can be configured on the MK.IO Beam web UI.
- New “Super Low” decode delay mode introduced for lower latency decoding.
- Server health monitoring now available.
- Support for active-backup redundant bonded network management interfaces.