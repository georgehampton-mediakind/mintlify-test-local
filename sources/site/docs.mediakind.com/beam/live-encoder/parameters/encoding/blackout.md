# Source: https://docs.mediakind.com/beam/live-encoder/parameters/encoding/blackout

# Blackout parameters

## General parameters

[Section titled “General parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/blackout/#general-parameters)

| Parameter | Description |
| --- | --- |
| Tracks SCTE-35 | Select tracks to trigger blackout.<br>**Note:** Options for this parameter depend on metadata configured in **Input**. |
| Trigger | Select the command to trigger blackout.<br>Possible values:<br>\- **spliceOut/SpliceIn**: blackout triggered on reception of an SCTE 35 splice out, end of blackout on splice in.<br>\- **webDeliveryAllowedFlag**: blackout triggered on reception of an SCTE 35 containing a web delivery flag set to false.<br>\- **alternateContent**: alternate content triggered on reception of an SCTE 35 message. |
| Timeout | Maximum duration of the blackout. If 0, there will be no maximum duration set.<br>**Note:** If no “alternate content off” command is received, the blackout will be removed at the end of this timeout.<br>Range: From 0 to 60000 ms |

## Specific webDeliveryAllowedFlag & spliceOutSpliceIn parameters

[Section titled “Specific webDeliveryAllowedFlag & spliceOutSpliceIn parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/blackout/#specific-webdeliveryallowedflag--spliceoutsplicein-parameters)

| Parameter | Description |
| --- | --- |
| Image URL | **Note:**<br>\- Image URL can be a web URL (`http://server/image`, `https://server/image`) or a local file defined with an absolute path (such as `/directory/filename.png`).<br>\- Authorized file types are .gif, .png or.jpg. |

## Specific alternateContent parameters

[Section titled “Specific alternateContent parameters”](https://docs.mediakind.com/beam/live-encoder/parameters/encoding/blackout/#specific-alternatecontent-parameters)

| Parameter | Description |
| --- | --- |
| Default image URL | Enter the path to the default alternate content to display. If empty, a black frame is used.<br>**Note:** Default image URL can be empty, but if an alternate content image with an **Id** and **Image URL** is added, both fields are mandatory. |
| Id | Define an ID used to identify the alternate content to apply. This ID should be passed in the SCTE35 message triggering the blackout condition. If no alternate content is configured, the default image is used. |
| Image URL | Enter the path to the alternate content to display. The default image is used if no alternate content is configured.<br>**Note:**<br>\- Image URL can be a web URL (`http://server/image`, `https://server/image`) or a local file defined with an absolute path (such as /directory/filename.png).<br>\- Authorized file types are .gif, .png or.jpg. |