# SearchConfluenceSpacesRequest

## Example Usage

```typescript
import { SearchConfluenceSpacesRequest } from "firehydrant-typescript-sdk/models/operations";

let value: SearchConfluenceSpacesRequest = {
  id: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *string*               | :heavy_check_mark:     | N/A                    |
| `keyword`              | *string*               | :heavy_minus_sign:     | Space Key (Deprecated) |
| `query`                | *string*               | :heavy_minus_sign:     | Space name query       |
| `page`                 | *number*               | :heavy_minus_sign:     | N/A                    |
| `perPage`              | *number*               | :heavy_minus_sign:     | N/A                    |