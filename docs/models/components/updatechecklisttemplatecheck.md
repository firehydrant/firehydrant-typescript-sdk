# UpdateChecklistTemplateCheck

## Example Usage

```typescript
import { UpdateChecklistTemplateCheck } from "firehydrant-typescript-sdk/models/components";

let value: UpdateChecklistTemplateCheck = {
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_minus_sign:                                           | Specify the check ID when updating an already existing check |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | The description of the check                                 |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | The name of the check                                        |