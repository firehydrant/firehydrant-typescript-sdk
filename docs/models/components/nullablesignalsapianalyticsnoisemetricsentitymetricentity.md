# NullableSignalsAPIAnalyticsNoiseMetricsEntityMetricEntity

## Example Usage

```typescript
import { NullableSignalsAPIAnalyticsNoiseMetricsEntityMetricEntity } from "firehydrant-typescript-sdk/models/components";

let value: NullableSignalsAPIAnalyticsNoiseMetricsEntityMetricEntity = {};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `bucket`                                | *string*                                | :heavy_minus_sign:                      | The time bucket                         |
| `totalAlerts`                           | *number*                                | :heavy_minus_sign:                      | The total number of alerts              |
| `noisyAlerts`                           | *number*                                | :heavy_minus_sign:                      | The number of alerts marked as noise    |
| `percentage`                            | *number*                                | :heavy_minus_sign:                      | The percentage of alerts that are noise |