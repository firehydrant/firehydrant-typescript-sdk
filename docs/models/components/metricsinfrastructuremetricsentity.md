# MetricsInfrastructureMetricsEntity

Metrics_InfrastructureMetricsEntity model

## Example Usage

```typescript
import { MetricsInfrastructureMetricsEntity } from "firehydrant-typescript-sdk/models/components";

let value: MetricsInfrastructureMetricsEntity = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | The UUID of the component                                                                       |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the component                                                                       |
| `mttd`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Mean Time To Detection (seconds) for all incidents for this component in this time period       |
| `mtta`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Mean Time To Acknowledgement (seconds) for all incidents for this component in this time period |
| `mttm`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Mean Time To Mitigation (seconds) for all incidents for this component in this time period      |
| `mttr`                                                                                          | *number*                                                                                        | :heavy_minus_sign:                                                                              | Mean Time To Resolution (seconds) for all incidents for this component in this time period      |
| `count`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of incidents in this time period for this component                                      |
| `totalTime`                                                                                     | *number*                                                                                        | :heavy_minus_sign:                                                                              | Total time (seconds) the component was impacted (MTTR x Incident Count)                         |