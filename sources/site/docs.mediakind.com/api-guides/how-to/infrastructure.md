# Source: https://docs.mediakind.com/api-guides/how-to/infrastructure

# Build with the Infrastructure API

The Infrastructure API defines where Beam devices live and which networks they can reach. Use it to create networks first, then create sites with routes that reference those networks, and finally register devices against those sites through the Fleets API.

## API overview

[Section titled “API overview”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#api-overview)

| Detail | Value |
| --- | --- |
| Base path | `/api/v1/projects/{project_name}/infra/` |
| Scope | Project |
| Reference | [Infrastructure API reference](https://docs.mediakind.com/api-reference/infrastructure-api) |

## The two core resources

[Section titled “The two core resources”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#the-two-core-resources)

### Networks

[Section titled “Networks”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#networks)

Networks represent logical network segments. Their status includes:

- `status.owner`
- `status.scope`

These are valid sort and filter fields for the network list endpoint.

### Sites

[Section titled “Sites”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#sites)

Sites represent locations where devices operate. A site can include routes that reference one or more networks, which is why site creation usually comes after network creation.

## Typical sequence

[Section titled “Typical sequence”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#typical-sequence)

1. List existing networks and sites.
2. Create the networks you need.
3. Create sites with routes that reference those networks.
4. Register Beam devices to those sites through the Fleets API.
5. Remove dependent references before deleting sites or networks.

## Common workflow patterns

[Section titled “Common workflow patterns”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#common-workflow-patterns)

### Set up infrastructure for Beam devices

1

[Create networks](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites)

2

[Create sites with routes referencing those networks](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites)

3

[Register Beam devices to sites](https://docs.mediakind.com/api-guides/how-to/fleets/device-management)

## Guide

[Section titled “Guide”](https://docs.mediakind.com/api-guides/how-to/infrastructure/#guide)

[Set up networks and sites](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites)

### Set up networks and sites

Follow the recommended order for creating and maintaining infrastructure resources.