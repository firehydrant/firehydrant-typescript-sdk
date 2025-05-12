# CreateOnCallShiftRequest

## Example Usage

```typescript
import { CreateOnCallShiftRequest } from "firehydrant/models/operations";

let value: CreateOnCallShiftRequest = {
  teamId: "<id>",
  scheduleId: "<id>",
  createOnCallShift: {
    startTime: "<value>",
    endTime: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `scheduleId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createOnCallShift`                                                          | [components.CreateOnCallShift](../../models/components/createoncallshift.md) | :heavy_check_mark:                                                           | N/A                                                                          |