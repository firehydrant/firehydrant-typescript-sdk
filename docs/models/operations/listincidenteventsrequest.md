# ListIncidentEventsRequest

## Example Usage

```typescript
import { ListIncidentEventsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListIncidentEventsRequest = {
  incidentId: "<id>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `incidentId`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `types`                                                | *string*                                               | :heavy_minus_sign:                                     | A comma separated list of types of events to filter by |
| `page`                                                 | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |
| `perPage`                                              | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |