# CreateTeamEscalationPolicyLowHandoffStep

Handoff step for LOW priority alerts

## Example Usage

```typescript
import { CreateTeamEscalationPolicyLowHandoffStep } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamEscalationPolicyLowHandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                             | [components.CreateTeamEscalationPolicyLowTargetType](../../models/components/createteamescalationpolicylowtargettype.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `targetId`                                                                                                               | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |