# UpdateSupportHoursSchedule

Update the team's support hours schedule

## Example Usage

```typescript
import { UpdateSupportHoursSchedule } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSupportHoursSchedule = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `timeZone`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `signalsMaximumNotificationPriority`                                                                           | [components.SignalsMaximumNotificationPriority](../../models/components/signalsmaximumnotificationpriority.md) | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `bypassPriorityThreshold`                                                                                      | [components.BypassPriorityThreshold](../../models/components/bypassprioritythreshold.md)                       | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `shifts`                                                                                                       | [components.Shift](../../models/components/shift.md)[]                                                         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |