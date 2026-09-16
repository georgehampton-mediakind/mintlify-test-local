# Source: https://docs.mediakind.com/api-guides/how-to/management/webhooks

# Webhook rules

This guide covers the management side of webhooks: creating rules, updating them, and reading delivery history. For the event model and the delivered payload shape, see [Webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks).

Each rule is project-scoped and identified by a stable name in the URL. The practical pattern is to name the rule for its purpose, create or update it with `PUT`, read it back to confirm the non-secret configuration, and inspect its `/events` history when debugging delivery.

## Create or update a rule

[Section titled “Create or update a rule”](https://docs.mediakind.com/api-guides/how-to/management/webhooks/#create-or-update-a-rule)

A rule is created or replaced with `PUT` at its name. The `spec` requires `enabled`, `url`, and `events`. Put secrets in `authentication.headers` or `authentication.queryParams`, which are write-only; put non-sensitive decoration in the top-level `headers` and `queryParams`.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/webhook/rules/job-notifications" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "url": "https://your-endpoint.example.com/webhook",
      "enabled": true,
      "events": ["MediaKind.JobStarted", "MediaKind.JobFinished"],
      "authentication": {
        "headers": { "X-Webhook-Secret": "<SHARED_SECRET>" }
      },
      "headers": { "X-Source": "mkio" }
    }
  }'
```

Because `PUT` replaces the whole rule, include the full `spec` each time. To pause delivery without losing the rule, send the same `PUT` with `enabled` set to `false`.

## Read the rule

[Section titled “Read the rule”](https://docs.mediakind.com/api-guides/how-to/management/webhooks/#read-the-rule)

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/webhook/rules" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/webhook/rules/job-notifications" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Authentication values read back masked, so use the read response to confirm the structure, enabled state, URL, events, and non-secret headers, not the secrets themselves.

## Inspect delivery history

[Section titled “Inspect delivery history”](https://docs.mediakind.com/api-guides/how-to/management/webhooks/#inspect-delivery-history)

When an application reports a missing event, the rule’s `events` collection is the first place to look:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/webhook/rules/job-notifications/events" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Each record carries `created`, `source`, `type`, and a `status` of `Pending`, `Retrying`, `Failed`, or `Sent`. A `Failed` or stuck `Retrying` status points at the receiving endpoint rather than MK.IO.

## Delete a rule

[Section titled “Delete a rule”](https://docs.mediakind.com/api-guides/how-to/management/webhooks/#delete-a-rule)

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/webhook/rules/job-notifications" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Deleting a rule also removes its event history, so export anything you need first.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/management/webhooks/#what-goes-wrong)

- **A `PUT` drops fields you forgot to include.** It replaces the entire `spec`. Read the rule, change what you need, and send the complete spec back.
- **Secrets look wrong on read.** Authentication values are write-only and read back masked. That is expected; they are still sent on delivery.
- **Events never arrive.** Check the `/events` history. A `Failed` status means your endpoint rejected the delivery, so verify it is reachable over HTTPS and returns a success response. See the handler guidance in [Webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks).

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/management/webhooks/#what-comes-next)

- [Webhooks](https://docs.mediakind.com/api-guides/understanding/webhooks): the payload model, supported events, and handler design.
- [Transforms and jobs](https://docs.mediakind.com/api-guides/how-to/media/transforms-and-jobs): pair job workflows with completion events.