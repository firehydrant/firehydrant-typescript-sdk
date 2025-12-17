# TicketingCustomFieldsFieldValue

## Example Usage

```typescript
import { TicketingCustomFieldsFieldValue } from "firehydrant-typescript-sdk/models/components";

let value: TicketingCustomFieldsFieldValue = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The name of the custom field definition                                              |
| `valueType`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | The type of the custom field definition                                              |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The display name of the custom field definition                                      |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The description of the custom field definition                                       |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The slug of the custom field definition                                              |
| `fieldId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The field id of the custom field definition                                          |
| `fieldType`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | The field type of the custom field definition                                        |
| `permissibleValues`                                                                  | *string*[]                                                                           | :heavy_minus_sign:                                                                   | An array of strings representing selections for single_select or multi_select fields |
| `valueArray`                                                                         | *string*[]                                                                           | :heavy_minus_sign:                                                                   | The value of the custom field as an array (for select fields)                        |
| `valueString`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The value of the custom field as a string (for string and datetime types)            |
| `value`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | The raw value of the custom field                                                    |