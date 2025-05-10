# GetRunbookActionFieldOptionsRequest

## Example Usage

```typescript
import { GetRunbookActionFieldOptionsRequest } from "firehydrant/models/operations";

let value: GetRunbookActionFieldOptionsRequest = {
  integrationSlug: "<value>",
  actionSlug: "<value>",
  field: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `integrationSlug`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `actionSlug`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `field`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `query`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | Text string of a query for filtering values.                                                 |
| `scope`                                                                                      | *string*                                                                                     | :heavy_minus_sign:                                                                           | Generic params used to add specificity (eg an id of some kind) to the select options request |
| `perPage`                                                                                    | *number*                                                                                     | :heavy_minus_sign:                                                                           | Maximum number of items to return.                                                           |