# PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep

A step that defines where an alert should be sent when the policy is exhausted and the alert is still unacknowledged.

## Example Usage

```typescript
import { PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1TeamsTeamIdEscalationPoliciesIdHandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                                               | [components.PatchV1TeamsTeamIdEscalationPoliciesIdTargetType](../../models/components/patchv1teamsteamidescalationpoliciesidtargettype.md) | :heavy_check_mark:                                                                                                                         | The type of target to which the policy will hand off.                                                                                      |
| `targetId`                                                                                                                                 | *string*                                                                                                                                   | :heavy_check_mark:                                                                                                                         | The ID of the target to which the policy will hand off.                                                                                    |