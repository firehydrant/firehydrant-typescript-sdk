# IngestCatalogDataRequest

## Example Usage

```typescript
import { IngestCatalogDataRequest } from "firehydrant/models/operations";

let value: IngestCatalogDataRequest = {
  catalogId: "<id>",
  ingestCatalogData: {
    encoding: "text/yaml",
    data: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `catalogId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ingestCatalogData`                                                          | [components.IngestCatalogData](../../models/components/ingestcatalogdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |