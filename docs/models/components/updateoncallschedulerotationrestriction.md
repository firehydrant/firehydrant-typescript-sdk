# UpdateOnCallScheduleRotationRestriction

## Example Usage

```typescript
import { UpdateOnCallScheduleRotationRestriction } from "firehydrant-typescript-sdk/models/components";

let value: UpdateOnCallScheduleRotationRestriction = {
  startDay: "monday",
  startTime: "<value>",
  endDay: "friday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `startDay`                                                                                                         | [components.UpdateOnCallScheduleRotationStartDay](../../models/components/updateoncallschedulerotationstartday.md) | :heavy_check_mark:                                                                                                 | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).  |
| `startTime`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | An ISO8601 time string specifying when the restriction should start.                                               |
| `endDay`                                                                                                           | [components.UpdateOnCallScheduleRotationEndDay](../../models/components/updateoncallschedulerotationendday.md)     | :heavy_check_mark:                                                                                                 | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).    |
| `endTime`                                                                                                          | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | An ISO8601 time string specifying when the restriction should end.                                                 |