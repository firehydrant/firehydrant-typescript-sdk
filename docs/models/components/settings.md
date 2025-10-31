# Settings

audience settings for initial audience creation

## Example Usage

```typescript
import { Settings } from "firehydrant-typescript-sdk/models/components";

let value: Settings = {
  id: false,
  name: false,
  startedAt: false,
  status: true,
  severity: false,
  description: false,
  customerImpactSummary: false,
  currentMilestone: true,
  timeline: true,
  communications: false,
  workItems: true,
  services: true,
  customFields: false,
  alerts: false,
  responders: false,
  highValueEvents: {
    incidentStatus: false,
    bulkMilestoneUpdate: true,
    impactUpdate: false,
    handoff: true,
    addTaskList: false,
    externalLink: true,
  },
  mediumValueEvents: {
    parentChanged: true,
    childChanged: true,
    newRelatedChangeEvent: false,
    runbookStepExecutionUpdate: true,
    changeType: true,
  },
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's id in summarization                                        |
| `name`                                                                            | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's name in summarization                                      |
| `startedAt`                                                                       | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the datetime the incident started in summarization                        |
| `status`                                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's status in summarization                                    |
| `severity`                                                                        | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's severity in summarization                                  |
| `description`                                                                     | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's description in summarization                               |
| `customerImpactSummary`                                                           | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's customer impact summary in summarization                   |
| `currentMilestone`                                                                | *boolean*                                                                         | :heavy_check_mark:                                                                | Include the incident's current milestone in summarization                         |
| `timeline`                                                                        | *boolean*                                                                         | :heavy_check_mark:                                                                | Include each milestone change and any high or medium value event in summarization |
| `communications`                                                                  | *boolean*                                                                         | :heavy_check_mark:                                                                | Include all communication (starred or not) in summarization                       |
| `workItems`                                                                       | *boolean*                                                                         | :heavy_check_mark:                                                                | Include all tickets and tasks in summarization                                    |
| `services`                                                                        | *boolean*                                                                         | :heavy_check_mark:                                                                | Include all impacted catalog items in summarization                               |
| `customFields`                                                                    | *boolean*                                                                         | :heavy_check_mark:                                                                | Include all custom fields for the incident in summarization                       |
| `alerts`                                                                          | *boolean*                                                                         | :heavy_check_mark:                                                                | Include all alerts related to the incident in summarization                       |
| `responders`                                                                      | *boolean*                                                                         | :heavy_check_mark:                                                                | Include all information on responders, their roles, and any assigned teams        |
| `highValueEvents`                                                                 | [components.HighValueEvents](../../models/components/highvalueevents.md)          | :heavy_check_mark:                                                                | N/A                                                                               |
| `mediumValueEvents`                                                               | [components.MediumValueEvents](../../models/components/mediumvalueevents.md)      | :heavy_check_mark:                                                                | N/A                                                                               |