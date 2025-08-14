# CopyOnCallScheduleRotationRequest

## Example Usage

```typescript
import { CopyOnCallScheduleRotationRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CopyOnCallScheduleRotationRequest = {
  rotationId: "<id>",
  teamId: "<id>",
  scheduleId: "<id>",
  copyOnCallScheduleRotation: {
    targetScheduleId: "<id>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `rotationId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `scheduleId`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `copyOnCallScheduleRotation`                                                                   | [components.CopyOnCallScheduleRotation](../../models/components/copyoncallschedulerotation.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |