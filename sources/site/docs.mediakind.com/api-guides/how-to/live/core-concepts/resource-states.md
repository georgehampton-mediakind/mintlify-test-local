# Source: https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states

# Resource states

There are two different “state” concepts, and mixing them up is a common source of confusion:

- **`spec.state`** is what you set. It only ever has two values: `Stopped` or `Running`. This is the desired state described in [Resource types and lifecycle](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-types).
- **`status.state`** is what the platform reports back. It has 13 possible values, because getting from `Stopped` to `Running` (and back) involves several intermediate steps.

## Poll resource state

[Section titled “Poll resource state”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states/#poll-resource-state)

You can poll just the reported state without reading the full resource object. The state endpoint at `GET /api/v1/projects/{project_name}/live/{resource_type}/{name}/state` returns only `status.state`. This is more efficient for polling loops than fetching the whole resource.

Those 13 values group into four phases: initialising (`""`, `Pending`, `Allocating`, `Allocated`), starting or running (`Starting`, `Started`, `Running`, `Updating`), winding down (`Stopping`, `Stopped`, `Deleting`, `Deleted`), and one error value (`UnableToStart`, meaning the resource failed to reach `Running`).

### Start contribution during startup

[Section titled “Start contribution during startup”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states/#start-contribution-during-startup)

For an SRT listener input, prepare the encoder with the source URL and connection settings before requesting startup. Begin contribution as part of the startup procedure and monitor both encoder connection status and `status.state`. A source marked `Active` is in use; verify playback separately to confirm that media is arriving.

See [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live#check-the-current-state) for the reported state values and the rest of the status object.

## What comes next

[Section titled “What comes next”](https://docs.mediakind.com/api-guides/how-to/live/core-concepts/resource-states/#what-comes-next)

- [Manage live channels and events](https://docs.mediakind.com/api-guides/how-to/live/manage-live): create and operate liveChannels and liveEvents.
- [Monitor live resources](https://docs.mediakind.com/api-guides/how-to/live/monitor-live): metrics, monitoring URLs, and the full status object.