# Steps

## Example Usage

```typescript
import { Steps } from "firehydrant-typescript-sdk/models/components";

let value: Steps = {
  name: "<value>",
  actionId: "<id>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | Name for step                                      |
| `actionId`                                         | *string*                                           | :heavy_check_mark:                                 | ID of action to use for this step.                 |
| `rule`                                             | [components.Rule](../../models/components/rule.md) | :heavy_minus_sign:                                 | N/A                                                |