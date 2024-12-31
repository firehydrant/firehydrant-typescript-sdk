# CreateIncidentTaskRequest

## Example Usage

```typescript
import { CreateIncidentTaskRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentTaskRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdTasks: {
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `incidentId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `postV1IncidentsIncidentIdTasks`                                                                       | [components.PostV1IncidentsIncidentIdTasks](../../models/components/postv1incidentsincidentidtasks.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |