# UpdateServiceFunctionality

## Example Usage

```typescript
import { UpdateServiceFunctionality } from "firehydrant/models/components";

let value: UpdateServiceFunctionality = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | If you are trying to reuse a functionality, you may set the ID to attach it to the service         |
| `remove`                                                                                           | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | If you are trying to remove a functionality from a service, set this to 'true'                     |
| `summary`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | If you are trying to create a new functionality and attach it to this service, set the summary key |