# CreateIncidentTaskListRequest

## Example Usage

```typescript
import { CreateIncidentTaskListRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentTaskListRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdTaskLists: {
    taskListId: "<id>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `postV1IncidentsIncidentIdTaskLists`                                                                           | [components.PostV1IncidentsIncidentIdTaskLists](../../models/components/postv1incidentsincidentidtasklists.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |