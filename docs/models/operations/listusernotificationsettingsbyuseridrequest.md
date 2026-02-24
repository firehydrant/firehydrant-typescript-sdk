# ListUserNotificationSettingsByUserIdRequest

## Example Usage

```typescript
import { ListUserNotificationSettingsByUserIdRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListUserNotificationSettingsByUserIdRequest = {
  userId: "<id>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `userId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `page`                                                                             | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `perPage`                                                                          | *number*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `notificationPriority`                                                             | [operations.NotificationPriority](../../models/operations/notificationpriority.md) | :heavy_minus_sign:                                                                 | The level of priority for the notification setting.                                |