# Source: https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata

# Metadata

## In-band metadata

[Section titled “In-band metadata”](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata/#in-band-metadata)

| Parameter | Description |
| --- | --- |
| Type | Input metadata expected format. |

### MPEG-2 TS input type

[Section titled “MPEG-2 TS input type”](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata/#mpeg-2-ts-input-type)

| Parameter | Description |
| --- | --- |
| PID | Corresponds to the stream identifier in the MPEG2 TS stream. Otherwise use the 'auto' setting for automatic detection.<br>Possible values: From 16 to 8190 or “auto” |
| Delay | If metadata stream is SCTE35, a delay adjusts the trigger time value.<br>Possible values: From 30000 to 60.000 ms |
| Automation stream | Stream used for automation. |

### SDI or SDI over IP input type

[Section titled “SDI or SDI over IP input type”](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata/#sdi-or-sdi-over-ip-input-type)

| Parameter | Description |
| --- | --- |
| DPI PID index | Specifies the index to the DPI PID which will carry the resulting splice\_info\_sections.<br>Possible values: From 0 to 65535 |
| Delay | If metadata stream is SCTE35, a delay adjusts the trigger time value.<br>Possible values: From 30000 to 60.000 ms |

**Related information** 
[Configure in-band metadata in input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/inband-metadata)

## Out-of-band metadata

[Section titled “Out-of-band metadata”](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata/#out-of-band-metadata)

### SCTE-35 OOB

[Section titled “SCTE-35 OOB”](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata/#scte-35-oob)

| Parameter | Description |
| --- | --- |
| Network name | Corresponds to the Acquisition Point Identity defined in the ESAM specification. |
| Zone identity | Corresponds to the Zone Identity defined in the ESAM specification. |
| ESAM server network interface | Network interface used for ESAM outofband messages applied to the entire service. |
| Recover conditioning state if failover | If 'POIS' is selected, this options enables to keep the conditioning status after an encoder failover by asking to an external system.<br>If **POIS** is selected, you have to enter the **POIS URL** and the **POIS network interface** name.<br>**Note:** Configuration of POIS to recover is mandatory if:<br>\- live service is restarted during EAS,<br>\- or input dual source redundancy.<br>\- or live service failover.<br>Else let the filed to **No**. |
| Automation stream | Stream used for automation. |

### SCTE-104/IP OOB

[Section titled “SCTE-104/IP OOB”](https://docs.mediakind.com/beam/live-encoder/parameters/input/metadata/#scte-104ip-oob)

| Parameter | Description |
| --- | --- |
| DPI PID index | Specifies the index to the DPI PID which will carry the resulting splice\_info\_sections.<br>Possible values: From 0 to 65535 |
| SCTE-104 server network interface | Network interface used for SCTE104 outofband messages applied to the entire service. To modify, open the General tab.<br>Can be modified from this field if not yet set in the **General** tab, otherwise the field is grayed out. |
| Automation stream | Stream used for automation. |
| Splice countdown insertion | Insert splice countdown field in adaptation field around splice points. |
| Splice null period | Period between generated splice null commands.<br>Possible values: From 400 to 3600000 |

**Related information** 
[Configure out-of-band metadata in input stream](https://docs.mediakind.com/beam/live-encoder/configure/input/outofband-metadata) 
[Configure the input](https://docs.mediakind.com/beam/live-encoder/configure/input)