# UpdateNotificationPolicyRequestBody

## Example Usage

```typescript
import { UpdateNotificationPolicyRequestBody } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateNotificationPolicyRequestBody = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `notificationGroupMethod`                                                                                                                | [operations.UpdateNotificationPolicyNotificationGroupMethod](../../models/operations/updatenotificationpolicynotificationgroupmethod.md) | :heavy_minus_sign:                                                                                                                       | The group method of notification that will be delivered.                                                                                 |
| `maxDelay`                                                                                                                               | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | An ISO8601 duration string specifying the maximum delay of the notification.                                                             |
| `priority`                                                                                                                               | [operations.UpdateNotificationPolicyPriority](../../models/operations/updatenotificationpolicypriority.md)                               | :heavy_minus_sign:                                                                                                                       | The priority of the notification.                                                                                                        |