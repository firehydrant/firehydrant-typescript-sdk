# Targets

## Example Usage

```typescript
import { Targets } from "firehydrant-typescript-sdk/models/components";

let value: Targets = {
  type: "EntireTeam",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | [components.PostV1TeamsTeamIdEscalationPoliciesType](../../models/components/postv1teamsteamidescalationpoliciestype.md) | :heavy_check_mark:                                                                                                       | The type of target that the step will notify.                                                                            |
| `id`                                                                                                                     | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the target that the step will notify.                                                                          |