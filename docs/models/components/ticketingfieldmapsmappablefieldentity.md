# TicketingFieldMapsMappableFieldEntity

Ticketing_FieldMaps_MappableFieldEntity model

## Example Usage

```typescript
import { TicketingFieldMapsMappableFieldEntity } from "firehydrant-typescript-sdk/models/components";

let value: TicketingFieldMapsMappableFieldEntity = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `value`                               | *string*                              | :heavy_minus_sign:                    | The ID of the field                   |
| `label`                               | *string*                              | :heavy_minus_sign:                    | The human-readable name of the field  |
| `type`                                | *string*                              | :heavy_minus_sign:                    | The allowed type of the field         |
| `allowedValues`                       | *string*[]                            | :heavy_minus_sign:                    | The allowed values of the field       |
| `required`                            | *string*                              | :heavy_minus_sign:                    | If the field is required to be mapped |