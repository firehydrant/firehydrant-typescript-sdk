# BulkUpdateIncidentMilestonesMilestone

## Example Usage

```typescript
import { BulkUpdateIncidentMilestonesMilestone } from "firehydrant-typescript-sdk/models/components";

let value: BulkUpdateIncidentMilestonesMilestone = {
  type: "<value>",
  occurredAt: new Date("2025-10-08T05:09:58.072Z"),
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                        | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The type/slug of the milestone. Must be one of the currently configured milestones for the given incident.                                    |
| `occurredAt`                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_check_mark:                                                                                                                            | An ISO8601 formatted string for when this milestone occurred. If you are removing a milestone, this field still needs to be set to some value |
| `remove`                                                                                                                                      | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | If set to true, the milestone will be removed from the incident                                                                               |