# UpdateTeamEscalationPolicyLowHandoffStep

Handoff step for LOW priority alerts

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyLowHandoffStep } from "firehydrant/models/components";

let value: UpdateTeamEscalationPolicyLowHandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                             | [components.UpdateTeamEscalationPolicyLowTargetType](../../models/components/updateteamescalationpolicylowtargettype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `targetId`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |