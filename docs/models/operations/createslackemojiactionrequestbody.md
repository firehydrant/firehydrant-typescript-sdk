# CreateSlackEmojiActionRequestBody

## Example Usage

```typescript
import { CreateSlackEmojiActionRequestBody } from "firehydrant/models/operations";

let value: CreateSlackEmojiActionRequestBody = {
  emojiName: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `emojiName`                                                     | *string*                                                        | :heavy_check_mark:                                              | The name of the emoji to associate with this action             |
| `incidentTypeId`                                                | *string*                                                        | :heavy_minus_sign:                                              | The ID of the incident type to associate with this emoji action |