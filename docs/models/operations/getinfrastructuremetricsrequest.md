# GetInfrastructureMetricsRequest

## Example Usage

```typescript
import { GetInfrastructureMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetInfrastructureMetricsRequest = {
  infraType: "customers",
  infraId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `infraType`                                                                    | [operations.PathParamInfraType](../../models/operations/pathparaminfratype.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `infraId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Component UUID                                                                 |
| `startDate`                                                                    | [RFCDate](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                             | The start date to return metrics from; defaults to 30 days ago                 |
| `endDate`                                                                      | [RFCDate](../../types/rfcdate.md)                                              | :heavy_minus_sign:                                                             | The end date to return metrics from, defaults to today                         |