# UpdateSlackEmojiActionRequest

## Example Usage

```typescript
import { UpdateSlackEmojiActionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateSlackEmojiActionRequest = {
  connectionId: "<id>",
  emojiActionId: "<id>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `connectionId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Slack Connection UUID                                                                                        |
| `emojiActionId`                                                                                              | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `requestBody`                                                                                                | [operations.UpdateSlackEmojiActionRequestBody](../../models/operations/updateslackemojiactionrequestbody.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |