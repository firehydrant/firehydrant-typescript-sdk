# ShareIncidentRetrospectivesRequest

## Example Usage

```typescript
import { ShareIncidentRetrospectivesRequest } from "firehydrant/models/operations";

let value: ShareIncidentRetrospectivesRequest = {
  incidentId: "<id>",
  requestBody: {
    retrospectiveIds: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.ShareIncidentRetrospectivesRequestBody](../../models/operations/shareincidentretrospectivesrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |