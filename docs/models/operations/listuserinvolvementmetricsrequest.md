# ListUserInvolvementMetricsRequest

## Example Usage

```typescript
import { ListUserInvolvementMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListUserInvolvementMetricsRequest = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `startDate`                                                                              | [RFCDate](../../types/rfcdate.md)                                                        | :heavy_minus_sign:                                                                       | The start date to return metrics from                                                    |
| `endDate`                                                                                | [RFCDate](../../types/rfcdate.md)                                                        | :heavy_minus_sign:                                                                       | The end date to return metrics from                                                      |
| `bucketSize`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `by`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `sortField`                                                                              | [operations.QueryParamSortField](../../models/operations/queryparamsortfield.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `sortDirection`                                                                          | [operations.QueryParamSortDirection](../../models/operations/queryparamsortdirection.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `sortLimit`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |