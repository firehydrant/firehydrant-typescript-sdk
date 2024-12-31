# CreateTeamOnCallScheduleShiftRequest

## Example Usage

```typescript
import { CreateTeamOnCallScheduleShiftRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateTeamOnCallScheduleShiftRequest = {
  teamId: "<id>",
  scheduleId: "<id>",
  postV1TeamsTeamIdOnCallSchedulesScheduleIdShifts: {
    startTime: "<value>",
    endTime: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `teamId`                                                                                                                                   | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `scheduleId`                                                                                                                               | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `postV1TeamsTeamIdOnCallSchedulesScheduleIdShifts`                                                                                         | [components.PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts](../../models/components/postv1teamsteamidoncallschedulesscheduleidshifts.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |