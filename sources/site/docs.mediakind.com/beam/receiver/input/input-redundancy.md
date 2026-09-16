# Source: https://docs.mediakind.com/beam/receiver/input/input-redundancy

# Receiver Input Redundancy

For each _Receiver_ service configuration, the default input is designated as the **Primary** input. If the this input fails, the service will stop descrambling and/or decoding.

It is possible to configure **input redundancy** for the _Receiver_ service by choosing a **Redundancy Mode** and defining a **Secondary** (backup) input.

## Redundancy Mode Options

[Section titled “Redundancy Mode Options”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#redundancy-mode-options)

| Redundancy Mode | Key Behaviour | Speed | Auto Switching |
| :-- | :-- | :-- | :-- |
| Off | Primary only | — | None |
| Active Passive (one-hit) | One-time failover, Primary active and Secondary on demand | Slow | One-hit |
| Active Active (one-hit) | One-time failover, Primary and Secondary both active | Fast | One-hit |
| Active Active (switch on failure) | Continuous failover between Primary and Secondary active inputs | Fast | Ongoing |
| SMPTE ST 2022-7 | Seamless Protection Switching between two IP data paths. | Fast | Ongoing |

### Off

[Section titled “Off”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#off)

The service only uses the Primary input. It is not possible to automatically or manually use the Secondary input.

### Active passive (one-hit)

[Section titled “Active passive (one-hit)”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#active-passive-one-hit)

If the Primary input fails then the _Receiver_ service will make a **one-hit** switch to the Secondary input.

The Secondary input is only **started on demand** so the switch occurs without verifying whether the Secondary input has a valid source that can be locked to.

Once the service switches to the Secondary input, it will not automatically revert to the Primary input. Manual intervention is required. The user can manually switch between inputs at any time.

### Active active (one-hit)

[Section titled “Active active (one-hit)”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#active-active-one-hit)

If the Primary input fails then the _Receiver_ service will make a **one-hit** switch to the Secondary input.

The Secondary input is **always active** so will result in quicker switching. However, the switch still occurs without verifying whether the Secondary input has a valid source that can be locked to.

Once the service switches to the Secondary input, it will not automatically revert to the Primary input. Manual intervention is required. The user can manually switch between inputs at any time.

### Active active (switch on failure)

[Section titled “Active active (switch on failure)”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#active-active-switch-on-failure)

If the current input (Primary or Secondary) fails, the _Receiver_ service switches to the alternate input.

Both Primary and Secondary inputs are **always active** so switching between them is fast. The service switches on failure regardless of whether the alternate input has a valid lock. If neither input is valid, the service continuously switches between them until a valid lock is detected.

The user can manually switch between inputs at any time.

### SMTPE ST 2022-7

[Section titled “SMTPE ST 2022-7”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#smtpe-st-2022-7)

SMPTE ST 2022-7 Seamless Protection Switching is only available when both Primary and Secondary inputs are configured as IP inputs. It requires two identical RTP transport streams to be carried independently over separate network paths for redundancy.

Both streams are received simultaneously and synchronised within the receiver, allowing packet loss on either path to be mitigated using packets from the other.

## Receiver Input Redundancy Configuration

[Section titled “Receiver Input Redundancy Configuration”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#receiver-input-redundancy-configuration)

Any of the [Input Types](https://docs.mediakind.com/beam/receiver/input) supported by the _Receiver_ service can used as the **Primary** or **Secondary** input when enabling any of the **Input Redundancy** modes.

### Configure a Receiver service for Input Redundancy mode

[Section titled “Configure a Receiver service for Input Redundancy mode”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#configure-a-receiver-service-for-input-redundancy-mode)

Before you start, ensure at least one **Receiver** service is configured.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit.

2. Select the **Input** tab under the _Parameters_ section.

3. Select the desired **Redundancy mode** [option](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#redundancy-mode-options).

 ![Select Redundancy mode option](https://docs.mediakind.com/rx1-img/receiver-input-redundancy.png)

4. Set the **Input loss timeout** to the delay (in milliseconds) between detecting an input error and switching to the alternate input.

 If the input error is cleared before the end of the **Input loss timeout**, the redundancy switch is aborted and the service will continue to use the current input.

5. If **SMPTE ST2022-7** is selected as the _Redundancy mode_, the **Max skew** parameter specifies the maximum permitted timing difference (in milliseconds) between two IP data streams. If the measured skew exceeds this value, packets may be lost during seamless protection switching.

6. Select the **Primary** tab and configure the input as decribed in the [Transport Stream Input Configuration](https://docs.mediakind.com/beam/receiver/input) section.

7. Select the **Secondary** tab and configure the input as decribed in the [Transport Stream Input Configuration](https://docs.mediakind.com/beam/receiver/input) section.

8. Once complete, click **Save and exit**.

 A 20 second delay occurs from the moment you save in order to initialize the redundancy configuration. Any loss of input or alarms raised on the Primary input during this time does not cause a switch.

### Manually Switch Between Primary and Secondary inputs

[Section titled “Manually Switch Between Primary and Secondary inputs”](https://docs.mediakind.com/beam/receiver/input/input-redundancy/#manually-switch-between-primary-and-secondary-inputs)

Manual switching between Primary and Secondary inputs is possible even when both inputs are healthy. This is not supported for SMPTE ST 2022-7.

Before you start, ensure at least one **Receiver** service is configured with a **Redundancy mode** selected.

1. From the **Home** page, select the RECEIVER item from the required feed then click ![Edit][base64-image] to edit (or click ![Chart][base64-image] to view the Statistics page).

2. Locate the **Input Status** section of the page and click the **Switch Input** icon ![Left/Right][base64-image].

 ![Click Switch Input button](https://docs.mediakind.com/rx1-img/receiver-input-redundancy-switch-input.png)