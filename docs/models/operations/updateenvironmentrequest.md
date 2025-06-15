# UpdateEnvironmentRequest

## Example Usage

```typescript
import { UpdateEnvironmentRequest } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateEnvironmentRequest = {
  environmentId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `environmentId`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | Environment UUID                                                             |
| `updateEnvironment`                                                          | [components.UpdateEnvironment](../../models/components/updateenvironment.md) | :heavy_check_mark:                                                           | N/A                                                                          |