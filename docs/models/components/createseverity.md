# CreateSeverity

Create a new severity

## Example Usage

```typescript
import { CreateSeverity } from "firehydrant/models/components";

let value: CreateSeverity = {
  slug: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `slug`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `description`                                                                    | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `position`                                                                       | *number*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `color`                                                                          | [components.CreateSeverityColor](../../models/components/createseveritycolor.md) | :heavy_minus_sign:                                                               | N/A                                                                              |