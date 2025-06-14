# CreateTeamEscalationPolicyLow

Settings for LOW priority alerts

## Example Usage

```typescript
import { CreateTeamEscalationPolicyLow } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamEscalationPolicyLow = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `repetitions`                                                                                                              | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of repetitions for LOW priority alerts                                                                              |
| `handoffStep`                                                                                                              | [components.CreateTeamEscalationPolicyLowHandoffStep](../../models/components/createteamescalationpolicylowhandoffstep.md) | :heavy_minus_sign:                                                                                                         | Handoff step for LOW priority alerts                                                                                       |