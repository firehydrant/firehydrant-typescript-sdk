# ListIncidentRoleAssignmentsRequest

## Example Usage

```typescript
import { ListIncidentRoleAssignmentsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListIncidentRoleAssignmentsRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `incidentId`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_minus_sign:                                     | Filter on status of the role assignment                |