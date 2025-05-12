# ListIncidentChangeEventsRequest

## Example Usage

```typescript
import { ListIncidentChangeEventsRequest } from "firehydrant/models/operations";

let value: ListIncidentChangeEventsRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `page`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `perPage`                                                                                          | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.ListIncidentChangeEventsType](../../models/operations/listincidentchangeeventstype.md) | :heavy_minus_sign:                                                                                 | The type of the relation to the incident                                                           |
| `incidentId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |