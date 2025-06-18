# CreateTeamEscalationPolicyMedium

Settings for MEDIUM priority alerts

## Example Usage

```typescript
import { CreateTeamEscalationPolicyMedium } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamEscalationPolicyMedium = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `repetitions`                                                                                                                    | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Number of repetitions for MEDIUM priority alerts                                                                                 |
| `handoffStep`                                                                                                                    | [components.CreateTeamEscalationPolicyMediumHandoffStep](../../models/components/createteamescalationpolicymediumhandoffstep.md) | :heavy_minus_sign:                                                                                                               | Handoff step for MEDIUM priority alerts                                                                                          |