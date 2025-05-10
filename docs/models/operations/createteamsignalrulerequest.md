# CreateTeamSignalRuleRequest

## Example Usage

```typescript
import { CreateTeamSignalRuleRequest } from "firehydrant/models/operations";

let value: CreateTeamSignalRuleRequest = {
  teamId: "<id>",
  createTeamSignalRule: {
    name: "<value>",
    expression: "<value>",
    targetType: "Webhook",
    targetId: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `teamId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createTeamSignalRule`                                                             | [components.CreateTeamSignalRule](../../models/components/createteamsignalrule.md) | :heavy_check_mark:                                                                 | N/A                                                                                |