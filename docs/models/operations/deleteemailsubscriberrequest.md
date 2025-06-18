# DeleteEmailSubscriberRequest

## Example Usage

```typescript
import { DeleteEmailSubscriberRequest } from "firehydrant-typescript-sdk/models/operations";

let value: DeleteEmailSubscriberRequest = {
  nuncConnectionId: "<id>",
  subscriberIds: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `nuncConnectionId`                       | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `subscriberIds`                          | *string*                                 | :heavy_check_mark:                       | A list of subscriber IDs to unsubscribe. |