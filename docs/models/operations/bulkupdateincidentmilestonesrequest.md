# BulkUpdateIncidentMilestonesRequest

## Example Usage

```typescript
import { BulkUpdateIncidentMilestonesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: BulkUpdateIncidentMilestonesRequest = {
  incidentId: "<id>",
  bulkUpdateIncidentMilestones: {
    milestones: [
      {
        type: "<value>",
        occurredAt: new Date("2025-10-01T23:28:44.501Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `bulkUpdateIncidentMilestones`                                                                     | [components.BulkUpdateIncidentMilestones](../../models/components/bulkupdateincidentmilestones.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |