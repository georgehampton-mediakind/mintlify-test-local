# Source: https://docs.mediakind.com/api-guides/how-to/channels/manage-channels

# Create and manage channels

Channels are created with `PUT /api/channels/{channel_id}/`, where `{channel_id}` is the channel name you choose. The same request creates a channel that does not exist and replaces one that does, so there is no separate create endpoint and no generated identifier to keep track of.

Read [How Beam channels work](https://docs.mediakind.com/api-guides/how-to/channels/how-channels-work) first if you have not picked a `spec.type` yet, because that choice constrains everything else in the body.

## Read the interfaces first

[Section titled “Read the interfaces first”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#read-the-interfaces-first)

Channel inputs and outputs point at real ports on the device, so start by asking the device what it has:

Terminal window

```
curl <BASE_URL>/api/interfaces/
```

The response groups interfaces by kind. This is a response from a VEGA-7010, abbreviated to the first two of its four slot ports, with the addresses replaced:

```
{
  "ip": [
    { "name": "lo", "type": "IP", "ipAddresses": ["127.0.0.1"], "displayName": "lo" },
    { "name": "eth0", "type": "IP", "ipAddresses": ["10.0.0.10"], "displayName": "eth0" },
    { "name": "eth1", "type": "IP", "ipAddresses": ["172.16.0.10"], "displayName": "eth1" }
  ],
  "sdi": [
    {
      "name": "slot_1_port_1",
      "type": "SDIASI",
      "url": "sdi://localhost/slot_1_port_1",
      "displayName": "Slot 1 / Port 1"
    },
    {
      "name": "slot_1_port_2",
      "type": "SDIASI",
      "url": "sdi://localhost/slot_1_port_2",
      "displayName": "Slot 1 / Port 2"
    }
  ],
  "asi": [
    {
      "name": "slot_1_port_1",
      "type": "SDIASI",
      "url": "asi://localhost/slot_1_port_1",
      "displayName": "Slot 1 / Port 1"
    },
    {
      "name": "slot_1_port_2",
      "type": "SDIASI",
      "url": "asi://localhost/slot_1_port_2",
      "displayName": "Slot 1 / Port 2"
    }
  ],
  "rf_demod": [],
  "rf_modulator": [],
  "st2110": []
}
```

The groups are `ip`, `sdi`, `asi`, `rf_demod`, `rf_modulator`, `cam`, and `st2110`. Every one of them defaults to an empty array, so what a device returns depends entirely on the hardware fitted to it. The device above has no satellite demodulator or modulator, so `rf_demod` and `rf_modulator` are empty. Another device will list different slots and different port counts, which is why this call belongs at the start of any integration rather than in your notes.

Network transports take an interface `name`, such as `eth0`. Baseband and RF transports take the `url` exactly as returned.

Copy the `url` rather than composing it. The same physical port is listed under both `sdi` and `asi` with the same `name`, and only the scheme in the `url` distinguishes them. A `name` on its own does not identify a port.

Entries under `sdi` also carry a `caps` object describing what the port supports, which the older device above does not report. See the `SdiSlotPortInterface` schema in the [Channels API reference](https://docs.mediakind.com/api-reference/channels-api).

## Create a channel

[Section titled “Create a channel”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#create-a-channel)

This request creates a contribution channel that takes a Serial Digital Interface (SDI) source, encodes it, and publishes it as a Secure Reliable Transport (SRT) listener that a remote decoder can connect to. It is created stopped, so nothing goes on air until you ask it to.

Terminal window

```
curl -X PUT <BASE_URL>/api/channels/news-contribution/ \
  -H "Content-Type: application/json" \
  -d '{
    "kind": "BeamChannel",
    "metadata": {
      "name": "news-contribution",
      "displayName": "News contribution"
    },
    "spec": {
      "type": "EncodingContribution",
      "state": "Stopped",
      "inputs": [
        {
          "type": "SDI",
          "name": "sdi-in",
          "transport": { "url": "sdi://localhost/slot_1_port_1" }
        }
      ],
      "transform": {
        "encoding": {
          "video": {
            "codec": "H264High",
            "videoFormat": "1920x1080p",
            "bitrate": 15000000
          },
          "audios": [
            { "codec": "AC3", "mode": "Stereo", "bitrate": 128000 }
          ]
        }
      },
      "outputs": [
        {
          "type": "SRTListener",
          "transport": { "interface": "eth0", "port": 9000 }
        }
      ]
    }
  }'
```

The fields that are easy to get wrong:

- Set `metadata.name` to the same value as the `{channel_id}` in the path. It is the identifier you use in every later request, and it cannot be changed afterwards. Any string works, so a readable slug such as `news-contribution` is easier to live with than a generated identifier. Channels created through the Essentials UI are named with a UUID instead, so expect both forms when you list a device you did not set up.
- Each entry in `inputs` needs its own `name`. This is your label for the input, and it is how the audio entries in `transform.encoding.audios` refer back to it through `inputName`. The device assigns its own separate name to the input in `status`, so do not expect this value to appear there.
- `bitrate` is in bits per second and accepts `100000` to `60000000`. Audio `bitrate` is also in bits per second, and the accepted values depend on the audio codec and mode.
- `port` on an SRT listener accepts `256` to `65535`.
- Outputs take no `name`, unlike inputs. The one exception is an `ASI` output, where `name` is optional. The device names every output itself in `status` regardless.

The response is the full channel object, including the `metadata.created` timestamp and an initial `status`.

A `200` here means the device accepted the configuration, not that the channel is configured. Confirm the result:

Terminal window

```
curl <BASE_URL>/api/channels/news-contribution/
```

Read `status.syncState`. It reports `Configuring` while the device applies the change and `Ok` once the running configuration matches your spec. Anything else means the configuration was accepted but could not be applied, and `status.syncError` carries the detail.

## Choosing between variants

[Section titled “Choosing between variants”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#choosing-between-variants)

The body above is one shape of channel. Use this table to find the shape you need, then adapt the example:

| Your situation | `spec.type` | Body differences |
| :-- | :-- | :-- |
| Encoding a baseband source for onward contribution | `EncodingContribution` | Requires `transform.encoding`. Video codecs are the 4:2:2 and JPEG XS profiles, plus `H264High` and its variants. |
| Encoding a baseband source for delivery to viewers | `EncodingDistribution` | Requires `transform.encoding`. Video codecs are the delivery profiles: `HEVCMain`, `HEVCMain10bit`, `H264High`, `H264Main`, and `MPEG2`. |
| Encoding a baseband source into adaptive bitrate output | `EncodingStreaming` | Requires `transform.abrEncoding` instead of `transform.encoding`. The only output type is `HttpStreaming`. |
| Receiving a stream and putting it back to baseband | `ReceptionDecoding` | No `transform`. Outputs are `SDI` or `Smpte2110`. |
| Receiving a stream and passing it on untouched | `ReceptionGateway` | No `transform`. Outputs are the transport types, as for contribution. |

A reception channel is considerably shorter, because there is nothing to encode. This one takes a multicast UDP source and decodes it out of an SDI port, and starts immediately:

Terminal window

```
curl -X PUT <BASE_URL>/api/channels/udp-to-sdi/ \
  -H "Content-Type: application/json" \
  -d '{
    "kind": "BeamChannel",
    "metadata": {
      "name": "udp-to-sdi",
      "displayName": "UDP to SDI decoder"
    },
    "spec": {
      "type": "ReceptionDecoding",
      "state": "Running",
      "inputs": [
        {
          "type": "UDP",
          "name": "udp-in",
          "transport": {
            "url": "udp://239.100.1.1:5001",
            "interface": "eth0"
          }
        }
      ],
      "outputs": [
        {
          "type": "SDI",
          "transport": { "url": "sdi://localhost/slot_1_port_1" }
        }
      ]
    }
  }'
```

A UDP input needs both a `url` and an `interface`, because the device has to know which network port to receive the stream on.

Unicast and multicast addresses are both supported, and the Channels API has no field to choose between them: an address in the class D range, `224.0.0.0/4`, is treated as multicast, and anything outside that range is treated as unicast. Where an exception to that check is needed, the Advanced interface offers an explicit [**Unicast**](https://docs.mediakind.com/beam/receiver/parameters#ip) control.

For the full list of input and output schemas, including SMPTE 2110 and satellite demodulator inputs, see the [Channels API reference](https://docs.mediakind.com/api-reference/channels-api).

### Encrypting an SRT output

[Section titled “Encrypting an SRT output”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#encrypting-an-srt-output)

To encrypt an SRT output, set `encryptionStandard` to `AES128`, `AES192`, or `AES256`, and supply a passphrase of at least 10 characters:

```
{
  "type": "SRTListener",
  "transport": {
    "interface": "eth0",
    "port": 9000,
    "encryptionStandard": "AES128",
    "passPhrase": "<PASSPHRASE>"
  }
}
```

`passPhrase` is optional while `encryptionStandard` is `None`, which is the default, and required as soon as it is anything else. A passphrase shorter than 10 characters is rejected.

## Start, stop, and rename

[Section titled “Start, stop, and rename”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#start-stop-and-rename)

`PATCH /api/channels/{channel_id}/` handles the two changes you make most often. It accepts only the desired state and the display name, so use `PUT` for anything else.

Start a channel:

Terminal window

```
curl -X PATCH <BASE_URL>/api/channels/news-contribution/ \
  -H "Content-Type: application/json" \
  -d '{ "spec": { "state": "Running" } }'
```

Send `"Stopped"` in the same shape to take it off air. Rename it with the other half of the body:

Terminal window

```
curl -X PATCH <BASE_URL>/api/channels/news-contribution/ \
  -H "Content-Type: application/json" \
  -d '{ "metadata": { "displayName": "News contribution, main feed" } }'
```

Both fields are nested under `spec` and `metadata` respectively. A flat body such as `{"state": "Running"}` does not change anything, because neither key is recognised at the top level.

Renaming changes `displayName` only. `metadata.name` is fixed for the life of the channel, so a channel that needs a different identifier has to be recreated.

## Delete a channel

[Section titled “Delete a channel”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#delete-a-channel)

Terminal window

```
curl -X DELETE <BASE_URL>/api/channels/news-contribution/
```

A successful delete returns `204` with no body. The device stops the underlying services before removing the channel. Errors during that cleanup are logged on the device but do not stop the channel being removed, so a `204` confirms the channel is gone rather than that everything behind it shut down cleanly.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#what-goes-wrong)

**The request succeeded but nothing is on air.** Check `spec.state`. A channel created with `"state": "Stopped"` stays stopped until you patch it. If it is `Running`, check `status.syncState` and `status.syncError`.

**A codec value is rejected.** The accepted video codecs depend on `spec.type`. `HEVCMain` is valid for `EncodingDistribution` and `EncodingStreaming` but not for `EncodingContribution`, which takes the 4:2:2 profiles. The accepted `videoFormat` values then depend on the codec you chose, and the interlaced formats are not available with the progressive-only codecs such as JPEG XS.

**An audio bitrate is rejected.** Audio bitrate is constrained by codec and mode together. `AC3` with `Stereo` starts at `96000`, while `AC3` with `Surround51` starts at `224000`.

**A `PUT` removed settings you did not send.** `PUT` replaces the channel rather than merging into it. Fetch the channel, change what you need in the returned `spec`, and send the whole `spec` back.

**The response is `422`.** The body contains a `detail` array, and each entry has a `loc` array giving the exact path to the offending field. Read `loc` before anything else, because it points straight at the field name.

**The response is `503`.** The channel endpoints return `503` when the API cannot serve the request. Retry, and if it persists, check the device itself.

## Where to go deeper

[Section titled “Where to go deeper”](https://docs.mediakind.com/api-guides/how-to/channels/manage-channels/#where-to-go-deeper)

- [Monitor channels and devices](https://docs.mediakind.com/api-guides/how-to/channels/monitor-channels) covers reading status, alarms, and thumbnails once a channel exists.
- [Beam Essentials UI](https://docs.mediakind.com/beam/essentials) walks the same configuration through the channel creation wizard, which is a useful way to see a valid combination before you script it.
- [Channels API reference](https://docs.mediakind.com/api-reference/channels-api) holds the complete `ChannelSpec` schema, including every input and output variant.