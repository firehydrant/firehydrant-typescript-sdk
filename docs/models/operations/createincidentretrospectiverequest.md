# CreateIncidentRetrospectiveRequest

## Example Usage

```typescript
import { CreateIncidentRetrospectiveRequest } from "firehydrant/models/operations";

let value: CreateIncidentRetrospectiveRequest = {
  incidentId: "<id>",
  requestBody: {
    retrospectiveTemplateId: "<id>",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.CreateIncidentRetrospectiveRequestBody](../../models/operations/createincidentretrospectiverequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |