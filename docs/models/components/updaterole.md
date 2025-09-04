# UpdateRole

Update a role

## Example Usage

```typescript
import { UpdateRole } from "firehydrant-typescript-sdk/models/components";

let value: UpdateRole = {
  name: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the role.                                                                |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | A long-form description of the role's purpose.                                       |
| `permissions`                                                                        | [components.UpdateRolePermission](../../models/components/updaterolepermission.md)[] | :heavy_minus_sign:                                                                   | An array of permission slugs to assign to the role.                                  |