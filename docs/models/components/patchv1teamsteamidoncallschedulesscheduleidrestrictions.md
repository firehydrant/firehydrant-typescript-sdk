# PatchV1TeamsTeamIdOnCallSchedulesScheduleIdRestrictions

## Example Usage

```typescript
import { PatchV1TeamsTeamIdOnCallSchedulesScheduleIdRestrictions } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1TeamsTeamIdOnCallSchedulesScheduleIdRestrictions = {
  startDay: "friday",
  startTime: "<value>",
  endDay: "friday",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `startDay`                                                                                                                                       | [components.PatchV1TeamsTeamIdOnCallSchedulesScheduleIdStartDay](../../models/components/patchv1teamsteamidoncallschedulesscheduleidstartday.md) | :heavy_check_mark:                                                                                                                               | The day of the week on which the restriction should start, as its long-form name (e.g. "monday", "tuesday", etc).                                |
| `startTime`                                                                                                                                      | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | An ISO8601 time string specifying when the restriction should start.                                                                             |
| `endDay`                                                                                                                                         | [components.PatchV1TeamsTeamIdOnCallSchedulesScheduleIdEndDay](../../models/components/patchv1teamsteamidoncallschedulesscheduleidendday.md)     | :heavy_check_mark:                                                                                                                               | The day of the week on which the restriction should end, as its long-form name (e.g. "monday", "tuesday", etc).                                  |
| `endTime`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | An ISO8601 time string specifying when the restriction should end.                                                                               |