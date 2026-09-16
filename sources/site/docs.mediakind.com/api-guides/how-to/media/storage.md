# Source: https://docs.mediakind.com/api-guides/how-to/media/storage

# Storage

Most Media API workflows begin with storage. Before MK.IO can process or publish content, it needs a storage instance: its record of an external Azure, AWS, or Google location, together with the credentials it uses to reach that location. The underlying bucket or account stays in your cloud provider. MK.IO only holds the connection details.

For the product background on how storage relates to assets, see [Assets](https://docs.mediakind.com/mkio/understanding/core-concepts/assets).

## Register a storage instance

[Section titled “Register a storage instance”](https://docs.mediakind.com/api-guides/how-to/media/storage/#register-a-storage-instance)

A storage instance is created with `PUT`, and the `spec` body is discriminated by a `type` field. The three supported types are `Microsoft.Storage` (Azure), `AWS.S3`, and `Google.Storage`. The example below registers an Azure account.

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/storage/primary-azure" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "type": "Microsoft.Storage",
      "url": "https://mystorageaccount.blob.core.windows.net",
      "description": "Input media files for processing.",
      "credential": {
        "sasToken": "?sv=2022-11-02&ss=bfqt&srt=co&sp=rwdlacupiyx&se=2026-12-31T23:59:59Z&st=2026-01-01T00:00:00Z&spr=https&sig=<REDACTED>"
      }
    }
  }'
```

A few fields are immutable after creation: the Azure `url`, and the `bucketName` for AWS and Google. The shared secret material differs by provider, as the next section shows.

## Choosing the credential for your provider

[Section titled “Choosing the credential for your provider”](https://docs.mediakind.com/api-guides/how-to/media/storage/#choosing-the-credential-for-your-provider)

Each provider has a different credential shape and a different immutable identifier.

| Provider | `type` | Identifier (immutable) | Credential field |
| :-- | :-- | :-- | :-- |
| Azure | `Microsoft.Storage` | `url` | `credential.sasToken` (include the leading `?`) |
| AWS S3 | `AWS.S3` | `bucketName` | `credential.accessKeyId` and `credential.secretAccessKey` |
| Google | `Google.Storage` | `bucketName` | `credential.gac` (the service-account JSON) |

An AWS registration looks like this:

Terminal window

```
curl -X PUT "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/storage/primary-s3" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "type": "AWS.S3",
      "bucketName": "my-media-bucket",
      "description": "Input media files for processing.",
      "credential": {
        "accessKeyId": "<AWS_ACCESS_KEY_ID>",
        "secretAccessKey": "<AWS_SECRET_ACCESS_KEY>"
      }
    }
  }'
```

## Rotate a credential before it expires

[Section titled “Rotate a credential before it expires”](https://docs.mediakind.com/api-guides/how-to/media/storage/#rotate-a-credential-before-it-expires)

Credentials are immutable once created, so rotation is always a create-new, then delete-old sequence. This matters most for Azure, where an expired Shared Access Signature (SAS) token silently stops asset access. A storage instance can hold many credentials at once, and MK.IO uses the one with the longest remaining expiry, so adding the replacement first means there is no gap.

1. Add the replacement credential to the storage instance:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/storage/primary-azure/credentials" \
  -H "Authorization: Bearer <YOUR_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "spec": {
      "type": "Microsoft.Storage",
      "credential": {
        "sasToken": "?sv=2022-11-02&ss=bfqt&srt=co&sp=rwdlacupiyx&se=2027-12-31T23:59:59Z&st=2027-01-01T00:00:00Z&spr=https&sig=<REDACTED>"
      }
    }
  }'
```

2. Confirm access still works by running an operation that depends on the credential, such as requesting file access on an asset:

Terminal window

```
curl -X POST "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets/source-video/getFileAccessInfo" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

3. Delete the old credential once the new one is working:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/storage/primary-azure/credentials/<CREDENTIAL_ID>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## Update behaviour

[Section titled “Update behaviour”](https://docs.mediakind.com/api-guides/how-to/media/storage/#update-behaviour)

`PUT` and `PATCH` differ in what they can change:

- `PATCH` updates only `description` and `privateLinkServiceConnection`.
- `PUT` updates `description`, the credential, and `privateLinkServiceConnection`.

To move an Azure instance off private-link access, rotate the SAS token and clear the private-link reference in one `PUT` by setting `privateLinkServiceConnection` to `null`. Disable the private-link setup in Azure as well, then confirm asset access before you treat the change as complete.

## What goes wrong

[Section titled “What goes wrong”](https://docs.mediakind.com/api-guides/how-to/media/storage/#what-goes-wrong)

- **An expired SAS token breaks asset access without an obvious error.** Assets in the affected storage stop resolving. Rotate the credential using the create-new, delete-old sequence above.
- **A trailing slash on the Azure `url`.** Register the account URL without a trailing `/`.
- **Deleting a storage instance that assets still use.** Deletion removes only the MK.IO record, not the underlying account or bucket, but assets that depend on it stop resolving. A stopped Live API resource can still reference those assets and later remain in `Starting`. Check for dependent assets and Live resources first:

Terminal window

```
curl -X DELETE "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/storage/primary-azure" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/media/storage/#what-comes-next)

- [Assets](https://docs.mediakind.com/api-guides/how-to/media/assets): create assets that point to content in this storage.
- [Automate a VOD pipeline](https://docs.mediakind.com/api-guides/how-to/media/vod-pipeline): see how storage feeds the rest of a workflow.