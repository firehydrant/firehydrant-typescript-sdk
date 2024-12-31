# UpdateSavedSearchRequest

## Example Usage

```typescript
import { UpdateSavedSearchRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateSavedSearchRequest = {
  resourceType: "alerts",
  savedSearchId: "<id>",
  patchV1SavedSearchesResourceTypeSavedSearchId: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `resourceType`                                                                                                                       | [operations.UpdateSavedSearchPathParamResourceType](../../models/operations/updatesavedsearchpathparamresourcetype.md)               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `savedSearchId`                                                                                                                      | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `patchV1SavedSearchesResourceTypeSavedSearchId`                                                                                      | [components.PatchV1SavedSearchesResourceTypeSavedSearchId](../../models/components/patchv1savedsearchesresourcetypesavedsearchid.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |