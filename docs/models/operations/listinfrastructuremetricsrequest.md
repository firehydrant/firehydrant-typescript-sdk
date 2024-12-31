# ListInfrastructureMetricsRequest

## Example Usage

```typescript
import { ListInfrastructureMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListInfrastructureMetricsRequest = {
  infraType: "functionalities",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `infraType`                                                    | [operations.InfraType](../../models/operations/infratype.md)   | :heavy_check_mark:                                             | N/A                                                            |
| `startDate`                                                    | [RFCDate](../../types/rfcdate.md)                              | :heavy_minus_sign:                                             | The start date to return metrics from; defaults to 30 days ago |
| `endDate`                                                      | [RFCDate](../../types/rfcdate.md)                              | :heavy_minus_sign:                                             | The end date to return metrics from, defaults to today         |