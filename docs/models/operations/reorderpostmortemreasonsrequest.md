# ReorderPostMortemReasonsRequest

## Example Usage

```typescript
import { ReorderPostMortemReasonsRequest } from "firehydrant/models/operations";

let value: ReorderPostMortemReasonsRequest = {
  reportId: "<id>",
  reorderPostMortemReasons: {
    oldPosition: 934086,
    newPosition: 666715,
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `reportId`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `reorderPostMortemReasons`                                                                 | [components.ReorderPostMortemReasons](../../models/components/reorderpostmortemreasons.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |