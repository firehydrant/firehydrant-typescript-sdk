# UpdateSeverityMatrixCondition

Update a severity matrix condition

## Example Usage

```typescript
import { UpdateSeverityMatrixCondition } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSeverityMatrixCondition = {};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                             | *string*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | N/A                                                                                                                                                                                |
| `position`                                                                                                                                                                         | *number*                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                 | Position is used to determine ordering of conditions in API responses and dropdowns. The condition with the lowest position (typically 0) will be considered the Default Condition |