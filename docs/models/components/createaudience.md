# CreateAudience

Create a new audience

## Example Usage

```typescript
import { CreateAudience } from "firehydrant-typescript-sdk/models/components";

let value: CreateAudience = {
  name: "<value>",
  description: "gadzooks noisily monthly dividend",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Name of the audience (max 255 characters)                  |
| `description`                                              | *string*                                                   | :heavy_check_mark:                                         | Description of the audience (max 4000 characters)          |
| `default`                                                  | *boolean*                                                  | :heavy_minus_sign:                                         | Whether this is the default audience                       |
| `details`                                                  | [components.Detail](../../models/components/detail.md)[]   | :heavy_minus_sign:                                         | N/A                                                        |
| `settings`                                                 | [components.Settings](../../models/components/settings.md) | :heavy_minus_sign:                                         | audience settings for initial audience creation            |