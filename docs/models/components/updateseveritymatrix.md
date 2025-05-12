# UpdateSeverityMatrix

Update available severities and impacts in your organization's severity matrix.

## Example Usage

```typescript
import { UpdateSeverityMatrix } from "firehydrant/models/components";

let value: UpdateSeverityMatrix = {
  data: [
    {
      severity: "<value>",
      impactId: "<id>",
      conditionId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `summary`                                                                                    | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.UpdateSeverityMatrixData](../../models/components/updateseveritymatrixdata.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |