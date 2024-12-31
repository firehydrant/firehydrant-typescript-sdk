# AttachmentRule

## Example Usage

```typescript
import { AttachmentRule } from "firehydrant-typescript-sdk/models/components";

let value: AttachmentRule = {
  logic: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `logic`                                      | *string*                                     | :heavy_check_mark:                           | The JSON logic for the attaching the runbook |
| `userData`                                   | *string*                                     | :heavy_minus_sign:                           | The user data for the rule                   |