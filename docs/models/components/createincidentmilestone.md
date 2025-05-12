# CreateIncidentMilestone

## Example Usage

```typescript
import { CreateIncidentMilestone } from "firehydrant/models/components";

let value: CreateIncidentMilestone = {
  type: "<value>",
  occurredAt: new Date("2024-04-24T13:05:36.106Z"),
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                        | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | The type/slug of the milestone. Must be one of the currently configured milestones.                                                           |
| `occurredAt`                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                 | :heavy_check_mark:                                                                                                                            | An ISO8601 formatted string for when this milestone occurred. If you are removing a milestone, this field still needs to be set to some value |