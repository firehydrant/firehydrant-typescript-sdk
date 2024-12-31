# PutV1ScimV2GroupsId

SCIM endpoint to update a Team (Colloquial for Group in the SCIM protocol). Any members defined in the payload will be assigned to the team with no defined role, any missing members will be removed from the team.

## Example Usage

```typescript
import { PutV1ScimV2GroupsId } from "firehydrant-typescript-sdk/models/components";

let value: PutV1ScimV2GroupsId = {
  displayName: "Laron44",
  members: [
    {
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the team being updated                                                               |
| `members`                                                                                        | [components.PutV1ScimV2GroupsIdMembers](../../models/components/putv1scimv2groupsidmembers.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |