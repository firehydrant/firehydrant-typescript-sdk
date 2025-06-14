# CreateServiceLink

## Example Usage

```typescript
import { CreateServiceLink } from "firehydrant-typescript-sdk/models/components";

let value: CreateServiceLink = {
  name: "<value>",
  hrefUrl: "https://usable-premeditation.net/",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `name`                                            | *string*                                          | :heavy_check_mark:                                | Short name used to display and identify this link |
| `hrefUrl`                                         | *string*                                          | :heavy_check_mark:                                | URL                                               |
| `iconUrl`                                         | *string*                                          | :heavy_minus_sign:                                | An optional URL to an icon representing this link |