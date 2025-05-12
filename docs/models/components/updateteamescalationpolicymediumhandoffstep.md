# UpdateTeamEscalationPolicyMediumHandoffStep

Handoff step for MEDIUM priority alerts

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyMediumHandoffStep } from "firehydrant/models/components";

let value: UpdateTeamEscalationPolicyMediumHandoffStep = {
  targetType: "EscalationPolicy",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                                   | [components.UpdateTeamEscalationPolicyMediumTargetType](../../models/components/updateteamescalationpolicymediumtargettype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `targetId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |