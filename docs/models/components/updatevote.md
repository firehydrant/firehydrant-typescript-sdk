# UpdateVote

Upvote or downvote an object

## Example Usage

```typescript
import { UpdateVote } from "firehydrant/models/components";

let value: UpdateVote = {
  direction: "down",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `direction`                                                  | [components.Direction](../../models/components/direction.md) | :heavy_check_mark:                                           | The direction you would like to vote, or if you dig it       |