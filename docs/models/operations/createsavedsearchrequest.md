# CreateSavedSearchRequest

## Example Usage

```typescript
import { CreateSavedSearchRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateSavedSearchRequest = {
  resourceType: "analytics",
  postV1SavedSearchesResourceType: {
    name: "<value>",
    filterValues: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                           | [operations.PathParamResourceType](../../models/operations/pathparamresourcetype.md)                     | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `postV1SavedSearchesResourceType`                                                                        | [components.PostV1SavedSearchesResourceType](../../models/components/postv1savedsearchesresourcetype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |