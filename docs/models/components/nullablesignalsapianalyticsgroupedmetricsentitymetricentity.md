# NullableSignalsAPIAnalyticsGroupedMetricsEntityMetricEntity

## Example Usage

```typescript
import { NullableSignalsAPIAnalyticsGroupedMetricsEntityMetricEntity } from "firehydrant-typescript-sdk/models/components";

let value: NullableSignalsAPIAnalyticsGroupedMetricsEntityMetricEntity = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `groupedId`                                  | *number*                                     | :heavy_minus_sign:                           | The ID of the group                          |
| `groupedName`                                | *string*                                     | :heavy_minus_sign:                           | The name of the group                        |
| `totalOpenedAlerts`                          | *number*                                     | :heavy_minus_sign:                           | The total number of opened alerts            |
| `totalAckedAlerts`                           | *number*                                     | :heavy_minus_sign:                           | The total number of acknowledged alerts      |
| `totalIncidents`                             | *number*                                     | :heavy_minus_sign:                           | The total number of incidents                |
| `ackedPercentage`                            | *number*                                     | :heavy_minus_sign:                           | The percentage of acknowledged alerts        |
| `incidentsPercentage`                        | *number*                                     | :heavy_minus_sign:                           | The percentage of alerts that have incidents |