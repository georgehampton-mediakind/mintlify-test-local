# Source: https://docs.mediakind.com/beam/reception/use-cases

# SRT input with decode and SDI output

The configuration is based on the following main steps:

- Step 1: you configure a **Reliable Transport** input.
- Step 2: you configure a **Reliable Transport** listener with UDP IP output.
- Step 3: you connect that UDP output to a **Receiver** service.
- Step 4: you configure the **Receiver** service for SDI output.

To setup this use case, follow these steps:

## Configure a Reliable Transport input

[Section titled “Configure a Reliable Transport input”](https://docs.mediakind.com/beam/reception/use-cases/#configure-a-reliable-transport-input)

1. Connect to the web interface then navigate to the **Services** menu on the left-hand pane.

2. Click **Add service** and select **Reliable Transport** to create and configure the service.

3. Enter a name for this service.

4. In the **Input** section, set the **Input Mode** to **SRT Listener**.

5. In the **Output** section, set the **Output Mode** to **UDP**.

## Configure a Reliable Transport listener with UDP IP output

[Section titled “Configure a Reliable Transport listener with UDP IP output”](https://docs.mediakind.com/beam/reception/use-cases/#configure-a-reliable-transport-listener-with-udp-ip-output)

1. Configure the SRT Listener **Connection** parameters with the listener address and port. If required, then **Encryption**. **Link characteristics** parameters can also be set or adjusted.

2. Configure the **Output Connection** parameters. You should get the following:

 ![rx1 cfig service srt listener](https://docs.mediakind.com/rx1-img/rx1_cfig_service_srt_listener.png)

3. Click **Save and exit** to save your changes.

## Configure the Receiver service for SDI output

[Section titled “Configure the Receiver service for SDI output”](https://docs.mediakind.com/beam/reception/use-cases/#configure-the-receiver-service-for-sdi-output)

1. Navigate to the **Services** menu on the left-hand pane.

2. Click **Add service** and select **Receiver** to create a new service.

3. Set the **Name** for the new service, the service **Type** to **SD/HD** and the **Output type** to **SDI**.

 ![rx1 create service receiver sdhd](https://docs.mediakind.com/rx1-img/rx1_create_service_receiver_sdhd.png)

4. Click **OK** to create the service which will now appear in the services list.

5. From the **Services** pane, click the _service name_ for the newly created service to edit the configuration.

6. Select the **Input** tab under the **Parameters** section.

7. Set the **Input Type** to **IP** and configure the multicast **Stream address** and **Port** number.

 ![rx1 cfig receiver input IP](https://docs.mediakind.com/rx1-img/rx1_cfig_receiver_input_IP.png)

8. Select the **Output** tab under the **Parameters** section.

9. Configure SDI output parameters as required such as the SDI output port number from **Output interface** option.

 ![rx1 cfig receiver output sdi](https://docs.mediakind.com/rx1-img/rx1_cfig_receiver_output_sdi.png)

10. Once complete, click **Save and exit**.

## Start services

[Section titled “Start services”](https://docs.mediakind.com/beam/reception/use-cases/#start-services)

On the **Services** page, assign a server to each service you want to run, then start the services.