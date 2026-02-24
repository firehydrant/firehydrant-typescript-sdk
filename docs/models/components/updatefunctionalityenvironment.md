# UpdateFunctionalityEnvironment

## Example Usage

```typescript
import { UpdateFunctionalityEnvironment } from "firehydrant-typescript-sdk/models/components";

let value: UpdateFunctionalityEnvironment = {
  id: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | ID of an environment                                                           |
| `remove`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Set to true if you want to remove the given environment from the functionality |