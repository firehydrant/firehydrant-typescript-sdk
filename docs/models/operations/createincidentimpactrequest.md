# CreateIncidentImpactRequest

## Example Usage

```typescript
import { CreateIncidentImpactRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentImpactRequest = {
  incidentId: "<id>",
  type: "services",
  createIncidentImpact: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `incidentId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.CreateIncidentImpactType](../../models/operations/createincidentimpacttype.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createIncidentImpact`                                                                     | [components.CreateIncidentImpact](../../models/components/createincidentimpact.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |