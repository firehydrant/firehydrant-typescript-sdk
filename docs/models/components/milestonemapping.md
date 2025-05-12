# MilestoneMapping

## Example Usage

```typescript
import { MilestoneMapping } from "firehydrant/models/components";

let value: MilestoneMapping = {
  milestoneId: "<id>",
  status: "resolved",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `milestoneId`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | FireHydrant milestone id                                                                                   |
| `status`                                                                                                   | [components.UpdateStatuspageConnectionStatus](../../models/components/updatestatuspageconnectionstatus.md) | :heavy_check_mark:                                                                                         | Statuspage.io status                                                                                       |