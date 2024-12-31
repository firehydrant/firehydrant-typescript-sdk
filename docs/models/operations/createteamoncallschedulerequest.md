# CreateTeamOnCallScheduleRequest

## Example Usage

```typescript
import { CreateTeamOnCallScheduleRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateTeamOnCallScheduleRequest = {
  teamId: "<id>",
  postV1TeamsTeamIdOnCallSchedules: {
    name: "<value>",
    timeZone: "America/Yakutat",
    strategy: {
      type: "daily",
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `postV1TeamsTeamIdOnCallSchedules`                                                                         | [components.PostV1TeamsTeamIdOnCallSchedules](../../models/components/postv1teamsteamidoncallschedules.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |