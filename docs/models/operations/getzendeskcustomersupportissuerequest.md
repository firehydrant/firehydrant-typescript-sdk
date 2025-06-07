# GetZendeskCustomerSupportIssueRequest

## Example Usage

```typescript
import { GetZendeskCustomerSupportIssueRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetZendeskCustomerSupportIssueRequest = {
  ticketId: "<id>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `ticketId`                        | *string*                          | :heavy_check_mark:                | Zendesk ticket ID                 |
| `include`                         | *string*                          | :heavy_minus_sign:                | Use to include attached_incidents |