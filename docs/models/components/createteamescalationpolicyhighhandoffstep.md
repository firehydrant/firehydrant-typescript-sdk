# CreateTeamEscalationPolicyHighHandoffStep

Handoff step for HIGH priority alerts

## Example Usage

```typescript
import { CreateTeamEscalationPolicyHighHandoffStep } from "firehydrant/models/components";

let value: CreateTeamEscalationPolicyHighHandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `targetType`                                                                                                               | [components.CreateTeamEscalationPolicyHighTargetType](../../models/components/createteamescalationpolicyhightargettype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `targetId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |