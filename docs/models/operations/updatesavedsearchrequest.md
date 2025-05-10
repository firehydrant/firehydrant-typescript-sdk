# UpdateSavedSearchRequest

## Example Usage

```typescript
import { UpdateSavedSearchRequest } from "firehydrant/models/operations";

let value: UpdateSavedSearchRequest = {
  resourceType: "impact_analytics",
  savedSearchId: "<id>",
  updateSavedSearch: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `resourceType`                                                                                       | [operations.UpdateSavedSearchResourceType](../../models/operations/updatesavedsearchresourcetype.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `savedSearchId`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updateSavedSearch`                                                                                  | [components.UpdateSavedSearch](../../models/components/updatesavedsearch.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |