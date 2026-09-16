# Source: https://docs.mediakind.com/beam/packager/advanced-parameters

# Advanced Parameters

## Configuring credentials for direct remote storage access

[Section titled “Configuring credentials for direct remote storage access”](https://docs.mediakind.com/beam/packager/advanced-parameters/#configuring-credentials-for-direct-remote-storage-access)

### Format

[Section titled “Format”](https://docs.mediakind.com/beam/packager/advanced-parameters/#format)

The file is in the YAML format and located at `/etc/mediakind/mkp/charts/customer-values.yaml`. A specific script must be executed to apply the changes brought to the file that remain after a product update. If no value is specified or if a value is removed from the file, default values from installer are used.

Each entry contains the following elements:

- `url`: the base URL of a storage.
- `type`: the type of credential to be used for this base URL. It can be:
 - `user` for access with username and password
 - `s3` for access using AWS S3 object store credentials
 - `azureSasToken` for access using Blob Azure credential
 - `certificate` for HTTPS access

#### User credential

[Section titled “User credential”](https://docs.mediakind.com/beam/packager/advanced-parameters/#user-credential)

The entry should contain the following elements:

- `username`
- `password`

It can be used for FTP or SFTP access (`ftp://…` or `sftp://…`).

```
credentials:
  [ {"type": "user", "url": "sftp://myServer/share1", "username": "test", "password": "1234"} ]
```

#### Blob Azure credential

[Section titled “Blob Azure credential”](https://docs.mediakind.com/beam/packager/advanced-parameters/#blob-azure-credential)

To configure the Azure authentication for your system, the entry in the credential file should contain the following elements:

- `url`: URL provided at the Blob storage creation.
- `type`: Type of credential to be used for this URL. It must be: `azureSasToken`.
- `sasToken`: Token provided at the Blob storage creation.

```
credentials:
    [{"type" : "azureSasToken", "url" : "https://myaccount.blob.core.windows.net/mycontainer", "sasToken" : "?sv=2020-02-10&ss=bfqt&srt=o&sp=rwdlacupx&se=2021-02-24T00:46:59Z&st=2021-02-23T16:46:59Z&spr=https&sig=..."} ]
```

#### AWS S3 object store credential

[Section titled “AWS S3 object store credential”](https://docs.mediakind.com/beam/packager/advanced-parameters/#aws-s3-object-store-credential)

This credential corresponds to an AWS access key.

The entry should contain the following elements:

- `accessKeyId`: The ID of the access key
- `secretAccessKey`: The secret access key

```
credentials:
  [{ "type": "s3", "url" : "https://mk-cr8-poc.s3.us-east.cloud-object-storage.appdomain.cloud", "accessKeyId" : "e45d9e87d91421f2f3c69fca4c", "secretAccessKey":"236e8cc37c9ccc355b9ffb17fe8"} ]
```

#### Certificate credentials

[Section titled “Certificate credentials”](https://docs.mediakind.com/beam/packager/advanced-parameters/#certificate-credentials)

The entry should contain the following elements:

- `certificateFile`: to be defined in client\_crt\_certificate value
- `privateKeyFile`: to be defined in client\_key\_certificate value
- `privateKeyPassword`

```
credentials:
  [ {"type": "certificate", "url": "https://mysecure-webdav.com/secure", "certificateFile": "/tmp/client-crt.pem", "privateKeyFile": "/tmp/client-key.pem", "privateKeyPassword": "xxyyzz"} ]
```

#### Multiple credentials display

[Section titled “Multiple credentials display”](https://docs.mediakind.com/beam/packager/advanced-parameters/#multiple-credentials-display)

```
credentials:
  [
  {"type": "user", "url": "sftp://myServer/share1", "username": "test", "password": "1234"},
  {"type" : "azureSasToken", "url" : "https://myaccount.blob.core.windows.net/mycontainer", "sasToken" : "?sv=2020-02-10&ss=bfqt&srt=o&sp=rwdlacupx&se=2021-02-24T00:46:59Z&st=2021-02-23T16:46:59Z&spr=https&sig=..."},
  { "type": "s3", "url" : "https://mk-cr8-poc.s3.us-east.cloud-object-storage.appdomain.cloud", "accessKeyId" : "e45d9e87d91421f2f3c69fca4c", "secretAccessKey":"236e8cc37c9ccc355b9ffb17fe8"}
  ]
```

### Deployment

[Section titled “Deployment”](https://docs.mediakind.com/beam/packager/advanced-parameters/#deployment)

This configuration file should be created by the user and needs to be deployed on every Packager server under the following path: /etc/mediakind/mkp/charts/customer-values.yaml.

Once the file `customer-values.yaml` is configured, the following script must be executed to apply the changes:

Terminal window

```
/etc/mediakind/mkp/charts/apply_customer_values.sh
```

### Example

[Section titled “Example”](https://docs.mediakind.com/beam/packager/advanced-parameters/#example)

When a job is created, it will parse this file to find the associated credentials of the file URL it needs to access.

For example, if the file contains the following credentials:

```
credentials:
  [
  {"type" : "user", "url" : "sftp://server1", "username" : "admin", "password":"1234"},
  {"type" : "user", "url" : "sftp://server2/share", "username" : "admin", "password":"4321"}
  ]
```

If a job input file is `sftp://server2/share/video.ts`, the second credential will be used: the input URL matches with the base URL of the second credential.

The selected credentials configuration is logged into the high-level logs of the job.