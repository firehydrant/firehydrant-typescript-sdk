# SignalsAPIRuleEntityPaginated

Signals_API_RuleEntityPaginated model

## Example Usage

```typescript
import { SignalsAPIRuleEntityPaginated } from "firehydrant-typescript-sdk/models/components";

let value: SignalsAPIRuleEntityPaginated = {
  data: [
    {
      deduplicationExpiry: "PT1H",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [components.SignalsAPIRuleEntity](../../models/components/signalsapiruleentity.md)[]       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `pagination`                                                                               | [components.NullablePaginationEntity](../../models/components/nullablepaginationentity.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |