# CreateScheduledMaintenanceImpact

## Example Usage

```typescript
import { CreateScheduledMaintenanceImpact } from "firehydrant/models/components";

let value: CreateScheduledMaintenanceImpact = {
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