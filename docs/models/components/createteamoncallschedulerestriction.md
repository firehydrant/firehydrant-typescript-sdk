# CreateTeamOnCallScheduleRestriction

## Example Usage

```typescript
import { CreateTeamOnCallScheduleRestriction } from "firehydrant/models/components";

let value: CreateTeamOnCallScheduleRestriction = {
  startDay: "wednesday",
  startTime: "<value>",
  endDay: "friday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `startDay`                                                                                                        | [components.CreateTeamOnCallScheduleStartDay](../../models/components/createteamoncallschedulestartday.md)        | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc). |
| `startTime`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should start.                                              |
| `endDay`                                                                                                          | [components.CreateTeamOnCallScheduleEndDay](../../models/components/createteamoncallscheduleendday.md)            | :heavy_check_mark:                                                                                                | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).   |
| `endTime`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | An ISO8601 time string specifying when the restriction should end.                                                |