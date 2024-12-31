# CreateChangeIdentityRequest

## Example Usage

```typescript
import { CreateChangeIdentityRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateChangeIdentityRequest = {
  changeId: "<id>",
  postV1ChangesChangeIdIdentities: {
    type: "<value>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `changeId`                                                                                               | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `postV1ChangesChangeIdIdentities`                                                                        | [components.PostV1ChangesChangeIdIdentities](../../models/components/postv1changeschangeididentities.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |