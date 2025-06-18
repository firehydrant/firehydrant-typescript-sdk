# UpdateTeamEscalationPolicyLow

Settings for LOW priority alerts

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyLow } from "firehydrant-typescript-sdk/models/components";

let value: UpdateTeamEscalationPolicyLow = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `repetitions`                                                                                                              | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of repetitions for LOW priority alerts                                                                              |
| `handoffStep`                                                                                                              | [components.UpdateTeamEscalationPolicyLowHandoffStep](../../models/components/updateteamescalationpolicylowhandoffstep.md) | :heavy_minus_sign:                                                                                                         | Handoff step for LOW priority alerts                                                                                       |