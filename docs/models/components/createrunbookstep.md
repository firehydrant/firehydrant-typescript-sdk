# CreateRunbookStep

## Example Usage

```typescript
import { CreateRunbookStep } from "firehydrant/models/components";

let value: CreateRunbookStep = {
  name: "<value>",
  actionId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | Name for step                                                                |
| `actionId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | ID of action to use for this step.                                           |
| `rule`                                                                       | [components.CreateRunbookRule](../../models/components/createrunbookrule.md) | :heavy_minus_sign:                                                           | N/A                                                                          |