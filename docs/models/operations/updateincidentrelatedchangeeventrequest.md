# UpdateIncidentRelatedChangeEventRequest

## Example Usage

```typescript
import { UpdateIncidentRelatedChangeEventRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentRelatedChangeEventRequest = {
  relatedChangeEventId: "<id>",
  incidentId: "<id>",
  patchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId: {},
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `relatedChangeEventId`                                                                                                                                                       | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `incidentId`                                                                                                                                                                 | *string*                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |
| `patchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId`                                                                                                          | [components.PatchV1IncidentsIncidentIdRelatedChangeEventsRelatedChangeEventId](../../models/components/patchv1incidentsincidentidrelatedchangeeventsrelatedchangeeventid.md) | :heavy_check_mark:                                                                                                                                                           | N/A                                                                                                                                                                          |