# CreateTeamOnCallScheduleRequest

## Example Usage

```typescript
import { CreateTeamOnCallScheduleRequest } from "firehydrant/models/operations";

let value: CreateTeamOnCallScheduleRequest = {
  teamId: "<id>",
  createTeamOnCallSchedule: {
    name: "<value>",
    timeZone: "Europe/Bratislava",
    strategy: {
      type: "daily",
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `teamId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `createTeamOnCallSchedule`                                                                 | [components.CreateTeamOnCallSchedule](../../models/components/createteamoncallschedule.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |