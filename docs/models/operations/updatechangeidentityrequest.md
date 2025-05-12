# UpdateChangeIdentityRequest

## Example Usage

```typescript
import { UpdateChangeIdentityRequest } from "firehydrant/models/operations";

let value: UpdateChangeIdentityRequest = {
  identityId: "<id>",
  changeId: "<id>",
  updateChangeIdentity: {
    type: "<value>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `identityId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `changeId`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updateChangeIdentity`                                                             | [components.UpdateChangeIdentity](../../models/components/updatechangeidentity.md) | :heavy_check_mark:                                                                 | N/A                                                                                |