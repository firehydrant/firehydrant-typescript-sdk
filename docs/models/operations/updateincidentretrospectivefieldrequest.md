# UpdateIncidentRetrospectiveFieldRequest

## Example Usage

```typescript
import { UpdateIncidentRetrospectiveFieldRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentRetrospectiveFieldRequest = {
  retrospectiveId: "<id>",
  fieldId: "<id>",
  incidentId: "<id>",
  updateIncidentRetrospectiveField: {
    value: 890734,
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `retrospectiveId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `fieldId`                                                                                                  | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `incidentId`                                                                                               | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `updateIncidentRetrospectiveField`                                                                         | [components.UpdateIncidentRetrospectiveField](../../models/components/updateincidentretrospectivefield.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |