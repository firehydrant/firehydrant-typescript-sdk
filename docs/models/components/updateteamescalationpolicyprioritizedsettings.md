# UpdateTeamEscalationPolicyPrioritizedSettings

Priority-specific settings for dynamic escalation policies

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyPrioritizedSettings } from "firehydrant/models/components";

let value: UpdateTeamEscalationPolicyPrioritizedSettings = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `high`                                                                                                     | [components.UpdateTeamEscalationPolicyHigh](../../models/components/updateteamescalationpolicyhigh.md)     | :heavy_minus_sign:                                                                                         | Settings for HIGH priority alerts                                                                          |
| `medium`                                                                                                   | [components.UpdateTeamEscalationPolicyMedium](../../models/components/updateteamescalationpolicymedium.md) | :heavy_minus_sign:                                                                                         | Settings for MEDIUM priority alerts                                                                        |
| `low`                                                                                                      | [components.UpdateTeamEscalationPolicyLow](../../models/components/updateteamescalationpolicylow.md)       | :heavy_minus_sign:                                                                                         | Settings for LOW priority alerts                                                                           |