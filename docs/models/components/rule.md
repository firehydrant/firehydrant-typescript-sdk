# Rule

## Example Usage

```typescript
import { Rule } from "firehydrant-typescript-sdk/models/components";

let value: Rule = {
  logic: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `logic`                     | *string*                    | :heavy_check_mark:          | The JSON logic for the rule |
| `userData`                  | *string*                    | :heavy_minus_sign:          | The user data for the rule  |