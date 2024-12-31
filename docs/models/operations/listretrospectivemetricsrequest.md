# ListRetrospectiveMetricsRequest

## Example Usage

```typescript
import { ListRetrospectiveMetricsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListRetrospectiveMetricsRequest = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `startDate`                           | [RFCDate](../../types/rfcdate.md)     | :heavy_minus_sign:                    | The start date to return metrics from |
| `endDate`                             | [RFCDate](../../types/rfcdate.md)     | :heavy_minus_sign:                    | The end date to return metrics from   |