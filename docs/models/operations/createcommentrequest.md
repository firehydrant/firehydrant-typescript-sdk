# CreateCommentRequest

## Example Usage

```typescript
import { CreateCommentRequest } from "firehydrant/models/operations";

let value: CreateCommentRequest = {
  conversationId: "<id>",
  createComment: {
    body: "<value>",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `conversationId`                                                     | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `createComment`                                                      | [components.CreateComment](../../models/components/createcomment.md) | :heavy_check_mark:                                                   | N/A                                                                  |