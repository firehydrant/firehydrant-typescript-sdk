# PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts

Create a Signals on-call shift in a schedule.

## Example Usage

```typescript
import { PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts } from "firehydrant-typescript-sdk/models/components";

let value: PostV1TeamsTeamIdOnCallSchedulesScheduleIdShifts = {
  startTime: "<value>",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `startTime`                                                                                     | *string*                                                                                        | :heavy_check_mark:                                                                              | The start time of the shift in ISO8601 format.                                                  |
| `endTime`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | The end time of the shift in ISO8601 format.                                                    |
| `userId`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | The ID of the user who is on-call for the shift. If not provided, the shift will be unassigned. |