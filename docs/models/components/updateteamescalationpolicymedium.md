# UpdateTeamEscalationPolicyMedium

Settings for MEDIUM priority alerts

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyMedium } from "firehydrant-typescript-sdk/models/components";

let value: UpdateTeamEscalationPolicyMedium = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `repetitions`                                                                                                                    | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Number of repetitions for MEDIUM priority alerts                                                                                 |
| `handoffStep`                                                                                                                    | [components.UpdateTeamEscalationPolicyMediumHandoffStep](../../models/components/updateteamescalationpolicymediumhandoffstep.md) | :heavy_minus_sign:                                                                                                               | Handoff step for MEDIUM priority alerts                                                                                          |