# PostV1CatalogsCatalogIdIngest

Accepts catalog data in the configured format and asyncronously processes the data to incorporate changes into service catalog.

## Example Usage

```typescript
import { PostV1CatalogsCatalogIdIngest } from "firehydrant-typescript-sdk/models/components";

let value: PostV1CatalogsCatalogIdIngest = {
  encoding: "application/x-yaml",
  data: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `encoding`                                                 | [components.Encoding](../../models/components/encoding.md) | :heavy_check_mark:                                         | Encoding for submitted data                                |
| `data`                                                     | *string*                                                   | :heavy_check_mark:                                         | Service data                                               |