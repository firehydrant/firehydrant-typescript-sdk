# PostV1IncidentsIncidentIdRoleAssignments

Assign a role to a user for this incident

## Example Usage

```typescript
import { PostV1IncidentsIncidentIdRoleAssignments } from "firehydrant-typescript-sdk/models/components";

let value: PostV1IncidentsIncidentIdRoleAssignments = {
  userId: "<id>",
  incidentRoleId: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `userId`                                   | *string*                                   | :heavy_check_mark:                         | The user ID to assign the role to          |
| `incidentRoleId`                           | *string*                                   | :heavy_check_mark:                         | The Incident Role ID to assign the role to |