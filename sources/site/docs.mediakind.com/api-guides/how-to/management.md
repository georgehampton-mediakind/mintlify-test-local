# Source: https://docs.mediakind.com/api-guides/how-to/management

# Build with the Management API

The Management API is the control plane for MK.IO. Use it when you need to create projects, manage users and teams, issue tokens, assign payment methods, enable metrics, or configure webhook rules that other workflows depend on.

## API overview

[Section titled “API overview”](https://docs.mediakind.com/api-guides/how-to/management/#api-overview)

| Detail | Value |
| --- | --- |
| Base path | `/api/v1/` |
| Scope | Organization and project |
| Reference | [Management API reference](https://docs.mediakind.com/api-reference/management-api) |

## How the Management API fits into other workflows

[Section titled “How the Management API fits into other workflows”](https://docs.mediakind.com/api-guides/how-to/management/#how-the-management-api-fits-into-other-workflows)

You often use this API before you use anything else:

1. Create a project and assign billing.
2. Grant access to the right users and teams.
3. Create or rotate tokens for automation.
4. Add webhook rules so media or fleet workflows can notify your application.

That makes the Management API the setup and governance layer for the rest of the platform.

## Common workflow patterns

[Section titled “Common workflow patterns”](https://docs.mediakind.com/api-guides/how-to/management/#common-workflow-patterns)

### Provision and govern an organisation

1

[Create a project and assign billing](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning)

2

[Set up users and teams](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams)

3

[Create tokens for automation](https://docs.mediakind.com/api-guides/how-to/management/tokens)

4

[Configure webhook rules](https://docs.mediakind.com/api-guides/how-to/management/webhooks)

5

[Monitor usage and billing](https://docs.mediakind.com/api-guides/how-to/management/usage-and-billing)

## Guides

[Section titled “Guides”](https://docs.mediakind.com/api-guides/how-to/management/#guides)

[Users and teams](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams)

### Users and teams

Understand users, invites, teams, roles, scopes, and the JSON Patch operations used to evolve team access.

[Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens)

### Tokens

Create full-access or restricted tokens, inspect token metadata, and revoke user or organization tokens.

[Organizations and invites](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites)

### Organizations and invites

Inspect accessible organizations, accept pending invitations, and leave or decline organization access cleanly.

[Webhook rules](https://docs.mediakind.com/api-guides/how-to/management/webhooks)

### Webhook rules

Register webhook destinations, choose events, and inspect event delivery status for each rule.

[Usage and billing](https://docs.mediakind.com/api-guides/how-to/management/usage-and-billing)

### Usage and billing

Inspect current project usage, run date-range reports, assign payment methods, and enable metrics export.

## Workflow guide

[Section titled “Workflow guide”](https://docs.mediakind.com/api-guides/how-to/management/#workflow-guide)

[Provision org and users](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning)

### Provision org and users

Create a project, assign billing, then move into access and token setup for the people and systems that will use it.