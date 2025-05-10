# CreateIncidentRoleAssignmentRequest

## Example Usage

```typescript
import { CreateIncidentRoleAssignmentRequest } from "firehydrant/models/operations";

let value: CreateIncidentRoleAssignmentRequest = {
  incidentId: "<id>",
  createIncidentRoleAssignment: {
    userId: "<id>",
    incidentRoleId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createIncidentRoleAssignment`                                                                     | [components.CreateIncidentRoleAssignment](../../models/components/createincidentroleassignment.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |