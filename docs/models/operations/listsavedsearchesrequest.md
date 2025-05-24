# ListSavedSearchesRequest

## Example Usage

```typescript
import { ListSavedSearchesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListSavedSearchesRequest = {
  resourceType: "impact_analytics",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [operations.ListSavedSearchesResourceType](../../models/operations/listsavedsearchesresourcetype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The user ID used to filter saved searches.                                                           |
| `query`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Filter saved searches with a query on their name                                                     |
| `page`                                                                                               | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `perPage`                                                                                            | *number*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |