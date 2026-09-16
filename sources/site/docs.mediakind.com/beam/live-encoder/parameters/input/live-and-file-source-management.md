# Source: https://docs.mediakind.com/beam/live-encoder/parameters/input/live-and-file-source-management

# Live source & File source management

Only available with **MediaComposer** input type.

## Live source management

[Section titled “Live source management”](https://docs.mediakind.com/beam/live-encoder/parameters/input/live-and-file-source-management/#live-source-management)

| Parameter | Description |
| --- | --- |
| Default service ID | ID of the live content that will be used at the start of the service. 
The ID can be:

- an existing ID: the live content can be selected from the list of existing IDs. If required, it can be directly modified via the 'Edit' button.

- a new ID: in this case, the live content can be created and configured either immediately via the 'Create' button, or later from the 'Settings>Live service lineup' menu.

 |
| Default frame rate | Default frame rate used when live input is not yet detected.<br>Possible values: from 23.98p to 60p |

## File source management

[Section titled “File source management”](https://docs.mediakind.com/beam/live-encoder/parameters/input/live-and-file-source-management/#file-source-management)

| Parameter | Description |
| --- | --- |
| Auto return to live | Returns to live at end of the offline source playlist. Note: Unused in Switch to Live use case. |
| Return to live on error | Returns to live if offline source playlist cannot be loaded. Note: Unused in Switch to Live use case. |