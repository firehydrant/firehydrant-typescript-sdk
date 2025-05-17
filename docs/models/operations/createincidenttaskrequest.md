# CreateIncidentTaskRequest

## Example Usage

```typescript
import { CreateIncidentTaskRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentTaskRequest = {
  incidentId: "<id>",
  createIncidentTask: {
    title: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `incidentId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createIncidentTask`                                                           | [components.CreateIncidentTask](../../models/components/createincidenttask.md) | :heavy_check_mark:                                                             | N/A                                                                            |