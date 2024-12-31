# ListConversationCommentsRequest

## Example Usage

```typescript
import { ListConversationCommentsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListConversationCommentsRequest = {
  conversationId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `before`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | An ISO8601 timestamp that allows filtering for comments posted before the provided time.      |
| `after`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | An ISO8601 timestamp that allows filtering for comments posted after the provided time.       |
| `sort`                                                                                        | [operations.Sort](../../models/operations/sort.md)                                            | :heavy_minus_sign:                                                                            | Allows sorting comments by the time they were posted, ascending or descending.                |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |