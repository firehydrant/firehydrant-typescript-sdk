# CreateIncidentNoteRequest

## Example Usage

```typescript
import { CreateIncidentNoteRequest } from "firehydrant/models/operations";

let value: CreateIncidentNoteRequest = {
  incidentId: "<id>",
  createIncidentNote: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `incidentId`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `createIncidentNote`                                                           | [components.CreateIncidentNote](../../models/components/createincidentnote.md) | :heavy_check_mark:                                                             | N/A                                                                            |