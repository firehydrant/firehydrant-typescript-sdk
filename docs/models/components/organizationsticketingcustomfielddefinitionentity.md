# OrganizationsTicketingCustomFieldDefinitionEntity

Organizations_TicketingCustomFieldDefinitionEntity model

## Example Usage

```typescript
import { OrganizationsTicketingCustomFieldDefinitionEntity } from "firehydrant-typescript-sdk/models/components";

let value: OrganizationsTicketingCustomFieldDefinitionEntity = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `displayName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The display name of the custom field                                                 |
| `fieldId`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The field id of the custom field                                                     |
| `fieldType`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | The type of the custom field (datetime, string, single_select, or multi_select)      |
| `required`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Whether this field is required for all follow-up tickets                             |
| `slug`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | The slug of the custom field                                                         |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The description of the custom field                                                  |
| `permissibleValues`                                                                  | *string*[]                                                                           | :heavy_minus_sign:                                                                   | An array of strings representing selections for single_select or multi_select fields |