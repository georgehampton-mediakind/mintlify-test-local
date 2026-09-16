# Source: https://docs.mediakind.com/beam/live-encoder/parameters/general

# General configuration parameters

## General parameters

[Section titled “General parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#general-parameters)

| Parameter | Description |
| --- | --- |
| Name | Service name |
| Template | Live encoding template that used to create a new service. If no template is selected, service is created from scratch. |
| Hardware acceleration mode (Intel QSV) | Activate Intel QSV to accelerate video input, video processing and video encode. If acceleration is enabled some features are unavailable. 
Full acceleration is only available for Input types MPEG2 TS/UDP and SDI.Possible values:<br>\- _None_: Default mode, no hardware acceleration.<br>\- _Fully accelerated service_: It corresponds to the legacy Hardware acceleration mode.<br>\- _Software input processing, accelerated video processing and encode_: It enables you to run most of the input processing tools on the CPU. For example, FMTS watermarking.<br>\- _Accelerated encode only_: It runs the whole software processing graph followed by a QSV encoder, most features that are available on software services are available in this mode. Only a few options that applied to the encoder itself are not available.<br>**Note:** When selected, some parameters are grayed out in the other tabs. |
| QSV Device | Define the QSV/SG1 device to run service. If running on QSV previous generation (Intel E3 CPU), select device 1. For QSV new generation (SG1/GPU), select the suitable number. |
| ESAM server network interface | Network interface used for ESAM outofband messages applied to the entire service.<br>**Note:** To configure the ESAM out-of-band, go to the [**Input**](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata) tab. |
| SCTE-104 server network interface | Network interface used for SCTE104 outofband messages applied to the entire service. To modify, open the General tab. |

## Automation

[Section titled “Automation”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#automation)

| Parameter | Description |
| --- | --- |
| Activate | Define an automation system to trigger events with the encoder. The Automation system can be any external Automation System. The Automation System can use either SCTE 104 and SCTE 30 interfaces or ESAM interfaces. |
| Interface Type | Protocol used with automation system. |
| POIS URL | Only available with **ESAM**.<br>URL for the POIS (Placement Opportunity Information Service) (if any). |
| POIS network name | Only available with **ESAM**.<br>ID shared with the POIS for the current channel. |
| POIS zone identity | Only available with **ESAM**.<br>The area ID for this channel distribution. Commonly used for regionalization. |
| Assets directory | You can specify the directory where assets are stored. Must be an absolute directory path (starting by '/'). For logo and blackout files, an http url is also possible. |

## Clock synchronization

[Section titled “Clock synchronization”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#clock-synchronization)

| Parameter | Description |
| --- | --- |
| Program Clock Reference (PCR) | Reference clock used in the encoder. By default, the encoder is locked to the input clock available in the source. 
The external NTP clock is not compatible with the service synchronization feature. 
The external analogue genlock signal (bi and trilevel sync signals) is only compatible by services using SDI input with the correct SDI card. |

## Synchronization of services

[Section titled “Synchronization of services”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#synchronization-of-services)

| Parameter | Description |
| --- | --- |
| Activate | Define network parameters for the synchronization between two encoders. The synchronization is used either for 1+1 availability or split encoding (distribution of one ABR channel over several HW resources). |
| Protocol | Specifies which protocol will be used to ensure the synchronization<br>\- **Multicast** is recommended for on-prem deployments.<br>\- **Redis** is recommended for cloud deployments to ensure inter-region synchronization of the encoder, but it can also be applied for on-prem deployments. |
| Mode | Specifies which streams will be synchronized. Only 'All' (audio + video + subtitles + metadata) is available. |
| Pool name | Unique ID to identify the services that need to be synchronized together. |
| Network interface(s) | List of names of the network interfaces used for synchronization. Use a comma to separate. Only one is mandatory. Two maximum can be set. |
| Address | Multicast address used for synchronization. |
| Port | Port used for synchronization. |
| Output source address | IP address specified as source in the IPv4 header for synchronization communication. If empty, source address of network interface from which packets are sent is used. |
| IGMPv3 source filtering | IGMP source IP address. List of addresses allowed in IGMPv3. Use a comma to separate. |

## Dual output prevention

[Section titled “Dual output prevention”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#dual-output-prevention)

| Parameter | Description |
| --- | --- |
| Network interface | The name of the network interface used for dual output prevention. |
| Address | Multicast address used for dual output prevention. |
| Port | Port used for dual output prevention. |
| Group name | A group gathers a pair of encoders for which dual output prevention is managed. The group name field identifies the group.<br>**Format:** String respecting the following rules \[azAZ09\_\]{1,32} |

## Server variant configuration

[Section titled “Server variant configuration”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#server-variant-configuration)

### Redundancy

[Section titled “Redundancy”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#redundancy)

| Parameter | Description |
| --- | --- |
| Activate | Activate the use of variants for 1+1 synchronization (needed when 1+1 synchronization is done with the same service). |
| Name | The subset tag name used to identify the subset. |
| Server tags | Enter one or multiple server tags to identify the servers that can be used. Server tags are used for redundancy and for subset configurations. |

### Subset

[Section titled “Subset”](https://docs.mediakind.com/beam/live-encoder/parameters/general/#subset)

| Parameter | Description |
| --- | --- |
| Name | The subset tag name used to identify the subset. |
| Server tags | Enter one or multiple server tags to identify the servers that can be used. Server tags are used for redundancy and for subset configurations. |