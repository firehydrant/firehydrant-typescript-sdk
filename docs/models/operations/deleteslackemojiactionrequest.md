# DeleteSlackEmojiActionRequest

## Example Usage

```typescript
import { DeleteSlackEmojiActionRequest } from "firehydrant/models/operations";

let value: DeleteSlackEmojiActionRequest = {
  connectionId: "<id>",
  emojiActionId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `connectionId`        | *string*              | :heavy_check_mark:    | Slack Connection UUID |
| `emojiActionId`       | *string*              | :heavy_check_mark:    | N/A                   |