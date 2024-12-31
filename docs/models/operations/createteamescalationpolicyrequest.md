# CreateTeamEscalationPolicyRequest

## Example Usage

```typescript
import { CreateTeamEscalationPolicyRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateTeamEscalationPolicyRequest = {
  teamId: "<id>",
  postV1TeamsTeamIdEscalationPolicies: {
    name: "<value>",
    steps: [
      {
        targets: [
          {
            type: "SlackChannel",
            id: "<id>",
          },
        ],
        timeout: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                                         | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `postV1TeamsTeamIdEscalationPolicies`                                                                            | [components.PostV1TeamsTeamIdEscalationPolicies](../../models/components/postv1teamsteamidescalationpolicies.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |