# PostV1ScimV2Users

SCIM endpoint to create and provision a new User. This endpoint will provision the User, which allows them to accept their account throught their IDP or via the Forgot Password flow.

## Example Usage

```typescript
import { PostV1ScimV2Users } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ScimV2Users = {
  userName: "Maximo.Schulist",
  name: {
    familyName: "<value>",
    givenName: "<value>",
  },
  emails: [
    {
      value: "<value>",
      primary: false,
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `userName`                                                                                                          | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | A service provider's unique identifier for the user                                                                 |
| `name`                                                                                                              | [components.Name](../../models/components/name.md)                                                                  | :heavy_check_mark:                                                                                                  | The components of the user's name                                                                                   |
| `emails`                                                                                                            | [components.Emails](../../models/components/emails.md)[]                                                            | :heavy_check_mark:                                                                                                  | Email addresses for the User                                                                                        |
| `roles`                                                                                                             | *string*[]                                                                                                          | :heavy_minus_sign:                                                                                                  | Roles for the User. Options are owner, member or collaborator                                                       |
| `password`                                                                                                          | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | This attribute is intended to be used as a means to set, replace, or compare (i.e., filter for equality) a password |