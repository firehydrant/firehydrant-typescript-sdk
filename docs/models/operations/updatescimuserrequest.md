# UpdateScimUserRequest

## Example Usage

```typescript
import { UpdateScimUserRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateScimUserRequest = {
  id: "<id>",
  patchV1ScimV2UsersId: {
    operations: [
      {
        op: "<value>",
        path: "/sbin",
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `patchV1ScimV2UsersId`                                                             | [components.PatchV1ScimV2UsersId](../../models/components/patchv1scimv2usersid.md) | :heavy_check_mark:                                                                 | N/A                                                                                |