# HighValueEvents

## Example Usage

```typescript
import { HighValueEvents } from "firehydrant-typescript-sdk/models/components";

let value: HighValueEvents = {
  incidentStatus: false,
  bulkMilestoneUpdate: true,
  impactUpdate: false,
  handoff: false,
  addTaskList: true,
  externalLink: true,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `incidentStatus`                                                              | *boolean*                                                                     | :heavy_check_mark:                                                            | Include incident status change events in the timeline                         |
| `bulkMilestoneUpdate`                                                         | *boolean*                                                                     | :heavy_check_mark:                                                            | Include bulk updates (including runbook or automation events) in the timeline |
| `impactUpdate`                                                                | *boolean*                                                                     | :heavy_check_mark:                                                            | Include any catalog item impact events in the timeline                        |
| `handoff`                                                                     | *boolean*                                                                     | :heavy_check_mark:                                                            | Include any handoff events in the timeline                                    |
| `addTaskList`                                                                 | *boolean*                                                                     | :heavy_check_mark:                                                            | Include any additions to the task list in the timeline                        |
| `externalLink`                                                                | *boolean*                                                                     | :heavy_check_mark:                                                            | Include any external link events in the timeline                              |