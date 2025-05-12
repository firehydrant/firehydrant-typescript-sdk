# ListInfrastructuresRequest

## Example Usage

```typescript
import { ListInfrastructuresRequest } from "firehydrant/models/operations";

let value: ListInfrastructuresRequest = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `query`                                                                                            | *string*                                                                                           | :heavy_minus_sign:                                                                                 | A query to search infrastructures by their name                                                    |
| `omitFor`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Omit for any infrastructure that is added to an incident using the format "incident/{incident_id}" |
| `type`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Restrict infrastructure search to given type.                                                      |
| `page`                                                                                             | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `perPage`                                                                                          | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |