# Source: https://docs.mediakind.com/beam/web-interface/system-architecture

# System and architecture description

The web interface provides a single access point to monitor components, manage users, and configure solutions from end-to-end. Configuration and control are separated for flexible resource allocation

## Software and applicative layers

[Section titled “Software and applicative layers”](https://docs.mediakind.com/beam/web-interface/system-architecture/#software-and-applicative-layers)

The platform design relies on a **micro-services architecture** to promote modularity and software component independence. The solution is split into a Front-End (UI) and a Back-End (API) layer. Each layer is interfaced through a REST API.

![schema architecture controller](https://docs.mediakind.com/_astro/schema_architecture_controller.BDZGowN8_23u96C.webp)

If menus or options in the web interface are grayed then contact your administrator about user rights.

### UI Layer (Front-End)

[Section titled “UI Layer (Front-End)”](https://docs.mediakind.com/beam/web-interface/system-architecture/#ui-layer-front-end)

The generic UI framework provides a same environment to display the web pages for all compatible products:

- Web pages (services, servers, etc.) are shared across the product line.
- Certain web pages are specific to each processing type (statistics, services, etc.).

### API Layer (Back-End)

[Section titled “API Layer (Back-End)”](https://docs.mediakind.com/beam/web-interface/system-architecture/#api-layer-back-end)

The Back-End features are triggered through a REST API that can be used either from a _Command Line Interface_, or from the Front-End Layer. The API layer allows:

- A centralized redundant database.
- The logic handling for cross-products and product specific features.

## High availability

[Section titled “High availability”](https://docs.mediakind.com/beam/web-interface/system-architecture/#high-availability)

Management access is provided through a Virtual IP, allowing for a **single connection access**. This is based on an **active/active** implementation that ensures high availability.

![schema active active controller](https://docs.mediakind.com/_astro/schema_active_active_controller.ZtEawb6t_Z2lqvth.webp)

The **database is synchronized in real-time** between both nodes. **In case of failure, the remaining node is instantly ready** to process requests. If the primary server fails, then the Virtual IP is seamlessly re-assigned to the secondary server. **This mechanism involves _arbiter_ software**, installed on a separate server. This arbiter server is in charge of electing the primary database if the network is partitioned (in the event of communication loss between synchronized databases).