# Operations

## Example Usage

```typescript
import { Operations } from "firehydrant-typescript-sdk/models/components";

let value: Operations = {
  op: "<value>",
  path: "/usr/share",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `op`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The operation to perform on the user. Options are add, remove, replace |
| `path`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The path to the attribute to be modified                               |