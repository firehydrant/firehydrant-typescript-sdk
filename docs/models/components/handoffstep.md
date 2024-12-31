# HandoffStep

A step that defines where an alert should be sent when the policy is exhausted and the alert is still unacknowledged.

## Example Usage

```typescript
import { HandoffStep } from "firehydrant-typescript-sdk/models/components";

let value: HandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                                         | [components.PostV1TeamsTeamIdEscalationPoliciesTargetType](../../models/components/postv1teamsteamidescalationpoliciestargettype.md) | :heavy_check_mark:                                                                                                                   | The type of target to which the policy will hand off.                                                                                |
| `targetId`                                                                                                                           | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the target to which the policy will hand off.                                                                              |