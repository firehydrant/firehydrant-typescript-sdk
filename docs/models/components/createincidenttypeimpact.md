# CreateIncidentTypeImpact

## Example Usage

```typescript
import { CreateIncidentTypeImpact } from "firehydrant-typescript-sdk/models/components";

let value: CreateIncidentTypeImpact = {
  id: "<id>",
  conditionId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_check_mark:      | The id of impact        |
| `conditionId`           | *string*                | :heavy_check_mark:      | The id of the condition |