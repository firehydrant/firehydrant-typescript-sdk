# CreateHandoffNotificationSettingRequest

## Example Usage

```typescript
import { CreateHandoffNotificationSettingRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateHandoffNotificationSettingRequest = {
  notificationGroupMethod: "email",
  maxDelay: "<value>",
  priority: "HIGH",
};
```

## Fields

| Field                                                                                                                                                    | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notificationGroupMethod`                                                                                                                                | [operations.CreateHandoffNotificationSettingNotificationGroupMethod](../../models/operations/createhandoffnotificationsettingnotificationgroupmethod.md) | :heavy_check_mark:                                                                                                                                       | The group method of notification that will be delivered.                                                                                                 |
| `maxDelay`                                                                                                                                               | *string*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                       | An ISO8601 duration string specifying the maximum delay of the notification.                                                                             |
| `priority`                                                                                                                                               | [operations.CreateHandoffNotificationSettingPriority](../../models/operations/createhandoffnotificationsettingpriority.md)                               | :heavy_check_mark:                                                                                                                                       | The priority of the notification.                                                                                                                        |