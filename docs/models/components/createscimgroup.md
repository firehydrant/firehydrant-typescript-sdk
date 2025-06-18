# CreateScimGroup

SCIM endpoint to create a new Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role.

## Example Usage

```typescript
import { CreateScimGroup } from "firehydrant-typescript-sdk/models/components";

let value: CreateScimGroup = {
  displayName: "Pietro_Dare",
  members: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `displayName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The name of the team being created                                                     |
| `members`                                                                              | [components.CreateScimGroupMember](../../models/components/createscimgroupmember.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |