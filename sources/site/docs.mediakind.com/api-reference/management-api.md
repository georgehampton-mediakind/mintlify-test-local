# Source: https://docs.mediakind.com/api-reference/management-api

# Management API

[Download OpenAPI spec](https://docs.mediakind.com/openapi/mkio/management-api.json)

Base URL `https://app.mk.io` v0.19.25 60 endpoints OpenAPI 3.0.2

## Overview

The MK.IO Management API is the REST API for organization, project, and account administration in MK.IO. It supports governance and operational setup use cases, including managing users/teams/roles/scopes, project and location management, payment methods, webhook rules, usage reporting, and profile/token operations.

## Authentication

All endpoints require a bearer token in the `Authorization` header: `Authorization: Bearer <your_token>`

You can create and manage your tokens in your [profile settings](https://app.mk.io/user/profile) under **Your personal API tokens**. Follow the [API tokens guide](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens) for more information.

## Usage

Base URL: `https://app.mk.io`

Typical usage pattern:

- Identify the organization and project context.
- Manage users, roles, teams, and project settings.
- Create, rotate, and revoke tokens before calling Media, Infrastructure, or Fleet APIs.

## Endpoints

[Auth 2 endpoints](https://docs.mediakind.com/api-reference/management-api/auth)

[get Get public keys /.well-known/jwks.json](https://docs.mediakind.com/api-reference/management-api/auth/get-public-keys) [get Get revoked token IDs /.well-known/revoked.json](https://docs.mediakind.com/api-reference/management-api/auth/get-revoked-token-ids)

[Locations 2 endpoints](https://docs.mediakind.com/api-reference/management-api/locations)

[get List available Locations /api/v1/locations](https://docs.mediakind.com/api-reference/management-api/locations/list-available-locations) [get Get Location /api/v1/locations/{location\_name}](https://docs.mediakind.com/api-reference/management-api/locations/get-location)

[Organization 3 endpoints](https://docs.mediakind.com/api-reference/management-api/organization)

[get Get an organization /api/v1/organization](https://docs.mediakind.com/api-reference/management-api/organization/get-an-organization) [post Create an organization /api/v1/organization](https://docs.mediakind.com/api-reference/management-api/organization/create-an-organization) [patch Update organization /api/v1/organization](https://docs.mediakind.com/api-reference/management-api/organization/update-organization)

[Payment 5 endpoints](https://docs.mediakind.com/api-reference/management-api/payment)

[get List Payment Methods /api/v1/organization/paymentMethods](https://docs.mediakind.com/api-reference/management-api/payment/list-payment-methods) [get Get one Payment Method /api/v1/organization/paymentMethods/{paymentmethod\_id}](https://docs.mediakind.com/api-reference/management-api/payment/get-one-payment-method) [patch Patch Payment Method /api/v1/organization/paymentMethods/{paymentmethod\_id}](https://docs.mediakind.com/api-reference/management-api/payment/patch-payment-method) [post Accept Terms & Conditions /api/v1/organization/paymentMethods/{paymentmethod\_id}/acceptTermsAndConditions](https://docs.mediakind.com/api-reference/management-api/payment/accept-terms-conditions) [get Get ratecard for payment method /api/v1/organization/paymentMethods/{paymentmethod\_id}/rateCard](https://docs.mediakind.com/api-reference/management-api/payment/get-ratecard-for-payment-method)

[Projects 8 endpoints](https://docs.mediakind.com/api-reference/management-api/projects)

[get List projects /api/v1/projects](https://docs.mediakind.com/api-reference/management-api/projects/list-projects) [get Get a project /api/v1/projects/{project\_name}](https://docs.mediakind.com/api-reference/management-api/projects/get-a-project) [put Create a project /api/v1/projects/{project\_name}](https://docs.mediakind.com/api-reference/management-api/projects/create-a-project) [patch Edit a project /api/v1/projects/{project\_name}](https://docs.mediakind.com/api-reference/management-api/projects/edit-a-project) [get Get metrics endpoint settings /api/v1/projects/{project\_name}/metricsEndpoint](https://docs.mediakind.com/api-reference/management-api/projects/get-metrics-endpoint-settings) [patch Update metrics endpoint settings /api/v1/projects/{project\_name}/metricsEndpoint](https://docs.mediakind.com/api-reference/management-api/projects/update-metrics-endpoint-settings) [get Get assigned payment method /api/v1/projects/{project\_name}/paymentMethod](https://docs.mediakind.com/api-reference/management-api/projects/get-assigned-payment-method) [post Assign payment method /api/v1/projects/{project\_name}/paymentMethod](https://docs.mediakind.com/api-reference/management-api/projects/assign-payment-method)

[Readiness Check 1 endpoint](https://docs.mediakind.com/api-reference/management-api/readiness-check)

[get Endpoint for readiness-check /api/ready](https://docs.mediakind.com/api-reference/management-api/readiness-check/endpoint-for-readiness-check)

[Reports 2 endpoints](https://docs.mediakind.com/api-reference/management-api/reports)

[post Get usage report /api/v1/organization/reports/usage](https://docs.mediakind.com/api-reference/management-api/reports/get-usage-report) [get Get project usage data /api/v1/projects/{project\_name}/usage](https://docs.mediakind.com/api-reference/management-api/reports/get-project-usage-data)

[Roles 2 endpoints](https://docs.mediakind.com/api-reference/management-api/roles)

[get List Roles /api/v1/organization/roles](https://docs.mediakind.com/api-reference/management-api/roles/list-roles) [get Get a Role /api/v1/organization/roles/{role\_name}](https://docs.mediakind.com/api-reference/management-api/roles/get-a-role)

[Scopes 2 endpoints](https://docs.mediakind.com/api-reference/management-api/scopes)

[get List Scopes /api/v1/organization/scopes](https://docs.mediakind.com/api-reference/management-api/scopes/list-scopes) [get Get a Scope /api/v1/organization/scopes/{scope\_name}](https://docs.mediakind.com/api-reference/management-api/scopes/get-a-scope)

[Teams 5 endpoints](https://docs.mediakind.com/api-reference/management-api/teams)

[get List Teams /api/v1/organization/teams](https://docs.mediakind.com/api-reference/management-api/teams/list-teams) [get Get a Team /api/v1/organization/teams/{team\_name}](https://docs.mediakind.com/api-reference/management-api/teams/get-a-team) [put Create or Edit a Team /api/v1/organization/teams/{team\_name}](https://docs.mediakind.com/api-reference/management-api/teams/create-or-edit-a-team) [patch Patch a Team /api/v1/organization/teams/{team\_name}](https://docs.mediakind.com/api-reference/management-api/teams/patch-a-team) [del Delete a Team /api/v1/organization/teams/{team\_name}](https://docs.mediakind.com/api-reference/management-api/teams/delete-a-team)

[User Management 9 endpoints](https://docs.mediakind.com/api-reference/management-api/user-management)

[get List pending invites /api/v1/organization/invites](https://docs.mediakind.com/api-reference/management-api/user-management/list-pending-invites) [post Create an invite /api/v1/organization/invites](https://docs.mediakind.com/api-reference/management-api/user-management/create-an-invite) [get Get one pending invite /api/v1/organization/invites/{invite\_id}](https://docs.mediakind.com/api-reference/management-api/user-management/get-one-pending-invite) [del Cancel pending invite /api/v1/organization/invites/{invite\_id}](https://docs.mediakind.com/api-reference/management-api/user-management/cancel-pending-invite) [get Get tokens of all users /api/v1/organization/tokens](https://docs.mediakind.com/api-reference/management-api/user-management/get-tokens-of-all-users) [del Revoke a token of a user /api/v1/organization/tokens/{token\_id}](https://docs.mediakind.com/api-reference/management-api/user-management/revoke-a-token-of-a-user) [get List users /api/v1/organization/users](https://docs.mediakind.com/api-reference/management-api/user-management/list-users) [get Get user details /api/v1/organization/users/{user\_id}](https://docs.mediakind.com/api-reference/management-api/user-management/get-user-details) [del Remove user /api/v1/organization/users/{user\_id}](https://docs.mediakind.com/api-reference/management-api/user-management/remove-user)

[Webhook Rules 5 endpoints](https://docs.mediakind.com/api-reference/management-api/webhook-rules)

[get List Webhook Rules /api/v1/projects/{project\_name}/webhook/rules](https://docs.mediakind.com/api-reference/management-api/webhook-rules/list-webhook-rules) [get Get Webhook Rule /api/v1/projects/{project\_name}/webhook/rules/{rule\_name}](https://docs.mediakind.com/api-reference/management-api/webhook-rules/get-webhook-rule) [put Create or Update Webhook Rule /api/v1/projects/{project\_name}/webhook/rules/{rule\_name}](https://docs.mediakind.com/api-reference/management-api/webhook-rules/create-or-update-webhook-rule) [del Delete Webhook Rule /api/v1/projects/{project\_name}/webhook/rules/{rule\_name}](https://docs.mediakind.com/api-reference/management-api/webhook-rules/delete-webhook-rule) [get Get Webhook Events /api/v1/projects/{project\_name}/webhook/rules/{rule\_name}/events](https://docs.mediakind.com/api-reference/management-api/webhook-rules/get-webhook-events)

[Your Profile 14 endpoints](https://docs.mediakind.com/api-reference/management-api/your-profile)

[get Get profile Deprecated /api/profile/](https://docs.mediakind.com/api-reference/management-api/your-profile/get-profile) [put Update profile Deprecated /api/profile/](https://docs.mediakind.com/api-reference/management-api/your-profile/update-profile) [get List user's organizations and any associated invitation /api/v1/user/organizations](https://docs.mediakind.com/api-reference/management-api/your-profile/list-users-organizations-and-any-associated-invitation) [get Get organization details /api/v1/user/organizations/{organization\_id}](https://docs.mediakind.com/api-reference/management-api/your-profile/get-organization-details) [patch Update organization details (to accept an invitation). /api/v1/user/organizations/{organization\_id}](https://docs.mediakind.com/api-reference/management-api/your-profile/update-organization-details-to-accept-an-invitation) [del Leave an organization/Decline an invite to an organization /api/v1/user/organizations/{organization\_id}](https://docs.mediakind.com/api-reference/management-api/your-profile/leave-an-organization-decline-an-invite-to-an-organization) [get Get profile /api/v1/user/profile](https://docs.mediakind.com/api-reference/management-api/your-profile/get-profile-get) [patch Update profile /api/v1/user/profile](https://docs.mediakind.com/api-reference/management-api/your-profile/update-profile-patch) [get Get RBAC capability data /api/v1/user/rbac](https://docs.mediakind.com/api-reference/management-api/your-profile/get-rbac-capability-data) [get Get all user tokens /api/v1/user/tokens](https://docs.mediakind.com/api-reference/management-api/your-profile/get-all-user-tokens) [post Request a new token /api/v1/user/tokens](https://docs.mediakind.com/api-reference/management-api/your-profile/request-a-new-token) [del Revoke all user tokens /api/v1/user/tokens](https://docs.mediakind.com/api-reference/management-api/your-profile/revoke-all-user-tokens) [get Get a user token by ID /api/v1/user/tokens/{token\_id}](https://docs.mediakind.com/api-reference/management-api/your-profile/get-a-user-token-by-id) [del Revoke a token /api/v1/user/tokens/{token\_id}](https://docs.mediakind.com/api-reference/management-api/your-profile/revoke-a-token)