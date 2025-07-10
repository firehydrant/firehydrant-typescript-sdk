# ShareIncidentRetrospectivesRequest

## Example Usage

```typescript
import { ShareIncidentRetrospectivesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ShareIncidentRetrospectivesRequest = {
  incidentId: "<id>",
  requestBody: {
    retrospectiveIds: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `requestBody`                                                                                                          | [operations.ShareIncidentRetrospectivesRequestBody](../../models/operations/shareincidentretrospectivesrequestbody.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |