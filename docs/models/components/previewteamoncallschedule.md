# PreviewTeamOnCallSchedule

Preview a new on-call schedule based on the provided rotations, allowing you to see how the schedule will look before saving it.

## Example Usage

```typescript
import { PreviewTeamOnCallSchedule } from "firehydrant-typescript-sdk/models/components";

let value: PreviewTeamOnCallSchedule = {
  name: "<value>",
  rotations: [
    {
      name: "<value>",
      timeZone: "America/Martinique",
      strategy: {
        type: "custom",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                       | *string*                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                           | The on-call schedule's name.                                                                                                                                                                 |
| `description`                                                                                                                                                                                | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | A detailed description of the on-call schedule.                                                                                                                                              |
| `rotations`                                                                                                                                                                                  | [components.PreviewTeamOnCallScheduleRotation](../../models/components/previewteamoncallschedulerotation.md)[]                                                                               | :heavy_check_mark:                                                                                                                                                                           | An array of objects that specify rotations for the schedule. If not provided, the deprecated single-rotation parameters can be used instead, with `time_zone` and `strategy` being required. |
| `from`                                                                                                                                                                                       | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | An ISO8601 time string specifying the start of the time window to preview. Defaults to now.                                                                                                  |
| `to`                                                                                                                                                                                         | *string*                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                           | An ISO8601 time string specifying the end of the time window to preview. Defaults to two weeks from now.                                                                                     |