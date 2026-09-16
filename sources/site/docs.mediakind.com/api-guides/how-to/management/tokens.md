# Source: https://docs.mediakind.com/api-guides/how-to/management/tokens

# Tokens

Tokens authenticate applications to the MK.IO APIs. The Management API gives you two views: user-level management for your own tokens, and organization-level management for auditing or revoking tokens across the organization. A token never grants more than the user who created it has, so the main decision is how much of that access to expose.

## Choosing a token type

[Section titled “Choosing a token type”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#choosing-a-token-type)

There are four types. For automation, prefer `restricted` so an exposed token cannot do more than its job requires.

| Type | Capabilities | Expiry |
| :-- | :-- | :-- |
| `login` | Full user capabilities | Short-lived |
| `full-access` | Full user capabilities | Optional, up to one year |
| `restricted` | A scoped subset you define | Optional, up to one year |
| `ephemeral` | A scoped subset, short-lived | Short-lived |

## Create a full-access token

[Section titled “Create a full-access token”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#create-a-full-access-token)

A token is created with `POST`. `type` and `organizationId` are always required.

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/user/tokens" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "full-access",
    "description": "CI deployment token",
    "organizationId": "<ORG_ID>",
    "expireDate": "2027-01-01T00:00:00Z"
  }'
```

The response includes the generated token as `metadata.JWT`. MK.IO does not store it, so it is **visible only at creation time, for five minutes**. Copy it somewhere secure immediately.

## Create a restricted token

[Section titled “Create a restricted token”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#create-a-restricted-token)

A `restricted` token adds a `permissions` object that must be a strict subset of your own capabilities. Read your access first so you know what you can grant:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/user/rbac" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Then build `permissions` from a subset of that structure. This example grants only asset operations on one project:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/user/tokens" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "restricted",
    "description": "Asset automation, one project",
    "organizationId": "<ORG_ID>",
    "expireDate": "2027-01-01T00:00:00Z",
    "permissions": {
      "core.project": {
        "<PROJECT_ID>": {
          "ams.asset": ["create", "delete", "get", "update"]
        }
      }
    }
  }'
```

## Inspect and revoke

[Section titled “Inspect and revoke”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#inspect-and-revoke)

List or read your own tokens. Expired tokens are filtered out of the list.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/user/tokens" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

A token record carries operational fields including `issued`, `expires`, `lastUsed`, `revoked`, and (for restricted tokens) `permissions`. Revoke one token, or all of your tokens at once:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/user/tokens/<TOKEN_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/user/tokens" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Use the revoke-all carefully: it affects all of your tokens across organizations.

## Audit tokens across the organization

[Section titled “Audit tokens across the organization”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#audit-tokens-across-the-organization)

An organization admin can list every token with access to the organization, and revoke any of them:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization/tokens" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X DELETE "https://app.mk.io/api/v1/organization/tokens/<TOKEN_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#what-goes-wrong)

- **The token is lost after creation.** The `JWT` is shown once, for five minutes, and is never stored. If you miss it, revoke the token and create a new one.
- **A restricted token returns `403`.** Its `permissions` must be a subset of your own access. Compare against `/api/v1/user/rbac`, and remember the token loses capabilities if your own access is later reduced.
- **Forgetting the expiry ceiling.** `expireDate` cannot be more than one year after creation.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/management/tokens/#what-comes-next)

- [Users and teams](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams): the access model a token’s permissions draw from.
- [Authentication and tokens](https://docs.mediakind.com/api-guides/getting-started/authentication): bearer-auth basics and UI-based personal token creation.