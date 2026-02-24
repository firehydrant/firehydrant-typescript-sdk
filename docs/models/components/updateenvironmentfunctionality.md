# UpdateEnvironmentFunctionality

## Example Usage

```typescript
import { UpdateEnvironmentFunctionality } from "firehydrant-typescript-sdk/models/components";

let value: UpdateEnvironmentFunctionality = {
  id: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | ID of a functionality                                                          |
| `remove`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Set to true if you want to remove the given functionality from the environment |