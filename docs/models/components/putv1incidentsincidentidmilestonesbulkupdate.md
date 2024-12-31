# PutV1IncidentsIncidentIdMilestonesBulkUpdate

Update milestone times in bulk for a given incident. All milestone
times for an incident must occur in chronological order
corresponding to the configured order of milestones. If the result
of this request would cause any milestone(s) to appear out of place,
a 422 response will instead be returned. This includes milestones
not explicitly submitted or updated in this request.


## Example Usage

```typescript
import { PutV1IncidentsIncidentIdMilestonesBulkUpdate } from "firehydrant-typescript-sdk/models/components";

let value: PutV1IncidentsIncidentIdMilestonesBulkUpdate = {
  milestones: [
    {
      type: "<value>",
      occurredAt: new Date("2022-03-19T20:31:56.909Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bulk`                                                                                                                                                   | [components.Bulk](../../models/components/bulk.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                       | N/A                                                                                                                                                      |
| `milestones`                                                                                                                                             | [components.PutV1IncidentsIncidentIdMilestonesBulkUpdateMilestones](../../models/components/putv1incidentsincidentidmilestonesbulkupdatemilestones.md)[] | :heavy_check_mark:                                                                                                                                       | N/A                                                                                                                                                      |