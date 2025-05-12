# UpdateTeamEscalationPolicyTarget

## Example Usage

```typescript
import { UpdateTeamEscalationPolicyTarget } from "firehydrant/models/components";

let value: UpdateTeamEscalationPolicyTarget = {
  type: "User",
  id: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.UpdateTeamEscalationPolicyType](../../models/components/updateteamescalationpolicytype.md) | :heavy_check_mark:                                                                                     | The type of target that the step will notify.                                                          |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the target that the step will notify.                                                        |