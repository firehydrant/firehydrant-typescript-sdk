# CreateLifecycleMeasurementDefinitionRequest

## Example Usage

```typescript
import { CreateLifecycleMeasurementDefinitionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateLifecycleMeasurementDefinitionRequest = {
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