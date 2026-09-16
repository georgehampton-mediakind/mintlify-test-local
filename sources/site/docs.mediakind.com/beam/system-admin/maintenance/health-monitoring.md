# Source: https://docs.mediakind.com/beam/system-admin/maintenance/health-monitoring

# Configure health monitoring and remote metrics

## Enable/disable health monitoring

[Section titled “Enable/disable health monitoring”](https://docs.mediakind.com/beam/system-admin/maintenance/health-monitoring/#enabledisable-health-monitoring)

Health monitoring is enabled in MK.IO Beam by default. If required, it can be disabled to free up server resources.

To enable/disable health monitoring:

1. Log in as a user with Administrative privileges.
2. Click ![Gear][base64-image] in the upper right corner of the window.
3. Select **Settings.**
4. Under the **General** tab, check or uncheck the **Enable health monitoring features** checkbox as required.

Disabling health monitoring will also disable the remote metrics feature.

## Configure remote metrics

[Section titled “Configure remote metrics”](https://docs.mediakind.com/beam/system-admin/maintenance/health-monitoring/#configure-remote-metrics)

To configure the MK.IO Beam device to push metrics to a remote Grafana endpoint, SSH into the server and execute the `configure_prometheus.sh enable` command, specifying the following parameters:

- `-–username <string>` defines the username for the endpoint of the Grafana instance.
- `-–password <string>` defines the password for the endpoint of the Grafana instance.
- `-–remoteurl <string>` defines the URL for the endpoint of the Grafana instance.
- `-–env <string>` defines the name of the node/machine. If not specified, the hostname is used.
- `-–zone <string>` defines the location zone for the node/machine.

This step will need to be repeated after upgrading the MK.IO Beam software.

## Disable remote metrics

[Section titled “Disable remote metrics”](https://docs.mediakind.com/beam/system-admin/maintenance/health-monitoring/#disable-remote-metrics)

To disable remote metrics, execute the `configure_prometheus.sh disable` command.

The following commands are also available:

- `configure_prometheus.sh show-secret` displays the stored username and password for the Grafana endpoint.
- `configure_prometheus.sh update-secret` update the stored username and password for the Grafana endpoint.
- `-–username <string>` defines the username for the endpoint of the Grafana instance.
- `-–password <string>` defines the password for the endpoint of the Grafana instance.
- `configure_prometheus.sh show-remoteurl` displays the stored URL for the endpoint of the Grafana instance.

If any of the `remoteurl`, `env` or `zone` parameters need to be updated after remote metrics has been enabled, remote metrics must be disabled first. Then enable remote metrics again, passing in the updated parameter values.

## Usage examples

[Section titled “Usage examples”](https://docs.mediakind.com/beam/system-admin/maintenance/health-monitoring/#usage-examples)

How to enable remote metrics using a defined username, password, and URL for Grafana. The username and password are stored in a Kubernetes secret:

- `configure_prometheus.sh enable --username myuser --password mypassword -–remoteurl https://<GRAFANA_HOST>/api/prom/push`

How to disable remote metrics and delete the secret:

- `configure_prometheus.sh disable`

How to update the secret without disabling remote metrics:

- `configure_prometheus.sh update-secret --username myuser --password mypassword`