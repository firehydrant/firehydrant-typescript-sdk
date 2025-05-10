# UpdateFunctionalityService

## Example Usage

```typescript
import { UpdateFunctionalityService } from "firehydrant/models/components";

let value: UpdateFunctionalityService = {
  id: "<id>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | ID of a service                                                            |
| `remove`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Set to true if you want to remove the given service from the functionality |