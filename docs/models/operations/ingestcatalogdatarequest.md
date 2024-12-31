# IngestCatalogDataRequest

## Example Usage

```typescript
import { IngestCatalogDataRequest } from "firehydrant-typescript-sdk/models/operations";

let value: IngestCatalogDataRequest = {
  catalogId: "<id>",
  postV1CatalogsCatalogIdIngest: {
    encoding: "application/json",
    data: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `catalogId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `postV1CatalogsCatalogIdIngest`                                                                      | [components.PostV1CatalogsCatalogIdIngest](../../models/components/postv1catalogscatalogidingest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |