# UpdateTicket

Update a ticket's attributes

## Example Usage

```typescript
import { UpdateTicket } from "firehydrant-typescript-sdk/models/components";

let value: UpdateTicket = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `summary`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `state`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `type`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `priorityId`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `tagList`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | List of tags for the ticket                                                          |
| `assignees`                                                                          | [components.UpdateTicketAssignee](../../models/components/updateticketassignee.md)[] | :heavy_minus_sign:                                                                   | An array of assignees for the ticket                                                 |