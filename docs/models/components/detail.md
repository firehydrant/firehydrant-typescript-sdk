# Detail

## Example Usage

```typescript
import { Detail } from "firehydrant-typescript-sdk/models/components";

let value: Detail = {
  question: "<value>",
  prompt: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `question`                                        | *string*                                          | :heavy_check_mark:                                | The incident detail question (max 255 characters) |
| `prompt`                                          | *string*                                          | :heavy_check_mark:                                | The prompt to display when collecting this detail |
| `slug`                                            | *string*                                          | :heavy_minus_sign:                                | Optional unique identifier for this detail        |