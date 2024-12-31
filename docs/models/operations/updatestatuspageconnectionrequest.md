# UpdateStatuspageConnectionRequest

## Example Usage

```typescript
import { UpdateStatuspageConnectionRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateStatuspageConnectionRequest = {
  connectionId: "<id>",
  patchV1IntegrationsStatuspageConnectionsConnectionId: {},
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectionId`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Connection UUID                                                                                                                                    |
| `patchV1IntegrationsStatuspageConnectionsConnectionId`                                                                                             | [components.PatchV1IntegrationsStatuspageConnectionsConnectionId](../../models/components/patchv1integrationsstatuspageconnectionsconnectionid.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |