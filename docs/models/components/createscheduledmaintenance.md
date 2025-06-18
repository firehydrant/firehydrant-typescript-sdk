# CreateScheduledMaintenance

Create a new scheduled maintenance event

## Example Usage

```typescript
import { CreateScheduledMaintenance } from "firehydrant-typescript-sdk/models/components";

let value: CreateScheduledMaintenance = {
  name: "<value>",
  startsAt: new Date("2023-04-13T10:47:11.279Z"),
  endsAt: new Date("2025-10-18T12:37:20.450Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `startsAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | ISO8601 timestamp for the start time of the scheduled maintenance                                                    |
| `endsAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | ISO8601 timestamp for the end time of the scheduled maintenance                                                      |
| `summary`                                                                                                            | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `description`                                                                                                        | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `labels`                                                                                                             | Record<string, *string*>                                                                                             | :heavy_minus_sign:                                                                                                   | A json object of label keys and values                                                                               |
| `statusPages`                                                                                                        | [components.CreateScheduledMaintenanceStatusPage](../../models/components/createscheduledmaintenancestatuspage.md)[] | :heavy_minus_sign:                                                                                                   | An array of status pages to display this maintenance on                                                              |
| `impacts`                                                                                                            | [components.CreateScheduledMaintenanceImpact](../../models/components/createscheduledmaintenanceimpact.md)[]         | :heavy_minus_sign:                                                                                                   | An array of impact/condition combinations                                                                            |