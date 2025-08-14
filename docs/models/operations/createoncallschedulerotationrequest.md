# CreateOnCallScheduleRotationRequest

## Example Usage

```typescript
import { CreateOnCallScheduleRotationRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateOnCallScheduleRotationRequest = {
  teamId: "<id>",
  scheduleId: "<id>",
  createOnCallScheduleRotation: {
    name: "<value>",
    timeZone: "Antarctica/McMurdo",
    strategy: {
      type: "custom",
    },
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `scheduleId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createOnCallScheduleRotation`                                                                     | [components.CreateOnCallScheduleRotation](../../models/components/createoncallschedulerotation.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |