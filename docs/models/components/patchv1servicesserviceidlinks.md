# PatchV1ServicesServiceIdLinks

## Example Usage

```typescript
import { PatchV1ServicesServiceIdLinks } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1ServicesServiceIdLinks = {
  hrefUrl: "https://sorrowful-import.name/",
  name: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `hrefUrl`                                              | *string*                                               | :heavy_check_mark:                                     | URL                                                    |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | Short name used to display and identify this link      |
| `iconUrl`                                              | *string*                                               | :heavy_minus_sign:                                     | An optional URL to an icon representing this link      |
| `remove`                                               | *boolean*                                              | :heavy_minus_sign:                                     | If you are trying to remove a link, set this to 'true' |
| `id`                                                   | *string*                                               | :heavy_minus_sign:                                     | If updating an existing link, specify it's id.         |