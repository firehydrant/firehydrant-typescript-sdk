# UpdateChangeIdentityRequest

## Example Usage

```typescript
import { UpdateChangeIdentityRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateChangeIdentityRequest = {
  identityId: "<id>",
  changeId: "<id>",
  patchV1ChangesChangeIdIdentitiesIdentityId: {
    type: "<value>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `identityId`                                                                                                                   | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `changeId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `patchV1ChangesChangeIdIdentitiesIdentityId`                                                                                   | [components.PatchV1ChangesChangeIdIdentitiesIdentityId](../../models/components/patchv1changeschangeididentitiesidentityid.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |