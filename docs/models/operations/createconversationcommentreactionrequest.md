# CreateConversationCommentReactionRequest

## Example Usage

```typescript
import { CreateConversationCommentReactionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateConversationCommentReactionRequest = {
  conversationId: "<id>",
  commentId: "<id>",
  postV1ConversationsConversationIdCommentsCommentIdReactions: {
    reaction: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                                                                 | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `commentId`                                                                                                                                                      | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `postV1ConversationsConversationIdCommentsCommentIdReactions`                                                                                                    | [components.PostV1ConversationsConversationIdCommentsCommentIdReactions](../../models/components/postv1conversationsconversationidcommentscommentidreactions.md) | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |