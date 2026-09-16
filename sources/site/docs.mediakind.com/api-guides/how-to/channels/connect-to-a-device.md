# Source: https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device

# Connect to a Beam device

The Channels API is served by the Beam device itself, so there is no central endpoint and no token exchange. You address the device directly, over HTTP, on the same host and port you already use to reach its web interface.

## Build the base URL

[Section titled “Build the base URL”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#build-the-base-url)

The API sits under `/api/` on the device:

```
<DEVICE_ADDRESS>/api/
```

`<DEVICE_ADDRESS>` is the HTTP address of the device, for example `http://10.0.0.10:8080`. The device serves the API over HTTP on port 80 or 8080. [Connect to the Controller](https://docs.mediakind.com/beam/web-interface/connection) covers the access URL forms for a device, including the ports used for containerized solutions.

A full request URL therefore looks like this:

Terminal window

```
curl http://10.0.0.10:8080/api/channels/
```

Channel operations sit under `/api/channels/`, and the supporting resources are prefixed with `channel-`, such as `/api/channel-system/` and `/api/channel-metrics/current/`. Network interfaces are the exception and sit at `/api/interfaces/`. Each guide gives the full path for the calls it covers.

Requests carry no credentials, so reaching the device is what grants access to it. Keep Beam devices on a management network alongside your other infrastructure rather than on a network reachable by untrusted clients.

## Confirm the device version

[Section titled “Confirm the device version”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#confirm-the-device-version)

The API is only present on Beam `1.12.0` and higher. Requests to a device on an earlier version do not reach the API at all, so a connection error or a 404 on the base path is the expected symptom rather than an authentication failure.

Check the version the device reports:

Terminal window

```
curl <DEVICE_ADDRESS>/api/channel-system/
```

The response wraps the device identity in a `data` object:

```
{
  "data": {
    "softwareVersion": "1.12.0.7",
    "softwareName": "beam",
    "serialNumber": "",
    "hardwareModel": "VEGA-7010"
  }
}
```

`softwareVersion` carries a build number as a fourth component, so compare it part by part rather than against the string `1.12.0`. A device that does not report a value returns an empty string, as `serialNumber` does above, so check for emptiness rather than for `null`.

A successful response here confirms two things at once: your base URL is correct, and the device is on a supported version.

## Check that the device can be managed

[Section titled “Check that the device can be managed”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#check-that-the-device-can-be-managed)

A device may be on a supported version but still be running channels that predate the Channels API. `GET /api/channel-deployment/eligibility/` reports whether the API can take over the device:

Terminal window

```
curl <DEVICE_ADDRESS>/api/channel-deployment/eligibility/
```

`canRun` is the verdict. `deploymentState` describes the current state of the device, and `resources` lists the existing services, feeds, and saved configurations found on it. Each entry carries `canUpgrade` and a `reason`, so when `canRun` is `false` the `resources` list tells you which object is blocking it.

## Check what the hardware supports

[Section titled “Check what the hardware supports”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#check-what-the-hardware-supports)

`GET /api/channel-capability/` reports the option cards fitted to the appliance and the features they enable:

Terminal window

```
curl <DEVICE_ADDRESS>/api/channel-capability/
```

`optionCardData` describes the installed SDI, satellite demodulator, and SMPTE ST 2110 cards along with their firmware. `capabilities` reports what the appliance can do, including `bissCaAvailable`, `receiverMultipleInputStream`, and its `st2110OutputProfile`. Use it to find out whether a device supports a feature before you build a channel that depends on it, and [Read the interfaces](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels) for the individual ports.

## Explore the API

[Section titled “Explore the API”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#explore-the-api)

The [Channels API reference](https://docs.mediakind.com/api-reference/channels-api) is the place to browse endpoints and schemas.

The device also serves a Swagger page for its own build, which is worth using when you want to execute requests against a specific device rather than read about them:

```
<DEVICE_ADDRESS>/api/channel-docs/
```

## Reach a device you cannot route to

[Section titled “Reach a device you cannot route to”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#reach-a-device-you-cannot-route-to)

If the device is registered in MK.IO, you can open its interface remotely rather than connecting over the local network. See [Access the remote device UI](https://docs.mediakind.com/mkio/how-to/managing-edge-devices/access-the-remote-device-ui).

## Next step

[Section titled “Next step”](https://docs.mediakind.com/api-guides/how-to/channels/connect-to-a-device/#next-step)

With a base URL that returns a system response, you can create your first channel. See [Create and manage channels](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels).