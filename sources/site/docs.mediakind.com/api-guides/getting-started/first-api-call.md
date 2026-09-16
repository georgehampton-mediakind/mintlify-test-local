# Source: https://docs.mediakind.com/api-guides/getting-started/first-api-call

# Your first API call

Before you build a larger integration, confirm your setup with one request. The goal is to make a single authenticated call against a project-scoped endpoint, inspect the response, and prove that your token and project access work.

## Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#prerequisites)

You need:

- An MK.IO account with access to at least one project.
- A personal API token.
- The name of the project you want to query.

If you still need a token, follow [Authentication and tokens](https://docs.mediakind.com/api-guides/getting-started/authentication).

## Set the values you reuse

[Section titled “Set the values you reuse”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#set-the-values-you-reuse)

Export the values the request needs, so the command stays readable and retries are less error-prone:

Terminal window

```
export MKIO_BASE_URL="https://app.mk.io"
export MKIO_PROJECT="<PROJECT_NAME>"
export MKIO_TOKEN="<YOUR_TOKEN>"
```

## Send the request

[Section titled “Send the request”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#send-the-request)

Run the Media API list-assets operation:

Terminal window

```
curl -X GET "$MKIO_BASE_URL/api/v1/projects/$MKIO_PROJECT/media/assets" \
  -H "Authorization: Bearer $MKIO_TOKEN" \
  -H "Accept: application/json"
```

To see the HTTP status line as well, add `-i`:

Terminal window

```
curl -i -X GET "$MKIO_BASE_URL/api/v1/projects/$MKIO_PROJECT/media/assets" \
  -H "Authorization: Bearer $MKIO_TOKEN" \
  -H "Accept: application/json"
```

## Check the response

[Section titled “Check the response”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#check-the-response)

A successful response is HTTP `200` with a list body. List endpoints return two top-level fields:

- `value`: the returned assets.
- `supplemental`: list metadata, including `supplemental.pagination` with the record counts.

```
{
  "value": [
    { "name": "example-asset" }
  ],
  "supplemental": {
    "count": 1,
    "kind": "Asset",
    "operation": "list",
    "pagination": { "start": 0, "end": 1, "records": 1, "total": 1 }
  }
}
```

Many MK.IO list endpoints use this same shape, so it is worth recognising now. See [Pagination and filtering](https://docs.mediakind.com/api-guides/understanding/pagination) for how to page and narrow these responses.

## If the call does not succeed

[Section titled “If the call does not succeed”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#if-the-call-does-not-succeed)

This endpoint returns the platform’s standard error responses:

| Status code | Meaning | What to check next |
| :-- | :-- | :-- |
| `400` | Bad Request | Recheck the URL, query parameters, and request syntax. |
| `401` | Unauthorized | Recheck the bearer token and `Authorization` header. |
| `403` | Forbidden | Recheck that the user has access to the target project and operation. |
| `404` | Not Found | Recheck the project name and path. |
| `429` | Too Many Requests | Slow down and retry later. |
| `500` | Internal Server Error | Record the response `ref` value before retrying or contacting support. |

The error body carries `error.code` for programmatic handling, `error.detail` for logs, and `ref` for support follow-up. See [Error handling](https://docs.mediakind.com/api-guides/understanding/error-handling) for the full model.

## What this confirms

[Section titled “What this confirms”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#what-this-confirms)

A successful request proves that your token is valid, your base URL is correct, your project name is correct, and you can reach a real project-scoped endpoint. That is enough to move on to resource creation with far less guesswork.

## Next steps

[Section titled “Next steps”](https://docs.mediakind.com/api-guides/getting-started/first-api-call/#next-steps)

- [Which API to use](https://docs.mediakind.com/api-guides/getting-started/which-api): choose the API that owns your workflow.
- [API overview](https://docs.mediakind.com/api-guides/understanding/overview): the patterns shared across the APIs.
- [Build with the Media API](https://docs.mediakind.com/api-guides/how-to/media): move into storage, assets, transforms, jobs, and publishing.