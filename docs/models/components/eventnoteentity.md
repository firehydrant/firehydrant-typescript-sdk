# EventNoteEntity

Event_NoteEntity model

## Example Usage

```typescript
import { EventNoteEntity } from "firehydrant/models/components";

let value: EventNoteEntity = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `body`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `statusPages`                                                                                                  | [components.IncidentsStatusPageEntity](../../models/components/incidentsstatuspageentity.md)[]                 | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `conversations`                                                                                                | [components.ConversationsAPIEntitiesReference](../../models/components/conversationsapientitiesreference.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |