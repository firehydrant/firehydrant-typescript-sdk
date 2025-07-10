# UpdateIncidentNoteRequest

## Example Usage

```typescript
import { UpdateIncidentNoteRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateIncidentNoteRequest = {
  noteId: "<id>",
  incidentId: "<id>",
  updateIncidentNote: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `noteId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `incidentId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `updateIncidentNote`                                                           | [components.UpdateIncidentNote](../../models/components/updateincidentnote.md) | :heavy_check_mark:                                                             | N/A                                                                            |