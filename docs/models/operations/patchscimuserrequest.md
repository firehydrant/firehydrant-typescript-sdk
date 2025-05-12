# PatchScimUserRequest

## Example Usage

```typescript
import { PatchScimUserRequest } from "firehydrant/models/operations";

let value: PatchScimUserRequest = {
  id: "<id>",
  patchScimUser: {
    operations: [
      {
        op: "<value>",
        path: "/opt/sbin",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `patchScimUser`                                                      | [components.PatchScimUser](../../models/components/patchscimuser.md) | :heavy_check_mark:                                                   | N/A                                                                  |