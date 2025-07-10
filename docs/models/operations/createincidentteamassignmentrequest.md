# CreateIncidentTeamAssignmentRequest

## Example Usage

```typescript
import { CreateIncidentTeamAssignmentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentTeamAssignmentRequest = {
  incidentId: "<id>",
  createIncidentTeamAssignment: {
    teamId: "<id>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createIncidentTeamAssignment`                                                                     | [components.CreateIncidentTeamAssignment](../../models/components/createincidentteamassignment.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |