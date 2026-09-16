# Source: https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage

# Connect cloud storage

MK.IO uses your own cloud storage to hold media assets. Before you can upload, transform, or publish content, connect at least one storage account. This portal guide covers Amazon S3 and Azure Blob Storage.

For automated storage configuration, MK.IO provides an application programming interface (API) called the Media API. It also defines Google Cloud Storage registration through `Google.Storage`. See the [Storage API Guide](https://docs.mediakind.com/api-guides/how-to/media/storage).

- [Amazon S3](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#tab-panel-24)
- [Azure Blob Storage](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#tab-panel-25)

### Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#prerequisites)

You need an Amazon Web Services (AWS) account with permissions to create Identity and Access Management (IAM) users and manage Amazon S3 buckets.

### Step 1: Create an S3 bucket

[Section titled “Step 1: Create an S3 bucket”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#step-1-create-an-s3-bucket)

If you do not already have an S3 bucket for MK.IO to use:

1. Go to the [AWS Console](https://console.aws.amazon.com) and open **S3**.
2. Select **Create bucket**.
3. Choose a bucket name and select the AWS region closest to your MK.IO project region. MK.IO automatically detects the bucket region, so you do not enter a region in MK.IO.
4. Leave **Block Public Access** settings enabled (MK.IO accesses the bucket using credentials, not public URLs).
5. Select **Create bucket**.

MK.IO detects your bucket’s region automatically from the bucket name. There is no region field to fill in when connecting S3 storage.

### Step 2: Create an IAM user with S3 permissions

[Section titled “Step 2: Create an IAM user with S3 permissions”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#step-2-create-an-iam-user-with-s3-permissions)

MK.IO accesses your S3 bucket using an IAM access key. Create a dedicated IAM user with the minimum required permissions.

#### Create the IAM user

[Section titled “Create the IAM user”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#create-the-iam-user)

1. Open **IAM** in the AWS Console.
2. Go to **Users** and click **Create user**.
3. Enter a username (for example, `mkio-storage`) and select **Next**.
4. Select **Attach policies directly**, then select **Create policy**.
5. Switch to the **JSON** editor and paste the following policy, replacing `your-bucket-name` with your actual bucket name:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

6. Name the policy (for example, `mkio-s3-access`) and select **Create policy**.
7. Return to the user creation tab, refresh the policy list, select your new policy, and complete the user creation.

#### Create access keys

[Section titled “Create access keys”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#create-access-keys)

1. Open your newly created IAM user.
2. Go to the **Security credentials** tab.
3. Under **Access keys**, click **Create access key**.
4. Choose **Application running outside AWS** as the use case.
5. Select **Create access key**.
6. Copy the **Access key ID** and **Secret access key** and store them securely. AWS does not show the secret access key again after this screen.

### Step 3: Add the S3 bucket in MK.IO

[Section titled “Step 3: Add the S3 bucket in MK.IO”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#step-3-add-the-s3-bucket-in-mkio)

1. Go to [app.mk.io](https://app.mk.io) and open your project.
2. Select **Storage** from the left navigation.
3. Select **Add Storage**.
4. Fill in the required fields:
 - **Storage account name**: A display name for this connection (for example, `my-s3-bucket`).
 - **Description**: Optional.
 - **Bucket name**: The exact name of your S3 bucket.
 - **Access key ID**: The access key ID you copied in Step 2.
 - **Secret access key**: The secret access key you copied in Step 2.
5. Select **Submit**.

MK.IO connects to the bucket and the storage account appears in your storage list.

### Troubleshooting

[Section titled “Troubleshooting”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#troubleshooting)

**Error: “Access Denied: Invalid AWS credentials” or “Error getting region for bucket”**

This error means MK.IO cannot authenticate with your AWS credentials. There is no region field in MK.IO because the region is detected automatically from the bucket. If you see this error:

- Verify that the **Access key ID** and **Secret access key** are correct and have not been regenerated since you copied them.
- Confirm that the IAM user or role associated with these credentials has the `s3:GetObject`, `s3:PutObject`, `s3:DeleteObject`, and `s3:ListBucket` permissions on the bucket.
- Check that the bucket name you entered in MK.IO is spelled exactly as it appears in AWS, including the case.
- If the credentials belong to an IAM role rather than a user, confirm that the role’s trust policy allows the credentials to be used from outside AWS.

**Error: “Bucket does not exist”**

Confirm the bucket name and that the bucket exists in your AWS account. Bucket names are globally unique. If the name exists but belongs to a different AWS account, you receive this error.

### Prerequisites

[Section titled “Prerequisites”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#prerequisites-1)

You need an Azure account with permissions to manage storage accounts and create Shared Access Signatures (SAS tokens).

### Step 1: Locate your storage account

[Section titled “Step 1: Locate your storage account”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#step-1-locate-your-storage-account)

1. Go to the [Azure Portal](https://portal.azure.com).
2. Open **Storage accounts** and select the storage account you want to connect to MK.IO.

Your Azure Storage account should be in the same region as your MK.IO project to avoid data egress costs.

### Step 2: Generate a SAS token

[Section titled “Step 2: Generate a SAS token”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#step-2-generate-a-sas-token)

A Shared Access Signature (SAS) token grants MK.IO time-limited, permission-scoped access to your storage account without sharing your account keys.

#### Open the SAS configuration

[Section titled “Open the SAS configuration”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#open-the-sas-configuration)

1. In your storage account, go to **Security + networking** > **Shared access signature**.

#### Configure the SAS token permissions

[Section titled “Configure the SAS token permissions”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#configure-the-sas-token-permissions)

Set the following options:

- **Allowed services**: Check **Blob** only.
- **Allowed resource types**: Check **Container** and **Object**.
- **Allowed permissions**: Check **Read**, **Write**, **Delete**, **List**, **Add**, and **Create**.
- **Start and expiry date/time**: Set an expiry date appropriate for your use. MK.IO will lose access to the storage account when the token expires.

#### Generate and copy the SAS token

[Section titled “Generate and copy the SAS token”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#generate-and-copy-the-sas-token)

1. Select **Generate SAS and connection string**.
2. Copy the **Blob service SAS URL**. It looks like this:

```
https://<storage-name>.blob.core.windows.net/?sv=2022-11-02&ss=b&srt=co&sp=rwdlac&se=2026-12-31T00:00:00Z&spr=https&sig=<signature>
```

3. Split this URL into two parts for use in MK.IO:
 - **URL**: Everything up to and including `.blob.core.windows.net`. Do not include a trailing slash:

        ```
        https://<storage-name>.blob.core.windows.net
        ```

 - **SAS token**: The query string beginning with `?`:

        ```
        ?sv=2022-11-02&ss=b&srt=co&sp=rwdlac&se=2026-12-31T00:00:00Z&spr=https&sig=<signature>
        ```

### Step 3: Add the storage account in MK.IO

[Section titled “Step 3: Add the storage account in MK.IO”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#step-3-add-the-storage-account-in-mkio)

1. Go to [app.mk.io](https://app.mk.io) and open your project.
2. Select **Storage** from the left navigation.
3. Select **Add Storage**.
4. Fill in the required fields:
 - **Storage account name**: A display name for this connection.
 - **Description**: Optional.
 - **URL**: The base blob endpoint without a trailing slash (for example, `https://mystorageaccount.blob.core.windows.net`).
 - **SAS token**: The query string beginning with `?`.
5. Select **Submit**.

MK.IO validates the credentials and the storage account appears in your storage list.

### Troubleshooting

[Section titled “Troubleshooting”](https://docs.mediakind.com/mkio/getting-started/connect-cloud-storage/#troubleshooting-1)

**Error on submit: “Invalid URL” or validation failure**

- Confirm the **URL** field does not have a trailing slash. The URL must end with `.blob.core.windows.net`.
- Confirm the **SAS token** field begins with `?`. Do not include the base URL in the SAS token field.

**Storage account connects but MK.IO cannot read or write files**

- Check that the SAS token includes **Container** and **Object** under allowed resource types. A token scoped to Object only cannot list containers.
- Check that the SAS token has not expired. Generate a new token with a future expiry and update the connection in MK.IO.
- Confirm the **Allowed permissions** include Read, Write, Delete, List, Add, and Create. Missing permissions cause specific operations to fail without a clear error.

**Egress costs are unexpectedly high**

Your Azure Storage account and MK.IO project are likely in different regions. Data transferred between regions incurs egress charges. Create a storage account in the same Azure region as your MK.IO project.