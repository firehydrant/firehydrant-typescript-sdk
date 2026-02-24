# UpdateServiceEnvironment

## Example Usage

```typescript
import { UpdateServiceEnvironment } from "firehydrant-typescript-sdk/models/components";

let value: UpdateServiceEnvironment = {
  id: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of an environment                                                     |
| `remove`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Set to true if you want to remove the given environment from the service |