# Source: https://docs.mediakind.com/beam/contribution/how-to/configure-nmos

# Configure NMOS IS-04 and IS-05

## Overview

[Section titled “Overview”](https://docs.mediakind.com/beam/contribution/how-to/configure-nmos/#overview)

The diagram below shows how the Controller and Live Encoding components are collaborating on MK.IO Beam.

![ce1 nmos architecture](https://docs.mediakind.com/ce1-img/ce1-nmos-architecture.png)

- The Live Encoding server shown here is contained within the Live Encoding component on MK.IO Beam.
- The NMOS Node microservice within the Live Encoding component exposes the NMOS Node API and NMOS Connection API.
- The Node API is achieved by retrieving the NMOS resources of the Services running on the server thanks to the products Configuration Managers.
- The Configuration API is achieved by updating the Service Configurations thanks again to the products Configuration Managers
- The Live Encoding component implements API endpoints so that the NMOS node microservice can retrieve the NMOS resources of a Live Encoding service.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/beam/contribution/how-to/configure-nmos/#prerequisites)

- You need to provide an NMOS Registration and Discovery Server (RDS) that is NMOS IS-04 compliant, and an NMOS Client, which will interact with the NMOS RDS and NMOS Nodes.
- NMOS IS-04 supports different modes of operation for the NMOS Node discovery, Encoding Live mandates discovery using Registered mode with multicast operation.
- When configuring a service with NMOS, the SDP file for each input stream is supplied by the NMOS Client, this means that you no longer need to specify the SDP file location.

## Configuration

[Section titled “Configuration”](https://docs.mediakind.com/beam/contribution/how-to/configure-nmos/#configuration)

The MK.IO Beam must be configured with a Live Encoding service.

### Create a Live Encoding service

[Section titled “Create a Live Encoding service”](https://docs.mediakind.com/beam/contribution/how-to/configure-nmos/#create-a-live-encoding-service)

1. Go to the **Services** page, click **Add service** then select **Live Encoding**.

### Configure the Live Encoding service

[Section titled “Configure the Live Encoding service”](https://docs.mediakind.com/beam/contribution/how-to/configure-nmos/#configure-the-live-encoding-service)

1. Under the **General** tab, enter a name for the service.
2. Under the **Input** tab:
 1. set the **Type** to **SMPTE ST 2110**.
 2. Leave the **Input redundancy** set to **None**.
 3. Tick the **NMOS enabled** checkbox.
 4. Set the **Network interface** to the input network interface. SDP files are greyed for each input stream since this information is supplied by the NMOS Client.
 5. Configure video encoding, audio encoding and output parameters as required.

### Save and start the service

[Section titled “Save and start the service”](https://docs.mediakind.com/beam/contribution/how-to/configure-nmos/#save-and-start-the-service)

1. Click **Save and exit** to save and finalize your service configuration and go back to the **Services** page.
2. Assign a server to run the service.

Result: 

- The **Stats** > **Monitoring** tab will display **NMOS Configured** when the NMOS **Enabled** checkbox is ticked.
- Upon first start of the service, each input stream will have an alarm raised indicating “waiting for NMOS” that will be cleared once the NMOS client has configured each input stream