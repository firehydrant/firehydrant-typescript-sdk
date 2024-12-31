# PostV1ServicesServiceIdChecklistResponseChecklistId

Creates a response for a checklist item

## Example Usage

```typescript
import { PostV1ServicesServiceIdChecklistResponseChecklistId } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ServicesServiceIdChecklistResponseChecklistId = {
  checkId: "<id>",
  status: false,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `checkId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Status of the check. 'true' if it's complete, 'false' if incomplete, or blank if not yet interacted with |