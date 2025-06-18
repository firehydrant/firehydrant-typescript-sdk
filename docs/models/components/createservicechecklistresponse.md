# CreateServiceChecklistResponse

Creates a response for a checklist item

## Example Usage

```typescript
import { CreateServiceChecklistResponse } from "firehydrant-typescript-sdk/models/components";

let value: CreateServiceChecklistResponse = {
  checkId: "<id>",
  status: true,
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `checkId`                                                                                                | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | *boolean*                                                                                                | :heavy_check_mark:                                                                                       | Status of the check. 'true' if it's complete, 'false' if incomplete, or blank if not yet interacted with |