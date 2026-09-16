# Source: https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites

# Set up networks and sites

Networks and sites are the topology layer for Beam devices. A network is a logical segment; a site is a location where devices operate, and its routes decide which networks those devices can reach. The order matters: create the networks first, then create sites whose routes reference them, then register devices to the sites through the [Fleets API](https://docs.mediakind.com/api-guides/how-to/fleets/device-management).

## Create a network

[Section titled “Create a network”](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites/#create-a-network)

A network is created with `PUT`. Its `spec` is currently empty but must be present; the meaningful content is in `metadata`.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/infra/networks/production-network" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "Production Network",
      "labels": { "environment": "production" }
    },
    "spec": {}
  }'
```

Reading a network back shows its `status.owner` (`User` or `System`) and `status.scope` (`Connecting` between sites, or `Local` within one). System-owned and local networks are created by the platform.

## Create a site with routes

[Section titled “Create a site with routes”](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites/#create-a-site-with-routes)

Once the network exists, create a site whose `routes` reference it. A route requires only `networkName`. You can add an optional `defaultTransport` to set how content moves on that network.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/infra/sites/headquarters" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "displayName": "Headquarters",
      "labels": { "region": "europe", "type": "primary" }
    },
    "spec": {
      "routes": [
        {
          "networkName": "production-network",
          "defaultTransport": { "type": "SRTListener" }
        }
      ]
    }
  }'
```

`defaultTransport.type` is one of `Auto`, `SRTListener`, `SRTCaller`, `UDP`, or `RISTListener`. A device assigned to this site (through its `siteName`) automatically reaches the networks the site routes to.

## Update and delete

[Section titled “Update and delete”](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites/#update-and-delete)

`PATCH` updates labels, display name, or a site’s routes. A `PATCH` to `routes` replaces the whole array, so send the complete set.

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/infra/sites/headquarters" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{ "metadata": { "displayName": "Main Headquarters" } }'
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites/#what-goes-wrong)

- **Creating a site before its network exists.** A route references a network by name. Create the networks first.
- **A delete returns `409 Conflict`.** A network cannot be deleted while a site routes to it, and a site cannot be deleted while devices or flows reference it. Clear those references first.
- **Trying to delete a system-owned resource.** System-owned networks and sites cannot be deleted, though they can be modified. Check `status.owner` before you try.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/infrastructure/networks-and-sites/#what-comes-next)

- [Manage devices](https://docs.mediakind.com/api-guides/how-to/fleets/device-management): register Beam devices against the sites you created.