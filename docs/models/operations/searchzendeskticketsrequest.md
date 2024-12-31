# SearchZendeskTicketsRequest

## Example Usage

```typescript
import { SearchZendeskTicketsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: SearchZendeskTicketsRequest = {
  ticketId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `ticketId`                        | *string*                          | :heavy_check_mark:                | Zendesk ticket ID                 |
| `include`                         | *string*                          | :heavy_minus_sign:                | Use to include attached_incidents |