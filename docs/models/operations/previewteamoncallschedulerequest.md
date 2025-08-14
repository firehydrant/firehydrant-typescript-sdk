# PreviewTeamOnCallScheduleRequest

## Example Usage

```typescript
import { PreviewTeamOnCallScheduleRequest } from "firehydrant-typescript-sdk/models/operations";

let value: PreviewTeamOnCallScheduleRequest = {
  teamId: "<id>",
  previewTeamOnCallSchedule: {
    name: "<value>",
    rotations: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `previewTeamOnCallSchedule`                                                                  | [components.PreviewTeamOnCallSchedule](../../models/components/previewteamoncallschedule.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |