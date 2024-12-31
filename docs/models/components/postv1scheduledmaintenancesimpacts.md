# PostV1ScheduledMaintenancesImpacts

## Example Usage

```typescript
import { PostV1ScheduledMaintenancesImpacts } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ScheduledMaintenancesImpacts = {
  type: "<value>",
  id: "<id>",
  conditionId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `type`                  | *string*                | :heavy_check_mark:      | The type of impact      |
| `id`                    | *string*                | :heavy_check_mark:      | The id of impact        |
| `conditionId`           | *string*                | :heavy_check_mark:      | The id of the condition |