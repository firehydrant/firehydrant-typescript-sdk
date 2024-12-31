# PatchV1ScimV2UsersId

PATCH SCIM endpoint to update a User. This endpoint is used to update a resource's attributes.

## Example Usage

```typescript
import { PatchV1ScimV2UsersId } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1ScimV2UsersId = {
  operations: [
    {
      op: "<value>",
      path: "/usr/X11R6",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `trail`                                                          | *string*                                                         | :heavy_minus_sign:                                               | An optional trail to log the request                             |
| `operations`                                                     | [components.Operations](../../models/components/operations.md)[] | :heavy_check_mark:                                               | An array of operations to perform on the user                    |