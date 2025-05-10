# ExportIncidentRetrospectivesRequest

## Example Usage

```typescript
import { ExportIncidentRetrospectivesRequest } from "firehydrant/models/operations";

let value: ExportIncidentRetrospectivesRequest = {
  incidentId: "<id>",
  requestBody: {
    integrationSlug: "google_docs",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `incidentId`                                                                                                             | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `requestBody`                                                                                                            | [operations.ExportIncidentRetrospectivesRequestBody](../../models/operations/exportincidentretrospectivesrequestbody.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |