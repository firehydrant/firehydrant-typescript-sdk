# OverrideOnCallScheduleRotationShiftsRequest

## Example Usage

```typescript
import { OverrideOnCallScheduleRotationShiftsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: OverrideOnCallScheduleRotationShiftsRequest = {
  rotationId: "<id>",
  teamId: "<id>",
  scheduleId: "<id>",
  overrideOnCallScheduleRotationShifts: {
    startTime: "<value>",
    endTime: "<value>",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `rotationId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `teamId`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `scheduleId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `overrideOnCallScheduleRotationShifts`                                                                             | [components.OverrideOnCallScheduleRotationShifts](../../models/components/overrideoncallschedulerotationshifts.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |