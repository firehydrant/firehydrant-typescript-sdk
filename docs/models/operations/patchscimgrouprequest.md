# PatchScimGroupRequest

## Example Usage

```typescript
import { PatchScimGroupRequest } from "firehydrant-typescript-sdk/models/operations";

let value: PatchScimGroupRequest = {
  id: "<id>",
  patchScimGroup: {
    operations: [
      {
        op: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `patchScimGroup`                                                       | [components.PatchScimGroup](../../models/components/patchscimgroup.md) | :heavy_check_mark:                                                     | N/A                                                                    |