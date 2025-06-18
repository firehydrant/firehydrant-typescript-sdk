# FieldMappingMappableFieldEntity

FieldMapping_MappableFieldEntity model

## Example Usage

```typescript
import { FieldMappingMappableFieldEntity } from "firehydrant-typescript-sdk/models/components";

let value: FieldMappingMappableFieldEntity = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `value`                                           | *string*                                          | :heavy_minus_sign:                                | The ID of the field                               |
| `label`                                           | *string*                                          | :heavy_minus_sign:                                | The human-readable name of the field              |
| `type`                                            | *string*                                          | :heavy_minus_sign:                                | The allowed type of the field                     |
| `allowedValues`                                   | *string*[]                                        | :heavy_minus_sign:                                | The allowed values of the field                   |
| `required`                                        | *string*                                          | :heavy_minus_sign:                                | If the field is required to be mapped             |
| `helpText`                                        | *string*                                          | :heavy_minus_sign:                                | Short, inline documentation for the present field |