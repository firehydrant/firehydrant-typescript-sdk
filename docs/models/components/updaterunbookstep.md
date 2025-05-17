# UpdateRunbookStep

## Example Usage

```typescript
import { UpdateRunbookStep } from "firehydrant-typescript-sdk/models/components";

let value: UpdateRunbookStep = {
  name: "<value>",
  actionId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `stepId`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | ID of step to be updated                                                     |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | Name for step                                                                |
| `actionId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | ID of action to use for this step.                                           |
| `rule`                                                                       | [components.UpdateRunbookRule](../../models/components/updaterunbookrule.md) | :heavy_minus_sign:                                                           | N/A                                                                          |