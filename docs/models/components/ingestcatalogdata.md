# IngestCatalogData

Accepts catalog data in the configured format and asyncronously processes the data to incorporate changes into service catalog.

## Example Usage

```typescript
import { IngestCatalogData } from "firehydrant/models/components";

let value: IngestCatalogData = {
  encoding: "text/yaml",
  data: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `encoding`                                                 | [components.Encoding](../../models/components/encoding.md) | :heavy_check_mark:                                         | Encoding for submitted data                                |
| `data`                                                     | *string*                                                   | :heavy_check_mark:                                         | Service data                                               |