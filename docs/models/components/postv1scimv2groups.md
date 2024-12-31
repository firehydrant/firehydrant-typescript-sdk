# PostV1ScimV2Groups

SCIM endpoint to create a new Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role.

## Example Usage

```typescript
import { PostV1ScimV2Groups } from "firehydrant-typescript-sdk/models/components";

let value: PostV1ScimV2Groups = {
  displayName: "Mariano_Rice",
  members: [
    {
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `displayName`                                              | *string*                                                   | :heavy_check_mark:                                         | The name of the team being created                         |
| `members`                                                  | [components.Members](../../models/components/members.md)[] | :heavy_check_mark:                                         | N/A                                                        |