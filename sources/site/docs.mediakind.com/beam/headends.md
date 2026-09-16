# Source: https://docs.mediakind.com/beam/headends

# MK.IO Beam for headends

MK.IO Beam modernizes traditional broadcast and streaming headend workflows with a cloud-connected, software-based approach. Running on standard COTS servers, it delivers cost-effective, portable, and programmable live video processing. Fully integrated with the MK.IO cloud orchestration layer, MK.IO Beam enables centralized control, monitoring, and software lifecycle management.

Its flexible commercial models, including pay-as-you-go, multi-year enterprise licenses, and perpetual licenses ensure streamlined procurement and scalability for any deployment.

## Common Workflows

[Section titled “Common Workflows”](https://docs.mediakind.com/beam/headends/#common-workflows)

## Architecture & Redundancy

[Section titled “Architecture & Redundancy”](https://docs.mediakind.com/beam/headends/#architecture--redundancy)

[High Availability Distributed](https://docs.mediakind.com/beam/headends/high-availability)

### High Availability Distributed

Configure 1+1 or N+M redundancy for encoders.

[Server Pair Setup](https://docs.mediakind.com/beam/headends/server-pair)

### Server Pair Setup

Configure main and backup server pairs.

## Encoding & Processing

[Section titled “Encoding & Processing”](https://docs.mediakind.com/beam/headends/#encoding--processing)

[Configure Live Encoding](https://docs.mediakind.com/beam/live-encoder)

### Configure Live Encoding

Set up video profiles and audio processing.

[SCTE-35 Blackouts](https://docs.mediakind.com/beam/live-encoder/configure/encoding/blackout-encoding)

### SCTE-35 Blackouts

Manage content replacement and regional blackouts

[Logo Insertion](https://docs.mediakind.com/beam/live-encoder/configure/encoding/logo-insertion)

### Logo Insertion

Burn in station logos or watermarks

## Multiplexing

[Section titled “Multiplexing”](https://docs.mediakind.com/beam/headends/#multiplexing)

[Configure Transport Streams](https://docs.mediakind.com/beam/multiplexer/configure/transport-stream)

### Configure Transport Streams

Create MPTS outputs

[Statistical Multiplexing](https://docs.mediakind.com/beam/multiplexer/configure/statmux-pool)

### Statistical Multiplexing

Set up Statmux pools to optimize bandwidth across multiple channels.

[Bandwidth Policing](https://docs.mediakind.com/beam/multiplexer/configure/bandwidth-policy-group)

### Bandwidth Policing

Enforce bitrate limits on output groups.

## Packaging

[Section titled “Packaging”](https://docs.mediakind.com/beam/headends/#packaging)

[Configure HLS/DASH Output](https://docs.mediakind.com/beam/packager/hls-dash-over-cmaf-output)

### Configure HLS/DASH Output

Set up ABR ladders and manifest generation.

[Live packaging services](https://docs.mediakind.com/beam/packager/live-packaging-service)

### Live packaging services

Configure live packaging services

## Layers

[Section titled “Layers”](https://docs.mediakind.com/beam/headends/#layers)

The solution has three main layers:

- The **management layer**: Addresses configuration and control, deployment/orchestration of the applications, entitlement licensing and monitoring of the headend in a centralized way.
- The **processing layer**: Processing applications (encoding, packaging, multiplexing).
- The **infrastructure layer**: Solution can be deployed in an IT datacenter.

These three layers are glued together by the common micro-services architecture of all the MediaKind components. Each layer comprises multiple components as described below.

![aquila high solution level](https://docs.mediakind.com/aquila-img/aquila-high-solution-level.png)

MK.IO Beam for streaming and MK.IO Beam for broadcast use components to address the different processing listed below:

- Management and configuration.
- Live video service encoding.
- Live radio service encoding.
- Live video service packaging (MK.IO Beam for streaming only)
- Live video service multiplexing
- Reliable Transport

### Management Layer

[Section titled “Management Layer”](https://docs.mediakind.com/beam/headends/#management-layer)

The management layer is the control/command of the whole headend. This is the single-entry point to access all functions of the headend. This interface (UI & API) is designed to:

- Deploy all the applications on the nodes which are part of the system.
- Configure the different services and store the configuration data.
- Control services (start, stop, failover, server assignation).
- Aggregate the logs and metrics from all nodes and applications. To provide all these features, the management layer includes the controller, and the deployment toolkit. To avoid any impact in case of fault in the management layer, it is designed to be high availability. The recommendation is to deploy three instances of this management node to replicate the critical component and avoid any downtime.

#### Configuration, Control and Monitoring

[Section titled “Configuration, Control and Monitoring”](https://docs.mediakind.com/beam/headends/#configuration-control-and-monitoring)

MK.IO Beam for streaming and MK.IO Beam for broadcast benefit from a single entry-point for all operations. MediaKind management and configuration component is the centralized point to configure and command the headend.

It is built upon the following principles:

- **Centralized configuration, control and monitoring** for MediaKind SW components that provides an immediate overview of an entire head-end system.
- A **service driven approach** for configuration, control and monitoring providing an optimized granularity compared to device level.
- A **flexible** service allocation: selection of the resource, combined with a floating licensing model.
- A solution that allows production teams to leverage preparation activities in the lab, and during pre-production using **template** mechanisms.
- A **micro-services design** matching different deployment patterns, from a single stand-alone node to a distributed and redundant configuration.
- A **Web UI** applicable for all supported products, with embedded help solutions aiming at reducing training investment. Note: Access via **REST API** is also provided to offer network integration capabilities.

The management nodes gather all the metrics and logs from the full headend to provide a global health of the system. This monitoring layer provides information on the deployed applications and the infrastructure the headend is running on.

### Processing Layer

[Section titled “Processing Layer”](https://docs.mediakind.com/beam/headends/#processing-layer)

The processing layer comprises one or multiple components running on any infrastructure. To increase reliability, this layer is designed to be completely independent of the management layer. This independence ensures continuous processing even if the connection with the management layer is lost.

#### Live Video Service Encoding

[Section titled “Live Video Service Encoding”](https://docs.mediakind.com/beam/headends/#live-video-service-encoding)

MediaKind brings together 25 years of video compression experience to deliver the highest quality, any screen software applications for live video encoding and transcoding. MediaKind’s continued investment and focus on the latest compression technologies ensures that the encoding component will efficiently deliver the best picture quality over bandwidth in all encoding environments and networks. This component is ideal for any real-time broadcast application, including IPTV, cable, DTH and Internet TV. As a service-oriented software solution designed to address today’s key technological and operational challenges:

- Use one software headend for all video applications: DTH/Satellite, IPTV, Cable and Multiscreen.
- Provide the highest video quality by leveraging the latest compression standards (MPEG-2, MPEG-4 AVC & HEVC).
- Optimize OPEX and CAPEX going to full IP and leverage the latest IT technologies to reduce infrastructure and maintenance costs.
- Reduce operational complexity with a service oriented centralized UI (Single point of entry).
- Deploy with confidence by leveraging guaranteed performances and redundancy schemes.

#### Live Video Service Packaging

[Section titled “Live Video Service Packaging”](https://docs.mediakind.com/beam/headends/#live-video-service-packaging)

The packaging component is a powerful solution designed for the distribution, personalization, and monetization of multiscreen video services. You can also deploy it across your network to drastically reduce the bandwidth, storage or equipment footprint usually required to distribute video services securely to smartphones, tablets, connected TVs, game consoles, PCs, or OTT Set- Top-Boxes. MediaKind architecture is extremely modular and can scale according to your needs. It combines the following key functions:

- Stream ingest with efficient buffer and storage management.
- Just in Time Packaging (JITP) and encryption with a wide variety of formats and DRMs.
- Highly scalable origin server.

#### Reliable Transport (SRT, Zixi, RIST)

[Section titled “Reliable Transport (SRT, Zixi, RIST)”](https://docs.mediakind.com/beam/headends/#reliable-transport-srt-zixi-rist)

Another complexity for broadcast operations is how to send or retrieve the content to/from a headend via private or public IP networks The integration of SRT, RIST, and Zixi as a component of the MK.IO Beam for streaming and MK.IO Beam for broadcast solutions allows an easy to setup, and secure link for reliably passing data.

#### Stream Conditioning

[Section titled “Stream Conditioning”](https://docs.mediakind.com/beam/headends/#stream-conditioning)

The **Stream Conditioning** can be used with **Live Encoder** to trigger functions such as SCTE-35 rewrite, animation/text crawling, slate/logo insertion, live-to-file and file-to-live video switching using operation type **Video clip**.

#### Viewing Policy Manager

[Section titled “Viewing Policy Manager”](https://docs.mediakind.com/beam/headends/#viewing-policy-manager)

The **Viewing Policy Manager** is used to configure the ingest of programming events schedules. This has limited functionality in the current version of MK.IO Beam.

## Security

[Section titled “Security”](https://docs.mediakind.com/beam/headends/#security)

### Access & Security Configuration

[Section titled “Access & Security Configuration”](https://docs.mediakind.com/beam/headends/#access--security-configuration)

Controller is the single-entry point for any action via the UI or the API. A virtual IP is defined to always redirect the requests to the active controller when the solution is deployed in 1+1 redundancy.

![aquila security access](https://docs.mediakind.com/aquila-img/aquila-security-access.png)

It is possible and recommended to activate the HTTPS connection and to use the API in a secured way to secure the access to the system. By default the user management is activated to access the UI.

This user management can be connected to an LDAP service for better integration in your system.

### OS Security

[Section titled “OS Security”](https://docs.mediakind.com/beam/headends/#os-security)

All the products are software products running on Linux operating systems. To ensure the security of the solution MediaKind uses Nessus® vulnerability scanner tool to highlight any security risk. Based on the results, MediaKind regularly (every two months) propose “security packages” to secure the OS the MediaKind products are running on. Each security package will upgrade some of the libraries present on the OS to ensure products are using the secured version of these. Products are tested with these security packages installed to ensure their behavior with the latest libraries. OS should not be upgraded outside of these security packages.