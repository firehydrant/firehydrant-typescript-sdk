# UpdateEnvironmentRequest

## Example Usage

```typescript
import { UpdateEnvironmentRequest } from "firehydrant/models/operations";

let value: UpdateEnvironmentRequest = {
  environmentId: "<id>",
  updateEnvironment: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `environmentId`                                                              | *string*                                                                     | :heavy_check_mark:                                                           | Environment UUID                                                             |
| `updateEnvironment`                                                          | [components.UpdateEnvironment](../../models/components/updateenvironment.md) | :heavy_check_mark:                                                           | N/A                                                                          |