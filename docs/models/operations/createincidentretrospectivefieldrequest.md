# CreateIncidentRetrospectiveFieldRequest

## Example Usage

```typescript
import { CreateIncidentRetrospectiveFieldRequest } from "firehydrant/models/operations";

let value: CreateIncidentRetrospectiveFieldRequest = {
  retrospectiveId: "<id>",
  incidentId: "<id>",
  requestBody: {
    label: "<value>",
    type: "multi_select",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `retrospectiveId`                                                                                                                | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `incidentId`                                                                                                                     | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `requestBody`                                                                                                                    | [operations.CreateIncidentRetrospectiveFieldRequestBody](../../models/operations/createincidentretrospectivefieldrequestbody.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |