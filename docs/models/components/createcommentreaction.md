# CreateCommentReaction

ALPHA - Create a reaction on a comment

## Example Usage

```typescript
import { CreateCommentReaction } from "firehydrant/models/components";

let value: CreateCommentReaction = {
  reaction: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `reaction`                        | *string*                          | :heavy_check_mark:                | CLDR short name of Unicode emojis |