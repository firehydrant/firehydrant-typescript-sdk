# UpdateTeamEscalationPolicyHigh

Settings for HIGH priority alerts

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyHigh } from "firehydrant/models/components";

let value: UpdateTeamEscalationPolicyHigh = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `repetitions`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Number of repetitions for HIGH priority alerts                                                                               |
| `handoffStep`                                                                                                                | [components.UpdateTeamEscalationPolicyHighHandoffStep](../../models/components/updateteamescalationpolicyhighhandoffstep.md) | :heavy_minus_sign:                                                                                                           | Handoff step for HIGH priority alerts                                                                                        |