# CreateIncidentRetrospectiveFieldRequestBody

## Example Usage

```typescript
import { CreateIncidentRetrospectiveFieldRequestBody } from "firehydrant-typescript-sdk/models/operations";

let value: CreateIncidentRetrospectiveFieldRequestBody = {
  label: "<value>",
  type: "single_select",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `label`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [operations.CreateIncidentRetrospectiveFieldType](../../models/operations/createincidentretrospectivefieldtype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `helpText`                                                                                                         | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `permissibleValues`                                                                                                | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `isRequired`                                                                                                       | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `schema`                                                                                                           | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |