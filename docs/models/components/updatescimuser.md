# UpdateScimUser

PUT SCIM endpoint to update a User. This endpoint is used to replace a resource's attributes.

## Example Usage

```typescript
import { UpdateScimUser } from "firehydrant-typescript-sdk/models/components";

let value: UpdateScimUser = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `userName`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | A service provider's unique identifier for the user                                                                             |
| `name`                                                                                                                          | [components.UpdateScimUserName](../../models/components/updatescimusername.md)                                                  | :heavy_minus_sign:                                                                                                              | The components of the user's name                                                                                               |
| `emails`                                                                                                                        | [components.UpdateScimUserEmail](../../models/components/updatescimuseremail.md)[]                                              | :heavy_minus_sign:                                                                                                              | Email addresses for the User                                                                                                    |
| `roles`                                                                                                                         | [components.UpdateScimUserRoles](../../models/components/updatescimuserroles.md)                                                | :heavy_minus_sign:                                                                                                              | Roles for the User. Options are owner, member, collaborator, or viewer. Roles may be specified as strings or SCIM role objects. |
| `active`                                                                                                                        | *boolean*                                                                                                                       | :heavy_minus_sign:                                                                                                              | Boolean that represents whether user is active                                                                                  |