# Shift

## Example Usage

```typescript
import { Shift } from "firehydrant-typescript-sdk/models/components";

let value: Shift = {
  startTime: "<value>",
  endTime: "<value>",
  dayOfWeek: "tuesday",
  signalsMaximumNotificationPriority: "HIGH",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `startTime`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `endTime`                                                                                                                | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `dayOfWeek`                                                                                                              | [components.DayOfWeek](../../models/components/dayofweek.md)                                                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `signalsMaximumNotificationPriority`                                                                                     | [components.ShiftSignalsMaximumNotificationPriority](../../models/components/shiftsignalsmaximumnotificationpriority.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |