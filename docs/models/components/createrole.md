# CreateRole

Create a new role

## Example Usage

```typescript
import { CreateRole } from "firehydrant-typescript-sdk/models/components";

let value: CreateRole = {
  name: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | The name of the role.                                                                   |
| `slug`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | A unique identifier for the role. If not provided, one will be generated from the name. |
| `description`                                                                           | *string*                                                                                | :heavy_minus_sign:                                                                      | A long-form description of the role's purpose.                                          |
| `permissions`                                                                           | [components.CreateRolePermission](../../models/components/createrolepermission.md)[]    | :heavy_minus_sign:                                                                      | An array of permission slugs to assign to the role.                                     |