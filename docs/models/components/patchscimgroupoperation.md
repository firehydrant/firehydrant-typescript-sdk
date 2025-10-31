# PatchScimGroupOperation

## Example Usage

```typescript
import { PatchScimGroupOperation } from "firehydrant-typescript-sdk/models/components";

let value: PatchScimGroupOperation = {
  op: "<value>",
  path: "/lib",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `op`                                                       | *string*                                                   | :heavy_check_mark:                                         | The operation to perform. Options are add, remove, replace |
| `path`                                                     | *string*                                                   | :heavy_check_mark:                                         | The path to the attribute to be modified                   |