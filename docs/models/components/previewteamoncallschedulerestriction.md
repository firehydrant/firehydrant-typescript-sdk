# PreviewTeamOnCallScheduleRestriction

## Example Usage

```typescript
import { PreviewTeamOnCallScheduleRestriction } from "firehydrant-typescript-sdk/models/components";

let value: PreviewTeamOnCallScheduleRestriction = {
  startDay: "tuesday",
  startTime: "<value>",
  endDay: "thursday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `startDay`                                                                                                        | [components.PreviewTeamOnCallScheduleStartDay](../../models/components/previewteamoncallschedulestartday.md)      | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc). |
| `startTime`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should start.                                              |
| `endDay`                                                                                                          | [components.PreviewTeamOnCallScheduleEndDay](../../models/components/previewteamoncallscheduleendday.md)          | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).   |
| `endTime`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should end.                                                |