# Source: https://docs.mediakind.com/api-guides/understanding/overview

# API overview

The MK.IO cloud APIs are separated by product area and share request conventions. The device-local Beam Channels API has its own connection requirements. Once you know how paths are scoped, how list responses are shaped, and how long-running resources expose state, you can move between the APIs without learning a new set of conventions each time.

## One base URL

[Section titled “One base URL”](https://docs.mediakind.com/api-guides/understanding/overview/#one-base-url)

The Media, Live, Templates, Management, Fleets, and Infrastructure APIs use this base URL:

```
https://app.mk.io
```

The resource path is what differs between them:

| API | Path prefix | Scope |
| :-- | :-- | :-- |
| Media API | `/api/v1/projects/{project_name}/media/` | Project |
| Live API | `/api/v1/projects/{project_name}/live/` | Project |
| Templates API | `/api/v1/projects/{project_name}/templating/` | Project |
| Management API | `/api/v1/` | Organization and project |
| Fleets API | `/api/v1/projects/{project_name}/fleet/` | Project |
| Infrastructure API | `/api/v1/projects/{project_name}/infra/` | Project |

When a path includes `/projects/{project_name}/`, the request is project-scoped. When it does not, it usually targets organization-level or user-level configuration through the Management API.

The [Channels API](https://docs.mediakind.com/api-guides/how-to/channels) is served by a Beam device under `/ui/connectors/channels-api/latest`. Use its guide for the device URL and connection requirements.

## Authentication is shared

[Section titled “Authentication is shared”](https://docs.mediakind.com/api-guides/understanding/overview/#authentication-is-shared)

The cloud APIs above use bearer authentication:

```
Authorization: Bearer <YOUR_TOKEN>
```

A single token works across setup and operational workflows. The same token can create a project through the Management API and then list assets through the Media API, as long as the issuing user has access to both operations. See [Authentication](https://docs.mediakind.com/api-guides/getting-started/authentication) for how to create one.

## Requests are HTTP plus JSON

[Section titled “Requests are HTTP plus JSON”](https://docs.mediakind.com/api-guides/understanding/overview/#requests-are-http-plus-json)

The request shape follows a small set of rules:

- `GET` reads a resource or lists a collection.
- `PUT` creates or replaces a resource whose name is part of the URL.
- `PATCH` applies a partial update where the endpoint supports it.
- `POST` runs an action, such as `start`, `stop`, `allocate`, `scale`, `backup`, or `restore`.
- `DELETE` removes a resource.

Send `Content-Type: application/json` on any request that has a JSON body.

## List responses share a shape

[Section titled “List responses share a shape”](https://docs.mediakind.com/api-guides/understanding/overview/#list-responses-share-a-shape)

A `list` endpoint returns the resources in `value` and metadata in `supplemental`:

- `value`: the array of resources on the current page.
- `supplemental`: counts and pagination metadata, including `supplemental.pagination` with `start`, `end`, `records`, and `total`.

Read `value` for the current page and check the endpoint’s pagination contract for the next page. Media collections can return `@odata.nextLink`; follow that link when present. See [Pagination and filtering](https://docs.mediakind.com/api-guides/understanding/pagination) for the query parameters and the paging mechanism.

## Many resources expose a lightweight state endpoint

[Section titled “Many resources expose a lightweight state endpoint”](https://docs.mediakind.com/api-guides/understanding/overview/#many-resources-expose-a-lightweight-state-endpoint)

Several resources expose a `/state` endpoint next to the main resource, including Media API assets, content key policies, jobs, live events, live outputs, streaming endpoints, and streaming locators. These endpoints let you monitor a long-running resource without retrieving the full object each time. See [Resource states](https://docs.mediakind.com/api-guides/understanding/resource-states).

## Long-running workflows are common

[Section titled “Long-running workflows are common”](https://docs.mediakind.com/api-guides/understanding/overview/#long-running-workflows-are-common)

Several important workflows are not single calls:

- A **job** moves from queued work, through processing, to a terminal state.
- A **Media API live event** is created, then started, then paired with one or more live outputs.
- A **Live API resource** references sources, an asset, and template configs. Set `spec.state` to request `Running` or `Stopped`, then monitor `status.state` until the transition completes.
- A **streaming endpoint** is created and started before playback works.

Designing around these workflows means combining list or get operations with either polling on `/state` or subscribing to [webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks).

## Where to go next

[Section titled “Where to go next”](https://docs.mediakind.com/api-guides/understanding/overview/#where-to-go-next)

- [Authentication](https://docs.mediakind.com/api-guides/getting-started/authentication): create a token and make your first call.
- [Error handling](https://docs.mediakind.com/api-guides/understanding/error-handling): the shared error body and status codes.
- [Pagination and filtering](https://docs.mediakind.com/api-guides/understanding/pagination): page and narrow list responses.
- [Resource states](https://docs.mediakind.com/api-guides/understanding/resource-states): read lifecycle state and design around it.