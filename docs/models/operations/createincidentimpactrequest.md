# CreateIncidentImpactRequest

## Example Usage

```typescript
import { CreateIncidentImpactRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentImpactRequest = {
  incidentId: "<id>",
  type: "customers",
  postV1IncidentsIncidentIdImpactType: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.CreateIncidentImpactPathParamType](../../models/operations/createincidentimpactpathparamtype.md)     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `postV1IncidentsIncidentIdImpactType`                                                                            | [components.PostV1IncidentsIncidentIdImpactType](../../models/components/postv1incidentsincidentidimpacttype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |