# UpdateStatuspageConnectionSeverity

## Example Usage

```typescript
import { UpdateStatuspageConnectionSeverity } from "firehydrant-typescript-sdk/models/components";

let value: UpdateStatuspageConnectionSeverity = {
  severitySlug: "<value>",
  remoteStatus: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `severitySlug`              | *string*                    | :heavy_check_mark:          | FireHydrant severity slug   |
| `remoteStatus`              | *string*                    | :heavy_check_mark:          | Statuspage.io severity name |