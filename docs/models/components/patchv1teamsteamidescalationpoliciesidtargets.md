# PatchV1TeamsTeamIdEscalationPoliciesIdTargets

## Example Usage

```typescript
import { PatchV1TeamsTeamIdEscalationPoliciesIdTargets } from "firehydrant-typescript-sdk/models/components";

let value: PatchV1TeamsTeamIdEscalationPoliciesIdTargets = {
  type: "OnCallSchedule",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [components.PatchV1TeamsTeamIdEscalationPoliciesIdType](../../models/components/patchv1teamsteamidescalationpoliciesidtype.md) | :heavy_check_mark:                                                                                                             | The type of target that the step will notify.                                                                                  |
| `id`                                                                                                                           | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The ID of the target that the step will notify.                                                                                |