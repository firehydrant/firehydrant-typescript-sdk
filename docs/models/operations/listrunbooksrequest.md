# ListRunbooksRequest

## Example Usage

```typescript
import { ListRunbooksRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListRunbooksRequest = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `page`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `perPage`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | A query to search runbooks by their name                                                       |
| `owners`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | A query to search runbooks by their owners                                                     |
| `sort`                                                                                         | [operations.ListRunbooksQueryParamSort](../../models/operations/listrunbooksqueryparamsort.md) | :heavy_minus_sign:                                                                             | Sort runbooks by their updated date. Accepts 'asc', 'desc'                                     |