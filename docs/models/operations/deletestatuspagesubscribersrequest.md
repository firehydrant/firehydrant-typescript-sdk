# DeleteStatusPageSubscribersRequest

## Example Usage

```typescript
import { DeleteStatusPageSubscribersRequest } from "firehydrant-typescript-sdk/models/operations";

let value: DeleteStatusPageSubscribersRequest = {
  nuncConnectionId: "<id>",
  subscriberIds: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `nuncConnectionId`                       | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `subscriberIds`                          | *string*                                 | :heavy_check_mark:                       | A list of subscriber IDs to unsubscribe. |