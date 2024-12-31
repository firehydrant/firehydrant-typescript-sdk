# PostV1IncidentsIncidentIdNotes

Create a new note on for an incident. The visibility field on a note determines where it gets posted.

## Example Usage

```typescript
import { PostV1IncidentsIncidentIdNotes } from "firehydrant-typescript-sdk/models/components";

let value: PostV1IncidentsIncidentIdNotes = {
  body: "<value>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `body`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `occurredAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_minus_sign:                                                                                                             | ISO8601 timestamp for when the note occurred                                                                                   |
| `visibility`                                                                                                                   | [components.PostV1IncidentsIncidentIdNotesVisibility](../../models/components/postv1incidentsincidentidnotesvisibility.md)     | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |
| `statusPages`                                                                                                                  | [components.PostV1IncidentsIncidentIdNotesStatusPages](../../models/components/postv1incidentsincidentidnotesstatuspages.md)[] | :heavy_minus_sign:                                                                                                             | N/A                                                                                                                            |