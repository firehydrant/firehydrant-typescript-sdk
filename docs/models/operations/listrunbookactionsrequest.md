# ListRunbookActionsRequest

## Example Usage

```typescript
import { ListRunbookActionsRequest } from "firehydrant/models/operations";

let value: ListRunbookActionsRequest = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `page`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `perPage`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | List actions supporting this specific Runbook type                                            |
| `lite`                                                                                        | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Boolean to determine whether to return a slimified version of the action object's integration |