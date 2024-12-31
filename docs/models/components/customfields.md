# CustomFields

## Example Usage

```typescript
import { CustomFields } from "firehydrant-typescript-sdk/models/components";

let value: CustomFields = {
  fieldId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `fieldId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the custom field you wish to set.                                                  |
| `valueString`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The value you wish to set on the custom field if the type of the field accepts string values |
| `valueArray`                                                                                 | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The value you wish to set on the custom field if the type of the field accepts array values  |