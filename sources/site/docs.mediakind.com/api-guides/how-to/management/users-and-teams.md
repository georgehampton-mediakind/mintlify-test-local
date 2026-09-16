# Source: https://docs.mediakind.com/api-guides/how-to/management/users-and-teams

# Users and teams

The Management API models access in layers. Users belong to an organization, teams group users, roles define capabilities, and scopes define which resources those capabilities apply to. Access is granted by giving a team one or more roles under a scope, then adding users to the team. Granting access team-by-team rather than user-by-user keeps it reusable and easy to audit.

The usual sequence is: identify the users, inspect the available roles and scopes, create or update a team that maps roles to a scope, and add members.

## List users, roles, and scopes

[Section titled “List users, roles, and scopes”](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams/#list-users-roles-and-scopes)

Start by looking at what already exists. List the users in the organization:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization/users" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Inspect the roles and scopes the organization defines, which are the building blocks of a team’s access. A role record lists its `capabilities`; a scope record lists the `resources` it covers.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization/roles" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X GET "https://app.mk.io/api/v1/organization/scopes" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Create a team

[Section titled “Create a team”](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams/#create-a-team)

A team is created or replaced with `PUT`. The `spec` holds `members` (a map keyed by user ID, where `isTeamAdmin` lets a member edit the team) and `scopes` (a map keyed by scope name, each with a `roles` array).

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/organization/teams/video-engineering" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "description": "Team for media workflow operations",
      "members": {
        "<USER_ID>": { "isTeamAdmin": true }
      },
      "scopes": {
        "<SCOPE_NAME>": { "roles": ["<ROLE_NAME>"] }
      }
    }
  }'
```

A `PUT` replaces the whole team spec. To change one thing on an existing team, use JSON Patch instead, as shown next.

## Evolve a team with JSON Patch

[Section titled “Evolve a team with JSON Patch”](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams/#evolve-a-team-with-json-patch)

The team `PATCH` endpoint takes a JSON Patch document (an array of operations), which is the safe way to change one part of a team without resending the whole spec.

Add a member:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/organization/teams/video-engineering" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '[
    { "op": "add", "path": "/spec/members/<USER_ID>", "value": { "isTeamAdmin": false } }
  ]'
```

Add a role under a scope:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/organization/teams/video-engineering" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '[
    { "op": "add", "path": "/spec/scopes/<SCOPE_NAME>/roles/-", "value": "<ROLE_NAME>" }
  ]'
```

Remove a member:

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/organization/teams/video-engineering" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '[
    { "op": "remove", "path": "/spec/members/<USER_ID>" }
  ]'
```

The same `op` values (`add`, `replace`, `remove`) work for scopes and roles. Use `replace` on `/spec/members/<USER_ID>/isTeamAdmin` to promote or demote a member.

## Check what a token can actually do

[Section titled “Check what a token can actually do”](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams/#check-what-a-token-can-actually-do)

To see the capabilities the current token holds, read its role-based access control (RBAC) data. This is the fastest way to debug a `403 Forbidden`, and it is the starting point for building a restricted token.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/user/rbac" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams/#what-goes-wrong)

- **A `PUT` wipes team members you meant to keep.** `PUT` replaces the entire spec. To change one member or role on a live team, use the JSON Patch endpoint.
- **Deleting a team does not remove the users.** It removes the team and the access it granted; the users remain in the organization.
- **A restricted token cannot exceed your own access.** When you design one, compare it against `/api/v1/user/rbac`; the token’s permissions must be a subset. See [Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens).

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams/#what-comes-next)

- [Organizations and invites](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites): the invitation lifecycle for adding new users.
- [Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens): create restricted automation tokens against this access model.