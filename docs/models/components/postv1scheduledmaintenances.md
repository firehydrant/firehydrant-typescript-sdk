# PostV1ScheduledMaintenances

Create a new scheduled maintenance event

## Example Usage

```typescript
import { PostV1ScheduledMaintenances } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ScheduledMaintenances = {
  name: "<value>",
  startsAt: new Date("2022-05-11T03:00:50.109Z"),
  endsAt: new Date("2022-12-15T12:13:46.383Z"),
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `startsAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | ISO8601 timestamp for the start time of the scheduled maintenance                                                        |
| `endsAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                            | :heavy_check_mark:                                                                                                       | ISO8601 timestamp for the end time of the scheduled maintenance                                                          |
| `summary`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `description`                                                                                                            | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |
| `labels`                                                                                                                 | Record<string, *string*>                                                                                                 | :heavy_minus_sign:                                                                                                       | A json object of label keys and values                                                                                   |
| `statusPages`                                                                                                            | [components.PostV1ScheduledMaintenancesStatusPages](../../models/components/postv1scheduledmaintenancesstatuspages.md)[] | :heavy_minus_sign:                                                                                                       | An array of status pages to display this maintenance on                                                                  |
| `impacts`                                                                                                                | [components.PostV1ScheduledMaintenancesImpacts](../../models/components/postv1scheduledmaintenancesimpacts.md)[]         | :heavy_minus_sign:                                                                                                       | An array of impact/condition combinations                                                                                |