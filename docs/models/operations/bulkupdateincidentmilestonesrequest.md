# BulkUpdateIncidentMilestonesRequest

## Example Usage

```typescript
import { BulkUpdateIncidentMilestonesRequest } from "firehydrant/models/operations";

let value: BulkUpdateIncidentMilestonesRequest = {
  incidentId: "<id>",
  bulkUpdateIncidentMilestones: {
    milestones: [
      {
        type: "<value>",
        occurredAt: new Date("2025-05-26T07:56:38.373Z"),
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