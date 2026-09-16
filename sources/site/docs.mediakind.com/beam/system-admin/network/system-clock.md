# Source: https://docs.mediakind.com/beam/system-admin/network/system-clock

# How to configure the system clock

The system clock is used by all the applications on the unit as both a time reference for different functional operations such as application of Over Air Commands, but also for recording log entries and events.

To confirm events and logs are synchronized across a system it is often desirable for customers to synchronize the system clocks of all units within the system to a known reference clock.

Where all the units are co-located or where all units have access to a reliable ethernet connection the synchronization is often performed using an NTP source.

Where units are remote, or a network connection is not reliable, it is possible to synchronize the system using the TDT within the transport stream.

## Operating modes

[Section titled “Operating modes”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#operating-modes)

The following **Time Source** operating modes can be configured from the **System Settings** page on the web UI.

- Free running
- NTP
- PTP
- TDT

All services and functions running on the server use a single system clock and will be affected by the system clock setting.

### Free running

[Section titled “Free running”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#free-running)

The time is set on the unit when the server is manufactured. The system clock will continue to increment based on the clock accuracy of the motherboard clock within the unit.

### NTP

[Section titled “NTP”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#ntp)

When set to NTP and a valid IP address of an NTP server has been configured, the server will attempt to adjust the system clock to be aligned to the time provided by the NTP messages.

If no valid NTP messages are received or if the messages stop after a period of time, the unit will free run from its current time. If the unit was previously adjusting, this adjustment will be stopped until valid NTP messages are resumed.

### PTP

[Section titled “PTP”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#ptp)

When set to PTP, the device will synchronize its system clock with a PTP Grand Master.

### TDT

[Section titled “TDT”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#tdt)

When set to TDT and a service has been selected containing a valid TDT component, the unit will attempt to adjust the system clock to be aligned to the time provided in the TDT.

Operation of locking the system clock to the incoming TDT is the same as for NTP. See Select the TDT source.

## Initial status and set up

[Section titled “Initial status and set up”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#initial-status-and-set-up)

![clock initial status](https://docs.mediakind.com/rx1-img/clock-initial-status.png)

## Select the TDT source

[Section titled “Select the TDT source”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#select-the-tdt-source)

- Go to the **Time sources** section on the **System Settings** page.
- Select the **TDT** tab.
- Select the **Service name** from the drop-down menu.
- To set TDT as the time source, click on the **Make active** button, then click the **Save** button at the bottom of the page to save the change.

## Configure NTP servers

[Section titled “Configure NTP servers”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#configure-ntp-servers)

- Go to the **Time sources** section on the **System Settings** page.
- Select the **NTP** tab.
- To add a new NTP server, click **\+ Add NTP server** then enter the NTP server’s IP address in the **Address** field then click **Confirm.**
- To update the IP address of an existing NTP server, click the **Edit** ![Edit][base64-image] button next to that server, then update the IP address in the **Address** field.
- Confirm the changes by clicking on **Confirm,** then to save the changes, click the **Save** button at the bottom of the page.
- To set NTP as the time source, click on the **Make active** button, then click the **Save** button at the bottom of the page to save the change.

## Configure PTP synchronization

[Section titled “Configure PTP synchronization”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#configure-ptp-synchronization)

- Go to [Configure PTP for ST-2110](https://docs.mediakind.com/beam/contribution/how-to/setup-smpte-2110-input#configure-ptp-for-st-2110)

## Set up the system to operate in Free Running Mode

[Section titled “Set up the system to operate in Free Running Mode”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#set-up-the-system-to-operate-in-free-running-mode)

- Go to the **Time sources** section on the **System Settings** page.
- Select the **Free Running** tab.
- Click the **Disable time synchronization** button, then click the **Save** button at the bottom of the page to save the change.

## Clock Detection

[Section titled “Clock Detection”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#clock-detection)

![clock detection](https://docs.mediakind.com/rx1-img/clock-detection.png)

## Clock Synchronization

[Section titled “Clock Synchronization”](https://docs.mediakind.com/beam/system-admin/network/system-clock/#clock-synchronization)

![clock synchronization](https://docs.mediakind.com/rx1-img/clock-synchronization.png)