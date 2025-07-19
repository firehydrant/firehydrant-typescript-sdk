# CreateOnCallShiftRequest

## Example Usage

```typescript
import { CreateOnCallShiftRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateOnCallShiftRequest = {
  teamId: "<id>",
  scheduleId: "<id>",
  createOnCallShift: {
    startTime: new Date("2024-06-15T16:48:29.406Z"),
    endTime: new Date("2025-01-24T05:13:18.654Z"),
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `teamId`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `scheduleId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `createOnCallShift`                                                          | [components.CreateOnCallShift](../../models/components/createoncallshift.md) | :heavy_check_mark:                                                           | N/A                                                                          |