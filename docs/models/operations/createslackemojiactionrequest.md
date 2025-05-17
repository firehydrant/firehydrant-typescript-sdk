# CreateSlackEmojiActionRequest

## Example Usage

```typescript
import { CreateSlackEmojiActionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateSlackEmojiActionRequest = {
  connectionId: "<id>",
  requestBody: {
    emojiName: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `connectionId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Slack Connection UUID                                                                                        |
| `requestBody`                                                                                                | [operations.CreateSlackEmojiActionRequestBody](../../models/operations/createslackemojiactionrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |