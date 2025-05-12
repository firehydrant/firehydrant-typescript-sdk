# CreateIncidentStatusPageRequest

## Example Usage

```typescript
import { CreateIncidentStatusPageRequest } from "firehydrant/models/operations";

let value: CreateIncidentStatusPageRequest = {
  incidentId: "<id>",
  createIncidentStatusPage: {
    integrationSlug: "<value>",
    integrationId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `incidentId`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createIncidentStatusPage`                                                                 | [components.CreateIncidentStatusPage](../../models/components/createincidentstatuspage.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |