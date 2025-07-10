# UpdateCommentRequest

## Example Usage

```typescript
import { UpdateCommentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateCommentRequest = {
  commentId: "<id>",
  conversationId: "<id>",
  updateComment: {},
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `commentId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `conversationId`                                                     | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `updateComment`                                                      | [components.UpdateComment](../../models/components/updatecomment.md) | :heavy_check_mark:                                                   | N/A                                                                  |