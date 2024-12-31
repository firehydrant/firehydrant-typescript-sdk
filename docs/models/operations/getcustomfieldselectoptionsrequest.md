# GetCustomFieldSelectOptionsRequest

## Example Usage

```typescript
import { GetCustomFieldSelectOptionsRequest } from "firehydrant-typescript-sdk/models/operations";

let value: GetCustomFieldSelectOptionsRequest = {
  fieldId: "<id>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `fieldId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `query`                                                      | *string*                                                     | :heavy_minus_sign:                                           | Text string of a query for filtering values.                 |
| `allVersions`                                                | *boolean*                                                    | :heavy_minus_sign:                                           | If true, return all versions of the custom field definition. |