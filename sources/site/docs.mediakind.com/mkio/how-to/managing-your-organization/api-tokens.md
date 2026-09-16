# Source: https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens

# API tokens

Making an API request to access MK.IO services requires a token for authentication.

An API token is a unique character string that identifies you to the API. It acts like a key that tells the API who you are and what you are allowed to do. Using an API token ensures that only authorized users and applications can access API services.

The personal token contains the following information:

- The identity of the user.
- The identity of the organization.
- The token type and expiration date.
- Optionally, a set of permissions if the token only grants a subset of the user’s permissions.

## Create a personal API token

[Section titled “Create a personal API token”](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens/#create-a-personal-api-token)

1. From the profile drop-down menu in the top right corner, click your email, then navigate to the **Your personal API tokens** section.
2. Click **Add Token**, then enter a description and the expiration date (UTC time).
3. Click **Create**.

Once created, copy the token to a secure location. It is only visible for 5 minutes.

## View tokens

[Section titled “View tokens”](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens/#view-tokens)

- **As a user:** From the profile drop-down menu in the top right corner, click your email, then navigate to the **Your personal API Tokens** section. You can only see the tokens you created.
- **As an Admin:** From the profile drop-down menu, navigate to **Organization Settings**, then select **API Tokens**. You can view all API tokens and their creators.

## Revoke an API token

[Section titled “Revoke an API token”](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens/#revoke-an-api-token)

For each token in the list, select the action button at the right of the row to view the token details or revoke it.

## Manage tokens with the API

[Section titled “Manage tokens with the API”](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens/#manage-tokens-with-the-api)

Use the [Tokens API Guide](https://docs.mediakind.com/api-guides/how-to/management/tokens) for token endpoints, authentication headers, and revocation workflows.