# CreateIncidentNoteRequest

## Example Usage

```typescript
import { CreateIncidentNoteRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentNoteRequest = {
  incidentId: "<id>",
  postV1IncidentsIncidentIdNotes: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `incidentId`                                                                                           | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `postV1IncidentsIncidentIdNotes`                                                                       | [components.PostV1IncidentsIncidentIdNotes](../../models/components/postv1incidentsincidentidnotes.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |