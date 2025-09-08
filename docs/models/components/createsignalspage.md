# CreateSignalsPage

Used for paging an on-call target within FireHydrant's signals product. This can be used for paging users, teams, on-call schedules, and escalation policies.

## Example Usage

```typescript
import { CreateSignalsPage } from "firehydrant-typescript-sdk/models/components";

let value: CreateSignalsPage = {
  summary: "<value>",
  targetType: "OnCallSchedule",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `summary`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `targetType`                                                                                     | [components.CreateSignalsPageTargetType](../../models/components/createsignalspagetargettype.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `targetId`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the target. Should be a UUID for the target type.                                      |
| `body`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |