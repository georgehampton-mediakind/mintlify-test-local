# Source: https://docs.mediakind.com/api-reference/infrastructure-api

# Infra API

[Download OpenAPI spec](https://docs.mediakind.com/openapi/beam/infrastructure-api.json)

Base URL `https://app.mk.io` v1.1.4 10 endpoints OpenAPI 3.0.2

## Overview

The MK.IO Infrastructure API is the project-level REST API for infrastructure configuration in MK.IO. It focuses on network and site management for operations workflows where infrastructure resources are created, queried, updated, and retired.

## Authentication

All endpoints require a bearer token in the `Authorization` header: `Authorization: Bearer <your_token>`

You can create and manage your tokens in your [profile settings](https://app.mk.io/user/profile) under **Your personal API tokens**. Follow the [API tokens guide](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens) for more information.

## Usage

Base URL: `https://app.mk.io`

Typical usage pattern:

- Create and maintain network and site resources.
- Update or remove resources as requirements change.

## Endpoints

[Networks 5 endpoints](https://docs.mediakind.com/api-reference/infrastructure-api/networks)

[get List Networks /api/v1/projects/{project\_name}/infra/networks](https://docs.mediakind.com/api-reference/infrastructure-api/networks/list-networks) [get Get Network /api/v1/projects/{project\_name}/infra/networks/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/networks/get-network) [put Create Network /api/v1/projects/{project\_name}/infra/networks/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/networks/create-network) [patch Update Network /api/v1/projects/{project\_name}/infra/networks/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/networks/update-network) [del Delete Network /api/v1/projects/{project\_name}/infra/networks/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/networks/delete-network)

[Sites 5 endpoints](https://docs.mediakind.com/api-reference/infrastructure-api/sites)

[get List Sites /api/v1/projects/{project\_name}/infra/sites](https://docs.mediakind.com/api-reference/infrastructure-api/sites/list-sites) [get Get Site /api/v1/projects/{project\_name}/infra/sites/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/sites/get-site) [put Create Site /api/v1/projects/{project\_name}/infra/sites/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/sites/create-site) [patch Update Site /api/v1/projects/{project\_name}/infra/sites/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/sites/update-site) [del Delete Site /api/v1/projects/{project\_name}/infra/sites/{name}](https://docs.mediakind.com/api-reference/infrastructure-api/sites/delete-site)