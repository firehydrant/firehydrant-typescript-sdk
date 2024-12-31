# MilestoneMappings

## Example Usage

```typescript
import { MilestoneMappings } from "firehydrant-typescript-sdk/models/components";

let value: MilestoneMappings = {
  milestoneId: "<id>",
  status: "resolved",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `milestoneId`                                                                                                                                                  | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | FireHydrant milestone id                                                                                                                                       |
| `status`                                                                                                                                                       | [components.PatchV1IntegrationsStatuspageConnectionsConnectionIdStatus](../../models/components/patchv1integrationsstatuspageconnectionsconnectionidstatus.md) | :heavy_check_mark:                                                                                                                                             | Statuspage.io status                                                                                                                                           |