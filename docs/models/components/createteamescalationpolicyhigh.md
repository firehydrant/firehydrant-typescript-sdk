# CreateTeamEscalationPolicyHigh

Settings for HIGH priority alerts

## Example Usage

```typescript
import { CreateTeamEscalationPolicyHigh } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamEscalationPolicyHigh = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `repetitions`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Number of repetitions for HIGH priority alerts                                                                               |
| `handoffStep`                                                                                                                | [components.CreateTeamEscalationPolicyHighHandoffStep](../../models/components/createteamescalationpolicyhighhandoffstep.md) | :heavy_minus_sign:                                                                                                           | Handoff step for HIGH priority alerts                                                                                        |