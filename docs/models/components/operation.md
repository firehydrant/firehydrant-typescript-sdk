# Operation

## Example Usage

```typescript
import { Operation } from "firehydrant-typescript-sdk/models/components";

let value: Operation = {
  op: "<value>",
  path: "/System",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `op`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The operation to perform on the user. Options are add, remove, replace |
| `path`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | The path to the attribute to be modified                               |