# CreateTeamEscalationPolicyMediumHandoffStep

Handoff step for MEDIUM priority alerts

## Example Usage

```typescript
import { CreateTeamEscalationPolicyMediumHandoffStep } from "firehydrant/models/components";

let value: CreateTeamEscalationPolicyMediumHandoffStep = {
  targetType: "Team",
  targetId: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `targetType`                                                                                                                   | [components.CreateTeamEscalationPolicyMediumTargetType](../../models/components/createteamescalationpolicymediumtargettype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `targetId`                                                                                                                     | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |