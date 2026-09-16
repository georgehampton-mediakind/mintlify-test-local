# Source: https://docs.mediakind.com/beam/system-admin/security/ssl-certificates

# Enable customer-signed SSL certificates

## Certificate file location

[Section titled “Certificate file location”](https://docs.mediakind.com/beam/system-admin/security/ssl-certificates/#certificate-file-location)

It is advisable to keep the cert files (.crt/.key) in `/etc/pki/tls/certs/` custom folder. The configuration script allows for this place to be different but if it is not here, it will not be backed up on upgrade.

## Configuration file

[Section titled “Configuration file”](https://docs.mediakind.com/beam/system-admin/security/ssl-certificates/#configuration-file)

The configuration file which is used for this process is `/usr/bin/certs/certs.conf`. It needs to be updated with user’s custom values for the correct certs to be added.

Sample file:

Terminal window

```
##############################################################
#                                                            #
# Config file used by add-https-certs.sh                     #
# Needs to be populated by the customer specific file names  #
#                                                            #
##############################################################
CERTS_input_file_location=/etc/pki/tls/certs/custom
client_KEY_file=customer.key
client_CRT_file=customer.crt
CA_auth_file=TrustedRoot.crt
http_deployment=api-gateway
```

| Parameter | Value |
| :-- | :-- |
| `CERTS_input_file_location` | This is the place where the `.key` and `.crt` files should be placed. |
| `client_KEY_file, client_CRT_file, CA_auth_file` | Customer files; needs to be updated to show the actual file names used. |
| `http_deployment` | In the current deployment, this is always `api-gateway` so no need to change. |

## Configuration script

[Section titled “Configuration script”](https://docs.mediakind.com/beam/system-admin/security/ssl-certificates/#configuration-script)

The script that does the configuration is `/usr/bin/certs/add-https-certs.sh`. Running just the script without any arguments will give possible actions.

Usage:

Terminal window

```
add-https-certs.sh <action>
```

Actions:

Terminal window

```
-a, --add Add custom certs to the unit
-h, --help Display configuration details
```

Once the configuration file has been updated, run the script:

Terminal window

```
./add-https-certs.sh --add
```

Progress will be displayed on the CLI. If successful, there is no need to do anything else, the certs will be in place and in use.

The HTTPS port used is 31443, so to see certs once added use: `https://myunitIP.com:31443`

As well as configuring the HTTPS web access the same certificate also configures HTTPS packaged output, see [HTTPS Packaged Output](https://docs.mediakind.com/beam/packager/https-output).