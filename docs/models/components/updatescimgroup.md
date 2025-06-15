# UpdateScimGroup

SCIM endpoint to update a Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role, any missing members will be removed from the team.

## Example Usage

```typescript
import { UpdateScimGroup } from "firehydrant-typescript-sdk/models/components";

let value: UpdateScimGroup = {
  displayName: "Eldon.Parisian45",
  members: [
    {
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `displayName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The name of the team being updated                                                     |
| `members`                                                                              | [components.UpdateScimGroupMember](../../models/components/updatescimgroupmember.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |