# CreateIncidentRelatedChangeRequest

## Example Usage

```typescript
import { CreateIncidentRelatedChangeRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentRelatedChangeRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdRelatedChangeEvents: {
    changeEventId: "<id>",
    type: "suspect",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `postV1IncidentsIncidentIdRelatedChangeEvents`                                                                                     | [components.PostV1IncidentsIncidentIdRelatedChangeEvents](../../models/components/postv1incidentsincidentidrelatedchangeevents.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |