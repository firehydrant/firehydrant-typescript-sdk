# PreviewOnCallScheduleRotationRestriction

## Example Usage

```typescript
import { PreviewOnCallScheduleRotationRestriction } from "firehydrant-typescript-sdk/models/components";

let value: PreviewOnCallScheduleRotationRestriction = {
  startDay: "wednesday",
  startTime: "<value>",
  endDay: "thursday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `startDay`                                                                                                           | [components.PreviewOnCallScheduleRotationStartDay](../../models/components/previewoncallschedulerotationstartday.md) | :heavy_check_mark:                                                                                                   | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).    |
| `startTime`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | An ISO8601 time string specifying when the restriction should start.                                                 |
| `endDay`                                                                                                             | [components.PreviewOnCallScheduleRotationEndDay](../../models/components/previewoncallschedulerotationendday.md)     | :heavy_check_mark:                                                                                                   | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).      |
| `endTime`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | An ISO8601 time string specifying when the restriction should end.                                                   |