# CreateIncidentStatusPageRequest

## Example Usage

```typescript
import { CreateIncidentStatusPageRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentStatusPageRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdStatusPages: {
    integrationSlug: "<value>",
    integrationId: "<id>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `incidentId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `postV1IncidentsIncidentIdStatusPages`                                                                             | [components.PostV1IncidentsIncidentIdStatusPages](../../models/components/postv1incidentsincidentidstatuspages.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |