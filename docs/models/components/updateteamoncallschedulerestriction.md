# UpdateTeamOnCallScheduleRestriction

## Example Usage

```typescript
import { UpdateTeamOnCallScheduleRestriction } from "firehydrant-typescript-sdk/models/components";

let value: UpdateTeamOnCallScheduleRestriction = {
  startDay: "saturday",
  startTime: "<value>",
  endDay: "friday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `startDay`                                                                                                        | [components.UpdateTeamOnCallScheduleStartDay](../../models/components/updateteamoncallschedulestartday.md)        | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc). |
| `startTime`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should start.                                              |
| `endDay`                                                                                                          | [components.UpdateTeamOnCallScheduleEndDay](../../models/components/updateteamoncallscheduleendday.md)            | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).   |
| `endTime`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should end.                                                |