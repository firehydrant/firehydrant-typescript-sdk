# PutV1ScimV2UsersId

PUT SCIM endpoint to update a User. This endpoint is used to replace a resource's attributes.

## Example Usage

```typescript
import { PutV1ScimV2UsersId } from "firehydrant-typescript-sdk/models/components";

let value: PutV1ScimV2UsersId = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `userName`                                                                                   | *string*                                                                                     | :heavy_minus_sign:                                                                           | A service provider's unique identifier for the user                                          |
| `name`                                                                                       | [components.PutV1ScimV2UsersIdName](../../models/components/putv1scimv2usersidname.md)       | :heavy_minus_sign:                                                                           | The components of the user's name                                                            |
| `emails`                                                                                     | [components.PutV1ScimV2UsersIdEmails](../../models/components/putv1scimv2usersidemails.md)[] | :heavy_minus_sign:                                                                           | Email addresses for the User                                                                 |
| `roles`                                                                                      | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | Roles for the User                                                                           |
| `active`                                                                                     | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Boolean that represents whether user is active                                               |