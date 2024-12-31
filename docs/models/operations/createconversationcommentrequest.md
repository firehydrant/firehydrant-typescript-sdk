# CreateConversationCommentRequest

## Example Usage

```typescript
import { CreateConversationCommentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateConversationCommentRequest = {
  conversationId: "<id>",
  postV1ConversationsConversationIdComments: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `postV1ConversationsConversationIdComments`                                                                                  | [components.PostV1ConversationsConversationIdComments](../../models/components/postv1conversationsconversationidcomments.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |