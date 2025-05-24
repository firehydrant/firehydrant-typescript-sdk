# GetMeanTimeReportRequest

## Example Usage

```typescript
import { GetMeanTimeReportRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetMeanTimeReportRequest = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `environments`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | A comma separated list of environment IDs                                   |
| `teams`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | A comma separated list of team IDs                                          |
| `services`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | A comma separated list of service IDs                                       |
| `status`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Incident status                                                             |
| `startDate`                                                                 | [RFCDate](../../types/rfcdate.md)                                           | :heavy_minus_sign:                                                          | The start date to return incidents from                                     |
| `endDate`                                                                   | [RFCDate](../../types/rfcdate.md)                                           | :heavy_minus_sign:                                                          | The end date to return incidents from                                       |
| `query`                                                                     | *string*                                                                    | :heavy_minus_sign:                                                          | A text query for an incident that searches on name, summary, and desciption |
| `savedSearchId`                                                             | *string*                                                                    | :heavy_minus_sign:                                                          | The id of a previously saved search.                                        |
| `priorities`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | A comma separated list of priorities                                        |
| `priorityNotSet`                                                            | *boolean*                                                                   | :heavy_minus_sign:                                                          | Flag for including incidents where priority has not been set                |
| `severities`                                                                | *string*                                                                    | :heavy_minus_sign:                                                          | A comma separated list of severities                                        |
| `severityNotSet`                                                            | *boolean*                                                                   | :heavy_minus_sign:                                                          | Flag for including incidents where severity has not been set                |
| `currentMilestones`                                                         | *string*                                                                    | :heavy_minus_sign:                                                          | A comma separated list of current milestones                                |