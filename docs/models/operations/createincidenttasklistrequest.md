# CreateIncidentTaskListRequest

## Example Usage

```typescript
import { CreateIncidentTaskListRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentTaskListRequest = {
  incidentId: "<id>",
  createIncidentTaskList: {
    taskListId: "<id>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `incidentId`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `createIncidentTaskList`                                                               | [components.CreateIncidentTaskList](../../models/components/createincidenttasklist.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |