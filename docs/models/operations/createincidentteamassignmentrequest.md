# CreateIncidentTeamAssignmentRequest

## Example Usage

```typescript
import { CreateIncidentTeamAssignmentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentTeamAssignmentRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdTeamAssignments: {
    teamId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `postV1IncidentsIncidentIdTeamAssignments`                                                                                 | [components.PostV1IncidentsIncidentIdTeamAssignments](../../models/components/postv1incidentsincidentidteamassignments.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |