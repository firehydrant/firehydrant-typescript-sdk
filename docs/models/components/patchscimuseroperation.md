# PatchScimUserOperation

## Example Usage

```typescript
import { PatchScimUserOperation } from "firehydrant-typescript-sdk/models/components";

let value: PatchScimUserOperation = {
  op: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `op`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The operation to perform on the user. Options are add, remove, replace                                             |
| `path`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The path to the attribute to be modified. Optional for Okta OIN format where value contains the full update object |