# CreateSeverityMatrixCondition

Create a new condition

## Example Usage

```typescript
import { CreateSeverityMatrixCondition } from "firehydrant-typescript-sdk/models/components";

let value: CreateSeverityMatrixCondition = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                             | *string*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `position`                                                                                                                                                                         | *number*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | Position is used to determine ordering of conditions in API responses and dropdowns. The condition with the lowest position (typically 0) will be considered the Default Condition |