# CreateIncidentRoleAssignmentRequest

## Example Usage

```typescript
import { CreateIncidentRoleAssignmentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentRoleAssignmentRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdRoleAssignments: {
    userId: "<id>",
    incidentRoleId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `postV1IncidentsIncidentIdRoleAssignments`                                                                                 | [components.PostV1IncidentsIncidentIdRoleAssignments](../../models/components/postv1incidentsincidentidroleassignments.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |