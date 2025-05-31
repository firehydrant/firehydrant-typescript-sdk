# UpdateScimGroupRequest

## Example Usage

```typescript
import { UpdateScimGroupRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateScimGroupRequest = {
  id: "<id>",
  updateScimGroup: {
    displayName: "Garrett_Klein",
    members: [
      {
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `updateScimGroup`                                                        | [components.UpdateScimGroup](../../models/components/updatescimgroup.md) | :heavy_check_mark:                                                       | N/A                                                                      |