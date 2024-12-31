# UpdateScimGroupRequest

## Example Usage

```typescript
import { UpdateScimGroupRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateScimGroupRequest = {
  id: "<id>",
  putV1ScimV2GroupsId: {
    displayName: "Salvador.Larson",
    members: [
      {
        value: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `putV1ScimV2GroupsId`                                                            | [components.PutV1ScimV2GroupsId](../../models/components/putv1scimv2groupsid.md) | :heavy_check_mark:                                                               | N/A                                                                              |