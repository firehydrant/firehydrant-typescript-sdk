# UpdateAiPreferencesRequestBody

## Example Usage

```typescript
import { UpdateAiPreferencesRequestBody } from "firehydrant-typescript-sdk/models/operations";

let value: UpdateAiPreferencesRequestBody = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `ai`                                      | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable AI features             |
| `summaries`                               | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable incident summaries      |
| `description`                             | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable incident descriptions   |
| `impact`                                  | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable incident impact         |
| `updates`                                 | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable incident updates        |
| `retros`                                  | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable incident retrospectives |
| `followups`                               | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable incident followups      |
| `similarIncidents`                        | *boolean*                                 | :heavy_minus_sign:                        | Whether to enable similar incidents       |