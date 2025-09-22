# CreateNotificationPolicyRequest

## Example Usage

```typescript
import { CreateNotificationPolicyRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateNotificationPolicyRequest = {
  notificationGroupMethod: "email",
  maxDelay: "<value>",
  priority: "HIGH",
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `notificationGroupMethod`                                                                                                                | [operations.CreateNotificationPolicyNotificationGroupMethod](../../models/operations/createnotificationpolicynotificationgroupmethod.md) | :heavy_check_mark:                                                                                                                       | The group method of notification that will be delivered.                                                                                 |
| `maxDelay`                                                                                                                               | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | An ISO8601 duration string specifying the maximum delay of the notification.                                                             |
| `priority`                                                                                                                               | [operations.CreateNotificationPolicyPriority](../../models/operations/createnotificationpolicypriority.md)                               | :heavy_check_mark:                                                                                                                       | The priority of the notification.                                                                                                        |