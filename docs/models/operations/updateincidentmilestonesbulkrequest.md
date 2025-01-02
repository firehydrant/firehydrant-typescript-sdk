# UpdateIncidentMilestonesBulkRequest

## Example Usage

```typescript
import { UpdateIncidentMilestonesBulkRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentMilestonesBulkRequest = {
  incidentId: "<id>",
  putV1IncidentsIncidentIdMilestonesBulkUpdate: {
    milestones: [
      {
        type: "<value>",
        occurredAt: new Date("2023-01-13T20:07:38.173Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `putV1IncidentsIncidentIdMilestonesBulkUpdate`                                                                                     | [components.PutV1IncidentsIncidentIdMilestonesBulkUpdate](../../models/components/putv1incidentsincidentidmilestonesbulkupdate.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |