# PostV1TeamsTeamIdEscalationPoliciesSteps

## Example Usage

```typescript
import { PostV1TeamsTeamIdEscalationPoliciesSteps } from "firehydrant-typescript-sdk/models/components";

let value: PostV1TeamsTeamIdEscalationPoliciesSteps = {
  targets: [
    {
      type: "OnCallSchedule",
      id: "<id>",
    },
  ],
  timeout: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `targets`                                                                                                                                                                                                     | [components.Targets](../../models/components/targets.md)[]                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                            | A list of targets that the step will notify. You can specify up to 15 targets per step.                                                                                                                       |
| `timeout`                                                                                                                                                                                                     | *string*                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                            | An ISO8601 duration string specifying how long to wait before moving on to the next step. For the last step, this value specifies how long to wait before the escalation policy should repeat, if it repeats. |