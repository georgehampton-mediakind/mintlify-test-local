# Source: https://docs.mediakind.com/api-guides/how-to/management/org-provisioning

# Provision org and users

This guide covers the setup that happens first in a new MK.IO environment: confirm the organization, create a project, assign billing, then prepare access for the people and automation that will use it. Each resource here has its own detailed guide; this page is the order to do them in.

A project is the container that holds your media objects, and each project and payment method belongs to exactly one organization. So the sequence is always organization, then billing, then project, then access.

## Step 1: Confirm or create the organization

[Section titled “Step 1: Confirm or create the organization”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#step-1-confirm-or-create-the-organization)

Check which organization the current token belongs to:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

If the user needs a new organization, create one. Only `name` is required; the legal-entity fields are optional.

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/organization" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "name": "Example Media Organization",
      "legalEntityName": "Example Media Ltd",
      "legalEntityContactEmail": "legal@example.com"
    }
  }'
```

## Step 2: Pick a payment method

[Section titled “Step 2: Pick a payment method”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#step-2-pick-a-payment-method)

A project cannot be created without a payment method, so list the ones available first:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization/paymentMethods" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

If the chosen method requires terms acceptance, accept them before assigning it:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/organization/paymentMethods/<PAYMENT_METHOD_ID>/acceptTermsAndConditions" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Step 3: Create the project

[Section titled “Step 3: Create the project”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#step-3-create-the-project)

A project is created with `PUT`, using the name in the URL. It requires `displayName`, `locationName`, and `paymentMethodId`.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/production-media" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "displayName": "Production Media",
    "locationName": "westeurope",
    "paymentMethodId": "<PAYMENT_METHOD_ID>"
  }'
```

Assigning a payment method also activates the project. You can read or replace the assignment later through `/projects/<PROJECT_NAME>/paymentMethod`; see [Usage and billing](https://docs.mediakind.com/api-guides/how-to/management/usage-and-billing).

## Step 4: Prepare access

[Section titled “Step 4: Prepare access”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#step-4-prepare-access)

Review the users, roles, and scopes the organization already has, which are the inputs for team setup:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization/users" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/organization/roles" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/organization/scopes" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Then create a team that grants roles under a scope. See [Users and teams](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams) for the full access model and the JSON Patch operations used to evolve a team.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/organization/teams/video-engineering" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "description": "Team for day-to-day project operations",
      "members": {},
      "scopes": {
        "<SCOPE_NAME>": { "roles": ["<ROLE_NAME>"] }
      }
    }
  }'
```

## Step 5: Create automation tokens

[Section titled “Step 5: Create automation tokens”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#step-5-create-automation-tokens)

Create a token for the systems that will call the APIs. Prefer a `restricted` token for automation so it cannot do more than the job needs. See [Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens).

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/user/tokens" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "restricted",
    "description": "Project automation token",
    "organizationId": "<ORG_ID>",
    "permissions": {}
  }'
```

## Step 6: Add webhook rules early

[Section titled “Step 6: Add webhook rules early”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#step-6-add-webhook-rules-early)

If the project will run jobs or live workflows, add [webhook rules](https://docs.mediakind.com/api-guides/how-to/management/webhooks) at the start rather than waiting until polling becomes painful. That lets your application react to job completion, live channel state changes, and locator creation from day one.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#what-goes-wrong)

- **Creating a project before billing exists.** A project needs a `paymentMethodId`, and some methods need terms accepted first. Do Step 2 before Step 3.
- **Assigning everything to individual users.** Grant roles to teams under scopes, then add users to teams. It is reusable and far easier to audit.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning/#what-comes-next)

- [Users and teams](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams): roles, scopes, and JSON Patch in detail.
- [Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens): choose token types and inspect token metadata.
- [Build with the Media API](https://docs.mediakind.com/api-guides/how-to/media): move from setup into media workflows.