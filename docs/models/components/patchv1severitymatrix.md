# PatchV1SeverityMatrix

Update available severities and impacts in your organization's severity matrix.

## Example Usage

```typescript
import { PatchV1SeverityMatrix } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1SeverityMatrix = {
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `summary`                                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.PatchV1SeverityMatrixData](../../models/components/patchv1severitymatrixdata.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |