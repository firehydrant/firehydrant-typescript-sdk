# ListIncidentRelatedChangesRequest

## Example Usage

```typescript
import { ListIncidentRelatedChangesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListIncidentRelatedChangesRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `page`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `perPage`                                                              | *number*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `type`                                                                 | [operations.QueryParamType](../../models/operations/queryparamtype.md) | :heavy_minus_sign:                                                     | The type of the relation to the incident                               |
| `incidentId`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |