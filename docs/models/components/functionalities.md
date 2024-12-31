# Functionalities

## Example Usage

```typescript
import { Functionalities } from "firehydrant-typescript-sdk/models/components";

let value: Functionalities = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `summary`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | If you are trying to create a new functionality and attach it to this service, set the summary key |
| `id`                                                                                               | *string*                                                                                           | :heavy_minus_sign:                                                                                 | If you are trying to reuse a functionality, you may set the ID to attach it to the service         |