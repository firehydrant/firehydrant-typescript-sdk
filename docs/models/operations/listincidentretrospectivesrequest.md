# ListIncidentRetrospectivesRequest

## Example Usage

```typescript
import { ListIncidentRetrospectivesRequest } from "firehydrant/models/operations";

let value: ListIncidentRetrospectivesRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `page`                   | *number*                 | :heavy_minus_sign:       | N/A                      |
| `perPage`                | *number*                 | :heavy_minus_sign:       | N/A                      |
| `isHidden`               | *boolean*                | :heavy_minus_sign:       | Filter by hidden status. |
| `incidentId`             | *string*                 | :heavy_check_mark:       | N/A                      |