# PatchScimUser

PATCH SCIM endpoint to update a User. This endpoint is used to update a resource's attributes.

## Example Usage

```typescript
import { PatchScimUser } from "firehydrant-typescript-sdk/models/components";

let value: PatchScimUser = {
  operations: [
    {
      op: "<value>",
      path: "/usr/obj",
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `trail`                                                        | *string*                                                       | :heavy_minus_sign:                                             | An optional trail to log the request                           |
| `operations`                                                   | [components.Operation](../../models/components/operation.md)[] | :heavy_check_mark:                                             | An array of operations to perform on the user                  |