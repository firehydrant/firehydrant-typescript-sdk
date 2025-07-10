# CreateTeamEscalationPolicyRequest

## Example Usage

```typescript
import { CreateTeamEscalationPolicyRequest } from "firehydrant-typescript-sdk/models/operations";

let value: CreateTeamEscalationPolicyRequest = {
  teamId: "<id>",
  createTeamEscalationPolicy: {
    name: "<value>",
    steps: [],
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `teamId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createTeamEscalationPolicy`                                                                   | [components.CreateTeamEscalationPolicy](../../models/components/createteamescalationpolicy.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |