# UpdateSeverity

Update a specific severity

## Example Usage

```typescript
import { UpdateSeverity } from "firehydrant-typescript-sdk/models/components";

let value: UpdateSeverity = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `slug`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `description`                                                                       | *string*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `position`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `color`                                                                             | [components.UpdateSeverityColor](../../models/components/updateseveritycolor.md)    | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `allowedRoleIds`                                                                    | *string*[]                                                                          | :heavy_minus_sign:                                                                  | IDs of roles allowed to use this severity. Empty array means all roles are allowed. |