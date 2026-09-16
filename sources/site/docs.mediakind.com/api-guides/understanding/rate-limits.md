# Source: https://docs.mediakind.com/api-guides/understanding/rate-limits

# Rate limits

The MK.IO APIs limit request rates to protect platform stability. Most integrations never reach those limits during normal use. Background workers, tight polling loops, and bulk scans are the patterns that approach them, so they are worth designing carefully.

## What a 429 looks like

[Section titled “What a 429 looks like”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#what-a-429-looks-like)

When you exceed a limit, the API responds with `429 Too Many Requests`. The body uses the same standard error shape as any other failure:

```
{
  "error": {
    "code": "<error_code>",
    "detail": "<error_message>",
    "extraDetail": {}
  },
  "status": 429,
  "ref": "<request_reference>"
}
```

Record the `ref` value before you retry. If a `429` is unexpected for your request volume, `ref` is the fastest way to identify the request later. See [Error handling](https://docs.mediakind.com/api-guides/understanding/error-handling) for the full error model.

## Published limits

[Section titled “Published limits”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#published-limits)

Most endpoints enforce these limits:

| Request type | Limit |
| :-- | :-- |
| `GET` | 2,000 per minute |
| `DELETE`, `PATCH`, `POST`, `PUT` | 1,000 per minute |

Some endpoints, including authentication flows, apply stricter limits.

Limits are scoped to the resource the path targets. Project-scoped endpoints (those with `/projects/{project_name}/` in the path) count per project. Endpoints without a project in the path count per organization. This matters for multi-project automation: a process that fans out across projects behaves differently from one that repeatedly targets a single project.

## The most common way to hit a limit

[Section titled “The most common way to hit a limit”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#the-most-common-way-to-hit-a-limit)

Aggressive polling is the usual cause. Polling 50 jobs once per second is 3,000 `GET` requests per minute against one project, which exceeds the read limit before any list or detail requests are counted. This is why event-driven workflows scale better than timer-based status checks.

## Design within the limits

[Section titled “Design within the limits”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#design-within-the-limits)

### Prefer events over polling

[Section titled “Prefer events over polling”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#prefer-events-over-polling)

Where an operation has webhook coverage, subscribe instead of polling. Use `MediaKind.JobFinished` rather than polling a job, and use channel state events for live workflows. One event delivery replaces many repeated reads. See [Webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks).

### Narrow list requests on the server

[Section titled “Narrow list requests on the server”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#narrow-list-requests-on-the-server)

Use `$filter`, `$label`, `$label_key`, and `$top` so you request only what you need:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$top=20&\$label=studio=paravalley" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

This returns far fewer items than listing everything and filtering locally. See [Pagination and filtering](https://docs.mediakind.com/api-guides/understanding/pagination).

### Page forward instead of restarting scans

[Section titled “Page forward instead of restarting scans”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#page-forward-instead-of-restarting-scans)

When you scan a large collection, continue from your last `$skiptoken` rather than rerunning the first page from the top.

### Back off between retries

[Section titled “Back off between retries”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#back-off-between-retries)

When you retry after a temporary failure, add a delay between attempts rather than retrying immediately. Even a fixed delay helps prevent a brief problem from becoming a sustained rate-limit issue.

## A design pattern for long-running workflows

[Section titled “A design pattern for long-running workflows”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#a-design-pattern-for-long-running-workflows)

1. Create the resource.
2. If webhook events exist for it, wait for the event.
3. If you must poll, poll the narrowest endpoint available, such as `/state`.
4. Add a delay between attempts.
5. Stop polling once the resource reaches the state you need.

This keeps request volume predictable and usually improves end-to-end latency.

## If you keep hitting the limit

[Section titled “If you keep hitting the limit”](https://docs.mediakind.com/api-guides/understanding/rate-limits/#if-you-keep-hitting-the-limit)

If a normal workflow returns `429` consistently after you have narrowed requests and reduced polling, collect the project or organization context, the endpoint being called, the approximate request rate, and the `ref` values from the failing responses. That gives you enough to investigate the traffic pattern rather than guess.