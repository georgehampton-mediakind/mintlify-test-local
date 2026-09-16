# Source: https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites

# Organizations and invites

Organization membership has two sides. An admin invites people to an organization and can cancel a pending invite. A user accepts or declines invitations, lists the organizations they can reach, and leaves an organization. The two use different endpoint groups: `/organization/invites` for the admin side, and `/user/organizations` for the user side.

## Invite a user (admin)

[Section titled “Invite a user (admin)”](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites/#invite-a-user-admin)

Create a pending invitation by email. A `comment` explains why, and `teams` adds the user to those teams when they accept.

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/organization/invites" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "email": "jane.smith@example.com",
      "comment": "Video encoding specialist for the Delphi project",
      "teams": ["encoding-team"]
    }
  }'
```

The invited user receives an email with an invitation link. Two things are worth knowing: an invitation **expires after 14 days**, and an accepted user **automatically joins the Everyone team** in addition to any teams you name.

List pending invites, and cancel one that is no longer needed:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/organization/invites" \
  -H "Authorization: Bearer <YOUR_TOKEN>"

curl -X DELETE "https://app.mk.io/api/v1/organization/invites/<INVITE_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## List the organizations a user can reach

[Section titled “List the organizations a user can reach”](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites/#list-the-organizations-a-user-can-reach)

From the user side, list every organization the current user belongs to, plus any they have a pending invite to:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/user/organizations" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

If an organization record carries an `invite` object, the user has not joined it yet. The `invite` includes who sent it, a comment, and a `state`.

## Accept an invitation

[Section titled “Accept an invitation”](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites/#accept-an-invitation)

Accepting is a `PATCH` on the user’s organization record. The invite `state` is the only field you can change; set it to `accepted` to join.

Terminal window

```
curl -X PATCH "https://app.mk.io/api/v1/user/organizations/<ORGANIZATION_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "invite": { "state": "accepted" }
    }
  }'
```

## Decline an invite or leave an organization

[Section titled “Decline an invite or leave an organization”](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites/#decline-an-invite-or-leave-an-organization)

`DELETE` on the same resource handles both, depending on the current relationship: it declines a pending invite, or removes a current member from the organization.

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/user/organizations/<ORGANIZATION_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Leaving is only reversible by accepting a fresh invitation, so confirm before you call it.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites/#what-goes-wrong)

- **An invite that is never accepted in time.** Invitations expire after 14 days. Re-send if the window passes.
- **Using the wrong endpoint group.** Use `/organization/invites` when an admin manages invitations for others, and `/user/organizations` when the current user accepts, declines, or leaves. They are not interchangeable.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/management/organizations-and-invites/#what-comes-next)

- [Users and teams](https://docs.mediakind.com/api-guides/how-to/management/users-and-teams): the team, role, and scope model new members are granted access through.
- [Provision org and users](https://docs.mediakind.com/api-guides/how-to/management/org-provisioning): the full setup sequence from organization to access.