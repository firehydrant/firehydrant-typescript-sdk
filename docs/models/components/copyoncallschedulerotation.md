# CopyOnCallScheduleRotation

Copy an on-call rotation into a different schedule, allowing you to merge them together safely.

## Example Usage

```typescript
import { CopyOnCallScheduleRotation } from "firehydrant-typescript-sdk/models/components";

let value: CopyOnCallScheduleRotation = {
  targetScheduleId: "<id>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `targetScheduleId`                                | *string*                                          | :heavy_check_mark:                                | The ID of the schedule to clone the rotation into |
| `name`                                            | *string*                                          | :heavy_minus_sign:                                | The name of the on-call rotation                  |