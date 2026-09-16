# Source: https://docs.mediakind.com/beam/packager/parameters/live

# Live packaging parameters

Below are the parameters accessed in the **Live Packaging** service settings:

## DVR

[Section titled “DVR”](https://docs.mediakind.com/beam/packager/parameters/live/#dvr)

| Parameter | Description |
| :-- | :-- |
| Name | Live Packaging service name |
| Ingest type | Dash-IF Injest is only supported value |
| Base URL | |
| Duration | Rolling buffer size (DVR window). In initial version of Beam this also controls manifest/playlist duration for live service |

## Asset

[Section titled “Asset”](https://docs.mediakind.com/beam/packager/parameters/live/#asset)

| Parameter | Description |
| --- | --- |
| Catalog | Catalog that will host this content. 
Content will be available for delivery using all outputs from the given catalog. |
| Access URL | Portion of the complete access URL that defines the service.<br>Prefer URI unreserved characters (alphanumerical characters plus (, ), -, \_, .). Declaring a subpath (a/b) is possible but may impact performances. |

**Related information** 
[Live Packaging configuration](https://docs.mediakind.com/beam/packager/live-packaging-service)