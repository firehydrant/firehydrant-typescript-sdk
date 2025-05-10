# CustomField

## Example Usage

```typescript
import { CustomField } from "firehydrant/models/components";

let value: CustomField = {
  fieldId: "<id>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `fieldId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The ID of the custom field you wish to set.                                                  |
| `valueString`                                                                                | *string*                                                                                     | :heavy_minus_sign:                                                                           | The value you wish to set on the custom field if the type of the field accepts string values |
| `valueArray`                                                                                 | *string*[]                                                                                   | :heavy_minus_sign:                                                                           | The value you wish to set on the custom field if the type of the field accepts array values  |