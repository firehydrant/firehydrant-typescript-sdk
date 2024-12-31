# UpdateIncidentNoteRequest

## Example Usage

```typescript
import { UpdateIncidentNoteRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentNoteRequest = {
  noteId: "<id>",
  incidentId: "<id>",
  patchV1IncidentsIncidentIdNotesNoteId: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `noteId`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `incidentId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `patchV1IncidentsIncidentIdNotesNoteId`                                                                              | [components.PatchV1IncidentsIncidentIdNotesNoteId](../../models/components/patchv1incidentsincidentidnotesnoteid.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |