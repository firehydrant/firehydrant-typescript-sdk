# CreateServiceFunctionality

## Example Usage

```typescript
import { CreateServiceFunctionality } from "firehydrant/models/components";

let value: CreateServiceFunctionality = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `summary`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | If you are trying to create a new functionality and attach it to this service, set the summary key |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | If you are trying to reuse a functionality, you may set the ID to attach it to the service         |