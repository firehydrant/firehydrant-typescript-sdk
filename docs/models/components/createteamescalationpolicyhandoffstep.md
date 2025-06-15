# CreateTeamEscalationPolicyHandoffStep

A step that defines where an alert should be sent when the policy is exhausted and the alert is still unacknowledged.

## Example Usage

```typescript
import { CreateTeamEscalationPolicyHandoffStep } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamEscalationPolicyHandoffStep = {
  targetType: "Team",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                       | [components.CreateTeamEscalationPolicyTargetType](../../models/components/createteamescalationpolicytargettype.md) | :heavy_check_mark:                                                                                                 | The type of target to which the policy will hand off.                                                              |
| `targetId`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The ID of the target to which the policy will hand off.                                                            |