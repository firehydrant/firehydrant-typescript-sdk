# UpdatePostMortemFieldRequest

## Example Usage

```typescript
import { UpdatePostMortemFieldRequest } from "firehydrant/models/operations";

let value: UpdatePostMortemFieldRequest = {
  fieldId: "<id>",
  reportId: "<id>",
  updatePostMortemField: {
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `fieldId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `reportId`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `updatePostMortemField`                                                              | [components.UpdatePostMortemField](../../models/components/updatepostmortemfield.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |