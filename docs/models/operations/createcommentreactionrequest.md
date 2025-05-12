# CreateCommentReactionRequest

## Example Usage

```typescript
import { CreateCommentReactionRequest } from "firehydrant/models/operations";

let value: CreateCommentReactionRequest = {
  conversationId: "<id>",
  commentId: "<id>",
  createCommentReaction: {
    reaction: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `conversationId`                                                                     | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `commentId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createCommentReaction`                                                              | [components.CreateCommentReaction](../../models/components/createcommentreaction.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |