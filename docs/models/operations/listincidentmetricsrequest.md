# ListIncidentMetricsRequest

## Example Usage

```typescript
import { ListIncidentMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListIncidentMetricsRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `startDate`                                                          | [RFCDate](../../types/rfcdate.md)                                    | :heavy_minus_sign:                                                   | The start date to return metrics from                                |
| `endDate`                                                            | [RFCDate](../../types/rfcdate.md)                                    | :heavy_minus_sign:                                                   | The end date to return metrics from                                  |
| `bucketSize`                                                         | [operations.BucketSize](../../models/operations/bucketsize.md)       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `by`                                                                 | [operations.By](../../models/operations/by.md)                       | :heavy_minus_sign:                                                   | N/A                                                                  |
| `sortField`                                                          | [operations.SortField](../../models/operations/sortfield.md)         | :heavy_minus_sign:                                                   | N/A                                                                  |
| `sortDirection`                                                      | [operations.SortDirection](../../models/operations/sortdirection.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `sortLimit`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `conditions`                                                         | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |