# PostV1TeamsTeamIdEscalationPolicies

Create a Signals escalation policy for a team.

## Example Usage

```typescript
import { PostV1TeamsTeamIdEscalationPolicies } from "firehydrant-typescript-sdk/models/components";

let value: PostV1TeamsTeamIdEscalationPolicies = {
  name: "<value>",
  steps: [
    {
      targets: [
        {
          type: "OnCallSchedule",
          id: "<id>",
        },
      ],
      timeout: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The escalation policy's name.                                                                                                |
| `description`                                                                                                                | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A detailed description of the escalation policy.                                                                             |
| `repetitions`                                                                                                                | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | The number of times that the escalation policy should repeat before an alert is dropped.                                     |
| `default`                                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Whether this escalation policy should be the default for the team.                                                           |
| `steps`                                                                                                                      | [components.PostV1TeamsTeamIdEscalationPoliciesSteps](../../models/components/postv1teamsteamidescalationpoliciessteps.md)[] | :heavy_check_mark:                                                                                                           | A list of steps that define how an alert should escalate through the policy.                                                 |
| `handoffStep`                                                                                                                | [components.HandoffStep](../../models/components/handoffstep.md)                                                             | :heavy_minus_sign:                                                                                                           | A step that defines where an alert should be sent when the policy is exhausted and the alert is still unacknowledged.        |