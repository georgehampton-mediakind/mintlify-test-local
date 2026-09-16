# Source: https://docs.mediakind.com/api-guides/understanding/pagination

# Pagination and filtering

Most MK.IO `list` endpoints accept query parameters that page, sort, and filter the results on the server. Using them keeps responses small, removes client-side filtering work, and reduces the number of follow-up requests your integration makes.

## The shape of a list response

[Section titled “The shape of a list response”](https://docs.mediakind.com/api-guides/understanding/pagination/#the-shape-of-a-list-response)

A list response includes these fields:

- `value`: the array of resources on the current page.
- `supplemental`: metadata about the result set, including pagination counts.
- `@odata.nextLink`: the URL for the next page, when another page is available.

A trimmed response looks like this:

```
{
  "value": [
    { "name": "asset-001" },
    { "name": "asset-002" }
  ],
  "supplemental": {
    "count": 2,
    "kind": "Asset",
    "operation": "list",
    "pagination": {
      "start": 0,
      "end": 2,
      "records": 2,
      "total": 145
    }
  },
  "@odata.nextLink": "<NEXT_PAGE_URL>"
}
```

The `pagination` block tells you where you are in the collection: `records` is how many items this page returned, and `total` is how many exist across the whole project. Use `@odata.nextLink` to continue through the result set, including when you have applied filters.

## Limit a page with $top

[Section titled “Limit a page with $top”](https://docs.mediakind.com/api-guides/understanding/pagination/#limit-a-page-with-top)

`$top` caps how many items a single page returns. The service returns up to that many, and never more than exist.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$top=10" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The `$` is escaped as `\$` in these examples so that your shell does not treat the parameter as a variable.

## Page through results with $skiptoken

[Section titled “Page through results with $skiptoken”](https://docs.mediakind.com/api-guides/understanding/pagination/#page-through-results-with-skiptoken)

The service uses `$skiptoken` to identify the start offset of a page. It supplies the next request URL in `@odata.nextLink`, so you do not need to construct the token yourself.

After processing the current page’s `value` array, request the URL returned in `@odata.nextLink` with the same bearer authentication:

Terminal window

```
curl -X GET "<NEXT_PAGE_URL>" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Replace `<NEXT_PAGE_URL>` with the complete `@odata.nextLink` value from the response. Continue following each returned link until `@odata.nextLink` is absent. Keep the query parameters in the returned URL so the next request continues the same result set.

## Sort with $orderby

[Section titled “Sort with $orderby”](https://docs.mediakind.com/api-guides/understanding/pagination/#sort-with-orderby)

`$orderby` orders the result collection by a field. The valid fields depend on the endpoint.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$orderby=properties/created%20desc" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

For the Media API asset list, sortable fields include `name`, `properties/created`, `properties/lastModified`, and `properties/storageAccountName`. Other APIs expose their own sort keys. Check the [API reference](https://docs.mediakind.com/api-reference/media-api) for the fields a given endpoint supports.

## Filter with $filter

[Section titled “Filter with $filter”](https://docs.mediakind.com/api-guides/understanding/pagination/#filter-with-filter)

`$filter` restricts the result set to items that match an expression.

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$filter=name%20eq%20'my-asset'" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

The fields available to filter on vary by resource. Common examples are assets by `name` or `properties/created`, live events by `properties/resourceState`, devices by `spec/siteName`, and sites by `status/locationName`.

## Filter by label

[Section titled “Filter by label”](https://docs.mediakind.com/api-guides/understanding/pagination/#filter-by-label)

Several list endpoints also support label queries, which are separate from `$filter`.

Return items that carry a given label key with `$label_key`:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$label_key=studio" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

When you pass more than one `$label_key`, an item must carry all of those keys to match.

Match a key and value with `$label`. Use `=` for an exact match and `~` for a partial match:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$label=studio=paravalley" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

Label queries are supported on the asset, live event, device, network, and site list endpoints.

## Combine parameters to do less work

[Section titled “Combine parameters to do less work”](https://docs.mediakind.com/api-guides/understanding/pagination/#combine-parameters-to-do-less-work)

The parameters compose. A single request can limit, sort, and filter at once:

Terminal window

```
curl -X GET "https://app.mk.io/api/v1/projects/<PROJECT_NAME>/media/assets?\$top=10&\$orderby=properties/created%20desc&\$label=studio=paravalley" \
  -H "Authorization: Bearer <YOUR_TOKEN>"
```

That one call returns the ten most recent assets for one studio, which would otherwise take a full list plus client-side sorting and filtering.

## A pattern for scanning large collections

[Section titled “A pattern for scanning large collections”](https://docs.mediakind.com/api-guides/understanding/pagination/#a-pattern-for-scanning-large-collections)

When you need to process an entire collection, work from narrow to broad:

1. Apply the narrowest `$filter` or label query the task allows.
2. Add `$orderby` if processing order matters.
3. Set a bounded `$top`.
4. Follow `@odata.nextLink` until the response no longer includes it.

Filtering and sorting on the server is almost always better than listing everything and filtering locally. It returns less data, needs fewer follow-up requests, and keeps you clear of the [rate limits](https://docs.mediakind.com/api-guides/understanding/rate-limits).

## Related reading

[Section titled “Related reading”](https://docs.mediakind.com/api-guides/understanding/pagination/#related-reading)

- [API overview](https://docs.mediakind.com/api-guides/understanding/overview): the request and response conventions these endpoints share.
- [Rate limits](https://docs.mediakind.com/api-guides/understanding/rate-limits): why server-side filtering matters for request volume.