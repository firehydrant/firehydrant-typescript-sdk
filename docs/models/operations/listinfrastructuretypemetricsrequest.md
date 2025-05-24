# ListInfrastructureTypeMetricsRequest

## Example Usage

```typescript
import { ListInfrastructureTypeMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListInfrastructureTypeMetricsRequest = {
  infraType: "services",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `infraType`                                                                                                            | [operations.ListInfrastructureTypeMetricsInfraType](../../models/operations/listinfrastructuretypemetricsinfratype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `startDate`                                                                                                            | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_minus_sign:                                                                                                     | The start date to return metrics from; defaults to 30 days ago                                                         |
| `endDate`                                                                                                              | [RFCDate](../../types/rfcdate.md)                                                                                      | :heavy_minus_sign:                                                                                                     | The end date to return metrics from, defaults to today                                                                 |