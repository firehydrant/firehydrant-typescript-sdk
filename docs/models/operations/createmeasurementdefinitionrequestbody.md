# CreateMeasurementDefinitionRequestBody

## Example Usage

```typescript
import { CreateMeasurementDefinitionRequestBody } from "firehydrant-typescript-sdk/models/operations";

let value: CreateMeasurementDefinitionRequestBody = {
  name: "<value>",
  startsAtMilestoneId: "<id>",
  endsAtMilestoneId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `slug`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `startsAtMilestoneId` | *string*              | :heavy_check_mark:    | N/A                   |
| `endsAtMilestoneId`   | *string*              | :heavy_check_mark:    | N/A                   |