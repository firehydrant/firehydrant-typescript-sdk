# ListAuthedProvidersRequest

## Example Usage

```typescript
import { ListAuthedProvidersRequest } from "firehydrant-typescript-sdk/models/operations";

let value: ListAuthedProvidersRequest = {
  integrationSlug: "<value>",
  connectionId: "<id>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `integrationSlug`       | *string*                | :heavy_check_mark:      | Integration slug        |
| `connectionId`          | *string*                | :heavy_check_mark:      | Connection ID           |
| `query`                 | *string*                | :heavy_minus_sign:      | Query for users by name |