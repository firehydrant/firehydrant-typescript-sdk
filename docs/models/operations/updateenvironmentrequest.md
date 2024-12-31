# UpdateEnvironmentRequest

## Example Usage

```typescript
import { UpdateEnvironmentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateEnvironmentRequest = {
  environmentId: "<id>",
  patchV1EnvironmentsEnvironmentId: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `environmentId`                                                                                            | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Environment UUID                                                                                           |
| `patchV1EnvironmentsEnvironmentId`                                                                         | [components.PatchV1EnvironmentsEnvironmentId](../../models/components/patchv1environmentsenvironmentid.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |