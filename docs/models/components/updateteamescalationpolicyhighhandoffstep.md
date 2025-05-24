# UpdateTeamEscalationPolicyHighHandoffStep

Handoff step for HIGH priority alerts

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyHighHandoffStep } from "firehydrant-typescript-sdk/models/components";

let value: UpdateTeamEscalationPolicyHighHandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `targetType`                                                                                                               | [components.UpdateTeamEscalationPolicyHighTargetType](../../models/components/updateteamescalationpolicyhightargettype.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `targetId`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |