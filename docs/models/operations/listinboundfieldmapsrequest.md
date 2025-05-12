# ListInboundFieldMapsRequest

## Example Usage

```typescript
import { ListInboundFieldMapsRequest } from "firehydrant/models/operations";

let value: ListInboundFieldMapsRequest = {
  ticketingProjectId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `page`                                                         | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `perPage`                                                      | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `ticketType`                                                   | [operations.TicketType](../../models/operations/tickettype.md) | :heavy_minus_sign:                                             | Filter by ticket type. Values: incident, follow_up             |
| `ticketingProjectId`                                           | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |