# ListSlackEmojiActionsRequest

## Example Usage

```typescript
import { ListSlackEmojiActionsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListSlackEmojiActionsRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | Slack Connection UUID |
| `page`                | *number*              | :heavy_minus_sign:    | N/A                   |
| `perPage`             | *number*              | :heavy_minus_sign:    | N/A                   |