# Source: https://docs.mediakind.com/api-guides/getting-started/authentication

# Authentication and tokens

The MK.IO APIs use bearer authentication. You create a personal API token in the MK.IO web application, send it in the `Authorization` header, and the request runs with the same organization and project access as the user who created it.

## Create a personal token

[Section titled “Create a personal token”](https://docs.mediakind.com/api-guides/getting-started/authentication/#create-a-personal-token)

Create a token in the MK.IO web application:

1. Open the profile menu in the top right corner and select your email address.
2. Go to [**Your personal API tokens**](https://app.mk.io/user/profile).
3. Select **Add Token**.
4. Enter a description and an expiration date in UTC.
5. Select **Create**.
6. Copy the token to a secure location. It is visible for 5 minutes only.

For the full token-management pages in the MK.IO product, see [API tokens](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens).

## What a personal token represents

[Section titled “What a personal token represents”](https://docs.mediakind.com/api-guides/getting-started/authentication/#what-a-personal-token-represents)

The personal token contains:

- The identity of the user.
- The identity of the organization.
- The token type and expiration date.
- Optionally, a reduced set of permissions when the token grants only a subset of the user’s access.

The token therefore carries the access of the user who created it. When that user’s access changes, the token’s effective access changes with it.

## Send the token with every request

[Section titled “Send the token with every request”](https://docs.mediakind.com/api-guides/getting-started/authentication/#send-the-token-with-every-request)

Every MK.IO API uses the same header:

```
Authorization: Bearer <YOUR_TOKEN>
```

For requests that carry a body, send JSON headers as well:

```
Content-Type: application/json
Accept: application/json
```

A complete request looks like this:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Accept: application/json"
```

Replace `<PROJECT_NAME>` with the project you want to query and `<YOUR_TOKEN>` with the token you created.

## Base URL

[Section titled “Base URL”](https://docs.mediakind.com/api-guides/getting-started/authentication/#base-url)

The MK.IO APIs share one base URL:

```
https://app.mk.io
```

Combine it with the path for the endpoint you want to call, for example:

```
https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets
```

## A practical local setup

[Section titled “A practical local setup”](https://docs.mediakind.com/api-guides/getting-started/authentication/#a-practical-local-setup)

When you work from the command line, export the values you reuse:

Terminal window

```
export MKIO_TOKEN="<YOUR_TOKEN>"
export MKIO_PROJECT="<PROJECT_NAME>"
export MKIO_BASE_URL="https://app.mk.io"
```

Then reference them in later commands:

Terminal window

```
curl -X GET "$MKIO_BASE_URL/api/v1/projects/$MKIO_PROJECT/media/assets" \
  -H "Authorization: Bearer $MKIO_TOKEN" \
  -H "Accept: application/json"
```

This keeps the examples short and makes it easier to switch projects or rotate tokens.

## Keep tokens out of source code

[Section titled “Keep tokens out of source code”](https://docs.mediakind.com/api-guides/getting-started/authentication/#keep-tokens-out-of-source-code)

A token grants MK.IO access to anyone who holds it, so treat it as a secret:

- Do not commit tokens to source control.
- Do not embed them in client-side code or public applications.
- Rotate and replace them if they are exposed.
- Use a narrower token type when you want to reduce the blast radius. See [Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens) for the Management API workflow.

## Next steps

[Section titled “Next steps”](https://docs.mediakind.com/api-guides/getting-started/authentication/#next-steps)

- [Your first API call](https://docs.mediakind.com/api-guides/getting-started/first-api-call): confirm that your token and project access work.
- [Tokens](https://docs.mediakind.com/api-guides/how-to/management/tokens): create, inspect, and revoke tokens through the Management API.
- [Which API to use](https://docs.mediakind.com/api-guides/getting-started/which-api): choose the API that owns the resources in your workflow.