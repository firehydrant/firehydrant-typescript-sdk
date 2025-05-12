# VotesEntity

VotesEntity model

## Example Usage

```typescript
import { VotesEntity } from "firehydrant/models/components";

let value: VotesEntity = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `voted`                                               | *boolean*                                             | :heavy_minus_sign:                                    | Whether or not the current actor has voted            |
| `liked`                                               | *boolean*                                             | :heavy_minus_sign:                                    | Whether or not the current actor has voted positively |
| `disliked`                                            | *boolean*                                             | :heavy_minus_sign:                                    | Whether or not the current actor has voted negatively |
| `likes`                                               | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `dislikes`                                            | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |