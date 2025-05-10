# CreateTeamEscalationPolicyPrioritizedSettings

Priority-specific settings for dynamic escalation policies

## Example Usage

```typescript
import { CreateTeamEscalationPolicyPrioritizedSettings } from "firehydrant/models/components";

let value: CreateTeamEscalationPolicyPrioritizedSettings = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `high`                                                                                                     | [components.CreateTeamEscalationPolicyHigh](../../models/components/createteamescalationpolicyhigh.md)     | :heavy_minus_sign:                                                                                         | Settings for HIGH priority alerts                                                                          |
| `medium`                                                                                                   | [components.CreateTeamEscalationPolicyMedium](../../models/components/createteamescalationpolicymedium.md) | :heavy_minus_sign:                                                                                         | Settings for MEDIUM priority alerts                                                                        |
| `low`                                                                                                      | [components.CreateTeamEscalationPolicyLow](../../models/components/createteamescalationpolicylow.md)       | :heavy_minus_sign:                                                                                         | Settings for LOW priority alerts                                                                           |