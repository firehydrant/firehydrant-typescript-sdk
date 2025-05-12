# CreateIncidentAlertRequest

## Example Usage

```typescript
import { CreateIncidentAlertRequest } from "firehydrant/models/operations";

let value: CreateIncidentAlertRequest = {
  incidentId: "<id>",
  requestBody: [
    "<value>",
  ],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `incidentId`                                      | *string*                                          | :heavy_check_mark:                                | N/A                                               |
| `requestBody`                                     | *string*[]                                        | :heavy_check_mark:                                | Array of alert IDs to be assigned to the incident |