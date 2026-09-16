# Source: https://docs.mediakind.com/beam/live-encoder/setup-sdi-card

# Set up the SDI card for HD or UHD operation

In this version, the card variant for HD or UHD operation is not set via the UI. You need to manually set the SDI card variant before configuring it for the use case required.

- **Variant 1**:

 - HD SDI input (each input is up to 3G-SDI)
- **Variant 2**:

 - 1 UHD channel over 4x3G-SDI on ports 1,2,3 and 4 with DTA-2174B
 - 1 UHD channel over 4x3G-SDI on ports 1-4 or 5-8 with DTA-2178

1. Connect to the unit using SSH.

2. Edit the file (using vi) or set the value in it using cat:

 Terminal window

    ```
    sudo chmod +777 /var/opt/mediakind/platform/dta_217x_variant
    echo 2 > /var/opt/mediakind/platform/dta_217x_variant
    ```

 The file contains `1` or `2` which is the variant number.

3. Check if the value is correct:

 Terminal window

    ```
    cat /var/opt/mediakind/platform/dta_217x_variant
    ```

4. Reboot the unit:

 Terminal window

    ```
    sudo reboot
    ```

 At this stage, all cards within the unit will be set to that variant.

 Note that if you have multiple cards you need to be in different variants, you can make **/var/opt/mediakind/platform/dta\\217x\\variant** a folder and a file inside for each card, for example:

 Terminal window

    ```
    echo 2 > /var/opt/mediakind/platform/dta_217x_variant/1
    # First card in variant 2
    ```