# CreateScimUser

SCIM endpoint to create and provision a new User. This endpoint will provision the User, which allows them to accept their account throught their IDP or via the Forgot Password flow.

## Example Usage

```typescript
import { CreateScimUser } from "firehydrant-typescript-sdk/models/components";

let value: CreateScimUser = {
  userName: "Titus20",
  name: {
    familyName: "<value>",
    givenName: "<value>",
  },
  emails: [],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `userName`                                                                                                                      | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | A service provider's unique identifier for the user                                                                             |
| `name`                                                                                                                          | [components.CreateScimUserName](../../models/components/createscimusername.md)                                                  | :heavy_check_mark:                                                                                                              | The components of the user's name                                                                                               |
| `emails`                                                                                                                        | [components.CreateScimUserEmail](../../models/components/createscimuseremail.md)[]                                              | :heavy_check_mark:                                                                                                              | Email addresses for the User                                                                                                    |
| `roles`                                                                                                                         | [components.CreateScimUserRoles](../../models/components/createscimuserroles.md)                                                | :heavy_minus_sign:                                                                                                              | Roles for the User. Options are owner, member, collaborator, or viewer. Roles may be specified as strings or SCIM role objects. |
| `password`                                                                                                                      | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | This attribute is intended to be used as a means to set, replace, or compare (i.e., filter for equality) a password             |
| `phoneNumbers`                                                                                                                  | [components.CreateScimUserPhoneNumber](../../models/components/createscimuserphonenumber.md)[]                                  | :heavy_minus_sign:                                                                                                              | Phone numbers for the User                                                                                                      |