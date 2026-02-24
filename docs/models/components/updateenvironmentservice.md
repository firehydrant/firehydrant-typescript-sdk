# UpdateEnvironmentService

## Example Usage

```typescript
import { UpdateEnvironmentService } from "firehydrant-typescript-sdk/models/components";

let value: UpdateEnvironmentService = {
  id: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | ID of a service                                                          |
| `remove`                                                                 | *boolean*                                                                | :heavy_minus_sign:                                                       | Set to true if you want to remove the given service from the environment |