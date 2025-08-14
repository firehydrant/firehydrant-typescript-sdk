# OverrideOnCallScheduleRotationShifts

Create an override covering a specific time period in an on-call rotation, re-assigning that period to a specific user.

## Example Usage

```typescript
import { OverrideOnCallScheduleRotationShifts } from "firehydrant-typescript-sdk/models/components";

let value: OverrideOnCallScheduleRotationShifts = {
  startTime: "<value>",
  endTime: "<value>",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `startTime`                                                                                                                                     | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | An ISO8601 time string specifying when the override should start.                                                                               |
| `endTime`                                                                                                                                       | *string*                                                                                                                                        | :heavy_check_mark:                                                                                                                              | An ISO8601 time string specifying when the override should end.                                                                                 |
| `userId`                                                                                                                                        | *string*                                                                                                                                        | :heavy_minus_sign:                                                                                                                              | The ID of the user who should be on-call for the overridden period. If not provided, the override will be unassigned and claimable by any user. |