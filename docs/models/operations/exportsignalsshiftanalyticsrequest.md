# ExportSignalsShiftAnalyticsRequest

## Example Usage

```typescript
import { ExportSignalsShiftAnalyticsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ExportSignalsShiftAnalyticsRequest = {
  periodStart: new Date("2024-04-29T03:23:41.920Z"),
  periodEnd: new Date("2025-02-01T21:19:20.271Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Array of user IDs to fetch oncall hours for                                                   |
| `teamIds`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Array of team IDs to fetch oncall hours for                                                   |
| `periodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start of the period to fetch hours for (UTC)                                                  |
| `periodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End of the period to fetch hours for (UTC)                                                    |