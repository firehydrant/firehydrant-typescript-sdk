# PostV1ScheduledMaintenancesStatusPages

## Example Usage

```typescript
import { PostV1ScheduledMaintenancesStatusPages } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ScheduledMaintenancesStatusPages = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `integrationSlug`                                          | *string*                                                   | :heavy_minus_sign:                                         | The slug identifying the type of status page               |
| `connectionId`                                             | *string*                                                   | :heavy_check_mark:                                         | The UUID of the status page to display this maintenance on |