# CreateOnCallScheduleRotationRestriction

## Example Usage

```typescript
import { CreateOnCallScheduleRotationRestriction } from "firehydrant-typescript-sdk/models/components";

let value: CreateOnCallScheduleRotationRestriction = {
  startDay: "sunday",
  startTime: "<value>",
  endDay: "wednesday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `startDay`                                                                                                         | [components.CreateOnCallScheduleRotationStartDay](../../models/components/createoncallschedulerotationstartday.md) | :heavy_check_mark:                                                                                                 | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).  |
| `startTime`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | An ISO8601 time string specifying when the restriction should start.                                               |
| `endDay`                                                                                                           | [components.CreateOnCallScheduleRotationEndDay](../../models/components/createoncallschedulerotationendday.md)     | :heavy_check_mark:                                                                                                 | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).    |
| `endTime`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | An ISO8601 time string specifying when the restriction should end.                                                 |