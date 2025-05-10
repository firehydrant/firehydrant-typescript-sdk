# UpdateScheduledMaintenanceStatusPage

## Example Usage

```typescript
import { UpdateScheduledMaintenanceStatusPage } from "firehydrant/models/components";

let value: UpdateScheduledMaintenanceStatusPage = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `integrationSlug`                                          | *string*                                                   | :heavy_minus_sign:                                         | The slug identifying the type of status page               |
| `connectionId`                                             | *string*                                                   | :heavy_check_mark:                                         | The UUID of the status page to display this maintenance on |