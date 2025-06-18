# ErrorEntity

ErrorEntity model

## Example Usage

```typescript
import { ErrorEntity } from "firehydrant-typescript-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `detail`                                   | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `messages`                                 | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `meta`                                     | [errors.Meta](../../models/errors/meta.md) | :heavy_minus_sign:                         | An object with additional error metadata   |
| `code`                                     | *string*                                   | :heavy_minus_sign:                         | A stable code on which to match errors     |