# Source: https://docs.mediakind.com/api-reference/live-api

# Live API

[Download OpenAPI spec](https://docs.mediakind.com/openapi/mkio/live-api.json)

Base URL `https://app.mk.io` v0.0.23 41 endpoints OpenAPI 3.0.2

## Overview

The MKIO Live API provides live encoding and multiview capabilities. Consult the related Media and Templates APIs for information about Templating, Sources, Destinations, Assets, and StreamingLocators.

MK.IO LiveEvents support multiple input sources, multiple audio profiles, source switching, 1+1 redundancy, and a multitude of codecs and coding parameters that are described in our docs.

MK.IO LiveChannels are exactly the same as Live Events, only with monthly billing for long-running workloads. Live Events can output to Assets for instant Live2VOD and streaming, or Destinations can be optionally configured to contribute your live stream over RTMP/SRT to a remote address.

MK.IO StaticMultiviewEvents create a server-side tiled streaming Multiview experience for clients. Use StaticMultiview to reach the biggest possible audience, with support for h.264 and HEVC, and whatever other core video capabilities (SCTE-35 and SGAI, DRM) you may require. Streaming Multiview takes multiple sources and integrates them into a tiled interface, preserving audio and captions for a seamless user experience. Supported layouts include 2up, 3up, 3us, 4up, 4us. The number indicates the number of connected sources, while the 'us/up' indicates whether the layout contains a 'spotlight', or whether the layout gives all sources equal placement.

MK.IO StaticMultiviewChannels are exactly the same as StaticMultiview Events, only with monthly billing for long-running workloads.

All resources in the MK.IO Live API support Scheduled Operations. Scheduled Operations allow you to start and stop Events and Channels at specific times. Additional operations, such as slate insertion/removal, and ad operations, may be supported in the future.

## Template management

[Template management](https://docs.mediakind.com/api-reference/templates-api)

[Content/ContentSource/Destination management](https://docs.mediakind.com/api-reference/media-api)

## Authentication

All endpoints require a bearer token in the `Authorization` header: `Authorization: Bearer <your_token>`

You can create and manage your tokens in your [profile settings](https://app.mk.io/user/profile) under **Your personal API tokens**. Follow the [API tokens guide](https://docs.mediakind.com/mkio/how-to/managing-your-organization/api-tokens) for more information.

## Usage

Base URL: `https://app.mk.io`

## Endpoints

[Live Channel 10 endpoints](https://docs.mediakind.com/api-reference/live-api/live-channel)

[get List Live Channels /api/v1/projects/{project\_name}/live/liveChannels](https://docs.mediakind.com/api-reference/live-api/live-channel/list-live-channels) [get Get Live Channel /api/v1/projects/{project\_name}/live/liveChannels/{name}](https://docs.mediakind.com/api-reference/live-api/live-channel/get-live-channel) [put Create or replace Live Channel /api/v1/projects/{project\_name}/live/liveChannels/{name}](https://docs.mediakind.com/api-reference/live-api/live-channel/create-or-replace-live-channel) [patch Update Live Channel /api/v1/projects/{project\_name}/live/liveChannels/{name}](https://docs.mediakind.com/api-reference/live-api/live-channel/update-live-channel) [del Delete Live Channel /api/v1/projects/{project\_name}/live/liveChannels/{name}](https://docs.mediakind.com/api-reference/live-api/live-channel/delete-live-channel) [get List Scheduled Operations /api/v1/projects/{project\_name}/live/liveChannels/{name}/scheduledOperations](https://docs.mediakind.com/api-reference/live-api/live-channel/list-scheduled-operations) [get Get Scheduled Operation /api/v1/projects/{project\_name}/live/liveChannels/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/live-channel/get-scheduled-operation) [put Create or update Scheduled Operation /api/v1/projects/{project\_name}/live/liveChannels/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/live-channel/create-or-update-scheduled-operation) [del Delete Scheduled Operation /api/v1/projects/{project\_name}/live/liveChannels/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/live-channel/delete-scheduled-operation) [get Get resource state /api/v1/projects/{project\_name}/live/liveChannels/{name}/state](https://docs.mediakind.com/api-reference/live-api/live-channel/get-resource-state)

[Live Event 10 endpoints](https://docs.mediakind.com/api-reference/live-api/live-event)

[get List Live Events /api/v1/projects/{project\_name}/live/liveEvents](https://docs.mediakind.com/api-reference/live-api/live-event/list-live-events) [get Get Live Event /api/v1/projects/{project\_name}/live/liveEvents/{name}](https://docs.mediakind.com/api-reference/live-api/live-event/get-live-event) [put Create or replace Live Event /api/v1/projects/{project\_name}/live/liveEvents/{name}](https://docs.mediakind.com/api-reference/live-api/live-event/create-or-replace-live-event) [patch Update Live Event /api/v1/projects/{project\_name}/live/liveEvents/{name}](https://docs.mediakind.com/api-reference/live-api/live-event/update-live-event) [del Delete Live Event /api/v1/projects/{project\_name}/live/liveEvents/{name}](https://docs.mediakind.com/api-reference/live-api/live-event/delete-live-event) [get List Scheduled Operations /api/v1/projects/{project\_name}/live/liveEvents/{name}/scheduledOperations](https://docs.mediakind.com/api-reference/live-api/live-event/list-scheduled-operations) [get Get Scheduled Operation /api/v1/projects/{project\_name}/live/liveEvents/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/live-event/get-scheduled-operation) [put Create or update Scheduled Operation /api/v1/projects/{project\_name}/live/liveEvents/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/live-event/create-or-update-scheduled-operation) [del Delete Scheduled Operation /api/v1/projects/{project\_name}/live/liveEvents/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/live-event/delete-scheduled-operation) [get Get resource state /api/v1/projects/{project\_name}/live/liveEvents/{name}/state](https://docs.mediakind.com/api-reference/live-api/live-event/get-resource-state)

[Live Search 1 endpoint](https://docs.mediakind.com/api-reference/live-api/live-search)

[get List Live resources /api/v1/projects/{project\_name}/live/search](https://docs.mediakind.com/api-reference/live-api/live-search/list-live-resources)

[Static Multiview Channel 10 endpoints](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel)

[get List Static Multiview Channels /api/v1/projects/{project\_name}/live/staticMultiviewChannels](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/list-static-multiview-channels) [get Get Static Multiview Channel /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/get-static-multiview-channel) [put Create or replace Static Multiview Channel /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/create-or-replace-static-multiview-channel) [patch Update Static Multiview Channel /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/update-static-multiview-channel) [del Delete Static Multiview Channel /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/delete-static-multiview-channel) [get List Scheduled Operations /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}/scheduledOperations](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/list-scheduled-operations) [get Get Scheduled Operation /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/get-scheduled-operation) [put Create or update Scheduled Operation /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/create-or-update-scheduled-operation) [del Delete Scheduled Operation /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/delete-scheduled-operation) [get Get resource state /api/v1/projects/{project\_name}/live/staticMultiviewChannels/{name}/state](https://docs.mediakind.com/api-reference/live-api/static-multiview-channel/get-resource-state)

[Static Multiview Event 10 endpoints](https://docs.mediakind.com/api-reference/live-api/static-multiview-event)

[get List Static Multiview Events /api/v1/projects/{project\_name}/live/staticMultiviewEvents](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/list-static-multiview-events) [get Get Static Multiview Event /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/get-static-multiview-event) [put Create or replace Static Multiview Event /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/create-or-replace-static-multiview-event) [patch Update Static Multiview Event /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/update-static-multiview-event) [del Delete Static Multiview Event /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/delete-static-multiview-event) [get List Scheduled Operations /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}/scheduledOperations](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/list-scheduled-operations) [get Get Scheduled Operation /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/get-scheduled-operation) [put Create or update Scheduled Operation /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/create-or-update-scheduled-operation) [del Delete Scheduled Operation /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}/scheduledOperations/{operation\_name}](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/delete-scheduled-operation) [get Get resource state /api/v1/projects/{project\_name}/live/staticMultiviewEvents/{name}/state](https://docs.mediakind.com/api-reference/live-api/static-multiview-event/get-resource-state)