# UpdateIncidentEventVotesRequest

## Example Usage

```typescript
import { UpdateIncidentEventVotesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentEventVotesRequest = {
  incidentId: "<id>",
  eventId: "<id>",
  patchV1IncidentsIncidentIdEventsEventIdVotes: {
    direction: "up",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `incidentId`                                                                                                                       | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `eventId`                                                                                                                          | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `patchV1IncidentsIncidentIdEventsEventIdVotes`                                                                                     | [components.PatchV1IncidentsIncidentIdEventsEventIdVotes](../../models/components/patchv1incidentsincidentideventseventidvotes.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |