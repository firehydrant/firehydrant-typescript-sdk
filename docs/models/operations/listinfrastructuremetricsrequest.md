# ListInfrastructureMetricsRequest

## Example Usage

```typescript
import { ListInfrastructureMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListInfrastructureMetricsRequest = {
  infraType: "environments",
  infraId: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `infraType`                                                                                                    | [operations.ListInfrastructureMetricsInfraType](../../models/operations/listinfrastructuremetricsinfratype.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `infraId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Component UUID                                                                                                 |
| `startDate`                                                                                                    | [RFCDate](../../types/rfcdate.md)                                                                              | :heavy_minus_sign:                                                                                             | The start date to return metrics from; defaults to 30 days ago                                                 |
| `endDate`                                                                                                      | [RFCDate](../../types/rfcdate.md)                                                                              | :heavy_minus_sign:                                                                                             | The end date to return metrics from, defaults to today                                                         |