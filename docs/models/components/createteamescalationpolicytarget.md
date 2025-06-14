# CreateTeamEscalationPolicyTarget

## Example Usage

```typescript
import { CreateTeamEscalationPolicyTarget } from "firehydrant-typescript-sdk/models/components";

let value: CreateTeamEscalationPolicyTarget = {
  type: "SlackChannel",
  id: "<id>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [components.CreateTeamEscalationPolicyType](../../models/components/createteamescalationpolicytype.md) | :heavy_check_mark:                                                                                     | The type of target that the step will notify.                                                          |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the target that the step will notify.                                                        |